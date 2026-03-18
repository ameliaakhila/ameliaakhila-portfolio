/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#E0F2FE",
        dark: "#0F172A",
        accent: "#0EA5E9",
        "accent-light": "#06B6D4",
        "gradient-start": "#3B82F6",
        "gradient-end": "#0891B2",
      },
      keyframes: {
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "glow": {
          "0%, 100%": { 
            boxShadow: "0 0 5px rgba(14, 165, 233, 0.5), 0 0 20px rgba(6, 182, 212, 0.2)" 
          },
          "50%": { 
            boxShadow: "0 0 20px rgba(14, 165, 233, 0.8), 0 0 40px rgba(6, 182, 212, 0.4)" 
          },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.5 },
        },
        "shimmer": {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
        "slide-in": {
          "0%": { transform: "translateX(-100%)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        "fade-in": {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        "scale-in": {
          "0%": { transform: "scale(0.9)", opacity: 0 },
          "100%": { transform: "scale(1)", opacity: 1 },
        },
      },
      animation: {
        float: "float 3s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        shimmer: "shimmer 2s infinite",
        "slide-in": "slide-in 0.5s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
        "scale-in": "scale-in 0.5s ease-out",
      },
      boxShadow: {
        "glass": "0 8px 32px rgba(31, 38, 135, 0.15)",
        "glass-dark": "0 8px 32px rgba(0, 0, 0, 0.4)",
        "card": "0 10px 40px rgba(0, 0, 0, 0.08)",
        "card-dark": "0 10px 40px rgba(0, 0, 0, 0.3)",
        "card-hover": "0 20px 60px rgba(0, 0, 0, 0.12)",
        "glow": "0 0 20px rgba(14, 165, 233, 0.5)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-light": "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
        "gradient-dark": "linear-gradient(135deg, #0f172a 0%, #1a2844 100%)",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
