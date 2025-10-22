/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'apollo-dark': '#1f1f1f',
        'apollo-blue': 'rgb(38, 148, 237)',
        'apollo-deep-blue': 'rgb(15, 59, 171)',
        'apollo-gray': '#2a2a2a',
        'apollo-sidebar-dark': '#2a2a2a',
        'apollo-border': '#3a3a3a',
        'apollo-text-secondary': '#a0a0a0',
        'apollo-text-tertiary': '#808080',
        'apollo-green': '#4ade80',
      },
      fontFamily: {
        'inter': ['Inter', 'Inter Display', 'Arial', 'sans-serif'],
        'manrope': ['Manrope', 'Arial', 'sans-serif'],
      },
      spacing: {
        'sidebar': '355px',
        'nav-width': '60px',
      },
      fontSize: {
        'hero': ['72px', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        'section': ['56px', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'card-title': ['18px', { lineHeight: '1.4', letterSpacing: '0.05em' }],
      },
      borderRadius: {
        'card': '32px',
        'pill': '24px',
        'button': '28px',
      },
    },
  },
  plugins: [],
}

