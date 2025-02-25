import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        lightblue: "var(--lightblue)",
        lightorange: "var(--lightorange)",
        dark1: "var(--dark1)",
        dark2: "var(--dark2)",
        light1: "var(--light1)",
        light2: "var(--light2)",
      },
    },
  },
  plugins: [],
  darkMode: "class",
} satisfies Config;
