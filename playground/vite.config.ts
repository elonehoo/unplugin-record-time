import Unplugin from 'unplugin-record-time/vite'
import { defineConfig } from 'vite'
import Inspect from 'vite-plugin-inspect'

export default defineConfig({
  plugins: [
    Inspect(),
    Unplugin(),
  ],
})
