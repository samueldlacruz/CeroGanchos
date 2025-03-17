import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import sitemap from 'vite-plugin-sitemap';
import {robots } from 'vite-plugin-robots';


export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: process.env.VITE_SITE_URL,
    }),
   robots()
  ],
});
