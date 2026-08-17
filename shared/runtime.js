import { SKIN_ART, SKIN_FAVICON } from './art.js'
import { SKIN_CSS } from './theme-css.js'

const SKIN_ID = 'dsh-skin-schierke'
const SKIN_NAME = '史尔基 · 灵界魔导书'
const SKIN_DESCRIPTION = '紫袍、森之灵与羊皮纸魔导书界面；对话开始后角色立绘会自动退让阅读区。'
const SKIN_AUTHOR = 'yujimaka'
const SKIN_TITLE = '史尔基 · 灵界魔导书 · DeepSeek Harness'
const OWNER = 'schierke-interface'
const BODY_ATTRIBUTE = 'data-dsh-schierke-interface'
const ACCENT = '#6F947A'
const SIDEBAR_SELECTOR = ":is([data-pane='sidebar'], [class*='sidebarCol'])"
const LAYOUT_PROPERTIES = ['--schierke-sidebar-width', '--schierke-titlebar-height']

function createOwned(tag, chrome) {
  const node = document.createElement(tag)
  node.dataset.skinOwner = OWNER
  node.dataset.skinChrome = chrome
  return node
}

function createArtworkStage() {
  const stage = createOwned('div', 'schierke-artwork-stage')
  const sigil = document.createElement('span')
  const motes = document.createElement('span')
  const artwork = document.createElement('img')
  stage.setAttribute('aria-hidden', 'true')
  sigil.dataset.schierkeSigil = ''
  motes.dataset.schierkeMotes = ''
  artwork.dataset.skinArtwork = ''
  artwork.alt = ''
  artwork.src = SKIN_ART
  stage.append(sigil, motes, artwork)
  return { stage, artwork }
}

function createStylesheet() {
  const style = createOwned('style', 'schierke-styles')
  style.textContent = SKIN_CSS
  return style
}

function createAccentRail() {
  const rail = createOwned('div', 'schierke-accent-rail')
  rail.setAttribute('aria-hidden', 'true')
  return rail
}

function createFavicon() {
  const favicon = createOwned('link', 'schierke-favicon')
  favicon.rel = 'icon'
  favicon.type = 'image/svg+xml'
  favicon.href = SKIN_FAVICON
  return favicon
}

function installFavicon() {
  const head = document.head
  const originals = Array.from(head.querySelectorAll('link[rel]'))
    .filter(node => node.relList.contains('icon'))
    .map(node => ({ node, nextSibling: node.nextSibling }))

  for (const { node } of originals) node.remove()
  const favicon = createFavicon()
  head.append(favicon)

  return {
    favicon,
    restore() {
      favicon.remove()
      for (let index = originals.length - 1; index >= 0; index -= 1) {
        const { node, nextSibling } = originals[index]
        if (node.isConnected) continue
        const anchor = nextSibling?.parentNode === head ? nextSibling : null
        head.insertBefore(node, anchor)
      }
    },
  }
}

function decorateTitlebar(ownedNodes) {
  const titlebar = document.querySelector("[class*='titlebar']")
  if (!titlebar || titlebar.querySelector("[data-skin-chrome='schierke-titlebar-brand']")) return
  const brand = createOwned('span', 'schierke-titlebar-brand')
  brand.textContent = 'ASTRAL GRIMOIRE · SCHIERKE'
  brand.setAttribute('aria-hidden', 'true')
  ownedNodes.add(brand)
  titlebar.prepend(brand)
}

function measureLayout(body) {
  const sidebar = document.querySelector(SIDEBAR_SELECTOR)
  const rect = sidebar?.getBoundingClientRect()
  body.style.setProperty('--schierke-sidebar-width', `${Math.max(0, rect?.width ?? 0)}px`)
  body.style.setProperty('--schierke-titlebar-height', `${Math.max(0, rect?.top ?? 0)}px`)
  return sidebar
}

function observeSidebar(observer, current, body) {
  const next = measureLayout(body)
  if (next === current) return current
  if (current) observer.unobserve(current)
  if (next) observer.observe(next)
  return next
}

function createResizeObserver(onResize) {
  if (typeof ResizeObserver !== 'undefined') {
    return new ResizeObserver(onResize)
  }
  return { observe() {}, unobserve() {}, disconnect() {} }
}

