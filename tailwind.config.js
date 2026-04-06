/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        glow: "0 0 40px rgba(56, 189, 248, 0.18)",
        card: "0 20px 80px rgba(2, 6, 23, 0.45)",
      },
      colors: {
        ink: {
          950: "#040816",
          900: "#07101f",
          850: "#0b1527",
        },
      },
      backgroundImage: {
        "radial-glow":
          "radial-gradient(circle at top, rgba(139, 92, 246, 0.16), transparent 42%)",
      },
    },
  },
  plugins: [],
};
