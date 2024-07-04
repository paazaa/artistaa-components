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
				'inria-serif': ['Inria-Serif', 'serif'],
				'open-sans': ['Open-Sans', 'sans-serif'],
			},
			colors: {
				primary: '#131B42',
				primaryExtraLight: '#888CA0',
				secondary: '#F87853',
				// primaryMedium: '#608AED',
				// primaryLight: '#959DD2',
				// primaryDark: '#13162B',
				// secondaryDark: '#F96886',
				// bgGreyMedium: '#F5F5F5',
				grey: '#333333',
				// secondaryLight: '#F18990',
			},
			backgroundImage: {
				// 'hero-background': "url('/src/assets/hero-img.svg)",
			},
		},
	},
	plugins: [],
}
