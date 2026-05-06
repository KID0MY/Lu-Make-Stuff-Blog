// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://lumakestuff.dev',
  output: 'server',
  adapter: cloudflare({
    prerenderEnvironment: 'node', 
    imageService: 'compile'
  })
});