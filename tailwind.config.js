const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')
module.exports = {
  mode: 'jit',
  purge: [
    './app/views/**/*.html.erb',
    './app/helpers/**/*.rb',
    './app/javascript/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      serif: ['Avenir Next', ...defaultTheme.fontFamily.sans],
      sans: ['Avenir Next', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        'ivf-orange-10': 'rgba(255,118,6,.015)',
        'ivf-orange-25': 'rgba(255,118,6,.025)',
        'ivf-orange-50': 'rgba(255,118,6,.05)',
        'ivf-orange-100': 'rgba(255,118,6,.1)',
        'ivf-orange-200': 'rgba(255,118,6,.2)',
        'ivf-orange-300': 'rgba(255,118,6,.3)',
        'ivf-orange-400': 'rgba(255,118,6,.4)',
        'ivf-orange-500': 'rgba(255,118,6,.5)',
        'ivf-orange-600': 'rgba(255,118,6,.6)',
        'ivf-orange-700': 'rgba(255,118,6,.7)',
        'ivf-orange-800': 'rgba(255,118,6,.8)',
        'ivf-orange-900': 'rgba(255,118,6,.9)',
        'ivf-orange': 'rgba(255,118,6,1)',
        'ivf-orange-light': 'rgba(255,118,6,1)', // rgba(255,118,6)
        'ivf-orange-medium': '#e87105 ',
        'ivf-orange-dark': '#BD5704',
        'ivf-blue-10': 'rgba(0,58,112,.01)',
        'ivf-blue-25': 'rgba(0,58,112,.025)',
        'ivf-blue-50': 'rgba(0,58,112,.05)',
        'ivf-blue-75': 'rgba(0,58,112,.075)',
        'ivf-blue-100': 'rgba(0,58,112,.1)',
        'ivf-blue-200': 'rgba(0,58,112,.2)',
        'ivf-blue-300': 'rgba(0,58,112,.3)',
        'ivf-blue-400': 'rgba(0,58,112,.4)',
        'ivf-blue-500': 'rgba(0,58,112,.5)',
        'ivf-blue-600': 'rgba(0,58,112,.6)',
        'ivf-blue-700': 'rgba(0,58,112,.7)',
        'ivf-blue-800': 'rgba(0,58,112,.8)',
        'ivf-blue-900': 'rgba(0,58,112,.9)',
        'ivf-blue': '#003a70',
        'ivf-blue-light': '#006cbc',
        opaque: 'rgba(0,0,0,.8)',
      },
      boxShadow: {
        outline: '0 0 0 3px rgba(51, 161, 201, 0.8)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    plugin(function ({ addComponents, theme }) {
      const pills = {
        '.pill': {
          padding: `${theme('spacing.1')} ${theme('spacing.2')} ${theme(
            'spacing.px'
          )}`,
          fontSize: `${theme('fontSize.xs')}`,
          textTransform: 'uppercase',
          lineHeight: '1',
          display: 'inline-flex',
          borderRadius: `${theme('borderRadius.full')}`,
          letterSpacing: `${theme('letterSpacing.widest')}`,
          fontWeight: `${theme('fontWeight.semibold')}`,
          whiteSpace: 'nowrap',
          justifyContent: 'center',
          alignItems: 'center',
        },
        '.pill-success': {
          backgroundColor: `${theme('colors.green.100')}`,
          color: `${theme('colors.green.800')}`,
        },
        '.pill-danger': {
          backgroundColor: `${theme('colors.red.100')}`,
          color: `${theme('colors.red.800')}`,
        },
        '.pill-warning': {
          backgroundColor: `${theme('colors.yellow.100')}`,
          color: `${theme('colors.yellow.800')}`,
        },
        '.pill-dark': {
          backgroundColor: `${theme('colors.gray.700')}`,
          color: `${theme('colors.gray.100')}`,
        },
      }
      const buttons = {
        '.btn': {
          padding: `${theme('spacing.3')} ${theme('spacing.8')}`,
          fontWeight: `${theme('fontWeight.semibold')}`,
          transition: 'all .2s ease-in-out',
          border: 'transparent 2px solid',
          borderRadius: `${theme('borderRadius.full')}`,
          whiteSpace: 'nowrap',
          display: 'inline-flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: `${theme('colors.white')}`,
        },
        '.btn-sm': {
          padding: `${theme('spacing.1')} ${theme('spacing.3')}`,
        },
        '.btn-xs': {
          padding: `${theme('spacing.1')} ${theme('spacing.2')} ${theme(
            'spacing.px'
          )}`,
          fontSize: `${theme('fontSize.sm')}`,
          lineHeight: '1',
        },
        '.btn:hover': {
          boxShadow: `${theme('boxShadow.lg')}`,
          textDecoration: 'underline',
        },
        '.btn:focus': {
          outline: 'none',
          boxShadow: `${theme('boxShadow.outline')}`,
        },
        '.btn-primary': {
          backgroundColor: `${theme('colors.ivf-orange')}`,
          color: `${theme('colors.white')}`,
        },
        '.btn-primary:hover, .btn-primary:focus': {
          backgroundColor: `${theme('colors.ivf-blue')}`,
        },
        '.btn-secondary': {
          backgroundColor: `${theme('colors.ivf-blue')}`,
          color: '#ffffff',
        },
        '.btn-secondary:hover, .btn-secondary:focus': {
          backgroundColor: `${theme('colors.ivf-blue-light')}`,
          color: '#ffffff',
        },
        '.btn-danger': {
          backgroundColor: `${theme('colors.red.100')}`,
          color: `${theme('colors.red.900')}`,
        },
        '.btn-danger:hover': {
          backgroundColor: `${theme('colors.red.200')}`,
          color: `${theme('colors.red.900')}`,
        },
        '.btn-disabled': {
          backgroundColor: `${theme('colors.gray.200')}`,
          color: `${theme('colors.gray.400')}`,
          pointerEvents: 'none',
        },
      }
      const textLinks = {
        '.text-link': {
          textDecoration: 'underline',
          fontWeight: '500',
        },
        '.text-link:hover': {
          textDecoration: 'none',
        },
        '.text-link:focus': {
          outline: 'none',
          borderRadius: '4px',
          boxShadow: `${theme('boxShadow.outline')}`,
        },
      }

      addComponents([buttons, textLinks, pills], {
        variants: ['responsive'],
      })
    }),
  ],
}
