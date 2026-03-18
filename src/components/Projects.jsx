import { motion } from "framer-motion";
import { PROJECTS } from "../constants/data.jsx";
import { Github, ExternalLink } from "lucide-react";
import AOS from "aos";
import { useEffect, useState } from "react";

export default function Projects({ darkMode }) {
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="projects"
      className={`projects w-full flex items-center justify-center py-24 relative overflow-hidden ${
        darkMode
          ? "bg-linear-to-b from-slate-900 via-blue-950 to-slate-900"
          : "bg-linear-to-b from-slate-50 via-blue-50 to-white"
      }`}
      data-aos="fade-up"
    >
      {/* Animated Background Gradients */}
      {darkMode && (
        <>
          <motion.div
            animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl pointer-events-none"
          />
          <motion.div
            animate={{ x: [0, -100, 0], y: [0, -50, 0] }}
            transition={{ duration: 25, repeat: Infinity, delay: 2 }}
            className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none"
          />
        </>
      )}

      {!darkMode && (
        <>
          <div className="absolute -top-32 -right-32 w-80 h-80 bg-blue-300/30 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-cyan-300/30 rounded-full blur-3xl pointer-events-none" />
        </>
      )}

      <div className="max-w-7xl min-h-7xl w-full mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2
            className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-3 ${
              darkMode ? "text-white" : "text-slate-950"
            }`}
          >
            Featured Projects
          </h2>
          <p
            className={`project text-base sm:text-lg ${
              darkMode ? "text-gray-300" : "text-slate-700"
            }`}
          >
            Showcasing my best work across web development and AI
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mx-auto w-full"
        >
          {PROJECTS.slice(0, showAll ? PROJECTS.length : 3).map((project) => (
            <div key={project.id} className="flex flex-col">
            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              whileHover={{ y: -8 }}
              onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
              className={`rounded-2xl overflow-hidden backdrop-blur-md border-2 transition-all duration-300 flex flex-col h-full relative group cursor-pointer ${
                darkMode
                  ? "bg-slate-800/30 border-slate-700/50 hover:border-blue-600/40"
                  : "bg-white/40 border-slate-200/60 hover:border-blue-400/60"
              }`}
            >
              {/* Project Content - Default View with Enhanced Styling */}
              <div className="cart-project flex-1 flex flex-col p-5 sm:p-6 relative z-10 bg-linear-to-b from-transparent to-black/5 backdrop-blur-sm">
                {/* Title with Icon Background */}
                <div className="relative mb-4">
                  <div className="absolute -inset-3 bg-linear-to-r from-blue-500/10 to-cyan-500/10 rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <h3
                    className={`relative text-lg md:text-xl font-bold tracking-tight ${
                      darkMode ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {project.title}
                  </h3>
                </div>

                {/* Description with Better Typography */}
                <p
                  className={`text-xs sm:text-sm mb-5 flex-1 leading-relaxed opacity-90 transition-all group-hover:opacity-100 ${
                    darkMode ? "text-gray-300" : "text-slate-700"
                  }`}
                >
                  {project.description}
                </p>

                {/* Tech Stack with Enhanced Styling */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, index) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05, duration: 0.3 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className={`p-badge text-xs px-3 py-1.5 rounded-full font-semibold backdrop-blur-sm transition-all cursor-pointer ${
                        darkMode
                          ? "bg-linear-to-r from-blue-500/30 to-cyan-500/20 text-blue-200 border border-blue-400/40 hover:from-blue-500/50 hover:to-cyan-500/40 shadow-lg shadow-blue-500/10"
                          : "bg-linear-to-r from-blue-100/70 to-cyan-100/60 text-blue-700 border border-blue-300/60 hover:from-blue-200 hover:to-cyan-200 shadow-md shadow-blue-200/30"
                      }`}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Project Image Overlay - Hidden by Default, Shows on Hover or Click */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                animate={{ opacity: selectedProject === project.id ? 1 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="absolute inset-0 rounded-2xl overflow-hidden z-20"
              >
                {/* Image with Zoom In when Appears */}
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1 }}
                  animate={{ scale: selectedProject === project.id ? 0.9 : 1 }}
                  transition={{ duration: 0.4 }}
                />
                
              </motion.div>
            </motion.div>

            {/* Links with Modern Button Styling - Outside Card Container */}
            <div className="flex p-10 gap-3 justify-center px-5 sm:px-6 py-3 sm:py-4">
                      
              {project.repo && (
                <motion.a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex p-badge items-center gap-2 text-xs sm:text-sm font-semibold px-3.5 py-2 rounded-lg transition-all duration-300 ${
                    darkMode
                      ? "bg-linear-to-r from-slate-700/60 to-slate-800/60 text-white hover:from-slate-700/80 hover:to-slate-800/80 border border-slate-600/50 hover:border-blue-500/50 shadow-lg shadow-slate-900/20"
                      : "bg-linear-to-r from-slate-100/80 to-slate-200/60 text-slate-900 hover:from-slate-200 hover:to-slate-300 border border-slate-300/60 hover:border-blue-400/50 shadow-md shadow-slate-300/20"
                  }`}
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </motion.a>
              )}
              {project.demo && (
                <motion.a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.80 }}
                  className={`flex p-badge items-center gap-2 text-xs sm:text-sm font-semibold px-3.5 py-2 rounded-lg transition-all duration-300 ${
                    darkMode
                      ? "bg-linear-to-r from-blue-600/50 to-cyan-600/40 text-blue-100 hover:from-blue-600/70 hover:to-cyan-600/60 border border-blue-500/50 hover:border-blue-400/70 shadow-lg shadow-blue-500/20"
                      : "bg-linear-to-r from-blue-400/30 to-cyan-400/25 text-blue-700 hover:from-blue-400/50 hover:to-cyan-400/45 border border-blue-400/60 hover:border-blue-500/70 shadow-md shadow-blue-300/30"
                  }`}
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </motion.a>
              )}
            </div>
            </div>
          ))}
        </motion.div>

        {/* See More Projects Button */}
        {PROJECTS.length > 3 && (
          <motion.div className="project flex justify-center mt-12">
            <motion.button
              onClick={() => setShowAll(!showAll)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`p-badge px-8 py-3 rounded-lg font-semibold text-base transition-all duration-300 ${
                darkMode
                  ? "bg-linear-to-r from-blue-600/70 to-cyan-600/60 text-white hover:from-blue-600/90 hover:to-cyan-600/80 border border-blue-500/50 shadow-lg shadow-blue-500/20"
                  : "bg-linear-to-r from-blue-500/60 to-cyan-500/50 text-white hover:from-blue-500/80 hover:to-cyan-500/70 border border-blue-400/60 shadow-md shadow-blue-400/30"
              }`}
            >
              {showAll ? "Show Less Projects" : "See More Projects"}
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
