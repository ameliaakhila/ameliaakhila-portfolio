import { motion } from "framer-motion";
import { EXPERIENCES } from "../constants/data.jsx";
import { Briefcase, Users, BookOpen, Award } from "lucide-react";
import { useEffect, useState } from "react";
import AOS from "aos";

export default function Experience({ darkMode }) {
  const [showAll, setShowAll] = useState(false);
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const getTypeIcon = (type) => {
    switch (type) {
      case "work":
        return <Briefcase className="w-5 h-5" />;
      case "speaker":
        return <Users className="w-5 h-5" />;
      case "bootcamp":
        return <BookOpen className="w-5 h-5" />;
      case "organization":
        return <Award className="w-5 h-5" />;
      default:
        return <Briefcase className="w-5 h-5" />;
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case "work":
        return darkMode
          ? "bg-blue-500/20 text-blue-400 border-blue-400"
          : "bg-blue-100 text-blue-700 border-blue-300";
      case "speaker":
        return darkMode
          ? "bg-purple-500/20 text-purple-400 border-purple-400"
          : "bg-purple-100 text-purple-700 border-purple-300";
      case "bootcamp":
        return darkMode
          ? "bg-emerald-500/20 text-emerald-400 border-emerald-400"
          : "bg-emerald-100 text-emerald-700 border-emerald-300";
      case "organization":
        return darkMode
          ? "bg-orange-500/20 text-orange-400 border-orange-400"
          : "bg-orange-100 text-orange-700 border-orange-300";
      default:
        return "";
    }
  };

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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="experience"
      className={`experience flex items-center justify-center py-20 relative overflow-hidden ${
        darkMode
          ? "bg-linear-to-br from-slate-900 via-slate-800 to-slate-900"
          : "bg-linear-to-br from-gray-50 via-blue-50 to-gray-50"
      }`}
      data-aos="fade-up"
    >
      {/* Animated Background Elements */}
      {darkMode && (
        <>
          <motion.div
            animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
            transition={{ duration: 15, repeat: Infinity }}
            className="absolute -top-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"
          />
          <motion.div
            animate={{ x: [0, -100, 0], y: [0, -50, 0] }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute -bottom-40 -right-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"
          />
        </>
      )}

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 px-2"
        >
          <h2
            className={`text-2xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 bg-clip-text text-transparent bg-linear-to-r ${
              darkMode
                ? "from-blue-400 to-cyan-400"
                : "from-blue-600 to-cyan-600"
            }`}
          >
            Experience & Journey
          </h2>
          <p
            className={`p-20 text-sm sm:text-base md:text-lg ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Professional timeline across work, speaking, and education
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          key={showAll}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="max-w-4xl mx-auto"
        >
          {EXPERIENCES.slice(0, showAll ? EXPERIENCES.length : 3).map((exp, index, array) => (
            <motion.div
              key={exp.id}
              variants={itemVariants}
              className="p-10 mb-12 last:mb-0"
            >
              <div className="flex gap-3 sm:gap-6">
                {/* Timeline Marker */}
                <div className="flex flex-col items-center">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className={`w-10 sm:w-14 p-badge h-10 sm:h-14 rounded-full flex items-center justify-center backdrop-blur font-semibold shadow-lg border-2 transition-all ${
                      darkMode
                        ? "bg-linear-to-br from-blue-500 to-cyan-500 text-white border-blue-400/50 shadow-blue-500/20"
                        : "bg-linear-to-br from-blue-500 to-cyan-500 text-white border-blue-400/50 shadow-blue-500/20"
                    }`}
                  >
                    {getTypeIcon(exp.type)}
                  </motion.div>
                  {index !== array.length - 1 && (
                    <div
                      className={`w-1 sm:w-1.5 h-16 sm:h-24 ${
                        darkMode ? "bg-linear-to-b from-blue-500/50 to-transparent" : "bg-linear-to-b from-blue-400/50 to-transparent"
                      }`}
                    ></div>
                  )}
                </div>

                {/* Content */}
                <motion.div
                  whileHover={{ x: 10 }}
                  className={`p-10 flex-1 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl backdrop-blur-lg transition-all duration-300 shadow-lg hover:shadow-2xl border ${
                    darkMode
                      ? "bg-linear-to-br from-slate-800/70 to-blue-900/50 border-blue-800/20 hover:border-blue-600/50"
                      : "bg-linear-to-br from-white/70 to-blue-50/50 border-blue-200/30 hover:border-blue-400/50"
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 mb-3">
                    <div>
                      <h3
                        className={`text-base sm:text-lg lg:text-xl font-bold bg-clip-text text-transparent bg-linear-to-r ${
                          darkMode
                            ? "from-white to-gray-300 via-blue-300"
                            : "from-slate-900 to-slate-700 via-blue-600"
                        }`}
                      >
                        {exp.role}
                      </h3>
                      <p
                        className={`text-xs sm:text-sm font-semibold mt-1 ${
                          darkMode ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        {exp.company}
                      </p>
                    </div>
                    <span
                      className={`p-badge-experience text-center rounded-full text-xs sm:text-sm font-bold border backdrop-blur whitespace-nowrap px-3 sm:px-4 py-1.5 sm:py-2 ${getTypeColor(
                        exp.type
                      )}`}
                    >
                      {exp.type.charAt(0).toUpperCase() + exp.type.slice(1)}
                    </span>
                  </div>

                  <p
                    className={`text-xs sm:text-sm font-medium mb-3 sm:mb-4 flex items-center gap-2 ${
                      darkMode ? "text-cyan-300" : "text-blue-600"
                    }`}
                  >
                    <span className="inline-block w-2 h-2 rounded-full bg-current"></span>
                    {exp.duration}
                  </p>

                  <p
                    className={`text-xs sm:text-sm mb-4 sm:mb-5 leading-relaxed ${
                      darkMode ? "text-gray-300" : "text-slate-700"
                    }`}
                  >
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <div>
                    <p
                      className={`text-xs sm:text-sm font-bold mb-2 sm:mb-3 flex items-center gap-2 ${
                        darkMode ? "text-blue-300" : "text-blue-700"
                      }`}
                    >
                      ⭐ Highlights:
                    </p>
                    <ul className="space-y-1.5 sm:space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li
                          key={idx}
                          className={`text-xs sm:text-sm flex items-start gap-2 ${
                            darkMode ? "text-gray-300" : "text-slate-600"
                          }`}
                        >
                          <span className={`text-base sm:text-lg mt-0.5 ${darkMode ? "text-cyan-400" : "text-blue-500"}`}>✓</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* See More Experiences Button */}
        {EXPERIENCES.length > 3 && (
          <motion.div className="experience flex justify-center mt-12">
            <motion.button
              onClick={() => setShowAll(!showAll)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`p-badge rounded-lg font-semibold text-base transition-all duration-300 ${
                darkMode
                  ? "bg-linear-to-r from-blue-600/70 to-cyan-600/60 text-white hover:from-blue-600/90 hover:to-cyan-600/80 border border-blue-500/50 shadow-lg shadow-blue-500/20"
                  : "bg-linear-to-r from-blue-500/60 to-cyan-500/50 text-white hover:from-blue-500/80 hover:to-cyan-500/70 border border-blue-400/60 shadow-md shadow-blue-400/30"
              }`}
            >
              {showAll ? "Show Less Experiences" : "See More Experiences"}
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
