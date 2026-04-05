"use client";

import { useCallback, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

type ProjectGalleryModalProps = {
  open: boolean;
  onClose: () => void;
  images: string[];
  title: string;
  index: number;
  onIndexChange: (index: number) => void;
};

export function ProjectGalleryModal({
  open,
  onClose,
  images,
  title,
  index,
  onIndexChange,
}: ProjectGalleryModalProps) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const count = images.length;

  const goPrev = useCallback(() => {
    if (count <= 1) return;
    onIndexChange((index - 1 + count) % count);
  }, [count, index, onIndexChange]);

  const goNext = useCallback(() => {
    if (count <= 1) return;
    onIndexChange((index + 1) % count);
  }, [count, index, onIndexChange]);

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose, goPrev, goNext]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="project-gallery-overlay"
          role="presentation"
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <button
            type="button"
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            aria-label="Close gallery"
            onClick={onClose}
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="gallery-title"
            className="relative z-10 w-full max-w-4xl max-h-[85vh] flex flex-col rounded-xl border border-white/20 bg-[#121212] shadow-2xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 320, damping: 28 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 px-4 py-3 border-b border-white/10">
              <h2
                id="gallery-title"
                className="text-sm md:text-base font-medium text-white truncate pr-2"
              >
                {title}
              </h2>
              <button
                ref={closeRef}
                type="button"
                onClick={onClose}
                className="shrink-0 p-2 rounded-lg border border-white/20 bg-white/5 hover:bg-white/10 transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>
            <div className="relative flex-1 min-h-[200px] bg-black/40 flex items-center justify-center p-4">
              {images[index] && (
                // eslint-disable-next-line @next/next/no-img-element -- public assets; mixed svg/png
                <img
                  src={images[index]}
                  alt=""
                  className="max-h-[min(60vh,560px)] w-auto max-w-full object-contain"
                />
              )}
              {count > 1 && (
                <>
                  <button
                    type="button"
                    onClick={goPrev}
                    className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full border border-white/20 bg-black/60 hover:bg-black/80 text-white"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    type="button"
                    onClick={goNext}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full border border-white/20 bg-black/60 hover:bg-black/80 text-white"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-xs text-white/70 tabular-nums">
                    {index + 1} / {count}
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
