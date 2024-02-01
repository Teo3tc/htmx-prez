import { defineConfig } from 'vite';
import shopify from 'vite-plugin-shopify';

export default defineConfig({
  plugins: [
    shopify({
      sourceCodeDir: 'src',
      additionalEntrypoints: [
        'src/pages/main.js',
        'src/pages/product.js', // Relative to sourceCodeDir
      ],
    }),
  ],
  build: {
    emptyOutDir: false,
  },
});
