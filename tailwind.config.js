module.exports = {
    purge: {
      content: [
        './resources/**/*.antlers.html',
        './resources/**/*.blade.php',
        './content/**/*.md'
      ]
    },
    important: true,
    theme: {
        extend: {
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
                    600: '#555',
                    700: '#999'
                }
            },
            fontFamily: {
                'Montserrat': ['Montserrat', 'sans-serif'],
                'sans': ['Montserrat', 'sans-serif']
            },
            fontSize: {
                '2xl': '1.65rem',
                xs: ['13px', '26px'],
                sm: ['15px', '28px'],
                base: ['16px', '28px'],
                lg: ['22px', '36px'],
                xl: ['24px', '32px']
            },
            lineHeight: {
                '14': '4.5rem',
            }
      },
    },
    variants: {},
    plugins: [],
  }
