/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
     colors: {
      background: 'hsl(180, 52%, 96%)',
      header: 'hsl(180, 29%, 50%)',
      filter: 'hsl(180, 29%, 50%)',
      featured: 'hsl(180, 14%, 20%)'
     },
     fontFamily: {
      customFont: ["League Spartan"]
     }
    },
  },
  plugins: [],
}

