import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'calibre-pink': {
          50: '#faeff4',
          100: '#f4c7db',
          200: '#ee9fc2',
          300: '#e777a9',
          400: '#e14f90',
          500: '#db2777',
          600: '#b52063',
          700: '#8f194e',
          800: '#6a133a',
          900: '#440c25',
          950: '#1e0511'
        },
        'calibre-red': {
          50: '#ffeaed',
          100: '#fbc0c9',
          200: '#f897a6',
          300: '#f46d82',
          400: '#f1445f',
          500: '#ed1a3b',
          600: '#c71531',
          700: '#a11027',
          800: '#7a0b1c',
          900: '#540612',
          950: '#2e0108'
        },
        'calibre-orange': {
          50: '#fff2de',
          100: '#fee2b7',
          200: '#fdd290',
          300: '#fbc269',
          400: '#fab242',
          500: '#f9a21b',
          600: '#d28816',
          700: '#aa6e11',
          800: '#83540c',
          900: '#5b3a07',
          950: '#342002'
        },
        'calibre-yellow': {
          50: '#fffdf1',
          100: '#fff7cf',
          200: '#fef1ad',
          300: '#feec8b',
          400: '#fde669',
          500: '#fde047',
          600: '#d5bc3c',
          700: '#ac9830',
          800: '#847425',
          900: '#5b5019',
          950: '#332c0e'
        },
        'calibre-gold': {
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
        'calibre-green': {
          50: '#f3fde5',
          100: '#dff2c4',
          200: '#cbe7a2',
          300: '#b7dd81',
          400: '#a3d25f',
          500: '#8fc73e',
          600: '#77a634',
          700: '#60852a',
          800: '#48651f',
          900: '#314415',
          950: '#19230b'
        },
        'calibre-teal': {
          50: '#f1fcfd',
          100: '#c1edf3',
          200: '#91deea',
          300: '#60cfe0',
          400: '#30c0d7',
          500: '#00b1cd',
          600: '#0095ac',
          700: '#00788b',
          800: '#005c6b',
          900: '#003f4a',
          950: '#002329'
        },
        'calibre-blue': {
          50: '#ebf0fc',
          100: '#c3d4f9',
          200: '#9cb8f5',
          300: '#749bf2',
          400: '#4d7fee',
          500: '#2563eb',
          600: '#2055c9',
          700: '#1a46a7',
          800: '#153884',
          900: '#0f2962',
          950: '#0a1b40'
        },
        'calibre-purple': {
          50: '#f7e9f6',
          100: '#e5c9e4',
          200: '#d3a9d2',
          300: '#c28ac0',
          400: '#b06aae',
          500: '#9e4a9c',
          600: '#843e83',
          700: '#6b326a',
          800: '#512650',
          900: '#381a37',
          950: '#1e0e1e'
        },
        'calibre-slate': {
          50: '#f1f8ff',
          100: '#cad3dc',
          200: '#a4aeb9',
          300: '#7d8995',
          400: '#576472',
          500: '#303f4f',
          600: '#273340',
          700: '#1e2731',
          800: '#141b21',
          900: '#0b0f12',
          950: '#020303'
        }
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
