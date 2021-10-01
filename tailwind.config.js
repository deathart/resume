const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      "primary": "#793ef9",
      "primary-focus": "#570df8",
      "primary-content": "#ffffff",
      "secondary": "#f000b8",
      "secondary-focus": "#bd0091",
      "secondary-content": "#ffffff",
      "accent": "#37cdbe",
      "accent-focus": "#2aa79b",
      "accent-content": "#ffffff",
      "neutral": "#2a2e37",
      "neutral-focus": "#16181d",
      "neutral-content": "#ffffff",
      "base-100": "#3d4451",
      "base-200": "#2a2e37",
      "base-300": "#16181d",
      "base-content": "#ebecf0",
      "info": "#66c6ff",
      "success": "#87d039",
      "warning": "#e2d562",
      "error": "#ff6f6f"
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
