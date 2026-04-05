"use client";

import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";
import { ProjectGalleryModal } from "./ProjectGalleryModal";

export function ProjectsSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [gallery, setGallery] = useState<{
    title: string;
    images: string[];
  } | null>(null);

  function openGallery(projectId: string, startIndex = 0) {
    const project = projects.find((p) => p.id === projectId);
    if (!project?.images.length) return;
    setGallery({ title: project.title, images: project.images });
    setGalleryIndex(startIndex);
    setModalOpen(true);
  }

  function closeGallery() {
    setModalOpen(false);
    setGallery(null);
  }

  return (
    <>
      <section
        id="projects"
        className="min-h-screen flex flex-col justify-start px-4 md:px-8 py-16 md:py-20"
      >
        <div className="max-w-6xl w-full mx-auto mb-10 md:mb-12">
          <h2 className="text-4xl md:text-5xl font-light text-white">
            Projects
          </h2>
          <p className="mt-2 text-sm md:text-base text-white/50 font-light">
            Experience and work—scroll the timeline to see each project.
          </p>
        </div>

        <div className="w-full max-w-3xl mx-auto px-1 md:px-2 pb-6">
          <div className="relative">
            {/* Vertical timeline spine */}
            <div
              className="pointer-events-none absolute left-6 top-3 bottom-3 w-px bg-gradient-to-b from-transparent via-white/25 to-transparent"
              aria-hidden
            />

            <ul className="flex flex-col gap-0">
              {projects.map((project) => {
                const cover = project.images[0];
                const extra = project.images.length - 1;

                return (
                  <li
                    key={project.id}
                    className="relative flex gap-4 md:gap-6 pb-12 last:pb-0"
                  >
                    <div className="flex w-12 shrink-0 flex-col items-center pt-0.5">
                      <span className="text-[11px] md:text-xs font-medium uppercase tracking-wider text-white/50 text-center leading-tight">
                        {project.period}
                      </span>
                      <span
                        className="mt-2 h-3 w-3 shrink-0 rounded-full border-2 border-white/60 bg-[#0a0a0a] shadow-[0_0_0_4px_rgba(255,255,255,0.06)] z-10"
                        aria-hidden
                      />
                    </div>

                    <article className="min-w-0 flex-1 border border-white/20 bg-[#242526]/90 backdrop-blur-lg rounded-xl overflow-hidden shadow-xl flex flex-col">
                      <button
                        type="button"
                        onClick={() => openGallery(project.id, 0)}
                        className="relative block w-full aspect-[16/10] bg-black/40 group cursor-pointer text-left"
                      >
                        {cover ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            src={cover}
                            alt=""
                            className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-[1.02]"
                          />
                        ) : (
                          <div className="flex h-full items-center justify-center text-white/30 text-sm">
                            No image
                          </div>
                        )}
                        {extra > 0 && (
                          <span className="absolute bottom-2 right-2 rounded-md bg-black/70 px-2 py-1 text-xs text-white/90">
                            +{extra}
                          </span>
                        )}
                      </button>

                      <div className="p-4 flex flex-col flex-1 gap-3">
                        <h3 className="text-lg font-semibold text-white leading-tight">
                          {project.title}
                        </h3>
                        <p className="text-sm text-gray-400 font-light leading-relaxed">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((t) => (
                            <span
                              key={t}
                              className="text-xs px-2 py-1 rounded-md border border-white/15 bg-white/5 text-gray-300"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                        {project.url ? (
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 mt-auto pt-3 text-sm text-white/90 hover:text-white border-t border-white/10 transition-colors"
                          >
                            Open link
                            <ExternalLink className="w-4 h-4 opacity-70" />
                          </a>
                        ) : null}
                      </div>
                    </article>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      <ProjectGalleryModal
        open={modalOpen && !!gallery && gallery.images.length > 0}
        onClose={closeGallery}
        images={gallery?.images ?? []}
        title={gallery?.title ?? ""}
        index={galleryIndex}
        onIndexChange={setGalleryIndex}
      />
    </>
  );
}
