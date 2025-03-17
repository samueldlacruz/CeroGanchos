import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import {robots } from 'vite-plugin-robots';


export default defineConfig({
  plugins: [
    react(),
   robots()
  ],
});
