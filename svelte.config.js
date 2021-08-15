import preprocess from 'svelte-preprocess';
import node from '@sveltejs/adapter-node';
import path from 'path';
import fs from 'fs';

const pkg = JSON.parse(fs.readFileSync(new URL('package.json', import.meta.url), 'utf8'));

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
		adapter: node(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',

		ssr: true,

		/** @type {import('vite').UserConfig} */
		vite: {
			ssr: {
				noExternal: []
			},
			resolve: {
				alias: {
					$atoms: path.resolve('src/lib/Components/Atoms'),
					$molecules: path.resolve('src/lib/Components/Molecules'),
					$organisms: path.resolve('src/lib/Components/Organisms'),
					$templates: path.resolve('src/lib/Components/Templates')
				}
			},
			optimizeDeps: {
				include: ['style-value-types', 'popmotion', 'framesync'],
				esbuildOptions: {
					bundle: true,
					target: 'es6'
				}
			}
		}
	}
};

export default config;
