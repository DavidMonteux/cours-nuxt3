module.exports = {
	content: [
		"./components/**/*.{js,ts,vue}",
		"./layouts/**/*.vue",
		"./pages/**/*.vue",
		"./plugins/**/*.{js,ts}",
		"./nuxt.config.{js,ts}",
		"./app.vue"
	],
	theme: {
		extend: {},
	},
	plugins: [
		require('daisyui')
	],
	daisyui: {
		themes: [
			'dark',	// Le 1er thème sera celui par défaut.
		]
	},
}
