import { access, readdir } from "node:fs/promises";
import { constants } from "node:fs";
import path from "node:path";
import { photoSets, skipPublicFiles, type Shot } from "@/lib/photos";

export type FieldProject = {
  slug: "gumry" | "unity";
  title: string;
  shortTitle: string;
  location: string;
  client: string;
  clientShort: string;
  status: "Ongoing";
  summary: string;
  work: string[];
  placeholderCount: number;
};

export const fieldProjects: FieldProject[] = [
  {
    slug: "gumry",
    title: "Gumry treatment plant",
    shortTitle: "Gumry",
    location: "Paloch, Upper Nile State",
    client: "Dar Petroleum Operating Company",
    clientShort: "DPOC",
    status: "Ongoing",
    summary:
      "Integrated hazardous-waste treatment for DPOC operations at Paloch. Site assessment, soil and sludge handling, thermal desorption, and plant operation at Gumry.",
    work: [
      "Plant operations and maintenance",
      "Hydrocarbon soil and sludge treatment",
      "On-site laboratory control",
      "Camp and oilfield waste streams",
    ],
    placeholderCount: 25,
  },
  {
    slug: "unity",
    title: "Unity oil field treatment plant",
    shortTitle: "Unity",
    location: "Unity Oil Field",
    client: "Greater Pioneer Operating Company",
    clientShort: "GPOC",
    status: "Ongoing",
    summary:
      "Treatment plant site serving GPOC in the Unity oil field — receiving, treating, and disposing of oilfield wastes under Panloy QHSE controls.",
    work: [
      "Receiving and segregation",
      "Thermal and chemical treatment",
      "Tank cleaning and sludge",
      "Produced-water and pit wastes",
    ],
    placeholderCount: 11,
  },
];

export type GalleryItem = {
  src?: string;
  caption: string;
  fileHint: string;
  fit?: "cover" | "contain";
};

const IMAGE_EXT = /\.(jpe?g|png|webp|avif|gif)$/i;

function prettyCaption(filename: string) {
  const stem = filename.replace(/\.[^.]+$/, "");
  if (/^\d+$/.test(stem) || /^DSCN\d+$/i.test(stem)) return "";
  return stem.replace(/[-_]+/g, " ");
}

function offsetFor(key: string) {
  let total = 0;
  for (let index = 0; index < key.length; index += 1) {
    total += key.charCodeAt(index) * (index + 1);
  }
  return total;
}

async function publicFileExists(fileHint: string) {
  const relative = fileHint.replace(/^\//, "");
  try {
    await access(path.join(process.cwd(), "public", relative), constants.F_OK);
    return true;
  } catch {
    return false;
  }
}

export async function listFieldPhotos(): Promise<GalleryItem[]> {
  const dir = path.join(process.cwd(), "public");
  try {
    const files = await readdir(dir);
    return files
      .filter(
        (file) =>
          IMAGE_EXT.test(file) &&
          !file.startsWith(".") &&
          !skipPublicFiles.has(file),
      )
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
      .map((file) => ({
        src: `/${file}`,
        caption: prettyCaption(file),
        fileHint: file,
      }));
  } catch {
    return [];
  }
}

export async function fromPool(
  count: number,
  offset = 0,
  captions: string[] = [],
): Promise<GalleryItem[]> {
  const all = await listFieldPhotos();
  if (!all.length) {
    return Array.from({ length: count }, (_, index) => ({
      caption: captions[index] ?? "",
      fileHint: `gallery/${String(index + 1).padStart(2, "0")}.jpg`,
    }));
  }
  return Array.from({ length: count }, (_, index) => {
    const item = all[(offset + index) % all.length];
    return {
      ...item,
      caption: captions[index] || item.caption,
    };
  });
}

async function keepExisting(items: Shot[]): Promise<GalleryItem[]> {
  const checks = await Promise.all(
    items.map(async (item) =>
      (await publicFileExists(item.fileHint)) ? item : null,
    ),
  );
  return checks.filter((item): item is Shot => item !== null);
}

export async function listGalleryImages(slug: string): Promise<GalleryItem[]> {
  const dir = path.join(process.cwd(), "public", "gallery", slug);
  try {
    const files = await readdir(dir);
    return files
      .filter((file) => IMAGE_EXT.test(file) && !file.startsWith("."))
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
      .map((file) => ({
        src: `/gallery/${slug}/${encodeURIComponent(file)}`,
        caption: prettyCaption(file),
        fileHint: `gallery/${slug}/${file}`,
      }));
  } catch {
    return [];
  }
}

export async function galleryOrPlaceholders(
  project: FieldProject,
): Promise<GalleryItem[]> {
  const files = await listGalleryImages(project.slug);
  if (files.length > 0) return files;
  const assigned = await keepExisting(photoSets[project.slug] ?? []);
  if (assigned.length >= project.placeholderCount) return assigned;
  const extra = await fromPool(
    project.placeholderCount - assigned.length,
    offsetFor(project.slug) + assigned.length,
  );
  return [...assigned, ...extra];
}

export function getProject(slug: string) {
  return fieldProjects.find((item) => item.slug === slug);
}

export function toSlug(value: string) {
  return value
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export async function media(
  folder: string,
  count = 4,
  captions: string[] = [],
): Promise<GalleryItem[]> {
  const files = await listGalleryImages(folder);
  if (files.length > 0) return files;
  const assigned = await keepExisting(photoSets[folder] ?? []);
  if (assigned.length > 0) {
    if (assigned.length >= count) return assigned.slice(0, count);
    const extra = await fromPool(
      count - assigned.length,
      offsetFor(folder) + 11,
      captions.slice(assigned.length),
    );
    return [...assigned, ...extra];
  }
  return fromPool(count, offsetFor(folder), captions);
}
