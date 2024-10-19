import type { Config } from "tailwindcss";

const config: Config = {
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
        purple_button: "#8400FF",
        purple_logo: "#271e49",
        blue_logo:"#359aea",
        text_inputs_grey :"#696767",
        text_black : "#1A1A1A",
      },
    },
  },
  plugins: [],
};
export default config;
