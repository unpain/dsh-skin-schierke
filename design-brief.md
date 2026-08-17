# Schierke Astral Grimoire redesign brief

## Theme thesis
The interface is an opened field grimoire used by a young astral scholar, not a generic command center with fantasy decoration. The user writes questions as field notes, navigates conversations as indexed chapters, and reads answers as annotated pages whose paper, binding, and marginalia remain recognizable even when the character artwork is hidden.

## Existing-skin comparison
Compare against the previous Schierke 0.1.2 layout, dsh-skin-asuka, dsh-skin-rei, and dsh-skin-naifrog. Reuse only the reversible lifecycle, host Appearance integration, semantic aliases, and embedded-art delivery. Do not repeat the common right-side floating portrait, circular reticle, top accent rail, dark fixed sidebar, or glassy labeled rectangle as the primary composition.

## Candidate directions
### Direction A — Living grimoire spread
Turn the conversation area into an open two-page field book with a visible gutter, cloth-bound chapter index, paper-slip composer, marginal user notes, appendix dialogs, and a contained illustrated plate for Schierke. Artwork becomes one authored page element rather than the entire theme. The tradeoff is tighter hero copy width on medium screens.

### Direction B — Forest herbarium cabinet
Treat navigation as specimen drawers, messages as botanical catalog cards, the composer as a labeling tray, and Schierke as a small curator portrait within a cabinet door. Materials are wood, pressed leaves, linen labels, and green glass. The tradeoff is greater density and more demanding responsive collapse behavior.

### Direction C — Astral cartography table
Use a full-width map surface, constellation-index navigation, coordinate-style composer, layered topographic reasoning blocks, and Schierke as a movable map legend. Motion follows drifting contour lines rather than page turns. The tradeoff is weaker connection to the established grimoire name and literary voice.

## Selected direction
Direction A is selected. It has the strongest fidelity to “灵界魔导书,” creates the largest structural distance from the existing right-portrait template, and naturally extends to long conversations, code, settings, and narrow layouts. Direction B is rejected for visual density; Direction C is rejected because the cartographic metaphor would make ordinary chat and settings less legible.

## Design DNA
- Spatial model: open two-page field grimoire with a central binding gutter.
- Geometry: clipped paper corners, ruled margins, stitched book edges, chapter tabs, and rectangular plates.
- Typography: literary old-style serif for knowledge hierarchy, compact humanist sans for controls, and restrained mono for catalog labels.
- Material: warm vellum, sage book cloth, graphite rules, violet ink, aged brass, and dark forest paper in night mode.
- Information density: calm editorial hierarchy with dense detail confined to margins and labels.
- Composer metaphor: a loose observation slip inserted into the current page.
- Navigation structure: cloth-bound chapter index with protruding bookmark selection.
- Motion behavior: short page settling, bookmark shifts, and breathing ink highlights; no rotating reticle.
- Artwork relationship: Schierke appears inside a bounded illustrated folio plate on the right page and recedes to a small marginal watermark in active chat.
- Copy voice: observant, scholarly, gentle, and field-note precise.

## Structural departures
Redesign the global canvas as a two-page spread with a measurable binding gutter. Redesign the sidebar as a light/dark cloth chapter index whose selected conversation reads as a bookmark. Redesign the Composer as a clipped observation slip with ruled margin and folio label. Redesign messages, reasoning, code, menus, and settings as marginal notes, footnotes, ink blocks, and appendix sheets. Replace the circular sigil and accent rail with folio furniture and a bounded artwork plate.

## Artwork policy
Keep the existing embedded Schierke artwork and its attribution, but contain it inside the right-page folio plate. In hero state the complete character must remain inside the plate and viewport with at least 8px safety margin. In active chat the plate may move toward the outer margin and fade, but the silhouette and violet/sage palette should remain recognizable on wide screens. Medium and narrow layouts may suppress the plate entirely; the no-art interface must retain full identity.

## Validation commitments
Capture real light and dark hero views, a settled active-chat view, a no-art view, settings, and a narrow layout. Verify the complete figure bounds in hero state, host-controlled Light/Dark/System behavior, focus and disabled states, reduced motion, long messages, code blocks, and default-to-skin-to-default cleanup. In grayscale and 25% thumbnail review, the book gutter, chapter index, clipped note composer, and illustrated plate silhouette must remain distinct from Asuka, Rei, Naifrog, and Schierke 0.1.2.
