export const SKIN_CSS = String.raw`
body[data-dsh-schierke-interface] {
  color: #302d27;
  background:
    radial-gradient(circle at 84% 22%, rgba(111, 148, 122, 0.2), transparent 28%),
    linear-gradient(135deg, #c7c2ad, #ded8c5 48%, #b9b49f);
  background-attachment: fixed;
  --schierke-violet: #665478;
  --schierke-violet-deep: #453650;
  --schierke-sage: #6f8e72;
  --schierke-sage-deep: #3e5946;
  --schierke-ether: #a9caa4;
  --schierke-brass: #9b7a45;
  --schierke-parchment: #f0ead8;
  --schierke-parchment-deep: #e4dcc5;
  --schierke-ink: #302d27;
  --schierke-rule: rgba(78, 68, 54, 0.16);
  --schierke-book-cloth: #dce1d3;
  --schierke-sidebar-width: 280px;
  --schierke-titlebar-height: 0px;
  --schierke-shadow: 0 28px 62px rgba(58, 50, 39, 0.18), 0 4px 14px rgba(58, 50, 39, 0.12);

  --dsw-alias-bg-base: transparent;
  --dsw-alias-bg-layer-1: rgba(246, 241, 226, 0.96);
  --dsw-alias-bg-layer-2: rgba(234, 226, 207, 0.97);
  --dsw-alias-bg-layer-3: rgba(218, 207, 184, 0.98);
  --dsw-alias-bg-overlay: rgba(246, 241, 226, 0.99);
  --dsw-alias-border-l1: rgba(69, 54, 80, 0.13);
  --dsw-alias-border-l2-darkmode-thin: rgba(69, 54, 80, 0.22);
  --dsw-alias-border-l2: rgba(69, 54, 80, 0.28);
  --dsw-alias-border-l3: rgba(89, 122, 95, 0.66);
  --dsw-alias-brand-primary: #58745f;
  --dsw-alias-brand-text: #4e3f5c;
  --dsw-alias-button-elevated-fill: #f4eedf;
  --dsw-alias-button-floating-fill: #f6f0e2;
  --dsw-alias-button-floating-hover: #e4dbc3;
  --dsw-alias-button-info-fill: #5f7d66;
  --dsw-alias-button-info-hover: #496450;
  --dsw-alias-interactive-bg-active: rgba(102, 84, 120, 0.16);
  --dsw-alias-interactive-bg-hover: rgba(88, 116, 95, 0.1);
  --dsw-alias-interactive-bg-hover-solid: #e2e3d5;
  --dsw-alias-label-primary: #302d27;
  --dsw-alias-label-primary-bluish: #443b4c;
  --dsw-alias-label-secondary: #625c50;
  --dsw-alias-label-tertiary: #80786a;
  --dsw-alias-label-caption: #9b9282;
  --dsw-alias-state-business-primary: #6f8e72;
  --dsw-alias-state-business-tertiary: #d8e4d5;
  --dsw-shadow-lv2: var(--schierke-shadow);
  --dsw-specific-input-major: rgba(246, 240, 224, 0.97);
  --dsw-specific-selector: rgba(229, 223, 204, 0.98);
  --dsw-specific-sidebar-fill: #dce1d3;
}

body[data-dsh-schierke-interface][data-ds-dark-theme] {
  color: #e9eadf;
  background:
    radial-gradient(circle at 84% 22%, rgba(103, 142, 111, 0.14), transparent 30%),
    linear-gradient(135deg, #07100b, #101a13 48%, #090f0b);
  --schierke-parchment: #17231b;
  --schierke-parchment-deep: #111b15;
  --schierke-ink: #ececdf;
  --schierke-rule: rgba(196, 211, 188, 0.11);
  --schierke-book-cloth: #122019;
  --schierke-shadow: 0 30px 70px rgba(0, 0, 0, 0.5), 0 4px 16px rgba(0, 0, 0, 0.34);

  --dsw-alias-bg-base: transparent;
  --dsw-alias-bg-layer-1: rgba(24, 36, 28, 0.97);
  --dsw-alias-bg-layer-2: rgba(32, 46, 37, 0.98);
  --dsw-alias-bg-layer-3: rgba(43, 58, 48, 0.98);
  --dsw-alias-bg-overlay: rgba(17, 27, 21, 0.99);
  --dsw-alias-border-l1: rgba(177, 202, 178, 0.14);
  --dsw-alias-border-l2-darkmode-thin: rgba(177, 202, 178, 0.22);
  --dsw-alias-border-l2: rgba(177, 202, 178, 0.29);
  --dsw-alias-border-l3: rgba(143, 180, 148, 0.72);
  --dsw-alias-brand-primary: #93b797;
  --dsw-alias-brand-text: #d6c8e0;
  --dsw-alias-button-elevated-fill: #26362c;
  --dsw-alias-button-floating-fill: #2b3c31;
  --dsw-alias-button-floating-hover: #354c3e;
  --dsw-alias-button-info-fill: #73977a;
  --dsw-alias-button-info-hover: #8bad91;
  --dsw-alias-interactive-bg-active: rgba(144, 119, 167, 0.22);
  --dsw-alias-interactive-bg-hover: rgba(148, 185, 153, 0.11);
  --dsw-alias-interactive-bg-hover-solid: #293d32;
  --dsw-alias-label-primary: #ececdf;
  --dsw-alias-label-primary-bluish: #e8e2ed;
  --dsw-alias-label-secondary: #c0c5b9;
  --dsw-alias-label-tertiary: #969d91;
  --dsw-alias-label-caption: #747c71;
  --dsw-alias-state-business-primary: #96b99a;
  --dsw-alias-state-business-tertiary: #263b2f;
  --dsw-specific-input-major: rgba(22, 34, 26, 0.98);
  --dsw-specific-selector: rgba(37, 51, 42, 0.98);
  --dsw-specific-sidebar-fill: #122019;
}

body[data-dsh-schierke-interface] [id='root'] {
  position: relative;
  z-index: 2;
  background: transparent;
}

body[data-dsh-schierke-interface] [data-skin-chrome='schierke-folio-stage'] {
  position: fixed;
  top: var(--schierke-titlebar-height, 0px);
  right: 0;
  bottom: 0;
  left: var(--schierke-sidebar-width, 280px);
  z-index: 1;
  overflow: hidden;
  contain: layout style paint;
  pointer-events: none;
  transition: left 180ms ease;
}

body[data-dsh-schierke-interface] [data-schierke-spread] {
  position: absolute;
  inset: 16px 18px 18px;
  border: 1px solid rgba(81, 66, 52, 0.24);
  clip-path: polygon(0.5% 1.2%, 48.8% 0, 50% 0.8%, 51.2% 0, 99.5% 1.2%, 100% 98.6%, 51% 100%, 50% 99.2%, 49% 100%, 0 98.6%);
  background:
    linear-gradient(90deg, transparent 0 7.2%, rgba(120, 94, 62, 0.11) 7.2% 7.35%, transparent 7.35% 92.65%, rgba(120, 94, 62, 0.1) 92.65% 92.8%, transparent 92.8%),
    repeating-linear-gradient(0deg, transparent 0 31px, var(--schierke-rule) 31px 32px),
    linear-gradient(90deg, #f2ecda 0 49.5%, #e9e1cb 49.5% 50.5%, #f5efdf 50.5% 100%);
  box-shadow: var(--schierke-shadow), inset 16px 0 28px rgba(94, 75, 48, 0.06), inset -16px 0 28px rgba(94, 75, 48, 0.06);
}

body[data-dsh-schierke-interface][data-ds-dark-theme] [data-schierke-spread] {
  border-color: rgba(165, 188, 164, 0.18);
  background:
    linear-gradient(90deg, transparent 0 7.2%, rgba(164, 184, 155, 0.08) 7.2% 7.35%, transparent 7.35% 92.65%, rgba(164, 184, 155, 0.08) 92.65% 92.8%, transparent 92.8%),
    repeating-linear-gradient(0deg, transparent 0 31px, var(--schierke-rule) 31px 32px),
    linear-gradient(90deg, #17231b 0 49.5%, #0d1711 49.5% 50.5%, #1a281f 50.5% 100%);
  box-shadow: var(--schierke-shadow), inset 16px 0 30px rgba(0, 0, 0, 0.14), inset -16px 0 30px rgba(0, 0, 0, 0.14);
}

body[data-dsh-schierke-interface] [data-schierke-gutter] {
  position: absolute;
  top: 16px;
  bottom: 18px;
  left: calc(50% - 17px);
  width: 34px;
  opacity: 0.76;
  background: linear-gradient(90deg, transparent, rgba(69, 54, 44, 0.18) 38%, rgba(255, 255, 255, 0.28) 50%, rgba(69, 54, 44, 0.2) 62%, transparent);
  box-shadow: inset 1px 0 rgba(255, 255, 255, 0.24), inset -1px 0 rgba(56, 43, 35, 0.12);
}

body[data-dsh-schierke-interface][data-ds-dark-theme] [data-schierke-gutter] {
  opacity: 0.9;
  background: linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.46) 40%, rgba(183, 204, 177, 0.08) 50%, rgba(0, 0, 0, 0.48) 60%, transparent);
}

body[data-dsh-schierke-interface] [data-schierke-marginalia] {
  position: absolute;
  top: 50%;
  left: 27px;
  color: rgba(69, 54, 80, 0.38);
  font: 700 9px/1 ui-monospace, SFMono-Regular, Menlo, monospace;
  letter-spacing: 0.22em;
  writing-mode: vertical-rl;
  transform: translateY(-50%) rotate(180deg);
}

body[data-dsh-schierke-interface][data-ds-dark-theme] [data-schierke-marginalia] {
  color: rgba(178, 202, 177, 0.34);
}

body[data-dsh-schierke-interface] [data-schierke-bookmark] {
  position: absolute;
  top: 16px;
  right: clamp(34px, 4vw, 74px);
  width: 88px;
  padding: 12px 8px 18px;
  clip-path: polygon(0 0, 100% 0, 100% 84%, 50% 100%, 0 84%);
  color: #f2eee3;
  background: linear-gradient(90deg, #51405f, #6c587d 54%, #493955);
  box-shadow: 0 7px 18px rgba(49, 38, 58, 0.24);
  font: 750 9px/1 ui-monospace, SFMono-Regular, Menlo, monospace;
  letter-spacing: 0.12em;
  text-align: center;
  animation: schierke-bookmark-breathe 6s ease-in-out infinite;
}

body[data-dsh-schierke-interface] [data-schierke-plate] {
  position: absolute;
  top: clamp(68px, 8vh, 104px);
  right: clamp(26px, 3vw, 58px);
  bottom: clamp(30px, 4vh, 52px);
  width: min(32vw, 480px);
  min-width: 300px;
  margin: 0;
  padding: 18px 18px 42px;
  border: 1px solid rgba(80, 61, 48, 0.38);
  outline: 4px double rgba(105, 82, 60, 0.2);
  outline-offset: -9px;
  clip-path: polygon(0 0, calc(100% - 18px) 0, 100% 18px, 100% 100%, 14px 100%, 0 calc(100% - 14px));
  background:
    linear-gradient(135deg, rgba(255, 255, 255, 0.5), transparent 32%),
    repeating-linear-gradient(0deg, transparent 0 27px, rgba(86, 72, 55, 0.08) 27px 28px),
    #e9e0c9;
  box-shadow: 0 20px 42px rgba(52, 42, 34, 0.2), inset 0 0 34px rgba(113, 88, 57, 0.08);
  transform-origin: right center;
  transition: width 480ms cubic-bezier(0.22, 0.75, 0.2, 1), opacity 360ms ease, filter 360ms ease, transform 480ms ease;
}

body[data-dsh-schierke-interface][data-ds-dark-theme] [data-schierke-plate] {
  border-color: rgba(159, 187, 158, 0.28);
  outline-color: rgba(158, 184, 157, 0.14);
  background:
    linear-gradient(135deg, rgba(172, 203, 174, 0.05), transparent 32%),
    repeating-linear-gradient(0deg, transparent 0 27px, rgba(180, 204, 178, 0.055) 27px 28px),
    #132019;
  box-shadow: 0 24px 48px rgba(0, 0, 0, 0.46), inset 0 0 34px rgba(0, 0, 0, 0.18);
}

body[data-dsh-schierke-interface] [data-skin-artwork] {
  display: block;
  width: 100%;
  height: calc(100% - 4px);
  object-fit: contain;
  object-position: center bottom;
  filter: drop-shadow(-8px 13px 18px rgba(48, 38, 54, 0.23));
}

body[data-dsh-schierke-interface][data-ds-dark-theme] [data-skin-artwork] {
  filter: drop-shadow(-9px 14px 22px rgba(0, 0, 0, 0.48)) saturate(0.9);
}

body[data-dsh-schierke-interface] [data-schierke-plate-caption] {
  position: absolute;
  right: 18px;
  bottom: 14px;
  left: 18px;
  padding-top: 8px;
  border-top: 1px solid rgba(78, 62, 49, 0.26);
  color: rgba(69, 54, 80, 0.72);
  font: 750 9px/1 ui-monospace, SFMono-Regular, Menlo, monospace;
  letter-spacing: 0.12em;
  text-align: right;
}

body[data-dsh-schierke-interface][data-ds-dark-theme] [data-schierke-plate-caption] {
  border-top-color: rgba(178, 201, 176, 0.18);
  color: rgba(191, 207, 186, 0.68);
}

body[data-dsh-schierke-interface][data-schierke-no-art] [data-schierke-plate] {
  display: none;
}

body[data-dsh-schierke-interface]:has(:is([data-phase='active'][data-chat-flow], [data-phase='active'] [data-chat-flow])) [data-schierke-plate] {
  width: min(18vw, 272px);
  min-width: 210px;
  opacity: 0.17;
  filter: saturate(0.62);
  transform: scale(0.96) rotate(0.35deg);
}

body[data-dsh-schierke-interface]:has(:is([data-phase='active'][data-chat-flow], [data-phase='active'] [data-chat-flow])) [data-schierke-bookmark] {
  opacity: 0.58;
}

body[data-dsh-schierke-interface] [data-skin-chrome='schierke-titlebar-brand'] {
  display: inline-flex;
  align-items: center;
  height: 100%;
  padding-inline: 12px 16px;
  border-right: 1px solid rgba(178, 202, 177, 0.22);
  color: #e8ede2;
  font: 750 9px/1 ui-monospace, SFMono-Regular, Menlo, monospace;
  letter-spacing: 0.13em;
  pointer-events: none;
}

body[data-dsh-schierke-interface] [data-skin-chrome='schierke-titlebar-brand']::before {
  content: 'VII';
  margin-right: 9px;
  padding: 4px 6px;
  border: 1px solid rgba(190, 208, 184, 0.46);
  color: #dbe8d7;
  background: #51405f;
  font-family: Georgia, serif;
}

body[data-dsh-schierke-interface] :is([data-pane='sidebar'], [class*='sidebarCol']) {
  --dsw-alias-label-primary: #302d27;
  --dsw-alias-label-secondary: #5f5b50;
  --dsw-alias-label-tertiary: #7c786c;
  --dsw-alias-label-caption: #969184;
  --dsw-alias-border-l1: rgba(69, 54, 80, 0.14);
  --dsw-alias-border-l2: rgba(69, 54, 80, 0.23);
  --dsw-alias-interactive-bg-hover: rgba(86, 112, 90, 0.1);
  --dsw-alias-interactive-bg-active: rgba(102, 84, 120, 0.17);
  position: relative;
  z-index: 6;
  color: #302d27;
  border-right: 5px double rgba(75, 61, 84, 0.28);
  background: #dce1d3;
  box-shadow: 10px 0 26px rgba(50, 44, 36, 0.14), inset -10px 0 22px rgba(65, 55, 45, 0.06);
}

body[data-dsh-schierke-interface][data-ds-dark-theme] :is([data-pane='sidebar'], [class*='sidebarCol']) {
  --dsw-alias-label-primary: #e9eadf;
  --dsw-alias-label-secondary: #bfc6b9;
  --dsw-alias-label-tertiary: #969e92;
  --dsw-alias-label-caption: #727c70;
  --dsw-alias-border-l1: rgba(177, 202, 178, 0.13);
  --dsw-alias-border-l2: rgba(177, 202, 178, 0.23);
  --dsw-alias-interactive-bg-hover: rgba(148, 185, 153, 0.1);
  --dsw-alias-interactive-bg-active: rgba(139, 116, 164, 0.22);
  color: #e9eadf;
  border-right-color: rgba(137, 166, 140, 0.32);
  background: #122019;
  box-shadow: 10px 0 28px rgba(0, 0, 0, 0.3), inset -10px 0 22px rgba(0, 0, 0, 0.16);
}

body[data-dsh-schierke-interface] :is([data-pane='sidebar'], [class*='sidebarCol']) > div {
  position: relative;
  overflow: hidden;
  background:
    repeating-linear-gradient(90deg, transparent 0 4px, rgba(61, 75, 59, 0.025) 4px 5px),
    linear-gradient(180deg, rgba(255, 255, 255, 0.22), transparent 22%),
    #dce1d3;
}

body[data-dsh-schierke-interface][data-ds-dark-theme] :is([data-pane='sidebar'], [class*='sidebarCol']) > div {
  background:
    repeating-linear-gradient(90deg, transparent 0 4px, rgba(189, 208, 184, 0.02) 4px 5px),
    linear-gradient(180deg, rgba(166, 197, 168, 0.05), transparent 22%),
    #122019;
}

body[data-dsh-schierke-interface] :is([data-pane='sidebar'], [class*='sidebarCol']) > div::before {
  content: 'INDEX  ·  CODEX SCHIERKE  ·  VII';
  position: absolute;
  right: -34px;
  bottom: 152px;
  color: rgba(69, 54, 80, 0.12);
  font: 750 9px/1 ui-monospace, SFMono-Regular, Menlo, monospace;
  letter-spacing: 0.16em;
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  pointer-events: none;
}

body[data-dsh-schierke-interface] :is([data-pane='sidebar'], [class*='sidebarCol']) > div > * {
  position: relative;
  z-index: 1;
}

body[data-dsh-schierke-interface] button[class*='brand'] > svg {
  color: var(--schierke-violet-deep);
  filter: none;
}

body[data-dsh-schierke-interface][data-ds-dark-theme] button[class*='brand'] > svg {
  color: #dfe8d8;
}

body[data-dsh-schierke-interface] button[class*='newSession'] {
  min-height: 42px;
  border: 1px solid rgba(185, 203, 178, 0.44);
  border-radius: 0;
  clip-path: polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px));
  color: #f2efe7;
  background: linear-gradient(90deg, #4b3b58, #6a5779 72%, #554361);
  box-shadow: 0 8px 18px rgba(39, 30, 46, 0.24), inset 0 1px rgba(255, 255, 255, 0.12);
  font-weight: 720;
}

body[data-dsh-schierke-interface] button[class*='newSession']:hover {
  background: linear-gradient(90deg, #584666, #78658a 72%, #624f70);
}

body[data-dsh-schierke-interface] [role='treeitem'] {
  border-left: 3px solid transparent;
  transition: border-color 160ms ease, background 160ms ease, transform 160ms ease;
}

body[data-dsh-schierke-interface] [role='treeitem'][aria-selected='true'] {
  border-left-color: var(--schierke-violet);
  clip-path: polygon(0 0, calc(100% - 13px) 0, 100% 50%, calc(100% - 13px) 100%, 0 100%);
  background: linear-gradient(90deg, rgba(102, 84, 120, 0.22), rgba(102, 84, 120, 0.05));
  transform: translateX(3px);
}

body[data-dsh-schierke-interface] [role='treeitem'][aria-selected='true']::after {
  content: 'CH.';
  position: absolute;
  right: 16px;
  color: var(--schierke-sage-deep);
  font: 750 8px/1 ui-monospace, SFMono-Regular, Menlo, monospace;
  letter-spacing: 0.08em;
}

body[data-dsh-schierke-interface][data-ds-dark-theme] [role='treeitem'][aria-selected='true']::after {
  color: var(--schierke-ether);
}

body[data-dsh-schierke-interface] :is([data-pane='conversation'], [class*='centerCol']) {
  position: relative;
  z-index: 3;
  background: transparent;
}

body[data-dsh-schierke-interface] :is([data-pane='conversation'], [class*='centerCol']) header[class*='header'] {
  color: #40384a;
  border-bottom: 3px double rgba(85, 69, 58, 0.28);
  background: rgba(232, 225, 205, 0.94);
  box-shadow: 0 7px 16px rgba(55, 47, 38, 0.08);
  backdrop-filter: none;
}

body[data-dsh-schierke-interface][data-ds-dark-theme] :is([data-pane='conversation'], [class*='centerCol']) header[class*='header'] {
  color: #e8e9df;
  border-bottom-color: rgba(172, 196, 170, 0.2);
  background: rgba(14, 24, 18, 0.95);
  box-shadow: 0 7px 18px rgba(0, 0, 0, 0.22);
}

body[data-dsh-schierke-interface] :is([data-pane='conversation'], [class*='centerCol']) header[class*='header'] :is(nav, span, button, a, div) {
  color: inherit;
}

body[data-dsh-schierke-interface] button[class*='tabActive'] {
  position: relative;
  color: var(--schierke-violet-deep);
  border-bottom-color: transparent;
  background: color-mix(in srgb, var(--schierke-parchment) 86%, transparent);
}

body[data-dsh-schierke-interface][data-ds-dark-theme] button[class*='tabActive'] {
  color: #d9cde2;
}

body[data-dsh-schierke-interface] button[class*='tabActive']::after {
  content: '';
  position: absolute;
  right: 0;
  bottom: -3px;
  left: 0;
  height: 3px;
  background: var(--schierke-violet);
}

body[data-dsh-schierke-interface] [data-phase='hero'] {
  --dsh-chat-content-width: clamp(500px, 41vw, 680px);
  --dsh-composer-card-max-width: calc(var(--dsh-chat-content-width) + 24px);
}

body[data-dsh-schierke-interface] [data-phase='hero'] [class*='headline'] {
  color: #403746;
  font-family: Iowan Old Style, Palatino Linotype, Book Antiqua, Georgia, serif;
  font-weight: 650;
  letter-spacing: -0.035em;
  text-shadow: 0 1px rgba(255, 255, 255, 0.58), 0 9px 24px rgba(61, 49, 65, 0.1);
}

body[data-dsh-schierke-interface][data-ds-dark-theme] [data-phase='hero'] [class*='headline'] {
  color: #e9e3ed;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.62);
}

body[data-dsh-schierke-interface] [data-composer-card] {
  overflow: visible;
  border: 1px solid rgba(91, 73, 57, 0.38);
  border-left: 30px solid rgba(102, 84, 120, 0.16);
  border-radius: 0;
  background:
    linear-gradient(90deg, transparent 0 22px, rgba(121, 88, 73, 0.18) 22px 23px, transparent 23px),
    repeating-linear-gradient(0deg, transparent 0 31px, rgba(82, 71, 56, 0.11) 31px 32px),
    var(--dsw-specific-input-major);
  box-shadow: 0 16px 34px rgba(53, 44, 34, 0.16), 0 3px 8px rgba(53, 44, 34, 0.08);
  backdrop-filter: none;
}

body[data-dsh-schierke-interface] [data-composer-card]::after {
  content: 'FOL. VII / ①';
  position: absolute;
  right: 18px;
  bottom: 8px;
  color: rgba(69, 54, 80, 0.54);
  font: 700 8px/1 ui-monospace, SFMono-Regular, Menlo, monospace;
  letter-spacing: 0.12em;
  pointer-events: none;
}

body[data-dsh-schierke-interface][data-ds-dark-theme] [data-composer-card]::after {
  color: rgba(190, 205, 185, 0.48);
}

body[data-dsh-schierke-interface] [data-phase='hero'] [data-composer-card] {
  min-height: 152px;
}

body[data-dsh-schierke-interface] [data-input-mirror] {
  min-height: 0;
  transition: min-height 420ms cubic-bezier(0.22, 0.78, 0.2, 1);
}

body[data-dsh-schierke-interface] [data-phase='hero'] [data-input-mirror] {
  min-height: 76px;
}

body[data-dsh-schierke-interface] [data-composer-card] button[class*='primary'] {
  border-radius: 0;
  clip-path: polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px));
  color: #fff;
  background: linear-gradient(135deg, #6c587d, #493955);
  box-shadow: 0 5px 14px rgba(56, 42, 65, 0.24);
}

body[data-dsh-schierke-interface] [data-composer-card] button:hover:not(:disabled) {
  border-color: rgba(95, 125, 99, 0.64);
  color: #48614e;
}

body[data-dsh-schierke-interface][data-ds-dark-theme] [data-composer-card] button:hover:not(:disabled) {
  color: #b8d0b4;
}

body[data-dsh-schierke-interface] [data-composer-card] button[class*='primary']:hover:not(:disabled) {
  color: #fff;
  background: linear-gradient(135deg, #7b678c, #584568);
}

body[data-dsh-schierke-interface] :is(button, [role='button']):disabled {
  opacity: 0.43;
  filter: saturate(0.38);
  box-shadow: none;
}

body[data-dsh-schierke-interface] :is([class*='ConversationRoot'], [data-conversation-scroll]) {
  background: transparent;
}

body[data-dsh-schierke-interface] [class*='userRow'] [class*='bubble'] {
  position: relative;
  border: 1px solid rgba(105, 89, 67, 0.28);
  border-left: 4px solid var(--schierke-sage);
  border-radius: 0;
  clip-path: polygon(0 0, calc(100% - 9px) 0, 100% 9px, 100% 100%, 0 100%);
  background: rgba(232, 225, 206, 0.96);
  box-shadow: 0 8px 18px rgba(56, 47, 36, 0.09);
  transform: rotate(-0.2deg);
}

body[data-dsh-schierke-interface][data-ds-dark-theme] [class*='userRow'] [class*='bubble'] {
  color: #e9ece2;
  background: rgba(39, 56, 45, 0.94);
}

body[data-dsh-schierke-interface] :is([class*='thinking'], [class*='reasoning']) {
  border-top: 1px solid rgba(102, 84, 120, 0.32);
  border-right: 0;
  border-bottom: 1px solid rgba(102, 84, 120, 0.2);
  border-left: 0;
  background: color-mix(in srgb, var(--schierke-parchment) 90%, var(--schierke-violet) 10%);
  font-family: Iowan Old Style, Palatino Linotype, Georgia, serif;
}

body[data-dsh-schierke-interface] :is(pre, [data-terminal]) {
  --dsw-alias-markdown-code-block: #0b1510;
  --dsw-alias-label-primary: #edf1e7;
  --dsw-alias-label-secondary: #bdc8b9;
  --dsw-alias-label-tertiary: #8e9b8a;
}

body[data-dsh-schierke-interface] [data-terminal] {
  color: #edf1e7;
  border: 4px double rgba(144, 177, 147, 0.32);
  border-radius: 0;
  background:
    repeating-linear-gradient(0deg, transparent 0 23px, rgba(172, 199, 170, 0.04) 23px 24px),
    #0b1510;
  box-shadow: inset 5px 0 #5d4a6c;
}

body[data-dsh-schierke-interface] :is([role='dialog'], [role='menu'], [role='listbox']) {
  z-index: 24;
  border: 1px solid rgba(87, 69, 55, 0.36);
  border-radius: 0;
  clip-path: polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 14px 100%, 0 calc(100% - 14px));
  box-shadow: var(--schierke-shadow);
  backdrop-filter: none;
}

body[data-dsh-schierke-interface] :is([role='menuitem'], [role='option']):is(:hover, [aria-selected='true']) {
  background: rgba(98, 126, 101, 0.13);
}

body[data-dsh-schierke-interface] [data-slot='sidebar.settings'] [role='presentation'] > [role='dialog'][aria-modal='true'] {
  --dsw-alias-bg-base: #e8e0ca;
  --dsw-alias-bg-layer-1: #f4eedf;
  --dsw-alias-bg-layer-2: #e9e0ca;
  --dsw-alias-bg-layer-3: #d9cdb4;
  --dsw-alias-bg-overlay: #f5efe1;
  --dsw-alias-label-primary: #302d27;
  --dsw-alias-label-primary-bluish: #443b4c;
  --dsw-alias-label-secondary: #625c50;
  --dsw-alias-label-tertiary: #80786a;
  --dsw-alias-label-caption: #9b9282;
  --dsw-alias-brand-text: #4e3f5c;
  --dsw-alias-button-elevated-fill: #f4eedf;
  --dsw-alias-button-floating-fill: #f6f0e2;
  --dsw-alias-interactive-bg-active: rgba(102, 84, 120, 0.15);
  --dsw-alias-interactive-bg-hover: rgba(88, 116, 95, 0.09);
  --dsw-specific-selector: #e5ddc7;
  color: var(--dsw-alias-label-primary);
  background:
    linear-gradient(90deg, rgba(102, 84, 120, 0.08) 0 34px, transparent 34px),
    repeating-linear-gradient(0deg, transparent 0 31px, rgba(82, 71, 56, 0.08) 31px 32px),
    #eee6d1;
}

body[data-dsh-schierke-interface][data-ds-dark-theme] [data-slot='sidebar.settings'] [role='presentation'] > [role='dialog'][aria-modal='true'] {
  --dsw-alias-bg-base: #101a14;
  --dsw-alias-bg-layer-1: #18241c;
  --dsw-alias-bg-layer-2: #202e25;
  --dsw-alias-bg-layer-3: #2b3a30;
  --dsw-alias-bg-overlay: #111b15;
  --dsw-alias-label-primary: #ececdf;
  --dsw-alias-label-primary-bluish: #e8e2ed;
  --dsw-alias-label-secondary: #c0c5b9;
  --dsw-alias-label-tertiary: #969d91;
  --dsw-alias-label-caption: #747c71;
  --dsw-alias-brand-text: #d6c8e0;
  --dsw-alias-button-elevated-fill: #26362c;
  --dsw-alias-button-floating-fill: #2b3c31;
  --dsw-specific-selector: #25332a;
  color: var(--dsw-alias-label-primary);
  background:
    linear-gradient(90deg, rgba(142, 118, 164, 0.08) 0 34px, transparent 34px),
    repeating-linear-gradient(0deg, transparent 0 31px, rgba(183, 204, 177, 0.05) 31px 32px),
    #111c15;
}

body[data-dsh-schierke-interface] :is(button, [role='button'], [role='tab'], [role='treeitem'], input, textarea, select):focus-visible {
  outline: 2px solid var(--schierke-violet);
  outline-offset: 3px;
}

body[data-dsh-schierke-interface] ::selection {
  color: #fff;
  background: rgba(85, 67, 99, 0.86);
}

body[data-dsh-schierke-interface] ::-webkit-scrollbar-thumb {
  border: 3px solid transparent;
  border-radius: 0;
  background: linear-gradient(#5f7d66, #5f7d66) padding-box;
}

@keyframes schierke-bookmark-breathe {
  0%, 100% { transform: translateY(0); filter: saturate(0.92); }
  50% { transform: translateY(3px); filter: saturate(1.06); }
}

@media (max-width: 1180px) {
  body[data-dsh-schierke-interface] [data-schierke-plate] {
    top: 76px;
    right: 22px;
    bottom: 28px;
    width: min(30vw, 390px);
    min-width: 260px;
  }

  body[data-dsh-schierke-interface]:has(:is([data-phase='active'][data-chat-flow], [data-phase='active'] [data-chat-flow])) [data-schierke-plate] {
    width: min(18vw, 238px);
    min-width: 190px;
    opacity: 0.1;
  }

  body[data-dsh-schierke-interface] [data-phase='hero'] {
    --dsh-chat-content-width: clamp(460px, 48vw, 620px);
  }
}

@media (max-width: 880px) {
  body[data-dsh-schierke-interface] [data-schierke-plate],
  body[data-dsh-schierke-interface] [data-schierke-bookmark] {
    display: none;
  }

  body[data-dsh-schierke-interface] [data-schierke-spread] {
    inset: 10px 10px 12px;
    background:
      linear-gradient(90deg, transparent 0 8%, rgba(120, 94, 62, 0.1) 8% 8.2%, transparent 8.2%),
      repeating-linear-gradient(0deg, transparent 0 31px, var(--schierke-rule) 31px 32px),
      var(--schierke-parchment);
  }

  body[data-dsh-schierke-interface] [data-schierke-gutter] {
    display: none;
  }

  body[data-dsh-schierke-interface] [data-schierke-marginalia] {
    left: 18px;
    opacity: 0.62;
  }

  body[data-dsh-schierke-interface] [data-phase='hero'] {
    --dsh-chat-content-width: min(88vw, 660px);
  }
}

@media (max-width: 620px) {
  body[data-dsh-schierke-interface] [data-skin-chrome='schierke-folio-stage'] {
    left: 0;
  }

  body[data-dsh-schierke-interface] [data-schierke-marginalia] {
    display: none;
  }

  body[data-dsh-schierke-interface] [data-composer-card] {
    border-left-width: 18px;
  }

}

@media (prefers-reduced-motion: reduce) {
  body[data-dsh-schierke-interface] [data-schierke-plate],
  body[data-dsh-schierke-interface] [data-schierke-bookmark],
  body[data-dsh-schierke-interface] [data-skin-chrome='schierke-folio-stage'],
  body[data-dsh-schierke-interface] [data-input-mirror],
  body[data-dsh-schierke-interface] [role='treeitem'] {
    transition: none;
    animation: none;
  }
}
`
