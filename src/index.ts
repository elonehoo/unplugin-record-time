import { createUnplugin } from 'unplugin'
import type { Options } from './types'

function closeBundleTime(buildEnd: number, build: number, full: number) {
  const end: Date = new Date()
  // Catch potential render NPEs
  try {
    /* eslint-disable no-console */
    console.table({
      build: {
        time: `${((buildEnd - build) / 1000).toFixed(
          3,
        )}s`,
      },
      full: {
        time: `${((end.getTime() - full) / 1000).toFixed(3)}s`,
      },
    })
  }
  catch (error) {
    if (error instanceof Error)
      console.warn(error)
  }
}

export default createUnplugin<Options | undefined>(() => {
  const full: Date = new Date()

  let build: Date
  let buildEnd: Date
  return {
    name: 'unplugin-record-time',
    apply: 'build',
    buildStart() {
      build = new Date()
    },
    buildEnd() {
      buildEnd = new Date()
    },
    vite: {
      closeBundle() {
        closeBundleTime(buildEnd.getTime(), build.getTime(), full.getTime())
      },
    },
    rollup: {
      closeBundle() {
        closeBundleTime(buildEnd.getTime(), build.getTime(), full.getTime())
      },
    },
    webpack(compiler) {
      compiler.hooks.done.tap('unplugin-record-time', () => {
        closeBundleTime(buildEnd.getTime(), build.getTime(), full.getTime())
      })
    },
  }
})
