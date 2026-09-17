"use client";

import { useEffect, useState } from "react";

export function ScrollTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-40 h-11 w-11 bg-navy text-white shadow-lg hover:bg-blue"
      aria-label="Scroll to top"
    >
      <svg viewBox="0 0 24 24" className="mx-auto h-5 w-5" fill="none">
        <path d="M6 14l6-6 6 6" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    </button>
  );
}
