import { defineConfig } from 'vite'
import Inspect from 'vite-plugin-inspect'
import Unplugin from 'unplugin-record-time/vite'

export default defineConfig({
  plugins: [
    Inspect(),
    Unplugin(),
  ],
})
