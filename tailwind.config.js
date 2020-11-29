const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	theme: {
		fontFamily: {
			display: ['Vollkorn SC', 'sans-serif'],
			body: ['Lato', 'sans-serif']
		},
		extend: {
			colors: {
				/* http://paletton.com/#uid=73x0u0kqSUFfnXeltVWymSnObFF */
				primary: {
					100: '#339CED',
					200: '#87C5F4',
					300: '#5AAFF1',
					400: '#0E88E6',
					500: '#0570C2'
				},
				secondary: {
					100: '#4545F0',
					200: '#9292F6',
					'200-opacity-10': 'rgba(146, 146, 246, 0.1)',
					300: '#6868F3',
					400: '#2121EA',
					500: '#0C0CCC',
					600: '#082245'
				},
				tertiary: {
					100: '#FFC929',
					200: '#FFE085',
					300: '#FFD454',
					400: '#FFBF00'
				},
				complement: {
					100: '#FFA329',
					200: '#FFCB85',
					300: '#FFB654',
					400: '#FF9200'
				},
				gray: {
					1000: '#151515',
					1100: '#181818',
					1200: '#0c0c0c',
					...defaultTheme.colors.gray
				}
			},
			flex: {
				'150': '0 0 150px',
				'155': '0 0 155px',
				'230': '0 0 230px'
			},
			fontSize: {
				'7xl': '5rem',
				'8xl': '6rem',
				'12xl': '10rem',
				'14xl': '12rem'
			},
			opacity: {
				'70': '0.7'
			}
		}
	}
};
