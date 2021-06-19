const sveltePreprocess = require('svelte-preprocess');
const node = require('@sveltejs/adapter-node');
const pkg = require('./package.json');
const path = require('path');

/** @type {import('@sveltejs/kit').Config} */
module.exports = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: sveltePreprocess({
		// sveltePreprocess settings
		sass: {
			outputStyle: 'compressed'
		}
	}),
	kit: {
		// By default, `npm run build` will create a standard Node app.
		// You can create optimized builds for different platforms by
		// specifying a different adapter
		adapter: node(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',

		vite: {
			ssr: {
				noExternal: Object.keys(pkg.dependencies || {})
			},
			resolve: {
				alias: {
					$atoms: path.resolve('src/lib/Components/Atoms'),
					$molecules: path.resolve('src/lib/Components/Molecules'),
					$organisms: path.resolve('src/lib/Components/Organisms'),
					$templates: path.resolve('src/lib/Components/Templates')
				}
			}
		}
	}
};
