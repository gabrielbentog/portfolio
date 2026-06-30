import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
        display: ["var(--font-display)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      colors: {
        ink: {
          DEFAULT: "#0B0E14",
          surface: "#131826",
          border: "#232938",
          muted: "#8B93A7",
        },
        paper: {
          DEFAULT: "#F2EFE6",
          surface: "#FFFFFF",
          border: "#E4DFD0",
          muted: "#6B7280",
        },
        amber: {
          DEFAULT: "#FFB454",
          dim: "#C98A3A",
        },
        ok: "#34D399",
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      screens: {
        md: "768px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
