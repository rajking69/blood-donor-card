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
        primary: "#D90429",
        secondary: "#EF233C",
        "primary-dark": "#B5001E",
        "primary-light": "#FFF0F2",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      borderRadius: {
        card: "24px",
      },
      boxShadow: {
        card: "0 20px 60px rgba(217,4,41,0.18), 0 4px 20px rgba(0,0,0,0.1)",
        "card-hover": "0 28px 70px rgba(217,4,41,0.24), 0 6px 24px rgba(0,0,0,0.12)",
        badge: "0 4px 14px rgba(217,4,41,0.4)",
      },
    },
  },
  plugins: [],
};
export default config;
