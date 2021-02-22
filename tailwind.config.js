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
                black: '#444444',
                white: '#fff',
                orange: {
                    500: '#FF6606',
                    700: '#c14c00'
                },
                gray: {
                    100: '#eaeaea',
                    200: '#f2f2f2',
                    300: '#e0e0e0',
                    400: '#d6d6d6',
                    500: '#555',
                    600: '#999'
                }
            },
            fontFamily: {
                'Montserrat': ['Montserrat', 'sans-serif']
            },
            fontSize: {
                sm: ['15px', '28px'],
                base: ['16px', '28px'],
                lg: ['22px', '36px'],
                xl: ['24px', '32px'],
            },
            lineHeight: {
                '14': '4.5rem',
            }
      },
    },
    variants: {},
    plugins: [],
  }
