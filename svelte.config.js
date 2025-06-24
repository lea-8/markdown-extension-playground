// import adapter from '@sveltejs/adapter-auto';
import { mdsvex, escapeSvelte } from 'mdsvex';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { createHighlighter } from 'shiki';
import adapter from '@sveltejs/adapter-static';
// import remarkWidget from './plugins/remark-widgets.js';
import remarkGrid from './plugins/remark-grid.js';
 
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const path_to_simpleheader = join(__dirname, './src/lib/components/layout.svelte');
const path_to_fallback = join(__dirname, './src/lib/components/fallbackLayout.svelte');

const theme = 'github-dark';
const highlighter = await createHighlighter({
	themes: [theme],
	langs: ['javascript', 'typescript', 'markdown']
});

const mdsvexConfig = {
  highlight: {
    highlighter: (code, lang) => {
      const html = escapeSvelte(highlighter.codeToHtml(code, { lang, theme }))
      return `<Components.pre>{@html \`${html}\`}</Components.pre>`
    },
  },
}

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
				remarkPlugins: [remarkGrid],
				highlight: {
				highlighter: async (code, lang = 'text') => {
					const html = escapeSvelte(highlighter.codeToHtml(code, { lang, theme }));
					return `{@html \`${html}\` }`;
					}
				},
				layout: {
					simpleheader: path_to_simpleheader,
					_: path_to_fallback
				},
			})
    ],
	kit: {
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		adapter: adapter({
			// default options are shown. On some platforms
			// these options are set automatically — see below
			pages: 'build',
			assets: 'build',
			fallback: undefined,
			precompress: false,
			strict: true
		})
	}
};

export default config;
