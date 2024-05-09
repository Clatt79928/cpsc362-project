import adapter from "@sveltejs/adapter-auto";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { mdsvex } from "mdsvex";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [
    vitePreprocess(),
    
    mdsvex({
      extensions: ['.md', '.svx'],
      // https://mdsvex.com/docs#layouts
      layout: './src/routes/blog/+page.svelte'

    })
  ],
  extensions: ['.svelte', '.md', '.svx'],

  kit: {

    adapter: adapter()
  }
};

export default config;