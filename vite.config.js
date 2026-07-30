import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mdx from '@mdx-js/rollup'

export default defineConfig({
  plugins: [
    // MDX must run before the React plugin so the generated JSX is picked up by
    // Fast Refresh in dev. Case studies are authored as .mdx in src/case-studies/*.
    { enforce: 'pre', ...mdx({ providerImportSource: '@mdx-js/react' }) },
    react({ include: /\.(jsx|js|mdx|md|tsx|ts)$/ }),
  ],
})
