export const SKIN_CSS = String.raw`
body[data-dsh-schierke-interface] {
  color: #2b2b27;
  background-color: #eee9dc;
  background-image:
    radial-gradient(circle at 82% 46%, rgba(111, 148, 122, 0.22), transparent 34%),
    linear-gradient(rgba(248, 245, 235, 0.76), rgba(232, 226, 211, 0.88)),
    repeating-linear-gradient(0deg, rgba(62, 69, 55, 0.035) 0 1px, transparent 1px 5px);
  background-attachment: fixed;
  --schierke-violet: #75638f;
  --schierke-violet-deep: #4b3d60;
  --schierke-sage: #6f947a;
  --schierke-ether: #b8d4b2;
  --schierke-parchment: #f4f0e4;
  --schierke-ink: #2b2b27;
  --schierke-panel: rgba(248, 245, 235, 0.86);
  --schierke-sidebar-width: 280px;
  --schierke-titlebar-height: 0px;
  --schierke-shadow: 0 20px 56px rgba(49, 45, 38, 0.16), 0 3px 10px rgba(49, 45, 38, 0.09);
  --dsw-alias-bg-base: transparent;
  --dsw-alias-bg-layer-1: rgba(248, 245, 235, 0.93);
  --dsw-alias-bg-layer-2: rgba(237, 232, 217, 0.95);
  --dsw-alias-bg-layer-3: rgba(224, 217, 201, 0.97);
  --dsw-alias-bg-overlay: rgba(250, 247, 239, 0.98);
  --dsw-alias-border-l1: rgba(75, 61, 96, 0.14);
  --dsw-alias-border-l2-darkmode-thin: rgba(75, 61, 96, 0.22);
  --dsw-alias-border-l2: rgba(75, 61, 96, 0.28);
  --dsw-alias-border-l3: rgba(111, 148, 122, 0.66);
  --dsw-alias-brand-primary: #657f6b;
  --dsw-alias-brand-text: #4b3d60;
  --dsw-alias-button-elevated-fill: rgba(250, 247, 239, 0.96);
  --dsw-alias-button-floating-fill: rgba(251, 248, 240, 0.98);
  --dsw-alias-button-floating-hover: #e6dfd1;
  --dsw-alias-button-info-fill: #6f947a;
  --dsw-alias-button-info-hover: #587761;
  --dsw-alias-interactive-bg-active: rgba(117, 99, 143, 0.16);
  --dsw-alias-interactive-bg-hover: rgba(111, 148, 122, 0.1);
  --dsw-alias-interactive-bg-hover-solid: #e4e6d9;
  --dsw-alias-label-primary: #2b2b27;
  --dsw-alias-label-primary-bluish: #40384b;
  --dsw-alias-label-secondary: #625f57;
  --dsw-alias-label-tertiary: #807c70;
  --dsw-alias-label-caption: #9a9588;
  --dsw-alias-state-business-primary: #6f947a;
  --dsw-alias-state-business-tertiary: #dce8d8;
  --dsw-shadow-lv2: var(--schierke-shadow);
  --dsw-specific-input-major: rgba(249, 246, 237, 0.92);
  --dsw-specific-selector: rgba(231, 228, 214, 0.96);
  --dsw-specific-sidebar-fill: rgba(16, 26, 21, 0.98);
}

body[data-dsh-schierke-interface][data-ds-dark-theme] {
  color: #edf0e7;
  background-color: #0d1411;
  background-image:
    radial-gradient(circle at 82% 44%, rgba(111, 148, 122, 0.2), transparent 35%),
    linear-gradient(rgba(9, 16, 13, 0.82), rgba(14, 21, 18, 0.96)),
    repeating-linear-gradient(0deg, rgba(215, 228, 207, 0.025) 0 1px, transparent 1px 5px);
  --schierke-panel: rgba(19, 28, 24, 0.88);
  --schierke-shadow: 0 24px 64px rgba(0, 0, 0, 0.48), 0 3px 12px rgba(0, 0, 0, 0.3);
  --dsw-alias-bg-base: transparent;
  --dsw-alias-bg-layer-1: rgba(19, 29, 24, 0.95);
  --dsw-alias-bg-layer-2: rgba(27, 39, 33, 0.96);
  --dsw-alias-bg-layer-3: rgba(38, 51, 44, 0.97);
  --dsw-alias-bg-overlay: rgba(14, 22, 18, 0.99);
  --dsw-alias-border-l1: rgba(184, 212, 178, 0.14);
  --dsw-alias-border-l2-darkmode-thin: rgba(184, 212, 178, 0.22);
  --dsw-alias-border-l2: rgba(184, 212, 178, 0.3);
  --dsw-alias-border-l3: rgba(142, 184, 150, 0.72);
  --dsw-alias-brand-primary: #9bc3a1;
  --dsw-alias-brand-text: #d4c4e7;
  --dsw-alias-button-elevated-fill: rgba(33, 46, 39, 0.97);
  --dsw-alias-button-floating-fill: rgba(38, 52, 44, 0.98);
  --dsw-alias-button-floating-hover: #354c3e;
  --dsw-alias-button-info-fill: #729c7b;
  --dsw-alias-button-info-hover: #8bb594;
  --dsw-alias-interactive-bg-active: rgba(154, 126, 184, 0.22);
  --dsw-alias-interactive-bg-hover: rgba(151, 191, 158, 0.11);
  --dsw-alias-interactive-bg-hover-solid: #293d32;
  --dsw-alias-label-primary: #f0f2e9;
  --dsw-alias-label-primary-bluish: #eee8f4;
  --dsw-alias-label-secondary: #c3c9bc;
  --dsw-alias-label-tertiary: #98a093;
  --dsw-alias-label-caption: #757e72;
  --dsw-alias-state-business-primary: #98c19f;
  --dsw-alias-state-business-tertiary: #263c30;
  --dsw-specific-input-major: rgba(17, 27, 22, 0.95);
  --dsw-specific-selector: rgba(37, 51, 43, 0.97);
  --dsw-specific-sidebar-fill: rgba(8, 15, 12, 0.99);
}

body[data-dsh-schierke-interface] [id='root'] {
  position: relative;
  z-index: 2;
  background: transparent;
}

body[data-dsh-schierke-interface] [data-skin-chrome='schierke-artwork-stage'] {
  position: fixed;
  inset: 0;
  z-index: 1;
  overflow: visible;
  contain: layout style;
  pointer-events: none;
}

body[data-dsh-schierke-interface] [data-skin-artwork] {
  position: absolute;
  right: clamp(18px, 2vw, 36px);
  bottom: clamp(12px, 1.6vh, 20px);
  width: auto;
  height: min(88vh, 920px);
  max-width: calc(100vw - var(--schierke-sidebar-width) - 24px);
  object-fit: contain;
  opacity: 0.96;
  filter: drop-shadow(-18px 22px 34px rgba(38, 31, 45, 0.32));
  transform-origin: right bottom;
  transition: opacity 420ms ease, transform 560ms cubic-bezier(0.22, 0.75, 0.2, 1), filter 420ms ease;
}

body[data-dsh-schierke-interface][data-ds-dark-theme] [data-skin-artwork] {
  filter: drop-shadow(-22px 24px 38px rgba(0, 0, 0, 0.5)) saturate(0.92);
}

body[data-dsh-schierke-interface] [data-schierke-sigil] {
  position: absolute;
  top: 48%;
  right: clamp(64px, 11vw, 220px);
  width: min(46vw, 680px);
  aspect-ratio: 1;
  border: 1px solid rgba(111, 148, 122, 0.34);
  border-radius: 50%;
  opacity: 0.62;
  background:
    conic-gradient(from 8deg, transparent 0 13deg, rgba(117, 99, 143, 0.58) 13deg 14deg, transparent 14deg 44deg, rgba(111, 148, 122, 0.58) 44deg 45deg, transparent 45deg 78deg),
    radial-gradient(circle, transparent 0 45%, rgba(111, 148, 122, 0.13) 45.2% 45.7%, transparent 46% 60%, rgba(117, 99, 143, 0.11) 60.2% 60.7%, transparent 61%);
  transform: translate(50%, -50%) rotate(-7deg);
  animation: schierke-sigil-turn 42s linear infinite;
}

body[data-dsh-schierke-interface] [data-schierke-motes] {
  position: absolute;
  top: 18%;
  right: min(28vw, 430px);
  width: 7px;
  height: 7px;
  border-radius: 50%;
  opacity: 0.74;
  background: var(--schierke-ether);
  box-shadow: 62px 98px 0 -2px rgba(184, 212, 178, 0.82), -34px 214px 0 -1px rgba(117, 99, 143, 0.65), 86px 348px 0 -2px rgba(184, 212, 178, 0.72);
  animation: schierke-motes-breathe 5.8s ease-in-out infinite alternate;
}

body[data-dsh-schierke-interface]:has(:is([data-phase='active'][data-chat-flow], [data-phase='active'] [data-chat-flow])) [data-skin-artwork] {
  opacity: 0.15;
  filter: saturate(0.58) drop-shadow(-10px 12px 20px rgba(16, 25, 20, 0.24));
  transform: translateX(18%) scale(0.94);
}

body[data-dsh-schierke-interface]:has(:is([data-phase='active'][data-chat-flow], [data-phase='active'] [data-chat-flow])) :is([data-schierke-sigil], [data-schierke-motes]) {
  opacity: 0.12;
}

body[data-dsh-schierke-interface] [data-skin-chrome='schierke-accent-rail'] {
  position: fixed;
  top: var(--schierke-titlebar-height, 0px);
  right: 0;
  left: var(--schierke-sidebar-width, 280px);
  z-index: 4;
  height: 4px;
  pointer-events: none;
  background: linear-gradient(90deg, #4b3d60 0 34px, #8ea995 34px 38%, rgba(184, 212, 178, 0.08) 74%, transparent);
  box-shadow: 0 2px 14px rgba(89, 121, 97, 0.22);
  transition: left 180ms ease;
}

body[data-dsh-schierke-interface] [data-skin-chrome='schierke-titlebar-brand'] {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 100%;
  padding-inline: 10px;
  color: #ecf0e7;
  font: 700 9px/1 ui-monospace, SFMono-Regular, Menlo, monospace;
  letter-spacing: 0.13em;
  pointer-events: none;
}

body[data-dsh-schierke-interface] [data-skin-chrome='schierke-titlebar-brand']::before {
  content: '✦';
  display: grid;
  place-items: center;
  width: 22px;
  height: 22px;
  border: 1px solid rgba(184, 212, 178, 0.72);
  border-radius: 50%;
  color: #d8e8d2;
  background: rgba(83, 67, 103, 0.72);
  font-size: 11px;
}

body[data-dsh-schierke-interface] :is([data-pane='sidebar'], [class*='sidebarCol']) {
  --dsw-alias-label-primary: #eff2e9;
  --dsw-alias-label-secondary: #c2c9bc;
  --dsw-alias-label-tertiary: #96a093;
  --dsw-alias-label-caption: #717c70;
  --dsw-alias-border-l1: rgba(184, 212, 178, 0.13);
  --dsw-alias-border-l2: rgba(184, 212, 178, 0.23);
  --dsw-alias-interactive-bg-hover: rgba(151, 191, 158, 0.1);
  --dsw-alias-interactive-bg-active: rgba(139, 116, 164, 0.22);
  position: relative;
  z-index: 6;
  color: #eff2e9;
  border-right: 1px solid rgba(142, 174, 147, 0.38);
  background: #101a15;
  box-shadow: 12px 0 38px rgba(8, 14, 11, 0.25), inset -2px 0 rgba(117, 99, 143, 0.14);
}

body[data-dsh-schierke-interface] :is([data-pane='sidebar'], [class*='sidebarCol']) > div {
  position: relative;
  overflow: hidden;
  background:
    radial-gradient(circle at 18% 12%, rgba(142, 178, 148, 0.16), transparent 24%),
    repeating-linear-gradient(135deg, transparent 0 31px, rgba(205, 220, 199, 0.025) 31px 32px),
    linear-gradient(180deg, #18261f, #0d1712 74%);
}

body[data-dsh-schierke-interface] :is([data-pane='sidebar'], [class*='sidebarCol']) > div::before {
  content: '☽  ✦  ☿';
  position: absolute;
  right: -14px;
  bottom: 98px;
  color: rgba(184, 212, 178, 0.055);
  font: 500 54px/1 Georgia, serif;
  letter-spacing: 0.16em;
  transform: rotate(-90deg);
  pointer-events: none;
}

body[data-dsh-schierke-interface] :is([data-pane='sidebar'], [class*='sidebarCol']) > div > * {
  position: relative;
  z-index: 1;
}

body[data-dsh-schierke-interface] button[class*='brand'] > svg {
  color: #dfe9d9;
  filter: drop-shadow(0 0 8px rgba(184, 212, 178, 0.18));
}

body[data-dsh-schierke-interface] button[class*='newSession'] {
  min-height: 40px;
  border: 1px solid rgba(193, 218, 186, 0.5);
  border-radius: 5px 15px 5px 15px;
  color: #f2f4ec;
  background: linear-gradient(145deg, #75638f, #4b3d60);
  box-shadow: 0 8px 20px rgba(27, 21, 35, 0.28), inset 0 1px rgba(255, 255, 255, 0.16);
  font-weight: 720;
}

body[data-dsh-schierke-interface] button[class*='newSession']:hover {
  background: linear-gradient(145deg, #8773a3, #5b4a70);
}

body[data-dsh-schierke-interface] [role='treeitem'][aria-selected='true'] {
  border-left: 2px solid var(--schierke-ether);
  background: linear-gradient(90deg, rgba(117, 99, 143, 0.26), rgba(111, 148, 122, 0.03));
}

body[data-dsh-schierke-interface] [role='treeitem'][aria-selected='true']::after {
  content: '';
  position: absolute;
  right: 8px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--schierke-ether);
  box-shadow: 0 0 9px rgba(184, 212, 178, 0.68);
}

body[data-dsh-schierke-interface] :is([data-pane='conversation'], [class*='centerCol']) {
  position: relative;
  z-index: 3;
  background: transparent;
}

body[data-dsh-schierke-interface] :is([data-pane='conversation'], [class*='centerCol']) header[class*='header'] {
  color: #eef1e8;
  border-bottom: 1px solid rgba(184, 212, 178, 0.24);
  background: linear-gradient(90deg, rgba(15, 27, 21, 0.95), rgba(49, 44, 60, 0.86) 62%, rgba(15, 27, 21, 0.86));
  box-shadow: 0 8px 26px rgba(16, 22, 18, 0.14);
  backdrop-filter: blur(16px) saturate(0.96);
}

body[data-dsh-schierke-interface] :is([data-pane='conversation'], [class*='centerCol']) header[class*='header'] :is(nav, span, button, a, div) {
  color: inherit;
}

body[data-dsh-schierke-interface] button[class*='tabActive'] {
  color: #f2f4ec;
  border-bottom-color: var(--schierke-ether);
}

body[data-dsh-schierke-interface] [data-phase='hero'] {
  --dsh-chat-content-width: clamp(540px, 43vw, 730px);
  --dsh-composer-card-max-width: calc(var(--dsh-chat-content-width) + 32px);
}

body[data-dsh-schierke-interface] [data-phase='hero'] [class*='headline'] {
  color: #40384b;
  font-family: Iowan Old Style, Palatino Linotype, Book Antiqua, Georgia, serif;
  font-weight: 680;
  letter-spacing: -0.035em;
  text-shadow: 0 1px rgba(255, 255, 255, 0.66), 0 10px 30px rgba(64, 56, 75, 0.13);
}

body[data-dsh-schierke-interface][data-ds-dark-theme] [data-phase='hero'] [class*='headline'] {
  color: #ece8f3;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.68), 0 0 24px rgba(145, 119, 174, 0.16);
}

body[data-dsh-schierke-interface] [data-composer-card] {
  isolation: isolate;
  overflow: visible;
  border: 1px solid rgba(101, 125, 103, 0.54);
  border-radius: 6px 22px 6px 22px;
  background: linear-gradient(118deg, rgba(255, 255, 255, 0.42), transparent 30%), var(--dsw-specific-input-major);
  box-shadow: var(--schierke-shadow), inset 0 1px rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(18px) saturate(0.96);
}

body[data-dsh-schierke-interface] [data-composer-card]::before {
  content: 'GRIMOIRE · ASK';
  position: absolute;
  top: -8px;
  left: 20px;
  padding: 4px 10px;
  border: 1px solid #aebfa7;
  color: #f3f4ee;
  background: #594a6c;
  font: 800 9px/1 ui-monospace, SFMono-Regular, Menlo, monospace;
  letter-spacing: 0.12em;
}

body[data-dsh-schierke-interface] [data-composer-card]::after {
  content: '';
  position: absolute;
  inset: -1px;
  z-index: -1;
  border-radius: inherit;
  pointer-events: none;
  background:
    linear-gradient(90deg, var(--schierke-violet) 0 42px, transparent 42px calc(100% - 56px), var(--schierke-sage) calc(100% - 56px)) top / 100% 2px no-repeat,
    linear-gradient(90deg, var(--schierke-sage) 0 56px, transparent 56px calc(100% - 42px), var(--schierke-violet) calc(100% - 42px)) bottom / 100% 2px no-repeat;
}

body[data-dsh-schierke-interface] [data-phase='hero'] [data-composer-card] {
  min-height: 144px;
  background: linear-gradient(118deg, rgba(255, 255, 255, 0.56), transparent 34%), rgba(246, 242, 230, 0.78);
}

body[data-dsh-schierke-interface][data-ds-dark-theme] [data-phase='hero'] [data-composer-card] {
  background: linear-gradient(118deg, rgba(146, 119, 174, 0.07), transparent 34%), rgba(15, 25, 20, 0.82);
}

body[data-dsh-schierke-interface] [data-input-mirror] {
  min-height: 0;
  transition: min-height 460ms cubic-bezier(0.22, 0.78, 0.2, 1);
}

body[data-dsh-schierke-interface] [data-phase='hero'] [data-input-mirror] {
  min-height: 72px;
}

body[data-dsh-schierke-interface] [data-composer-card] button[class*='primary'] {
  color: #fff;
  background: linear-gradient(145deg, #7f6b99, #554668);
  box-shadow: 0 5px 15px rgba(64, 48, 78, 0.25);
}

body[data-dsh-schierke-interface] [data-composer-card] button:hover:not(:disabled) {
  border-color: rgba(111, 148, 122, 0.68);
  color: #4f6f57;
}

body[data-dsh-schierke-interface][data-ds-dark-theme] [data-composer-card] button:hover:not(:disabled) {
  color: #b8d4b2;
}

body[data-dsh-schierke-interface] [data-composer-card] button[class*='primary']:hover:not(:disabled) {
  color: #fff;
  background: linear-gradient(145deg, #9079ad, #645276);
}

body[data-dsh-schierke-interface] :is(button, [role='button']):disabled {
  opacity: 0.43;
  filter: saturate(0.42);
  box-shadow: none;
}

body[data-dsh-schierke-interface] :is([class*='ConversationRoot'], [data-conversation-scroll]) {
  background: transparent;
}

body[data-dsh-schierke-interface] [class*='userRow'] [class*='bubble'] {
  border: 1px solid rgba(106, 132, 108, 0.34);
  border-radius: 16px 16px 4px 16px;
  background: rgba(229, 235, 219, 0.93);
  box-shadow: 0 8px 24px rgba(56, 74, 60, 0.09);
}

body[data-dsh-schierke-interface][data-ds-dark-theme] [class*='userRow'] [class*='bubble'] {
  color: #edf1e8;
  background: rgba(40, 61, 48, 0.9);
}

body[data-dsh-schierke-interface] :is([class*='thinking'], [class*='reasoning']) {
  border-left-color: var(--schierke-violet);
  background: color-mix(in srgb, var(--schierke-panel) 90%, var(--schierke-violet) 10%);
}

body[data-dsh-schierke-interface] :is(pre, [data-terminal]) {
  --dsw-alias-markdown-code-block: rgba(10, 17, 14, 0.98);
  --dsw-alias-label-primary: #edf2e8;
  --dsw-alias-label-secondary: #bcc8b9;
  --dsw-alias-label-tertiary: #8e9b8a;
}

body[data-dsh-schierke-interface] [data-terminal] {
  color: #edf2e8;
  border: 1px solid rgba(142, 181, 148, 0.28);
  background: #0b1510;
  box-shadow: inset 3px 0 var(--schierke-violet);
}

body[data-dsh-schierke-interface] :is([role='dialog'], [role='menu'], [role='listbox']) {
  border-color: rgba(101, 132, 105, 0.36);
  box-shadow: var(--schierke-shadow);
  backdrop-filter: blur(16px) saturate(0.94);
}

body[data-dsh-schierke-interface] :is([role='menuitem'], [role='option']):is(:hover, [aria-selected='true']) {
  background: rgba(111, 148, 122, 0.13);
}

body[data-dsh-schierke-interface] [data-slot='sidebar.settings'] [role='presentation'] > [role='dialog'][aria-modal='true'] {
  --dsw-alias-bg-base: #eee9dc;
  --dsw-alias-bg-layer-1: rgba(248, 245, 235, 0.99);
  --dsw-alias-bg-layer-2: rgba(237, 232, 217, 0.98);
  --dsw-alias-bg-layer-3: rgba(224, 217, 201, 0.98);
  --dsw-alias-bg-overlay: rgba(250, 247, 239, 0.99);
  --dsw-alias-label-primary: #2b2b27;
  --dsw-alias-label-primary-bluish: #40384b;
  --dsw-alias-label-secondary: #625f57;
  --dsw-alias-label-tertiary: #807c70;
  --dsw-alias-label-caption: #9a9588;
  --dsw-alias-brand-text: #4b3d60;
  --dsw-alias-button-elevated-fill: #faf7ef;
  --dsw-alias-button-floating-fill: #fbf8f0;
  --dsw-alias-interactive-bg-active: rgba(117, 99, 143, 0.15);
  --dsw-alias-interactive-bg-hover: rgba(111, 148, 122, 0.09);
  --dsw-specific-selector: rgba(231, 228, 214, 0.98);
  color: var(--dsw-alias-label-primary);
  background: rgba(242, 238, 226, 0.98);
}

body[data-dsh-schierke-interface][data-ds-dark-theme] [data-slot='sidebar.settings'] [role='presentation'] > [role='dialog'][aria-modal='true'] {
  --dsw-alias-bg-base: #0e1712;
  --dsw-alias-bg-layer-1: rgba(19, 29, 24, 0.99);
  --dsw-alias-bg-layer-2: rgba(27, 39, 33, 0.99);
  --dsw-alias-bg-layer-3: rgba(38, 51, 44, 0.99);
  --dsw-alias-bg-overlay: rgba(14, 22, 18, 0.99);
  --dsw-alias-label-primary: #f0f2e9;
  --dsw-alias-label-primary-bluish: #eee8f4;
  --dsw-alias-label-secondary: #c3c9bc;
  --dsw-alias-label-tertiary: #98a093;
  --dsw-alias-label-caption: #757e72;
  --dsw-alias-brand-text: #d4c4e7;
  --dsw-alias-button-elevated-fill: rgba(33, 46, 39, 0.97);
  --dsw-alias-button-floating-fill: rgba(38, 52, 44, 0.98);
  --dsw-specific-selector: rgba(37, 51, 43, 0.98);
  color: var(--dsw-alias-label-primary);
  background: rgba(14, 23, 18, 0.98);
}

body[data-dsh-schierke-interface] :is(button, [role='button'], [role='tab'], [role='treeitem'], input, textarea, select):focus-visible {
  outline: 2px solid var(--schierke-violet);
  outline-offset: 2px;
}

body[data-dsh-schierke-interface] ::selection {
  color: #fff;
  background: rgba(92, 73, 112, 0.84);
}

body[data-dsh-schierke-interface] ::-webkit-scrollbar-thumb {
  border: 3px solid transparent;
  border-radius: 8px;
  background: linear-gradient(#65846c, #65846c) padding-box;
}

@keyframes schierke-sigil-turn {
  to { transform: translate(50%, -50%) rotate(353deg); }
}

@keyframes schierke-motes-breathe {
  to { opacity: 0.36; transform: translateY(-10px); }
}

@media (max-width: 1180px) {
  body[data-dsh-schierke-interface] [data-skin-artwork] {
    right: clamp(12px, 2vw, 24px);
    bottom: 12px;
    height: 82vh;
    opacity: 0.32;
  }

  body[data-dsh-schierke-interface] [data-schierke-sigil] {
    right: 42px;
    width: 560px;
  }

  body[data-dsh-schierke-interface]:has(:is([data-phase='active'][data-chat-flow], [data-phase='active'] [data-chat-flow])) [data-skin-artwork] {
    opacity: 0.1;
  }
}

@media (max-width: 880px) {
  body[data-dsh-schierke-interface] [data-skin-artwork] {
    right: 10px;
    bottom: 12px;
    height: min(72vh, 720px);
    max-width: calc(100vw - 20px);
    opacity: 0.09;
    transform: none;
  }

  body[data-dsh-schierke-interface] :is([data-schierke-sigil], [data-schierke-motes]) {
    opacity: 0.1;
  }

  body[data-dsh-schierke-interface] [data-phase='hero'] {
    --dsh-chat-content-width: min(90vw, 680px);
  }

  body[data-dsh-schierke-interface]:has(:is([data-phase='active'][data-chat-flow], [data-phase='active'] [data-chat-flow])) [data-skin-artwork] {
    opacity: 0.08;
  }
}

@media (max-width: 620px) {
  body[data-dsh-schierke-interface] [data-skin-artwork] {
    right: 12px;
    bottom: 12px;
    height: min(64vh, 650px);
    max-width: calc(100vw - 24px);
    opacity: 0.055;
  }

  body[data-dsh-schierke-interface] [data-skin-chrome='schierke-accent-rail'] {
    left: 0;
  }

  body[data-dsh-schierke-interface] [data-composer-card] {
    border-radius: 6px 18px 6px 18px;
  }

  body[data-dsh-schierke-interface] [data-composer-card]::before {
    left: 13px;
  }

  body[data-dsh-schierke-interface]:has(:is([data-phase='active'][data-chat-flow], [data-phase='active'] [data-chat-flow])) [data-skin-artwork] {
    opacity: 0.05;
  }
}

@media (prefers-reduced-motion: reduce) {
  body[data-dsh-schierke-interface] [data-skin-artwork],
  body[data-dsh-schierke-interface] [data-schierke-sigil],
  body[data-dsh-schierke-interface] [data-schierke-motes],
  body[data-dsh-schierke-interface] [data-skin-chrome='schierke-accent-rail'],
  body[data-dsh-schierke-interface] [data-input-mirror] {
    transition: none;
    animation: none;
  }
}
`
