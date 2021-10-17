import preprocess from 'svelte-preprocess';
import path from 'path';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
		// sveltePreprocess settings
		sass: {
			outputStyle: 'compressed'
		}
	}),
	kit: {
		// By default, `npm run build` will create a standard Node app.
		// You can create optimized builds for different platforms by
		// specifying a different adapter
		adapter: adapter(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',

		ssr: true,

		/** @type {import('vite').UserConfig} */
		vite: {
			resolve: {
				alias: {
					$atoms: path.resolve('src/lib/Components/Atoms'),
					$molecules: path.resolve('src/lib/Components/Molecules'),
					$organisms: path.resolve('src/lib/Components/Organisms'),
					$templates: path.resolve('src/lib/Components/Templates')
				}
			},
			ssr: {
				noExternal: ['style-value-types', 'popmotion', 'framesync']
			}
		}
	}
};

export default config;
