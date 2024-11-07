// tailwind.config.ts

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/components/**/*.{js,ts,jsx,tsx,css}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "space-mono": ["var(--font-space-mono)", "monospace"],
        "fira-code": ["var(--font-fira-code)", "monospace"],
        righteous: ["var(--font-righteous)", "sans-serif"],
      },
      colors: {
        "st-tropaz": "#235391",
        "bright-green": {
          DEFAULT: "#57cc02",
          50: "#f0fde4",
          100: "#dcfbc7",
          200: "#b8f794",
          300: "#8aed5e",
          400: "#57cc02",
          500: "#4ab107",
          600: "#379505",
          700: "#2b7a04",
          800: "#1e5903",
          900: "#123802",
        },
        "tutor-response": "#4a9e5c",
        "custom-red": {
          DEFAULT: "#D90429",
          50: "#ffe4e8",
          100: "#ffc1ca",
          200: "#ff9eac",
          300: "#ff7b8e",
          400: "#ff5870",
          500: "#ff3552",
          600: "#D90429",
        },
        "custom-black": {
          DEFAULT: "#000000",
          50: "#f7f7f7",
          100: "#e3e3e3",
          200: "#c8c8c8",
          300: "#a4a4a4",
          400: "#818181",
          500: "#666666",
          600: "#515151",
          700: "#434343",
          800: "#383838",
          900: "#000000",
        },
        "business-blue": {
          DEFAULT: "#1E3A8A",
          50: "#e6f1ff",
          100: "#bddaff",
          200: "#94c2ff",
          300: "#6ba9ff",
          400: "#4291ff",
          500: "#1E3A8A",
          600: "#1a3378",
          700: "#162c66",
          800: "#132554",
          900: "#101e42",
        },
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        typingBounce: {
          "0%, 60%, 100%": { transform: "translateY(0)" },
          "30%": { transform: "translateY(-5px)" },
        },
        slideInLeft: {
          "0%": { transform: "translateX(-100vw)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideInRight: {
          "0%": { transform: "translateX(100vw)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
      },
      animation: {
        fadeInUp: "fadeInUp 0.6s ease-out forwards",
        typingBounce: "typingBounce 1s infinite",
        slideInLeft: "slideInLeft 0.8s ease-out forwards",
        slideInRight: "slideInRight 0.8s ease-out forwards",
        float: "float 3s ease-in-out infinite",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        shimmer: "shimmer 2s linear infinite",
      },
      boxShadow: {
        "inner-lg": "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
        soft: "0 2px 15px rgba(0, 0, 0, 0.08)",
        glow: "0 0 15px rgba(66, 153, 225, 0.5)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        shimmer:
          "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0) 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