function markArtworkBounds(body, artwork) {
  const activeChat = document.querySelector("[data-phase='active'][data-chat-flow], [data-phase='active'] [data-chat-flow]")
  if (!artwork.complete || activeChat) {
    body.removeAttribute('data-schierke-art-bounds')
    return
  }

  const rect = artwork.getBoundingClientRect()
  const safe = rect.left >= 0 && rect.top >= 0 && rect.right <= window.innerWidth - 8 && rect.bottom <= window.innerHeight - 8
  body.setAttribute('data-schierke-art-bounds', safe ? 'safe' : 'unsafe')
}

function captureLayoutProperties(body) {
  const style = body.style
  return LAYOUT_PROPERTIES.map(name => ({
    name,
    present: Array.from({ length: style.length }, (_, index) => style.item(index)).includes(name),
    value: style.getPropertyValue(name),
    priority: style.getPropertyPriority(name),
  }))
}

function restoreLayoutProperties(body, properties) {
  for (const property of properties) {
    if (property.present) body.style.setProperty(property.name, property.value, property.priority)
    else body.style.removeProperty(property.name)
  }
}

function setSystemChrome() {
  const meta = document.head.querySelector('meta[name="theme-color"]')
  if (!meta) return { meta: null, value: undefined }
  const value = meta.content
  meta.content = ACCENT
  return { meta, value }
}

export function activateSkin(ctx) {
  const body = document.body
  const originalTitle = document.title
  const layoutProperties = captureLayoutProperties(body)
  const ownedNodes = new Set()
  const systemChrome = setSystemChrome()
  let faviconState
  let observedSidebar
  let syncFrame
  let artwork

  const sync = () => {
    syncFrame = undefined
    decorateTitlebar(ownedNodes)
    observedSidebar = observeSidebar(resizeObserver, observedSidebar, body)
    if (artwork) markArtworkBounds(body, artwork)
  }
  const scheduleSync = () => {
    if (syncFrame === undefined) syncFrame = requestAnimationFrame(sync)
  }
  const resizeObserver = createResizeObserver(scheduleSync)
  const mutationObserver = new MutationObserver(scheduleSync)
  const onWindowResize = scheduleSync
  const onArtworkLoad = scheduleSync

  ctx.effect(() => () => {
    mutationObserver.disconnect()
    resizeObserver.disconnect()
    window.removeEventListener('resize', onWindowResize)
    artwork?.removeEventListener('load', onArtworkLoad)
    if (syncFrame !== undefined) cancelAnimationFrame(syncFrame)
    faviconState?.restore()
    ownedNodes.forEach(node => node.remove())
    body.removeAttribute(BODY_ATTRIBUTE)
    body.removeAttribute('data-schierke-art-bounds')
    restoreLayoutProperties(body, layoutProperties)
    if (document.title === SKIN_TITLE) document.title = originalTitle
    if (systemChrome.meta?.isConnected) systemChrome.meta.content = systemChrome.value ?? ''
  }, 'ui-skin-schierke-interface: reversible interface chrome')

  body.setAttribute(BODY_ATTRIBUTE, '')
  faviconState = installFavicon()
  ownedNodes.add(faviconState.favicon)
  const artworkStage = createArtworkStage()
  artwork = artworkStage.artwork
  artwork.addEventListener('load', onArtworkLoad)
  for (const node of [createStylesheet(), artworkStage.stage, createAccentRail()]) {
    ownedNodes.add(node)
    if (node instanceof HTMLStyleElement) document.head.append(node)
    else body.prepend(node)
  }
  document.title = SKIN_TITLE
  mutationObserver.observe(body, { childList: true, subtree: true })
  window.addEventListener('resize', onWindowResize)
  sync()
}

async function mountManagedSkin(ctx) {
  const fiber = ctx.plugin({ apply: activateSkin })
  await fiber.await()
  return () => fiber.dispose()
}

export function apply(ctx) {
  ctx.effect(() => ctx.skinManager.register({
    id: SKIN_ID,
    name: SKIN_NAME,
    description: SKIN_DESCRIPTION,
    author: SKIN_AUTHOR,
    preview: SKIN_ART,
    order: 10,
    activate: () => mountManagedSkin(ctx),
  }), 'ui-skin-schierke-interface: skin registration')
}

export const inject = ['skinManager']
