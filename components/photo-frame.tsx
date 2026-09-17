"use client";

import { useState } from "react";
import type { GalleryItem } from "@/lib/projects";

type FrameProps = {
  item: GalleryItem;
  alt: string;
  index?: number;
  className?: string;
  aspect?: string;
  fill?: boolean;
  labeled?: boolean;
  kicker?: string;
  title?: string;
  objectPosition?: string;
  onOpen?: (src: string, alt: string) => void;
};

export function PhotoFrame({
  item,
  alt,
  index,
  className = "",
  aspect = "aspect-[4/3]",
  fill = false,
  labeled = false,
  kicker,
  title,
  objectPosition,
  onOpen,
}: FrameProps) {
  const [status, setStatus] = useState<"try" | "ok" | "fail">("try");
  const path = item.src ?? `/${item.fileHint}`;

  return (
    <figure
      className={`group relative overflow-hidden bg-navy ring-1 ring-gold/25 ${
        fill ? "h-full w-full" : aspect
      } ${className}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={path}
        alt={status === "ok" ? alt : ""}
        className={`absolute inset-0 h-full w-full transition duration-700 ease-out group-hover:scale-[1.05] ${
          (item.fit ?? "cover") === "contain"
            ? "object-contain bg-navy p-6"
            : "object-cover"
        } ${status === "ok" ? "opacity-100" : "opacity-0"}`}
        style={objectPosition ? { objectPosition } : undefined}
        onLoad={() => setStatus("ok")}
        onError={() => setStatus("fail")}
        onClick={() => status === "ok" && onOpen?.(path, alt)}
      />
      {status !== "ok" ? (
        <Placeholder label={item.fileHint} index={index} />
      ) : null}
      {kicker || title || item.caption ? (
        <figcaption
          className={`pointer-events-none absolute inset-x-0 bottom-0 bg-linear-to-t from-navy/90 via-navy/40 to-transparent p-4 text-white transition duration-500 ${
            labeled || kicker || title
              ? "opacity-100"
              : "opacity-0 group-hover:opacity-100"
          }`}
        >
          {kicker ? (
            <p className="font-cond text-[0.65rem] uppercase tracking-[0.18em] text-gold">
              {kicker}
            </p>
          ) : null}
          {title ? (
            <p className="mt-1 font-display text-xl leading-tight">{title}</p>
          ) : item.caption ? (
            <span className="font-cond text-[0.68rem] uppercase tracking-[0.16em]">
              {item.caption}
            </span>
          ) : null}
        </figcaption>
      ) : null}
    </figure>
  );
}

function Placeholder({ label, index }: { label: string; index?: number }) {
  return (
    <div
      className="placeholder-frame absolute inset-0 flex flex-col justify-between p-4 text-white"
      aria-hidden="true"
    >
      <div className="flex items-start justify-between">
        <span className="font-cond text-[0.65rem] uppercase tracking-[0.2em] text-gold">
          Photo slot
        </span>
        {typeof index === "number" ? (
          <span className="font-display text-3xl leading-none text-white/35">
            {String(index + 1).padStart(2, "0")}
          </span>
        ) : null}
      </div>
      <p className="max-w-56 font-cond text-[0.7rem] uppercase leading-relaxed tracking-[0.12em] text-white/70">
        Drop a file at
        <br />
        <span className="text-gold">{label}</span>
      </p>
    </div>
  );
}

export function Lightbox({
  src,
  alt,
  onClose,
}: {
  src: string;
  alt: string;
  onClose: () => void;
}) {
  return (
    <button
      type="button"
      className="fixed inset-0 z-80 flex items-center justify-center bg-navy/90 p-6"
      onClick={onClose}
      aria-label="Close photograph"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className="max-h-full max-w-full object-contain shadow-2xl"
      />
    </button>
  );
}
