/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		colors: {
			neutral: {
				100: 'hsl(236, 100%, 87%)',
				300: 'hsl(235, 45%, 61%)',
				500: 'hsl(235, 45%, 38%)',
				700: 'hsl(235, 46%, 20%)',
				900: 'hsl(226, 43%, 10%)',
			},
			blue: 'hsl(246, 80%, 60%)',
			white: '#fff',
		},
		screens: {
			sm: '510px',
			md: '768px',
			lg: '1024px',
		},
		extend: {
			minWidth: {
				75: '18.8rem',
			},
			maxWidth: {
				231: '57.7rem',
			},
			fontFamily: {
				sans: ['Rubik', 'sans-serif'],
			},
		},
	},
	plugins: [],
}
