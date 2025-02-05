import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import Icons from 'unplugin-icons/vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

import { createRequire } from 'node:module';

export function vitePluginSvelteH2J() {
    const require = createRequire(import.meta.url);
    return {
        name: 'css-tree-resolver', // name of the plugin
        resolveId(id: string) {
            if (id === 'css-tree') {
                return require.resolve('./node_modules/css-tree/dist/csstree.esm.js');
            }
        }
    }
}

export default defineConfig({
	plugins: [
		sveltekit(),
		Icons({
			compiler: 'svelte'
		}),
		ViteImageOptimizer(),
		vitePluginSvelteH2J(),
	]
});
