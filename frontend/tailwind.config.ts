import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        canvas: "#ffffff",
        surface: "#f8fafc",
        ink: "#0f172a",
        muted: "#64748b",
        primary: "#2563eb",
      },
      boxShadow: {
        subtle: "0 1px 2px rgb(15 23 42 / 0.05)",
      },
    },
  },
  plugins: [],
};

export default config;
