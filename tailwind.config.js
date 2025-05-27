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
        floatUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(60px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        floatUpBounce: {
          "0%": {
            opacity: "0",
            transform: "translateY(0px)",
          },
          "20%": {
            opacity: "0.3",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        floatUpLow: {
          "0%": {
            opacity: "0",
            transform: "translateY(100px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        floatDown: {
          "0%": {
            opacity: "0",
            transform: "translateY(-100px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        scrollLeft: {
          "0%": { transform: "translate3d(0, 0, 0)" },
          "100%": { transform: "translate3d(-50%, 0, 0)" },
        },
        smoothReveal: {
          "0%": { clipPath: "inset(0 100% 0 0)", opacity: "1" },
          "100%": { clipPath: "inset(0 0% 0 0)", opacity: "1" },
        },
      },
      animation: {
        floatComplex2: "floatComplex2 14s ease-in-out infinite",
        floatComplex3: "floatComplex2 20s ease-in-out infinite",
        marquee: "marquee 9s linear infinite",
        "scroll-left": "scrollLeft 12s linear infinite",
        "float-up": "floatUp 0.8s ease-out  forwards",
        "float-up-bounce": "floatUpBounce 1s ease-out  forwards",
        "float-up-low": "floatUpLow 0.8s ease-out forwards",
        "float-up-low-delay-1": "floatUpLow 0.8s ease-out 0.2s forwards",
        "float-up-low-delay-2": "floatUpLow 0.8s ease-out 0.4s forwards",
        "float-down": "floatDown 0.8s ease-out 1s forwards",
        "clip-smooth": "smoothReveal 0.8s ease-in-out forwards",
        "slide-skew": "slideInSkewed 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
};
