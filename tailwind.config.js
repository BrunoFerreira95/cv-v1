/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { colors: {
      'fundo': '#C9CDD0',
      'boardall': '#1e2022',
      'laranja': '#CF7128',
      'meiolaranja': '#A87C5A',
      'icon': '#D4D4D4'

    }},
    minHeight: {
      'boardh': '90%',
      'boardalh': '90vh',
      'boardalw': '90vw',
      'screen': '100vh',
    }
  },
  plugins: [],
}
