/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  safelist: [
    "rotate-[9deg]",
    "rotate-[18deg]",
    "rotate-[-23deg]",
    "rotate-[-30deg]",
  ],
  theme: {
    extend: {
      keyframes: {
        floatComplex2: {
          "0%": { transform: "translate3d(0px, 0px, 0px) rotateZ(0deg)" },
          "25%": { transform: "translate3d(0px, -20px, 0px) rotateZ(3.2deg)" },
          "50%": { transform: "translate3d(0px, 0px, 0px) rotateZ(0deg)" },
          "75%": { transform: "translate3d(0px, -18px, 0px) rotateZ(-6.2deg)" },
          "100%": { transform: "translate3d(0px, 0px, 0px) rotateZ(0deg)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        floatComplex2: "floatComplex2 14s ease-in-out infinite",
        marquee: "marquee 9s linear infinite",
      },
    },
  },
  plugins: [],
};
