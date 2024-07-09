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
				epilouge: ['Epilogue', 'serif'],
				lato: ['Lato', 'sans-serif'],
			},
			colors: {
				primary: '#4A56A7',
				primaryMedium: '#608AED',
				primaryLight: '#959DD2',
				primaryDark: '#13162B',
				secondary: '#F18990',
				secondaryDark: '#F96886',
				bgGreyMedium: '#F5F5F5',
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
