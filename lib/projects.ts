import { photoSets } from "@/lib/photos";
import { readdir } from "node:fs/promises";
import path from "node:path";

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
    placeholderCount: 10,
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
    placeholderCount: 10,
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
  if (/^\d+$/.test(stem)) return "";
  return stem.replace(/[-_]+/g, " ");
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
  const assigned = photoSets[project.slug];
  if (assigned?.length) return assigned;
  return Array.from({ length: project.placeholderCount }, (_, index) => {
    const n = String(index + 1).padStart(2, "0");
    return {
      caption: "",
      fileHint: `gallery/${project.slug}/${n}.jpg`,
    };
  });
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
  const assigned = photoSets[folder];
  if (assigned?.length) return assigned;
  return Array.from({ length: count }, (_, index) => {
    const n = String(index + 1).padStart(2, "0");
    return {
      caption: captions[index] ?? "",
      fileHint: `gallery/${folder}/${n}.jpg`,
    };
  });
}
