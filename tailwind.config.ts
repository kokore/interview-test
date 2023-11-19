import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      
    },
    screens: {
      'desktop': '1920px',
      'tablet': '768px',
      'mobile': '320px'
    },
    colors: {
      'white': '#FFFFFF',
      'gray1': '#F5F4F9',
      'lightgray': '#E7E7E7',
      'darkgray': '#C2C2C2',
      'grayoff': '#D8D8D8',
      'purple1': '#5E3DB3',
      'lightpurple': '#603EBE',
      'darkpurple': '#5C3CAF',
      'darkblue': '#090C35'
    }
  },
  plugins: [require('flowbite/plugin')],
}
export default config
