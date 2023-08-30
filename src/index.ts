import { createUnplugin } from 'unplugin'
import type { Options } from './types'

export default createUnplugin<Options | undefined>((options) => {
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
    writeBundle() {
      const end: Date = new Date()
      // Catch potential render NPEs
      try {
        /* eslint-disable no-console */
        console.table({
          build: {
            time: `${((buildEnd.getTime() - build.getTime()) / 1000).toFixed(
              3,
            )}s`,
          },
          full: {
            time: `${((end.getTime() - full.getTime()) / 1000).toFixed(3)}s`,
          },
        })
      }
      catch (error) {
        if (error instanceof Error)
          console.warn(error)
      }
    },
  }
})
