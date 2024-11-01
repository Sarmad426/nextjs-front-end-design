import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primaryColor: "var(--primary-color)",
        secondaryTextColor: "var(--secondary-text-color)",
        hoverColor: "var(--hover-color)",
        primaryTextColor: 'var(--primary-text-color)',
      },
    },
  },
  plugins: [],
};
export default config;
