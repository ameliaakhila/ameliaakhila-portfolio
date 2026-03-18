import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

export default function Footer({ darkMode }) {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github className="w-5 h-5" />,
      url: "https://github.com/ameliaakhila",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      url: "https://linkedin.com/in/ameliaakhila",
    },
    {
      name: "Email",
      icon: <Mail className="w-5 h-5" />,
      url: "mailto:hello@ameliaakhila.com",
    },
  ];

  const navLinks = ["Home", "Skills", "Projects", "Experience", "Contact"];

  return (
    <footer
      className={`relative border-t transition-colors duration-300 ${
        darkMode
          ? "bg-slate-900/50 border-slate-700/50"
          : "bg-white/50 border-gray-200/50"
      } backdrop-blur-sm`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mb-12">
          {/* Left Side - Brand & Bio */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2
              className={`text-2xl font-bold tracking-tight mb-2 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Amelia Akhila
            </h2>
            <p
              className={`text-sm mb-6 ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Frontend Developer & AI Engineer crafting modern, intuitive digital experiences.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-2.5 rounded-lg border transition-all ${
                    darkMode
                      ? "bg-slate-800/60 border-slate-700/60 text-blue-400 hover:bg-slate-700/60 hover:text-blue-300"
                      : "bg-gray-100/60 border-gray-200/60 text-blue-600 hover:bg-gray-200/60 hover:text-blue-700"
                  }`}
                  title={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Quick Navigation */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-between"
          >
            <div>
              <h3
                className={`text-sm font-semibold uppercase tracking-wider mb-4 ${
                  darkMode ? "text-gray-400" : "text-gray-500"
                }`}
              >
                Navigation
              </h3>
              <nav className="grid grid-cols-2 gap-3">
                {navLinks.map((link) => (
                  <motion.a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    whileHover={{ x: 4 }}
                    className={`text-sm font-medium transition-colors ${
                      darkMode
                        ? "text-gray-300 hover:text-blue-300"
                        : "text-gray-700 hover:text-blue-600"
                    }`}
                  >
                    {link}
                  </motion.a>
                ))}
              </nav>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div
          className={`h-px mb-8 ${
            darkMode ? "bg-slate-700/50" : "bg-gray-200/50"
          }`}
        ></div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={`flex flex-col sm:flex-row justify-between items-center gap-4 text-xs ${
            darkMode ? "text-gray-500" : "text-gray-600"
          }`}
        >
          <p>© {currentYear} Amelia Akhila. All rights reserved.</p>

          <motion.a
            href="#home"
            whileHover={{ x: 2 }}
            className={`flex items-center gap-1.5 font-medium transition-colors ${
              darkMode
                ? "text-blue-400 hover:text-blue-300"
                : "text-blue-600 hover:text-blue-700"
            }`}
          >
            Back to top
            <ArrowUp className="w-3.5 h-3.5" />
          </motion.a>
        </motion.div>
      </div>
    </footer>
  );
}
