/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",         // adjust as needed
    "./src/**/*.{js,ts,jsx,tsx}", // for React or other frameworks
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1e40af',
        secondary: '#64748b',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
