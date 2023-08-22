/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primaryPurple: "#635FC7",
        lightPurple: "#a8a4ff",
        primaryBlack: "#000112",
        veryDarkGrey: "#20212C",
        darkGrey: "#2B2C37",
        mediumGrey: "#3E3F4E",
        lightGrey: "#828FA3",
        paleGrey: "#E4EBFA",
        lightGrey: "#F4F7FD",
        primaryWhite: "#FFFFFF",
        primaryRed: "#EA5555",
        lightRed: "#FF9898",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/forms")],
};
