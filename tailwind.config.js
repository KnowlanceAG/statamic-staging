module.exports = {
    purge: {
      content: [
        './resources/**/*.antlers.html',
        './resources/**/*.blade.php',
        './content/**/*.md'
        ],
        options: {
            safelist: [
                'grid-cols-1',
                'grid-cols-2',
                'grid-cols-3',
                'grid-cols-4',
                'grid-cols-5',
                'grid-cols-6',
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
                'md:mx-auto',
                'content-center',
                'bg-green-300',
                'bg-green-400'
            ],
        }
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
                'Montserrat': ['Montserrat', 'sans-serif'],
                'sans': ['Montserrat', 'sans-serif']
            },
            fontSize: {
                '2xl': '1.65rem',
                '5xl': '2.75rem',
                xs: ['13px', '26px'],
                sm: ['15px', '28px'],
                base: ['16px', '28px'],
                md: ['18px', '25px'],
                lg: ['22px', '36px'],
                xl: ['24px', '32px']
            },
            lineHeight: {
                '14': '4.5rem',
            },
            padding: {
                'py-22': '5.5rem',
            }
      },
    },
    variants: {},
    plugins: [],
  }
