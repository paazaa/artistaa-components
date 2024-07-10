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
				'dm-sans': ['DM Sans', 'sans-serif'],
			},
			colors: {
				primary: '#131B42',
				primaryExtraLight: '#888CA0',
				gray: '#333333',
				grayLight: '#999999',
				white: '#FFFFFF',
			},
			backgroundImage: {},
		},
	},
	plugins: [],
}
