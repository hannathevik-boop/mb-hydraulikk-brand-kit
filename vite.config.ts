import { defineConfig } from 'vite'
import path from 'path'
import { fileURLToPath } from 'node:url'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import type { Plugin } from 'vite'

// Stub Figma virtual modules when running locally (outside Figma Make)
function figmaLocalStub(): Plugin {
  return {
    name: 'figma-local-stub',
    enforce: 'pre',
    resolveId(id) {
      if (!process.env.FIGMA_MAKE && id === 'figma:foundry-client-api') return '\0figma-stub'
      if (!process.env.FIGMA_MAKE && id.startsWith('figma:asset/')) return '\0figma-asset-stub'
    },
    load(id) {
      if (id === '\0figma-stub') return 'export default {}'
      if (id === '\0figma-asset-stub') return 'export default ""'
    },
  }
}

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [
    // React and Tailwind are required for Figma Make — do not remove
    react(),
    tailwindcss(),
    figmaLocalStub(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
