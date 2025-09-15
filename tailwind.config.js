/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#06b6d4",
        secondary: "#7c3aed",
        muted: "#f3f4f6",
        accent: "#e0f2fe",
        background: "#f8fafc",
        card: "#ffffff",
        emergency: "#ef4444",
        "muted-foreground": "#6b7280",
      }
    },
  },
  plugins: [],
}
