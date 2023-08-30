import type { SpyInstance } from 'vitest'
import { describe, expect, it, vi } from 'vitest'
import timeReporter from '../src/vite'

describe('index', () => {
  it('should export a function by default', () => {
    expect(timeReporter).toBeTypeOf('function')
  })

  it('should return a plugin with correct name and apply on build', () => {
    const plugin: any = timeReporter()
    expect(plugin).toBeTypeOf('object')
    expect(plugin.name).toBe('unplugin-record-time')
    expect(plugin.apply).toBe('build')
  })

  it('should return a plugin with correct hooks', () => {
    const plugin: any = timeReporter()
    expect(plugin.buildStart).toBeTypeOf('function')
    expect(plugin.buildEnd).toBeTypeOf('function')
  })

  it('should ', () => {
    vi.useFakeTimers()

    const plugin: any = timeReporter()

    const spyConsoleTable: SpyInstance<
      [tabularData: any, properties?: readonly string[] | undefined],
      void
    > = vi.spyOn(console, 'table')

    plugin.buildStart()

    vi.advanceTimersByTime(2010)

    plugin.buildEnd()

    vi.advanceTimersByTime(1030)

    vi.advanceTimersByTime(3020)

    plugin.closeBundle()

    expect(spyConsoleTable).toBeCalledTimes(1)
    expect(spyConsoleTable).toBeCalledWith({
      build: {
        time: '2.010s',
      },
      full: {
        time: '6.060s',
      },
    })

    vi.restoreAllMocks()
  })
})
