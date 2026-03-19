/**
 * Animation configuration utilities
 * Respects prefers-reduced-motion user preference
 */

export const prefersReducedMotion = () => {
  if (typeof window !== "undefined") {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }
  return false;
};

/**
 * Get animation transition config based on user preference
 */
export const getTransitionConfig = (defaultConfig = {}) => {
  if (prefersReducedMotion()) {
    return {
      ...defaultConfig,
      duration: 0.001,
      delay: 0,
    };
  }
  return defaultConfig;
};

/**
 * Spring animation config (for hover/tap effects)
 */
export const springConfig = {
  type: "spring",
  stiffness: 150,
  damping: 15,
  mass: 0.1,
};

/**
 * Standard animation config
 */
export const standardConfig = {
  duration: 0.4,
  ease: "easeInOut",
};

/**
 * Stagger config for container animations
 */
export const staggerConfig = {
  staggerChildren: 0.05,
  delayChildren: 0.1,
};
