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
                    500: '#FF6606'
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
      },
    },
    variants: {},
    plugins: [],
  }
