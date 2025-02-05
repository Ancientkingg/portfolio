import flowbitePlugin from 'flowbite/plugin';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      gridColumn: {
        'span-15': 'span 15 / span 15',
        'span-16': 'span 16 / span 16',
        'span-18': 'span 18 / span 18',
        'span-20': 'span 20 / span 20',
        'span-21': 'span 21 / span 21',
        'span-24': 'span 24 / span 24',
        'span-32': 'span 32 / span 32',
        'span-36': 'span 36 / span 36',
      },
      gridRow: {
        'span-15': 'span 15 / span 15',
        'span-16': 'span 16 / span 16',
        'span-18': 'span 18 / span 18',
        'span-20': 'span 20 / span 20',
        'span-21': 'span 21 / span 21',
        'span-24': 'span 24 / span 24',
        'span-32': 'span 32 / span 32',
        'span-36': 'span 36 / span 36',
      },
    },
  },
  plugins: [flowbitePlugin],
}

