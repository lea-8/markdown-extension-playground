import adapter from '@sveltejs/adapter-auto';
import {mdsvex} from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md', '.svx', '.vismd'],
	smartypants: {
    	quotes: true,
		ellipses: true,
		backticks: true,
		dashes: 'oldschool'
  	},
    preprocess: [
        mdsvex({
            extensions: ['.md', '.svx', '.vismd'],
        })
    ],
	kit: {
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		adapter: adapter()
	}
};

export default config;
