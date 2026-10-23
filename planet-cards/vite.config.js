
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),

    VitePWA({
      registerType: 'autoUpdate',

      includeAssets: ['favicon.svg'],

      manifest: {
        id: '/',
        name: 'Planet Cards - Rick and Morty',
        short_name: 'Planet Cards',
        description:
          'Explora personajes de Rick and Morty, busca tus favoritos y guarda tu colección.',
        theme_color: '#97CE4C',
        background_color: '#101820',
        display: 'standalone',
        start_url: '/',
        scope: '/',

        icons: [
          {
            src: 'image.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'image2.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'image2.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
      },

      workbox: {
        globPatterns: [
          '**/*.{js,css,html,ico,png,svg,webmanifest}',
        ],
      },
    }),
  ],
})
