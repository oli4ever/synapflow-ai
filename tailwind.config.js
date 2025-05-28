/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
          DEFAULT: "#0ea5e9"
        },
        secondary: {
          50: "#f5f3ff",
          100: "#ede9fe",
          200: "#ddd6fe",
          300: "#c4b5fd",
          400: "#a78bfa",
          500: "#8b5cf6",
          600: "#7c3aed",
          700: "#6d28d9",
          800: "#5b21b6",
          900: "#4c1d95",
          DEFAULT: "#8b5cf6"
        },
        dark: {
          50: "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
          DEFAULT: "#1f2937"
        },
        color: {
          1: "#AC6AFF",
          2: "#FFC876",
          3: "#FF776F",
          4: "#7ADB78",
          5: "#858DFF",
          6: "#FF98E2",
        },
      },
      fontFamily: {
        sans: ['"Inter"', ...fontFamily.sans],
        display: ['"Satoshi"', '"SF Pro Display"', ...fontFamily.sans],
        mono: ['"Fira Code"', ...fontFamily.mono],
        grotesk: ['"Space Grotesk"', ...fontFamily.sans], // Added properly
        code: ['"Source Code Pro"', ...fontFamily.mono] // Added properly
      },
      letterSpacing: {
        tagline: ".15em"
      },
      spacing: {
        0.25: "0.0625rem",
        7.5: "1.875rem",
        15: "3.75rem"
      },
      opacity: {
        15: ".15"
      },
      transitionDuration: {
        DEFAULT: "200ms"
      },
      transitionTimingFunction: {
        DEFAULT: "linear"
      },
      zIndex: {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5"
      },
      borderWidth: {
        DEFAULT: "0.0625rem"
      },
      backgroundImage: {
        "radial-gradient": "radial-gradient(var(--tw-gradient-stops))",
        "conic-gradient":
          "conic-gradient(from 225deg, #FFC876, #79FFF7, #9F53FF, #FF98E2, #FFC876)"
      }
    }
  },
  plugins: [
    plugin(function ({ addBase, addComponents, addUtilities }) {
      addBase({
        ':root': {
          '--font-grotesk': '"Space Grotesk", sans-serif',
          '--font-code': '"Source Code Pro", monospace'
        }
      });
      addComponents({
        ".container": {
          "@apply max-w-[77.5rem] mx-auto px-5 md:px-10 lg:px-15 xl:max-w-[87.5rem]":
            {}
        },
        ".h1": {
          "@apply font-semibold text-[2.5rem] leading-[3.25rem] md:text-[2.75rem] md:leading-[3.75rem] lg:text-[3.25rem] lg:leading-[4.0625rem] xl:text-[3.75rem] xl:leading-[4.5rem]":
            {}
        },
        ".h2": {
          "@apply text-[1.75rem] leading-[2.5rem] md:text-[2rem] md:leading-[2.5rem] lg:text-[2.5rem] lg:leading-[3.5rem] xl:text-[3rem] xl:leading-tight":
            {}
        },
        ".h3": {
          "@apply text-[2rem] leading-normal md:text-[2.5rem]": {}
        },
        ".h4": {
          "@apply text-[2rem] leading-normal": {}
        },
        ".h5": {
          "@apply text-2xl leading-normal": {}
        },
        ".h6": {
          "@apply font-semibold text-lg leading-8": {}
        },
        ".body-1": {
          "@apply text-[0.875rem] leading-[1.5rem] md:text-[1rem] md:leading-[1.75rem] lg:text-[1.25rem] lg:leading-8":
            {}
        },
        ".body-2": {
          "@apply font-medium text-[0.875rem] leading-6 md:text-lg": {}
        },
        ".caption": {
          "@apply text-sm": {}
        },
        ".tagline": {
          "@apply font-grotesk font-light text-xs tracking-tagline uppercase":
            {}
        },
        ".quote": {
          "@apply font-code text-lg leading-normal": {}
        },
        ".button": {
          "@apply font-code text-xs font-bold uppercase tracking-wider": {}
        }
      });
      addUtilities({
        ".tap-highlight-color": {
          "-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)"
        }
      });
    })
  ]
};