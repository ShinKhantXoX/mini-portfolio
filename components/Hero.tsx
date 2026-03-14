"use client"
import { motion } from 'motion/react';
import { Github, Linkedin, Mail } from 'lucide-react';

const layoutCells = [
  // Row 0
  { id: 1, row: 0, col: 0, type: "grey" },
  { id: 2, row: 0, col: 1, type: "photo" },
  { id: 3, row: 0, col: 2, type: "photo" },
  { id: 4, row: 0, col: 3, type: "blank" }, // 'D' space blank

  // Row 1
  { id: 5, row: 1, col: 0, type: "white" },
  { id: 6, row: 1, col: 1, type: "photo" },
  { id: 7, row: 1, col: 2, type: "photo" },
  { id: 8, row: 1, col: 3, type: "photo" },

  // Row 2
  { id: 9, row: 2, col: 0, type: "grey" },
  { id: 10, row: 2, col: 1, type: "photo" },
  { id: 11, row: 2, col: 2, type: "photo" },
  { id: 12, row: 2, col: 3, type: "photo" },

  // Row 3
  { id: 13, row: 3, col: 0, type: "photo" },
  { id: 14, row: 3, col: 1, type: "photo" },
  { id: 15, row: 3, col: 2, type: "photo" },
  { id: 16, row: 3, col: 3, type: "grey" },
];

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
      <div className="max-w-6xl w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left flex-1"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl md:text-3xl lg:text-5xl font-light tracking-tight text-white mb-6"
          >
            Hi! I'm <span className=' font-bold font-unifraktur'>Shin Khant</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-gray-300 mb-8 font-light max-w-xl"
          >
            a passionate full-stack developer with 3 years of experience in
            building web applications.
            <br />
            Find more follow about us in below
          </motion.p>
    
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex gap-6 justify-start"
          >
            <a
              href="https://github.com/ShinKhantXoX"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all"
            >
              <Github className="w-6 h-6 text-white" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all"
            >
              <Linkedin className="w-6 h-6 text-white" />
            </a>
            <a
              href="mailto:shinkhant.dev@gmail.com"
              className="p-3 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all"
            >
              <Mail className="w-6 h-6 text-white" />
            </a>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex-1 w-full max-w-[280px] sm:max-w-[360px] md:max-w-md mx-auto aspect-square grid grid-cols-4 grid-rows-4 gap-1 sm:gap-2"
        >
          {layoutCells.map((cell) => {
            if (cell.type === "grey") {
              return (
                <motion.div
                  key={cell.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: cell.id * 0.05 }}
                  className=" bg-cyan-950 w-full h-full"
                />
              );
            }
            if (cell.type === "white") {
              return (
                <motion.div
                  key={cell.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: cell.id * 0.05 }}
                  className="flex items-center justify-center text-black bg-white/90 backdrop-blur-sm w-full h-full rounded-full font-unifraktur text-xl md:text-2xl"
                >
                  Since 2019
                </motion.div>
              );
            }
            if (cell.type === "blank") {
              return <div key={cell.id} className="w-full h-full" />;
            }
            return (
              <motion.div
                key={cell.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: cell.id * 0.05 }}
                className="relative overflow-hidden w-full h-full"
              >
                <img
                  src="/profile.jpeg"
                  alt="Profile"
                  className="absolute max-w-none object-cover"
                  style={{
                    width: "calc(400% + 24px)",
                    height: "calc(400% + 24px)",
                    left: `calc(-${cell.col * 100}% - ${cell.col * 8}px)`,
                    top: `calc(-${cell.row * 100}% - ${cell.row * 8}px)`,
                  }}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}