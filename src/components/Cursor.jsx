import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Cursor({ darkMode = true }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClicking, setIsClicking] = useState(false);
  const [isHoveringLink, setIsHoveringLink] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleHoverEnter = (e) => {
      if (
        e.target.tagName === "A" ||
        e.target.tagName === "BUTTON" ||
        String(e.target.className).includes("cursor-pointer")
      ) {
        setIsHoveringLink(true);
      }
    };

    const handleHoverLeave = () => setIsHoveringLink(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseover", handleHoverEnter);
    document.addEventListener("mouseleave", handleHoverLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseover", handleHoverEnter);
      document.removeEventListener("mouseleave", handleHoverLeave);
    };
  }, []);

  const darkModeColors = {
    primary: "#06b6d4", // cyan-500
    secondary: "#0ea5e9", // sky-500
    glow: "drop-shadow(0 0 12px rgba(6, 182, 212, 0.6)) drop-shadow(0 0 6px rgba(14, 165, 233, 0.4))",
  };

  const lightModeColors = {
    primary: "#f59e0b", // amber-500
    secondary: "#f97316", // orange-500
    glow: "drop-shadow(0 0 10px rgba(245, 158, 11, 0.5)) drop-shadow(0 0 4px rgba(249, 115, 22, 0.3))",
  };

  const colors = darkMode ? darkModeColors : lightModeColors;

  return (
    <>
      {/* Inner Star - filled with glow */}
      <motion.svg
        className="fixed pointer-events-none z-9999"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
          scale: isClicking ? 0.7 : isHoveringLink ? 1.6 : 1,
          rotate: isHoveringLink ? 180 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
          mass: 0.1,
        }}
        style={{
          filter: colors.glow,
          mixBlendMode: "screen",
        }}
      >
        <path
          d="M12 2L15.09 10.26H24L17.45 15.74L20.54 24L12 18.52L3.46 24L6.55 15.74L0 10.26H8.91L12 2Z"
          fill={colors.primary}
          opacity="0.95"
        />
      </motion.svg>

      {/* Outer Star - outline with shape pulse */}
      <motion.svg
        className="fixed pointer-events-none z-9998"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHoveringLink ? 1.4 : 1,
          rotate: isHoveringLink ? -180 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 20,
          mass: 0.2,
        }}
        style={{
          filter: colors.glow,
        }}
      >
        <path
          d="M12 2L15.09 10.26H24L17.45 15.74L20.54 24L12 18.52L3.46 24L6.55 15.74L0 10.26H8.91L12 2Z"
          fill="none"
          stroke={colors.secondary}
          strokeWidth="1.2"
          opacity="0.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.svg>

      {/* Ambient glow dot - only shows on hover */}
      {isHoveringLink && (
        <motion.svg
          className="fixed pointer-events-none z-9997"
          width="48"
          height="48"
          viewBox="0 0 24 24"
          animate={{
            x: mousePosition.x - 24,
            y: mousePosition.y - 24,
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            filter: `drop-shadow(0 0 16px ${darkMode ? "rgba(6, 182, 212, 0.4)" : "rgba(245, 158, 11, 0.3)"})`,
          }}
        >
          <circle cx="12" cy="12" r="8" fill={colors.primary} opacity="0.2" />
        </motion.svg>
      )}
    </>
  );
}
