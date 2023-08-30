# unplugin-record-time

[![NPM version](https://img.shields.io/npm/v/unplugin-record-time?color=a1b858&label=)](https://www.npmjs.com/package/unplugin-record-time)

Time reporting for Vite/Rollup/Webpack project.

## Install

```bash
npm i -D unplugin-record-time
```

<details>
<summary>Vite</summary><br>

```ts
// vite.config.ts
import recordTime from 'unplugin-record-time/vite'

export default defineConfig({
  plugins: [
    recordTime({ /* options */ }),
  ],
})
```

Example: [`playground/`](./playground/)

<br></details>

<details>
<summary>Rollup</summary><br>

```ts
// rollup.config.js
import recordTime from 'unplugin-record-time/rollup'

export default {
  plugins: [
    recordTime({ /* options */ }),
  ],
}
```

<br></details>


<details>
<summary>Webpack</summary><br>

```ts
// webpack.config.js
module.exports = {
  /* ... */
  plugins: [
    require('unplugin-record-time/webpack')({ /* options */ })
  ]
}
```

<br></details>

<details>
<summary>Nuxt</summary><br>

```ts
// nuxt.config.js
export default defineNuxtConfig({
  modules: [
    ['unplugin-record-time/nuxt', { /* options */ }],
  ],
})
```

> This module works for both Nuxt 2 and [Nuxt Vite](https://github.com/nuxt/vite)

<br></details>

<details>
<summary>Vue CLI</summary><br>

```ts
// vue.config.js
module.exports = {
  configureWebpack: {
    plugins: [
      require('unplugin-record-time/webpack')({ /* options */ }),
    ],
  },
}
```

<br></details>


