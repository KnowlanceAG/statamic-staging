module.exports = {
  purge: {
    layers: ['components', 'utilities'],
    content: [
      './resources/**/*.antlers.html',
      './resources/**/*.blade.php',
      './content/**/*.md',
      './resources/js/**/*.vue'
    ],
    preserveHtmlElements: true,
    options: {
      safelist: [
        'grid-cols-1',
        'grid-cols-2',
        'grid-cols-3',
        'grid-cols-4',
        'grid-cols-5',
        'grid-cols-6',
        'md:grid-cols-8',
        'lg:grid-cols-1',
        'lg:grid-cols-2',
        'lg:grid-cols-3',
        'lg:grid-cols-4',
        'lg:grid-cols-5',
        'lg:grid-cols-6',
        'lg:grid-cols-7',
        'lg:grid-cols-8',
        'lg:grid-cols-9',
        'lg:grid-cols-10',
        'lg:grid-cols-11',
        'lg:grid-cols-12',
        'md:w-1/2',
        'md:w-1/4',
        'md:w-3/4',
        'md:float-right',
        'md:float-left',
        'md:max-w-none',
        'md:mx-auto',
        'content-center',
        'bg-green-300',
        'bg-green-400',
        'cursor-pointer',
        'px-24',
        'sm:px-4',
        'sm:px-32',
        'md:px-40',
        'lg:px-24',
        '2xl:px-32',
        'rotate-180',
        'lg:block',
        'whitespace-nowrap',
        'overflow-ellipsis',
        'max-w-150px'
      ]
    }
  },
  important: true,
  theme: {
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
    },
    extend: {
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
      },
      screens: {
        'prelg': '1142px',
      },
      colors: {
        transparent: 'transparent',
        black: '#000',
        blacklight: '#444',
        white: '#fff',
        orange: {
          500: '#ff6606',
          700: '#c14c00'
        },
        gray: {
          100: '#f2f2f2',
          200: '#F7F7F7',
          300: '#eaeaea',
          400: '#e0e0e0',
          500: '#d6d6d6',
          550: '#444',
          600: '#555',
          700: '#999'
        },
        green: {
          300: '#dff0d8',
          400: '#d6e9c6',
          500: '#468847'
        }
      },
      fontFamily: {
        Montserrat: ['Montserrat', 'sans-serif'],
        sans: ['Montserrat', 'sans-serif']
      },
      fontSize: {
        '2xl': '1.65rem',
        '5xl': '2.75rem',
        tiny: ['9px', '18px'],
        xxs: ['11px', '22px'],
        xs: ['13px', '26px'],
        sm: ['15px', '28px'],
        base: ['16px', '28px'],
        md: ['18px', '25px'],
        lg: ['22px', '36px'],
        xl: ['24px', '32px']
      },
      lineHeight: {
        '14': '4.5rem'
      },
      padding: {
        'py-22': '5.5rem'
      },
      margin: {
        '.1': '0.1rem',
        '.2': '0.2rem'
      },
      transitionProperty: {
        height: 'height'
      },
      maxWidth: {
        'max-w-screen': '100vw',
        '150px': '150px'
      },
      zIndex: {
        '55': '55',
        '60': '60',
      }
    }
  },
  variants: {
    extend: {
      visibility: ['group-hover', 'group-focus'],
      pointerEvents: ['group-hover', 'group-focus'],
      borderRadius: ['last'],
      opacity: ['disabled'],
      cursor: ['disabled']
    }
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    require('@tailwindcss/forms')
  ]
}
