import { motion } from "framer-motion";
import { CONTACT_INFO, SOCIAL_LINKS } from "../constants/data.jsx";
import { Mail, Github, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Contact({ darkMode }) {

  const getSocialIcon = (name) => {
    const icons = {
      Github: <Github className="w-5 h-5" />,
      Instagram: <Instagram className="w-5 h-5" />,
      Linkedin: <Linkedin className="w-5 h-5" />,
      Twitter: <Twitter className="w-5 h-5" />,
    };
    return icons[name];
  };

  return (
    <section
      id="contact"
      className={`contact flex items-center justify-center sm:py-20 relative overflow-hidden ${
        darkMode
          ? "bg-linear-to-br from-slate-900 via-slate-800 to-slate-900"
          : "bg-linear-to-br from-gray-50 to-white"
      }`}
      data-aos="fade-up"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2
            className={`text-4xl md:text-5xl font-bold mb-3 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Get in Touch
          </h2>
          <p
            className={`p-20 text-sm sm:text-base max-w-2xl mx-auto ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Have a project or opportunity? Feel free to reach out. I'm always open to discussing new ideas, collaborations, or opportunities to be part of your vision.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left Side - Profile & Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Profile Image */}
            <motion.div
              whileHover={{ y: -10 }}
              className={`relative rounded-2xl overflow-hidden shadow-2xl ${
                darkMode
                  ? "bg-linear-to-br from-blue-900/30 to-slate-900/30"
                  : "bg-linear-to-br from-blue-100/30 to-slate-50/30"
              } border ${
                darkMode ? "border-blue-800/30" : "border-blue-200/30"
              }`}
            >
              <img
                src="/image/me.png"
                alt="Amelia Akhila Aqna"
                className="w-full h-50 sm:h-96 object-cover"
              />
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className={`absolute inset-0 bg-gradient-to-t ${
                  darkMode
                    ? "from-slate-900/80 via-transparent"
                    : "from-gray-900/40 via-transparent"
                } flex items-end p-6`}
              >
                <div className="m-10">
                  <h3 className="text-2xl font-bold text-white mb-1">Amelia Akhila Aqna</h3>
                  <p className="text-blue-200 font-medium">Frontend Developer & AI Engineer</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Side - Contact Info & Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 flex flex-col justify-between"
          >
            {/* Social Links Section */}
            <motion.div
              whileHover={{ y: -5 }}
              className={`p-10 group relative overflow-hidden rounded-2xl`}
            >

              <div className={`absolute inset-0 ${darkMode ? "bg-blue-600/5" : "bg-blue-400/5"} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
              <div className="relative p-8">
                <h3 className={`m-20 text-sm text-center p-10 font-semibold uppercase tracking-wide mb-5 ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}>
                  Connect with me
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  {SOCIAL_LINKS.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -4, scale: 1.08 }}
                      whileTap={{ scale: 0.92 }}
                      className={`flex flex-col items-center gap-2.5 p-4 rounded-xl border transition-all ${
                        darkMode
                          ? "bg-slate-700/40 border-slate-600/40 hover:bg-blue-600/40 hover:border-blue-500/60 text-gray-300 hover:text-blue-300"
                          : "bg-gray-100/60 border-gray-200/60 hover:bg-blue-100/70 hover:border-blue-400/60 text-gray-700 hover:text-blue-600"
                      }`}
                      title={social.name}
                    >
                      {getSocialIcon(social.icon)}
                      <span className="text-xs font-semibold">{social.name}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div>
              Contact Me: <br />
            {/* Email Section */}
            <motion.a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className={`text-lg font-bold ${
                    darkMode
                      ? "text-white hover:text-blue-400"
                      : "text-gray-900 hover:text-blue-600"
                  }`}
                >
                  {CONTACT_INFO.email}
            </motion.a>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
