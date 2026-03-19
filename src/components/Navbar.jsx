import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Sun, Atom, Moon, Home, Code2, Award, Laptop, Phone } from "lucide-react";

export default function Navbar({ darkMode, toggleDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  const navItems = [
    { name: "Home", href: "#home", icon: Home },
    { name: "Skills", href: "#skills", icon: Code2 },
    { name: "Projects", href: "#projects", icon: Laptop },
    { name: "Experience", href: "#experience", icon: Atom },
    { name: "Certificates", href: "#certificates", icon: Award },
    { name: "Contact", href: "#contact", icon: Phone },
  ];

  const handleNavClick = (href) => {
    // Close menu immediately
    setIsOpen(false);

    // Use requestAnimationFrame untuk timing yang lebih presisi
    requestAnimationFrame(() => {
      const element = document.querySelector(href);
      
      if (element) {
        element.scrollIntoView({ 
          behavior: "smooth", 
          block: "start" 
        });
        // Update URL untuk bookmarking
        window.history.pushState(null, null, href);
      } else {
        // Fallback
        console.warn(`Element "${href}" not found`);
        window.location.hash = href;
      }
    });
  };

  return (
    <>
      {/* Background blur effect */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-30 lg:hidden pointer-events-auto"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setIsOpen(false);
            }
          }}
        />
      )}

      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-5 left-5 right-5 lg:left-1/2 lg:right-auto lg:transform lg:-translate-x-1/2 z-50 backdrop-blur-2xl border-2 transition-all duration-300 rounded-2xl lg:rounded-2xl lg:w-fit lg:max-w-fit px-6 lg:px-20 py-4 lg:py-7 ${
          darkMode 
            ? "bg-linear-to-r from-slate-950/90 via-blue-950/80 to-slate-950/90 border-blue-600/60 shadow-2xl shadow-blue-600/20" 
            : "bg-linear-to-r from-white/85 via-blue-100/70 to-white/85 border-blue-500/50 shadow-2xl shadow-blue-400/25"
        }`}
      >
        <div className="padding-navbar flex justify-between lg:justify-center items-center gap-6 lg:gap-6">
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-3">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <motion.button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    onHoverStart={() => setHoveredItem(item.name)}
                    onHoverEnd={() => setHoveredItem(null)}
                    whileTap={{ scale: 0.95 }}
                    className={`px-4 py-2.5 font-bold text-sm transition-all relative flex items-center gap-2 ${
                      darkMode 
                        ? "text-gray-200" 
                        : "text-gray-700"
                    }`}
                  >
                    {/* Icon */}
                    <IconComponent className={`w-5 h-5 transition-colors ${
                      hoveredItem === item.name
                        ? darkMode
                          ? "text-blue-300"
                          : "text-blue-600"
                        : ""
                    }`} />

                    {/* Text */}
                    <span
                      className={`relative transition-colors ${
                        hoveredItem === item.name
                          ? darkMode
                            ? "text-blue-300"
                            : "text-blue-600"
                          : ""
                      }`}
                    >
                      {item.name}
                    </span>

                    {/* Underline on hover */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{
                        scaleX: hoveredItem === item.name ? 1 : 0,
                      }}
                      transition={{ duration: 0.2 }}
                      className={`absolute bottom-0 left-0 right-0 h-0.5 ${
                        darkMode
                          ? "bg-blue-400"
                          : "bg-blue-600"
                      }`}
                      style={{ originX: 0 }}
                    />
                  </motion.button>
                );
              })}
            </div>

            {/* Divider */}
            <div className="hidden lg:block h-6 w-px bg-linear-to-b from-transparent via-blue-500/40 to-transparent" />

            {/* Theme Toggle with premium styling */}
            <motion.button
              whileHover={{ scale: 1.12, rotate: 20 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleDarkMode}
              className={`p-2.5 rounded-lg lg:rounded-lg border transition-all backdrop-blur-md ${
                darkMode 
                  ? "bg-blue-600/25 border-blue-500/50 hover:bg-blue-600/35 hover:border-blue-400/70 text-yellow-300 shadow-lg shadow-blue-500/15" 
                  : "bg-blue-600/20 border-blue-500/40 hover:bg-blue-600/30 hover:border-blue-500/60 text-orange-500 shadow-lg shadow-blue-400/15"
              }`}
            >
              <motion.div
                animate={{ rotate: darkMode ? 0 : 180 }}
                transition={{ duration: 0.5 }}
              >
                {darkMode ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </motion.div>
            </motion.button>

            {/* Mobile Menu Button - Hamburger */}
            <motion.button
              whileHover={{ scale: 1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden p-2.5 rounded-lg transition-all ${
                darkMode
                  ? "text-white"
                  : "text-gray-900"
              }`}
            >
              <motion.div
                animate={{ rotate: isOpen ? 90 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </motion.div>
            </motion.button>
          </div>

          {/* Mobile Navigation */}
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: isOpen ? 1 : 0,
              height: isOpen ? "auto" : 0,
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden mt-3 pointer-events-auto"
          >
            <div className={`border-t ${
              darkMode ? "border-blue-500/30" : "border-blue-400/40"
            }`}>
              {navItems.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <motion.button
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: idx * 0.08 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNavClick(item.href);
                    }}
                    whileTap={{ scale: 0.95 }}
                    className={`padding-navbar w-full flex items-center gap-4 px-4 py-3 rounded-lg transition-all pointer-events-auto ${
                      darkMode 
                        ? "text-gray-200 hover:bg-blue-600/25 hover:text-blue-300" 
                        : "text-gray-700 hover:bg-blue-500/15 hover:text-blue-600"
                    }`}
                  >
                    <IconComponent className="w-6 h-6" />
                    <span className="font-bold text-base">{item.name}</span>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        </motion.nav>
    </>
  );
}
