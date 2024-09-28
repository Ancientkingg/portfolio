/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      gridColumn: {
        'span-15': 'span 15 / span 15',
        'span-16': 'span 16 / span 16',
      },
      gridRow: {
        'span-15': 'span 15 / span 15',
        'span-16': 'span 16 / span 16',
        'span-24': 'span 24 / span 24',
      },
    },
  },
  plugins: [],
}

