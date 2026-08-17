// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import vm from 'node:vm'
import { activateSkin, apply } from '../shared/runtime.js'
import { SKIN_ART } from '../shared/art.js'
import { SKIN_CSS } from '../shared/theme-css.js'

let dispose: (() => void) | undefined

function context() {
  return {
    effect(factory: () => (() => void)) {
      dispose = factory()
    },
  }
}

function stubFrames(): void {
  vi.stubGlobal('requestAnimationFrame', (callback: FrameRequestCallback) => {
    callback(0)
    return 1
  })
  vi.stubGlobal('cancelAnimationFrame', vi.fn())
}

afterEach(() => {
  dispose?.()
  dispose = undefined
  document.body.innerHTML = ''
  document.body.removeAttribute('data-dsh-schierke-interface')
  document.body.removeAttribute('style')
  document.head.querySelectorAll('[data-skin-owner], [data-test-fixture]').forEach(node => node.remove())
  document.title = ''
  vi.restoreAllMocks()
})

describe('Schierke Astral Grimoire interface skin', () => {
  it('ships the dsh-web-ui module-loader closure', () => {
    let registration: { id: string; factory: (require: () => never) => object } | undefined
    const window = { __ModuleLoader__: { load(value: typeof registration) { registration = value } } }
    const source = readFileSync(resolve(process.cwd(), 'lib/client.js'), 'utf8')
    vm.runInNewContext(source, { window })
    const exports = registration!.factory(() => { throw new Error('unexpected external') })

    expect(registration!.id).toBe('dsh-skin-schierke')
    expect(exports).toMatchObject({ inject: ['skinManager'] })
  })

  it('applies the owned folio chrome and retracts it completely', () => {
    stubFrames()
    document.body.innerHTML = '<div data-pane="sidebar"></div><main id="root"></main>'
    activateSkin(context() as never)

    expect(document.body.hasAttribute('data-dsh-schierke-interface')).toBe(true)
    expect(document.querySelector('[data-skin-artwork]')).not.toBeNull()
    expect(document.querySelector("[data-skin-chrome='schierke-folio-stage']")).not.toBeNull()
    expect(document.querySelector('[data-schierke-spread]')).not.toBeNull()
    expect(document.querySelector('[data-schierke-gutter]')).not.toBeNull()
    expect(document.querySelector('[data-schierke-plate]')).not.toBeNull()
    expect(document.querySelector('[data-schierke-sigil]')).toBeNull()
    expect(document.querySelector("[data-skin-chrome='schierke-accent-rail']")).toBeNull()
    expect(document.head.querySelector("[data-skin-chrome='schierke-styles']")).not.toBeNull()

    dispose?.()
    dispose = undefined
    expect(document.body.hasAttribute('data-dsh-schierke-interface')).toBe(false)
    expect(document.querySelectorAll("[data-skin-owner='schierke-interface']")).toHaveLength(0)
  })

  it('restores the original favicon at its original anchor', () => {
    stubFrames()
    const original = document.createElement('link')
    const marker = document.createElement('meta')
    original.rel = 'shortcut icon'
    original.href = '/favicon.ico'
    original.dataset.testFixture = ''
    marker.dataset.testFixture = ''
    document.head.append(original, marker)

    activateSkin(context() as never)
    expect(original.isConnected).toBe(false)
    expect(document.head.querySelector("[data-skin-chrome='schierke-favicon']")).not.toBeNull()

    dispose?.()
    dispose = undefined
    expect(document.head.querySelector("[data-skin-chrome='schierke-favicon']")).toBeNull()
    expect(original.isConnected).toBe(true)
    expect(original.nextSibling).toBe(marker)
  })

  it('restores title, theme color, and inline layout values', () => {
    stubFrames()
    const meta = document.createElement('meta')
    meta.name = 'theme-color'
    meta.content = '#123456'
    meta.dataset.testFixture = ''
    document.head.append(meta)
    document.title = 'DeepSeek Harness'
    document.body.style.setProperty('--schierke-sidebar-width', '111px')

    activateSkin(context() as never)
    expect(document.title).toBe('史尔基 · 灵界魔导书 · DeepSeek Harness')
    expect(meta.content).toBe('#6F947A')

    dispose?.()
    dispose = undefined
    expect(document.title).toBe('DeepSeek Harness')
    expect(meta.content).toBe('#123456')
    expect(document.body.style.getPropertyValue('--schierke-sidebar-width')).toBe('111px')
    expect(document.body.style.getPropertyValue('--schierke-titlebar-height')).toBe('')
  })

  it('registers without changing the page before selection', () => {
    let registered: { id: string; name: string; author: string } | undefined
    const ctx = {
      skinManager: {
        register(definition: { id: string; name: string; author: string }) {
          registered = definition
          return () => undefined
        },
      },
      effect(factory: () => (() => void)) {
        dispose = factory()
      },
    }

    apply(ctx as never)
    expect(registered).toMatchObject({ id: 'dsh-skin-schierke', name: '史尔基 · 灵界魔导书', author: 'yujimaka' })
    expect(document.body.hasAttribute('data-dsh-schierke-interface')).toBe(false)
  })

  it('ships scoped light, dark, settings, responsive, focus, and motion styles', () => {
    expect(SKIN_CSS).toContain('body[data-dsh-schierke-interface] {')
    expect(SKIN_CSS).toContain('body[data-dsh-schierke-interface][data-ds-dark-theme]')
    expect(SKIN_CSS).toContain("[data-slot='sidebar.settings']")
    expect(SKIN_CSS).toContain(':focus-visible')
    expect(SKIN_CSS).toContain('@media (max-width: 880px)')
    expect(SKIN_CSS).toContain('@media (prefers-reduced-motion: reduce)')
  })

  it('keeps the sidebar aligned with host Appearance state without a duplicate toggle', () => {
    expect(SKIN_CSS).toContain("body[data-dsh-schierke-interface] :is([data-pane='sidebar'], [class*='sidebarCol'])")
    expect(SKIN_CSS).toContain("body[data-dsh-schierke-interface][data-ds-dark-theme] :is([data-pane='sidebar'], [class*='sidebarCol'])")
    expect(SKIN_CSS).not.toContain('data-skin-theme-toggle')
  })

  it('lets model and effort listboxes escape the composer bounds', () => {
    expect(SKIN_CSS).toMatch(/\[data-composer-card\]\s*\{[^}]*overflow: visible;/s)
    expect(SKIN_CSS).not.toMatch(/\[data-composer-card\]\s*\{[^}]*(?:clip-path|isolation):/s)
    expect(SKIN_CSS).toMatch(/:is\(\[role='dialog'\], \[role='menu'\], \[role='listbox'\]\)\s*\{[^}]*z-index: 24;/s)
  })

  it('keeps the illustrated folio plate inside the viewport', () => {
    expect(SKIN_CSS).toContain('top: clamp(68px, 8vh, 104px);')
    expect(SKIN_CSS).toContain('right: clamp(26px, 3vw, 58px);')
    expect(SKIN_CSS).toContain('bottom: clamp(30px, 4vh, 52px);')
    expect(SKIN_CSS).toContain('[data-schierke-plate]')
    expect(SKIN_CSS).toContain('overflow: hidden;')
    expect(SKIN_CSS).toContain('object-fit: contain;')
    expect(SKIN_CSS).not.toMatch(/\[data-schierke-plate\][^{]*\{[^}]*(?:right|bottom):\s*-/s)
  })

  it('embeds the optimized character artwork without a remote dependency', () => {
    expect(SKIN_ART.startsWith('data:image/webp;base64,')).toBe(true)
    expect(SKIN_ART.length).toBeGreaterThan(100_000)
    expect(SKIN_ART).not.toContain('http')
  })

  it('keeps active-chat artwork recognizable on wide screens and removes it on reading widths', () => {
    expect(SKIN_CSS).toContain(":has(:is([data-phase='active'][data-chat-flow], [data-phase='active'] [data-chat-flow])) [data-schierke-plate]")
    expect(SKIN_CSS).toContain('opacity: 0.17;')
    expect(SKIN_CSS).toContain('saturate(0.62)')
    expect(SKIN_CSS).toContain('opacity: 0.1;')
    expect(SKIN_CSS).toMatch(/@media \(max-width: 880px\)[\s\S]*?\[data-schierke-plate\][\s\S]*?display: none;/)
  })

  it('retains its book-spread identity when artwork is disabled', () => {
    expect(SKIN_CSS).toContain('[data-schierke-spread]')
    expect(SKIN_CSS).toContain('[data-schierke-gutter]')
    expect(SKIN_CSS).toContain('[data-schierke-no-art] [data-schierke-plate]')
    expect(SKIN_CSS).not.toContain('FIELD NOTE · ENTRY')
    expect(SKIN_CSS).toContain("[role='treeitem'][aria-selected='true']")
    expect(SKIN_CSS).toContain("[data-slot='sidebar.settings']")
    expect(SKIN_CSS).toContain('clip-path: polygon(')
  })
})
