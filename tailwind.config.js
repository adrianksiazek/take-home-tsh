/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      xs: '360px',
      '2xs': '500px',
      sm: '600px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#1A1B1D',
      white: '#FFFFFF',
      primary: '#4460F7',
      secondary: '#2140E8',
      tertiary: '#F9A52B',
      gray: {
        light: '#E0E2EA',
        DEFAULT: '#B9BDCF',
        dark: '#9194A5'
      }
    },
    fontSize: {
      sm: [
        '0.75rem',
        {
          lineHeight: '1rem',
          fontWeight: '400',
          letterSpacing: '0px',
        },
      ],
      md: [
        '0.875rem',
        {
          lineHeight: '1.0625rem',
          fontWeight: '400',
          letterSpacing: '-0.2px',
        },
      ],
      lg: [
        '1rem',
        {
          lineHeight: '1.5rem',
          fontWeight: '400',
          letterSpacing: '-0.3px',
        },
      ],
      st: [
        '1.333rem',
        {
          lineHeight: '2rem',
          fontWeight: '400',
          letterSpacing: '-0.5px',
        },
      ],
      h1: [
        '0.75rem',
        {
          lineHeight: '1rem',
          fontWeight: '600',
          letterSpacing: '-0.3px',
        },
      ],
      h2: [
        '0.875rem',
        {
          lineHeight: '1.25rem',
          fontWeight: '600',
          letterSpacing: '-0.5px',
        },
      ],
      h3: [
        '1rem',
        {
          lineHeight: '1.5rem',
          fontWeight: '600',
          letterSpacing: '-0.5px',
        },
      ],
      h4: [
        '1.125rem',
        {
          lineHeight: '2rem',
          fontWeight: '600',
          letterSpacing: '-0.5px',
        },
      ],
      h5: [
        '1.875rem',
        {
          lineHeight: '2.5rem',
          fontWeight: '600',
          letterSpacing: '-0.5px',
        },
      ],
    }
  },
  plugins: [require('@tailwindcss/forms')],
}

