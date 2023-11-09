import colors from 'tailwindcss/colors'

/** @type {{gray: string, white: string, "dark-primary": string, black: string, "dark-gray": string, primary: string}} */

const constants = {
	primary: '#212123',
	'dark-primary': '#191919',
	white: '#FFFFFF',
	'dark-gray': '#576067',
	gray: '#B8B8B8',
	black: '#090909',
	violet: '#8B57C6',
	'dark-violet': '#6C3EB8',
}

export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				transparent: colors.transparent,
				...constants,
			},
			fontFamily: {
				serif: ['"Montserrat"', 'sans-serif'],
			},
		},
	},
	plugins: [],
}
