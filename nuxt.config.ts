import { defineNuxtConfig } from 'nuxt3'



// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
	/*
	alias: {
		// Par défaut
		"~~": "/",
		"@@": "/",
		"~": "/",
		"@": "/",
		"public": "/public",
		"assets": "/assets",
		"images": "/assets/images"
	},
	*/
	css: [
		// Charger un module NodeJS directement
		// 'bulma',

		// Fichier CSS
		'@/assets/css/main.css',

		// Fichier SCSS
		// '@/assets/css/main.scss'
	],
	build: {
		postcss: {
			postcssOptions: {
				plugins: {
					tailwindcss: {},
					autoprefixer: {}
				}
			}
		}
	}
})
