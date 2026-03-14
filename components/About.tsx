"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MoreHorizontal } from "lucide-react";

export function AboutUs() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6">
      <div className="w-full max-w-xl mx-auto">
        {/* Facebook-style Card container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#242526] rounded-xl border border-white/10 shadow-xl overflow-hidden text-white"
        >
          {/* Post Header */}
          <div className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-white/10 bg-gray-800">
                <img
                  src="/profile.jpeg" // Re-using the profile photo
                  alt="Shin Khant"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-semibold text-[15px] leading-tight flex items-center gap-1">
                  Shin Khant
                  <svg className="w-3.5 h-3.5 text-blue-500 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-1.9 14.7L6 12.6l1.5-1.5 2.6 2.6 6.4-6.4 1.5 1.5-7.9 7.9z" />
                  </svg>
                </h3>
                <p className="text-[13px] text-gray-400 font-light flex items-center gap-1">
                  Just now · 
                  <svg className="w-3 h-3 fill-current" viewBox="0 0 16 16">
                    <path d="M8.5 10.5A1.5 1.5 0 1 1 7 9a1.5 1.5 0 0 1 1.5 1.5z"></path>
                    <path fillRule="evenodd" d="M8 12.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9zm0 1.5a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"></path>
                  </svg>
                </p>
              </div>
            </div>
            <button className="p-2 rounded-full hover:bg-white/10 transition-colors text-gray-400">
              <MoreHorizontal className="w-5 h-5" />
            </button>
          </div>

          {/* Post Content */}
          <div className="px-4 pb-2 text-[15px] text-[#E4E6EB] leading-relaxed font-light">
            <p className="mb-4">
              I am a passionate Full-Stack Developer with strong experience in modern web technologies, particularly in React and Next.js for frontend development and Laravel for backend systems. I began my journey in web development in 2019 and have continued to build practical experience through professional work and continuous learning.
            </p>

            <AnimatePresence initial={false}>
              {isExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="mb-4">
                    My primary focus is frontend development, where I enjoy creating clean, responsive, and user-friendly interfaces. I have solid experience with React, Next.js, Tailwind CSS, Bootstrap, Mantine, MUI, and animation libraries such as Framer Motion and Animate.css. I also have a good understanding of UI/UX principles and often contribute creative ideas to improve product design and user experience.
                  </p>
                  
                  <p className="mb-4">
                    On the backend side, I have experience developing APIs using PHP and Laravel, including database design, API integration, authentication with JWT, role and permission management (Spatie), and building admin dashboards.
                  </p>
                  
                  <p className="mb-4">
                    Throughout my career, I have worked on multiple real-world projects including merchant applications, client applications, dashboards, and remote system management tools. I am comfortable working in Agile teams and have experience working with Git, Linux environments, and cloud-based deployments.
                  </p>

                  <p>
                    I enjoy learning new technologies, solving problems, and collaborating with teams to build high-quality web applications.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-white hover:underline font-semibold text-[15px]"
            >
              {isExpanded ? "See less" : "See more"}
            </button>
          </div>


        </motion.div>
      </div>
    </section>
  );
}
