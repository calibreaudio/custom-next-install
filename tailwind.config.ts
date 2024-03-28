import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'gold': {
          50: '#f5efde',
          100: '#ebdeb9',
          200: '#e0cc95',
          300: '#d6bb70',
          400: '#cba94c',
          500: '#c19827',
          600: '#a38021',
          700: '#84681a',
          800: '#665014',
          900: '#47380d',
          950: '#292007'
        },
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
  ],
  darkMode: 'class',
}
export default config
