/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custon-button-color': '#f97648',
        'custon-menu-color': '#1d0a04',
        'custom-header-color': '#F4F4F4',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'petrona': ['Petrona', 'sans-serif'],
      },
      fontWeight: {
        medium: '500'
      },
      backgroundImage: () => ({
        'carousel-image1': "url('/src/assets/image1.jpg')",
        'carousel-image2': "url('/src/assets/image2.jpg')",
        'carousel-image3': "url('/src/assets/image3.jpg')",
        'carousel-image4': "url('/src/assets/image4.jpg')",
      }),
      transitionProperty: {
        'transform-opacity': 'transform, opacity',
      }
    },
  },
  plugins: [
  ],
}

