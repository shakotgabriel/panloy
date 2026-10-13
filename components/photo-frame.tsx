"use client";

import { useEffect, useRef, useState } from "react";
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
  priority?: boolean;
  quiet?: boolean;
  plain?: boolean;
  scale?: number;
  fit?: "cover" | "contain";
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
  priority = false,
  quiet = false,
  plain = false,
  scale,
  fit,
}: FrameProps) {
  const imageFit = fit ?? item.fit ?? "cover";
  const [status, setStatus] = useState<"try" | "ok" | "fail">("try");
  const imgRef = useRef<HTMLImageElement>(null);
  const path = item.src ?? `/${item.fileHint}`;
  const canOpen = Boolean(onOpen) && status === "ok";

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;
    let cancelled = false;
    const succeed = () => {
      if (!cancelled) setStatus("ok");
    };
    const fail = () => {
      if (!cancelled && img.naturalWidth === 0) setStatus("fail");
    };

    if (img.naturalWidth > 0) {
      succeed();
    } else if (typeof img.decode === "function") {
      img.decode().then(succeed).catch(fail);
    }

    img.addEventListener("load", succeed);
    img.addEventListener("error", fail);
    return () => {
      cancelled = true;
      img.removeEventListener("load", succeed);
      img.removeEventListener("error", fail);
    };
  }, [path]);

  return (
    <figure
      className={`group relative overflow-hidden ${
        fill
          ? "h-full w-full bg-transparent"
          : `${aspect} max-h-44 bg-zinc-950 ring-1 ring-gold/25 md:max-h-none`
      } ${className}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        ref={imgRef}
        src={path}
        alt={status === "ok" ? alt : ""}
        className={`absolute inset-0 h-full w-full transition duration-700 ease-out ${
          quiet ? "" : "motion-safe:group-hover:scale-[1.05]"
        } ${
          imageFit === "contain"
            ? fill
              ? "object-contain"
              : "object-contain bg-white p-3 md:p-6"
            : "object-cover"
        } ${status === "ok" ? "opacity-100" : "opacity-0"} ${
          canOpen ? "cursor-zoom-in" : ""
        }`}
        style={{
          ...(objectPosition ? { objectPosition } : {}),
          ...(scale ? { transform: `scale(${scale})` } : {}),
        }}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        {...(priority ? { fetchPriority: "high" as const } : {})}
        onClick={() => status === "ok" && onOpen?.(path, alt)}
      />
      {status !== "ok" ? (
        <Placeholder label={title || item.caption || alt} index={index} />
      ) : null}
      {!plain && (kicker || title || item.caption) ? (
        <figcaption
          className={`pointer-events-none absolute inset-x-0 bottom-0 bg-linear-to-t from-black/80 via-black/35 to-transparent p-3 text-white transition duration-500 md:p-4 ${
            labeled || kicker || title
              ? "opacity-100"
              : "opacity-0 group-hover:opacity-100"
          }`}
        >
          {kicker ? (
            <p className="font-cond text-[0.58rem] uppercase tracking-[0.18em] text-gold md:text-[0.65rem]">
              {kicker}
            </p>
          ) : null}
          {title ? (
            <p className="mt-0.5 font-display text-base leading-tight md:mt-1 md:text-xl">
              {title}
            </p>
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
          Panloy
        </span>
        {typeof index === "number" ? (
          <span className="font-display text-2xl leading-none text-white/35 md:text-3xl">
            {String(index + 1).padStart(2, "0")}
          </span>
        ) : null}
      </div>
      <p className="max-w-56 font-display text-lg leading-tight text-white/80">
        {label || "Field photograph"}
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
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <button
      type="button"
      className="fixed inset-0 z-80 flex items-center justify-center bg-black/90 p-6"
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
