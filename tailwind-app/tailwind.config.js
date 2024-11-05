/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#f97316",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        TimeRanges: ["poiret", "sans-serif"],
      },

      backgroundImage: {
        "hero-pattern": "url('../src/images/bg.jpg')",
      },
      zIndex: {
        "-3": "-3", // Adding z-index -3
      },
      fontSize: {
        responsive: "clamp(1rem, 2.5vw, 2.5rem)", // Check syntax here
      },
    },
  },
  variants: {
    extend: {
      before: ["before"],
      after: ["after"], // Enable 'before' variant
    },
  },
};
