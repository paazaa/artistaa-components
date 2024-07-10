/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js}'],
	theme: {
		screens: {
			xs: '375px',
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1536px',
		},
		extend: {
			fontFamily: {
				'roboto-slab': ['Roboto Slab', 'serif'],
				manrope: ['Manrope', 'sans-serif'],
			},
			colors: {
				blue: '#456CC6',
				blueDark: '#2C3E91',
				golden: '#EEC151',
				grey: '#333333',
			},
			backgroundImage: {
				'hero-background': "url('/src/assets/hero-img.svg)",
			},
		},
	},
	plugins: [],
}
