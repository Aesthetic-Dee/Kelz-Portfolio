import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      'pacifico': ["Pacifico", "serif"],
      'quicksand': ["Quicksand", "serif"],
      'Teko': ["Teko", "serif"],
    },
  },
  plugins: [],
};
export default config;
