# AURNA Jewellery: Website Design System (design.md)

**Version:** 2.5 · 28 November 2026
**Applies to:** the AURNA Jewellery website, soft launch (B2B-first, with a consumer-grade interface)
**Companion documents:** *AURNA Website Blueprint* (structure, pages, functionality) and *AURNA Website Content & Copy* (wording).

**This is the master design document for the site.** It is the single reference for how the AURNA website looks and behaves: brand character, design principles, tokens, typography, layout, section rhythm, components, imagery, motion and accessibility. Where this file disagrees with a mock-up or with the visual notes in another document, this file wins until it is updated.

**What changed in 2.5:** the header logo is reduced so AURNA's letters match the 48 px Enquire button (desktop logo 66 px, tablet 75 / 64 px), and stays top left; footer logo 56 px, mobile menu 48 px; header 145 px on desktop (2.2, 6.1, 6.12).

**What changed in 2.4:** header buttons (WhatsApp, Enquire, menu) are vertically centred on the AURNA letters at every screen width (6.1).

**What changed in 2.3:** logo about 75% larger on desktop and tablet (140 px desktop header, AURNA 102 px), footer 112 px, mobile menu 70 px. On phones the logo grows only as far as the header allows. JEWELLERY now sits on the AURNA baseline instead of its centre line. Header heights increased to match (2.2, 6.1).

**What changed in 2.2:** the horizontal logo is now the master. JEWELLERY is spread with wide letter-spacing to the width of AURNA, like the original wordmark, and is slightly larger (15 px in the desktop header). It's used in the desktop header, footer and mobile menu, with PNG exports. The footer logo now sits on its own row (2.2, 6.12).

**What changed in 2.1:** desktop header (1200 px and up) becomes two rows with a horizontal logo, `aurna-logo-horizontal.svg`: AURNA larger (58 px), JEWELLERY to its right and centred on it (14 px). The six links move to a slim second row. Tablet and mobile keep the one-row header and stacked logo (2.2, 6.1).

**What changed in 2.0:** the website now uses a screen lockup of the logo (`aurna-logo-header.svg`): the star is matched to the text height and JEWELLERY is 35% larger, so the brand name and JEWELLERY are both legible. Header logo 72 px desktop / 52 px mobile, footer 88 px, menu 52 px; header 100 px desktop / 76 px mobile (2.2, 6.1, 6.12).

**What changed in 1.9:** the logo is about 45% larger again: 92 px in the desktop header and 68 px on mobile (smaller only on phones under 420 px), 104 px in the footer and 68 px in the mobile menu. The header grows to 116 px on desktop and 88 px on mobile (2.2, 6.1, 6.12).

**What changed in 1.8:** the website logo is now a bold weight, set larger: 64 px in the header on desktop and 48 px on mobile, 72 px in the footer and 48 px in the mobile menu. The header grows to 92 px on desktop and 72 px on mobile to fit it (2.2, 6.1, 6.12).

**What changed in 1.7:** Section 2.2 Logo added: the files, colour by background, sizes, clear space, accessibility and misuse rules for the approved AURNA logo (2, 2.2, 6.1, 6.12, 13).

**What changed in 1.6:** the homepage hero may use one editorial portrait of AURNA pieces being worn, instead of a product shot; all other imagery stays product-only (6.4, 7.1, 7.2). The hero currently uses a model portrait.

**What changed in 1.5:** the header has six links, with About us added (6.1); the full desktop navigation shows from 1200 px, and below that the menu button and floating WhatsApp button are used (6.1); the footer Company column lists About us, and the bottom row lists the four policy pages (6.12); page templates added for About us, the Collections hub, individual collection pages and policy pages (11).

**What changed in 1.4:** Surface Alt changed from `#F7F9FC` to `#F1F4F9` so alternate sections and the footer read as distinct blocks (1.05:1 against white became 1.10:1); secondary text on Surface Alt now uses Muted Strong (3.1, 3.3, 4.2).

**What changed in 1.3:** the homepage hero is now Deep Navy instead of Hero Mist, so the homepage has two Deep Navy sections, the hero and the catalogue band (3.2, 5.4, 6.4); gold eyebrow text and the light-on-navy buttons are allowed in both (3.2, 6.2); the hero headline is set upright, and type sizes scale fluidly with balanced line breaks, following reference/sample-1 (4.2, 4.3).

**What changed in 1.2:** brand-line italic added to the font budget (4.1); eyebrow colour on Hero Mist fixed (4.2, 6.3); capitalisation rule for page and collection names (4.3); hero CSS gets a `vh` fallback, padding and centring (5.5); borders added around the Customise section (5.4); header Enquire button exempt from the one-primary rule (6.2); focus rules for inputs clarified (6.2); product-card views shown as thumbnails instead of swipe dots, and "Request details" renamed "Ask about this design" (6.7); collections grid fixed at 3 × 2 (6.6); catalogue band rule for pages that end in a form (5.4, 11); Trade Partnership and The Science templates completed (11).

**What changed in 1.1:** brand archetype added (Section 2.1); Hero Mist panel colour and a stronger secondary-text colour added (Section 3); section rhythm and minimum section heights added (Sections 5.4–5.5); hero, proof strip and header specs updated so sections no longer merge (Section 6).

---

## 1. Design principles

1. **White, precise, product-led.** The jewellery and the typography carry the brand. Colour is used sparingly.
2. **A premium house that works like a trade partner.** It should look as considered as a consumer jewellery brand and be as clear as a supplier's catalogue.
3. **Proof over decoration.** Codes, specifications, hallmarks and certificates are shown plainly. No ornament stands in for information.
4. **Mobile first.** Most retailers will open the site on a phone, often from a WhatsApp link. Design at 375 px first.
5. **Nothing invented.** Real product photography, real specifications, real contact details. No placeholder data on a live page.

---

## 2. Brand basics

| Item | Value |
|---|---|
| Brand name | AURNA Jewellery |
| Logo | Gold star mark with the "AURNA JEWELLERY" wordmark, always from the approved files in `img/logo/`, never retyped in a font (2.2) |
| Brand line | *Brilliance, beautifully considered.* |
| Signature device | The typographic system: product codes (e.g., AR-SOL-01) and specification lines set consistently. The star mark appears only as part of the logo and in icons, never as a decorative pattern or motif. |

### 2.1 Brand archetype

**The Ruler (standard-setter), tempered by the Caregiver (dependable partner).** The archetype is internal. It is never named on the site, but it guides every design and copy decision.

| | Ruler (primary) | Caregiver (secondary) |
|---|---|---|
| **Why** | Retailers choose a supplier they can rely on: consistent quality, proper certification, clear terms | AURNA succeeds when its retailers succeed |
| **Drives** | Product codes, exact specifications, hallmarks and certificates; structured, orderly layouts; calm authority | Retailer support, the inventory-conscious offer, easy WhatsApp access, a clear "how it works" process |
| **Sounds like** | "Every piece, specified and certified." | "We'll work around how your store runs." |
| **Looks like** | Ordered grids, crisp hairlines, precise typography, product shown exactly as it is | Approachable spacing, plain-language labels, visible routes to a person |
| **Shadow to avoid** | Cold, corporate, controlling, cluttered with data | Over-promising, pleading, soft or sentimental |

**Archetypes deliberately not used:**
- **Lover:** romance and emotion are consumer-market language; they would pull AURNA away from trade.
- **Creator / Sage:** design-led self-expression and teacher-like authority; not AURNA's role as a supplier.
- **Everyman:** too plain for a premium jewellery house.

**Personality in one line:** the reliable, exacting supplier with taste. Premium in finish, precise in detail, easy to work with.

**Design test for any screen:** *Does this look like a house that sets the standard, and does it make the next step easy for a retailer?*

### 2.2 Logo

The AURNA logo has two parts: the **star mark**, a four-point star with a centre dot in Jupiter Gold, and the **wordmark**, "AURNA" with "JEWELLERY" set beneath it. All files are in `img/logo/` and have transparent backgrounds.

**Files**

| File | Use |
|---|---|
| `aurna-logo-horizontal.svg` | **Master logo:** star, then AURNA, then JEWELLERY to the right, spread with wide letter-spacing (about one letter-width between letters, matching AURNA's width) and sitting on the AURNA baseline (the bottoms of both words align). Used in the desktop header, footer and mobile menu. Proportions about 6.39 : 1. PNG exports: `aurna-logo-horizontal.png` / `@2x` / `@3x`, `aurna-logo-horizontal-reversed@2x.png` |
| `aurna-logo-horizontal-reversed.svg` | The same horizontal lockup for Deep Navy backgrounds |
| `aurna-logo-header.svg` | **Stacked website logo:** phone and tablet header only (below 1200 px), where the horizontal logo would be too small. A screen lockup of the bold logo: the star is scaled to the height of the AURNA + JEWELLERY text block, and JEWELLERY is enlarged 35% about each letter so it stays legible at header sizes. Proportions about 3.22 : 1 |
| `aurna-logo-header-reversed.svg` | The same lockup for Deep Navy backgrounds |
| `aurna-logo-bold.svg` | Bold weight of the primary lockup (every element thickened with an outline in its own colour). Use where the original proportions are wanted at screen sizes |
| `aurna-logo.svg` | Primary logo at its original weight: print and large-format uses |
| `aurna-logo.png`, `@2x`, `@3x` | Raster versions (480 / 960 / 1440 px wide) where SVG can't be used, e.g. email, documents, structured data |
| `aurna-logo-reversed-bold.svg` | Website logo on Deep Navy (bold weight, white wordmark, gold star) |
| `aurna-logo-reversed.svg`, `aurna-logo-reversed@2x.png` | On Deep Navy at the original weight |
| `aurna-logo-navy.svg` | Single colour (all Deep Navy), for one-colour uses such as stamps or forms |
| `aurna-mark.svg`, `aurna-mark-512.png` | Star mark only |
| `favicon.ico`, `favicon-32.png`, `favicon-16.png` | Browser tab icons (thickened strokes for small sizes) |
| `apple-touch-icon-180.png`, `app-icon-512.png` | Home-screen and app icons (gold star on Deep Navy) |

**Colour by background**

| Background | File | Star mark | Wordmark |
|---|---|---|---|
| White, Surface Alt, Hero Mist | `aurna-logo-horizontal.svg` (master) / `aurna-logo-header.svg` (phone and tablet header) / `aurna-logo.svg` (print) | Jupiter Gold `#D4B26A` | Deep Navy `#0F1F5C` |
| Deep Navy | `aurna-logo-horizontal-reversed.svg` (master) / `aurna-logo-reversed.svg` (print) | Jupiter Gold `#D4B26A` | White `#FFFFFF` |
| One colour only | `aurna-logo-navy.svg` | Deep Navy | Deep Navy |

The gold in the star mark is the logo's own colour and is the main exception to "gold is a detail" (3.2).

**Sizes on the website.** The header logo is sized so AURNA's letters are as tall as the Enquire button (48 px) on desktop and tablet, and it always sits top left. Desktop header (1200 px and up): `aurna-logo-horizontal.svg` at 66 px tall (422 px wide), so AURNA is 48 px and JEWELLERY about 12 px. Tablet and phone headers use `aurna-logo-header.svg` (about 3.22 : 1). Header heights: 145 px desktop (two rows), 100 px at 1024-1199 px, 88 px at 768-1023 px, 80 px on phones.

| Placement | Desktop | Mobile |
|---|---|---|
| Header | 66 px horizontal (1200 px and up); 75 px stacked (1024-1199 px); 64 px stacked (768-1023 px); AURNA = 48 px Enquire height on desktop | 56 px stacked (52 px below 420 px wide, 36 px below 360 px) |
| Footer brand block | 56 px horizontal | Full width of the column (about 52 px tall on a 375 px phone) |
| Mobile menu panel | — | 48 px horizontal |
| Minimum for the full logo | 32 px | 32 px |

Below 32 px, use the star mark or favicon instead of the full logo.

**Clear space:** keep at least the width of one star arm clear on every side. Don't place other text, icons or edges inside that space.

**Accessibility:** use alt text "AURNA Jewellery", or "AURNA Jewellery home" where the logo links to the homepage. Never put the logo inside a heading in place of the page's H1.

**In `<head>` on every page:** `favicon.ico` (sizes "any"), `favicon-32.png`, `favicon-16.png` and `apple-touch-icon-180.png`, plus a copy of `favicon.ico` at the site root.

**Never:**
- retype "AURNA" or "JEWELLERY" in a font
- stretch, squash, rotate or re-proportion the logo, or change its weight, beyond the approved versions listed above (original, bold, the stacked screen lockup and the horizontal lockup)
- recolour it outside the three versions above, or add shadows, outlines, gradients or glows
- place it on photographs (including the hero portrait), on gold, or on busy or low-contrast backgrounds
- put it inside a box, badge or shape
- separate the star and wordmark, except for the star mark on its own in icons, favicons and social profile pictures
- use the star mark as a decorative pattern, divider or background motif (2, signature device)

*The current files were vectorised from the supplied logo artwork. Before print production (packaging, stamping, signage), replace them with the designer's original vector source if one exists.*

---

## 3. Colour

### 3.1 Tokens

```css
:root {
  /* Brand */
  --color-navy:        #0F1F5C; /* Deep Navy: ink, headings, primary buttons, the homepage hero and the catalogue band */
  --color-sapphire:    #13348C; /* Sapphire: links, hover, product codes, icons */
  --color-gold:        #D4B26A; /* Jupiter Gold: logo and small non-text markers only */

  /* Neutrals */
  --color-white:       #FFFFFF; /* Dominant background */
  --color-ink:         #101A35; /* Body text */
  --color-muted:       #68728A; /* Secondary text, captions, labels, input borders */
  --color-line:        #E5E9F1; /* Hairlines, card borders (decorative only) */
  --color-surface-alt: #F1F4F9; /* Alternate sections, footer (always with a 1 px top border). Was #F7F9FC until 1.4 */
  --color-hero-mist:   #E8EDF6; /* Inner-page heading panels and feature sections: a pale, cool sapphire tint */
  --color-muted-strong:#5A6480; /* Secondary text on Hero Mist (the standard muted grey fails there) */

  /* States */
  --color-focus:       #13348C; /* Focus ring */
  --color-error:       #B42318; /* Form errors only. Never promotional. */
  --color-success:     #1E6B45; /* Form confirmation only */
}
```

### 3.2 How colour is used

| Rule | Detail |
|---|---|
| White dominates | Most of every page is `--color-white`. Alternate sections use `--color-surface-alt`; inner-page heading panels and feature sections use `--color-hero-mist`; the homepage hero is Deep Navy (see the section rhythm in 5.4). |
| Hero Mist | `#E8EDF6`, a cool tint, is the background for inner-page heading panels and feature sections (e.g., the homepage Customise teaser). Maximum two Hero Mist sections per page. |
| Never ivory or cream | No ivory, cream, beige or warm-tinted backgrounds anywhere. Hero Mist is cool, never warm. |
| Borders do the separating | White and `#F1F4F9` are close (1.10:1). Wherever two light backgrounds meet, add a 1 px `--color-line` border. Never rely on colour alone to separate light sections. |
| Navy is ink | Text, hairlines, icons and primary buttons. Deep Navy is used as a background in only two places: the **homepage hero** and the **catalogue-request band** (at most one band per page; pages that end in a form have none, see 5.4). Inner-page heading panels stay Hero Mist. No navy header and no other large navy fields. |
| Sapphire is interaction | Links, hover states, product codes, icons, focus ring. |
| Gold is a detail | Logo artwork, plus a 2 px marker bar beside section eyebrows or under the active nav item. Never text on white (fails contrast). Never dividing rules, filled areas or button fills. |
| Gold text exception | Gold text is allowed **only on Deep Navy** (7.6:1 contrast): the eyebrows in the homepage hero and the catalogue band. |
| No gradients | No gradients, glows, textures, shadows used as decoration, or overlays on product images. |
| No promotional colours | No sale red, badges, ribbons or highlight colours. Error red is for form validation only. |

### 3.3 Checked contrast (WCAG 2.2)

| Foreground on background | Ratio | Use |
|---|---|---|
| Deep Navy on White | 15.3:1 | Headings, buttons |
| Ink on White | 17.2:1 | Body text |
| Sapphire on White | 11.1:1 | Links, codes |
| Muted on White | 4.8:1 | Secondary text (AA for body size) |
| Muted on Surface Alt | 4.4:1 | **Fails AA for body text.** Use Muted Strong instead. |
| Muted Strong on Surface Alt | 5.3:1 | Secondary text on alternate sections and the footer |
| White on Deep Navy | 15.3:1 | Hero headline, button text, CTA band text |
| Gold on Deep Navy | 7.6:1 | Eyebrows in the homepage hero and the CTA band only |
| Hero Mist on Deep Navy | 13.0:1 | Hero supporting copy |
| Gold on White | 2.0:1 | **Fails.** Never use for text. |
| Line on White | 1.2:1 | Decorative only. Not acceptable as an input border. |
| Deep Navy on Hero Mist | 13.0:1 | Headings and buttons on Hero Mist panels |
| Ink on Hero Mist | 14.6:1 | Body text on Hero Mist panels |
| Sapphire on Hero Mist | 9.4:1 | Links on Hero Mist panels |
| Muted Strong on Hero Mist | 5.0:1 | Secondary text on Hero Mist panels |
| Muted on Hero Mist | 4.1:1 | **Fails AA for body text.** Use Muted Strong instead. |
| Hero Mist vs White | 1.17:1 | Visible as a distinct panel; still add borders where it meets white |
| Surface Alt vs White | 1.10:1 | Visible as a quiet block; still add a 1 px border |

Input and checkbox borders use `--color-muted` (4.8:1) to meet the 3:1 non-text contrast requirement.

---

## 4. Typography

### 4.1 Typefaces

| Role | Typeface | Weights | Notes |
|---|---|---|---|
| Display | Cormorant Garamond | 500, 600, 500 italic | H1–H3, product names. 500 italic is for the footer brand line only. Avoid 300/400: too thin on mobile screens. |
| Body and UI | DM Sans | 400, 500, 600 | Body, navigation, buttons, forms, product codes, specifications, eyebrows |
| Fallback | `Georgia, "Times New Roman", serif` / `system-ui, -apple-system, "Segoe UI", Roboto, sans-serif` | — | If web fonts fail |

Load only the weights listed (six font files at most). If page weight needs cutting, the brand-line italic can be dropped (set the footer brand line upright in 500); no other style may be added. Use `font-display: swap` and self-host the files or preload them.

### 4.2 Type scale

| Token | Font | Desktop (≥1024) | Mobile (<768) | Line height | Notes |
|---|---|---|---|---|---|
| `display-1` (H1) | Cormorant 500 | 56 px | 38 px | 1.1 | One per page. Upright; letter-spacing −0.01em |
| `display-2` (H2) | Cormorant 500 | 40 px | 30 px | 1.15 | Section headings |
| `display-3` (H3) | Cormorant 600 | 26 px | 22 px | 1.25 | Card and sub-section titles, product names |
| `body-lg` | DM Sans 400 | 19 px | 17 px | 1.6 | Hero supporting copy, intros |
| `body` | DM Sans 400 | 16 px | 16 px | 1.6 | Default. Never smaller for paragraphs. |
| `body-sm` | DM Sans 400 | 14 px | 14 px | 1.5 | Captions, helper text, spec lines |
| `eyebrow` | DM Sans 600, uppercase | 12 px | 12 px | 1.4 | Letter-spacing 0.16em; Muted or Sapphire on White and Surface Alt, Muted Strong or Sapphire on Hero Mist, Gold on Deep Navy (hero and band); 2 px gold bar on its left. On Surface Alt use Muted Strong, not Muted |
| `code` | DM Sans 600, uppercase | 13 px | 13 px | 1.4 | Product codes; letter-spacing 0.08em; Sapphire |
| `button` | DM Sans 500 | 15 px | 15 px | 1 | Sentence case; letter-spacing 0.02em |
| `nav` | DM Sans 500 | 15 px | 17 px (menu) | 1 | Sentence case |

Display sizes and `body-lg` scale fluidly between the mobile and desktop values with `clamp()`, for example `display-1`: `clamp(2.375rem, 1.8rem + 2.4vw, 3.5rem)`. Headings use `text-wrap: balance`; paragraphs use `text-wrap: pretty`.

### 4.3 Typography rules

- Headings, buttons and links in sentence case, except eyebrows and product codes, which are uppercase. Page, collection and catalogue names keep their capitals as proper names (Trade Partnership, The Science, Our Approach, Everyday Essentials, Trade Catalogue), so "Request Trade Catalogue" and "Explore Rings →" are correct, but "Send Trade Enquiry" is not.
- Maximum line length: 68 characters for body text.
- No bold inside display type. No italics except the footer brand line. The hero H1 uses the same words but is set upright.
- Numbers in specifications use DM Sans with tabular figures (`font-variant-numeric: tabular-nums`).
- Indian number grouping where prices or quantities ever appear (₹1,20,000). Prices are not shown at soft launch.

---

## 5. Layout and spacing

### 5.1 Spacing scale (8 px base)

```css
:root {
  --space-1: 4px;   --space-2: 8px;   --space-3: 12px;  --space-4: 16px;
  --space-5: 24px;  --space-6: 32px;  --space-7: 48px;  --space-8: 64px;
  --space-9: 96px;  --space-10: 128px;
}
```

| Use | Desktop | Mobile |
|---|---|---|
| Section padding (top/bottom), standard | `--space-9` (96 px) minimum | `--space-8` (64 px) minimum |
| Section padding (top/bottom), short sections (see 5.5) | `--space-10` (128 px) | `--space-8` (64 px) + min height |
| Heading to content | `--space-6` (32 px) | `--space-5` (24 px) |
| Card gap | `--space-5` (24 px) | `--space-4` (16 px) |
| Inside cards | `--space-5` (24 px) | `--space-4` (16 px) |

### 5.2 Grid and breakpoints

| Breakpoint | Width | Columns | Gutter | Side margin |
|---|---|---|---|---|
| Mobile | < 768 px | 4 | 16 px | 20 px |
| Tablet | 768–1023 px | 8 | 24 px | 32 px |
| Desktop | 1024–1439 px | 12 | 24 px | 48 px |
| Wide | ≥ 1440 px | 12 | 32 px | auto (centred) |

- Maximum content width: **1200 px**. Text-only blocks: **720 px**.
- Keep content widths consistent from section to section. No full-bleed content except the hero and CTA band backgrounds and the hero image on mobile.

### 5.3 Shape

| Token | Value | Use |
|---|---|---|
| `--radius-sm` | 2 px | Buttons, inputs, tags (maximum anywhere) |
| `--radius-none` | 0 | Cards, images, bands |
| Border | 1 px `--color-line` | Cards, header bottom, dividers |
| Shadow | none | No drop shadows. Elevation comes from borders, background changes and white space. |

### 5.4 Section rhythm

Every section must read as its own block. Adjacent sections never share the same background without a border between them, and the hero is always a distinct panel.

**Homepage**

| # | Section | Background | Separation |
|---|---|---|---|
| 1 | Header | White | 1 px `--color-line` bottom border, always on |
| 2 | **Hero** | **Deep Navy, full width** | Distinct dark panel directly under the white, bordered header |
| 3 | Proof strip | White | 1 px borders top and bottom; sits as a "plinth" under the hero |
| 4 | Collections | White | Generous padding (5.5) |
| 5 | Selected designs | Surface Alt | 1 px top border |
| 6 | Trade partnership | White | 1 px top border |
| 7 | Customise | Hero Mist | Feature section, the homepage's only Hero Mist section. 1 px top border |
| 8 | The Science | White | 1 px top border |
| 9 | Retailer support | Surface Alt | 1 px top border |
| 10 | Catalogue request band | Deep Navy | The second dark section, well separated from the hero |
| 11 | Footer | Surface Alt | 1 px top border |

**Other pages:** page heading in a Hero Mist panel (shorter: see 5.5), then content sections alternating White and Surface Alt with 1 px borders, then the Deep Navy catalogue band, then the footer.

**Pages that end in their own form** (Customise, Trade Partnership, Request Trade Catalogue, Contact) end with that form instead of the catalogue band, because a band would compete with it. Those pages have no Deep Navy section. Every other inner page has exactly one (the band). The homepage has two: the hero and the band.

### 5.5 Minimum section heights

Short sections must not get lost between taller ones. Every section has a minimum height, with its content vertically centred inside it, and generous space above and below.

| Section | Desktop min height | Mobile min height | Padding (top/bottom) |
|---|---|---|---|
| Hero | `min(760px, 100svh − 76px)`, never below 600 px | 560 px (image + copy) | 96 px desktop / 48 px mobile |
| Inner-page heading panel | 360 px | 280 px | 96 px / 64 px |
| Standard content section (Collections, Selected designs, Trade partnership, The Science) | 560 px | 480 px | 96 px / 64 px |
| Short section (Customise teaser, Retailer support) | 480 px | 400 px | 128 px / 64 px |
| Catalogue request band | 440 px | 400 px | 128 px / 80 px |
| Proof strip | 160 px | auto (2 × 2 grid) | 48 px / 40 px |
| Footer | auto | auto | 80 px / 56 px |

**Rules:**
- Implement with `min-height` plus `display: flex; flex-direction: column; justify-content: center;`. Never a fixed `height`: content must always be able to grow.
- Use `svh` units for the hero so mobile browser bars don't cause jumps, with a `vh` declaration first as a fallback for older browsers (common on older Android phones in Tier 2–4 markets).
- **The proof strip is the only intentionally short section.** It belongs visually to the hero (the plinth), so it stays compact; its borders keep it distinct.
- A short section needs a focal element as well as space: a heading in `display-2`, the 2 px gold marker on its eyebrow, and a clear CTA. Never a lone paragraph floating in empty space.
- Consecutive short sections are not allowed. If two short sections would sit together, merge them or separate them with a standard section.
- Space must be inside the section (padding), not as empty margins between sections, so each background block reads as a whole.

```css
.section          { min-height: 560px; padding-block: var(--space-9); display: flex; flex-direction: column; justify-content: center; }
.section--short   { min-height: 480px; padding-block: var(--space-10); }
.section--band    { min-height: 440px; padding-block: var(--space-10); }
.hero             { min-height: max(600px, min(760px, calc(100vh - 76px)));   /* fallback for browsers without svh */
                    min-height: max(600px, min(760px, calc(100svh - 76px)));
                    padding-block: var(--space-9); display: flex; flex-direction: column; justify-content: center;
                    background: var(--color-navy); color: var(--color-white); }
.proof-strip      { min-height: 160px; padding-block: var(--space-7); border-block: 1px solid var(--color-line); }

@media (max-width: 767px) {
  .section        { min-height: 480px; padding-block: var(--space-8); }
  .section--short { min-height: 400px; padding-block: var(--space-8); }
  .section--band  { min-height: 400px; padding-block: 80px; }
  .hero           { min-height: 560px; padding-block: var(--space-7); }
  .proof-strip    { min-height: auto; padding-block: 40px; }
}
```

---

## 6. Components

### 6.1 Header

| Item | Spec |
|---|---|
| Background | White, 1 px `--color-line` bottom border (always on, including on scroll), sticky. The white header against the Deep Navy hero keeps the two clearly separate. |
| Height | Desktop (1200 px and up): two rows, 145 px. Row 1 (96 px): horizontal logo top left, WhatsApp and Enquire right. Row 2 (48 px, 1 px top hairline): the six links. One row below 1200 px: 100 px (1024-1199), 88 px (768-1023), 80 px (phones) (2.2) |
| Left | AURNA logo, always top left: `aurna-logo-horizontal.svg` at 66 px from 1200 px (AURNA as tall as the Enquire button); `aurna-logo-header.svg` below that (75 / 64 / 56 px; 2.2) |
| Centre nav | Collections · Customise · The Science · About us · Our Approach · Trade Partnership (`nav` style, Navy, no wrapping). Shown from **1200 px** on the header's second row, left-aligned with the logo; gap 32 px |
| Right | WhatsApp icon link (Sapphire, 24 px icon with accessible label, from 1200 px) · **Enquire** primary button. WhatsApp, Enquire and the menu button sit on the same centre line as the AURNA letters (not the whole logo): with the stacked logo they are raised by 14.7% of the logo height |
| Active / hover | Sapphire text; active item gets a 2 px gold underline offset 6 px |
| If crowded | Six links fit on one line from 1200 px. If more links are added, raise the breakpoint or move an item to the footer; Trade Partnership always stays in the header |
| Mobile and tablet (below 1200 px) | Wordmark · Enquire (compact primary button) · menu icon. Menu opens a full-screen white panel with the nav items at 17 px, plus WhatsApp and Request Trade Catalogue at the bottom. A floating WhatsApp button (48 px, white with Sapphire icon and line border) sits bottom-right on all pages below 1200 px. |

### 6.2 Buttons

| Variant | Default | Hover | Use |
|---|---|---|---|
| Primary | Navy fill, white text | Sapphire fill | One per view in the page content: Request Trade Catalogue, form submits. The header Enquire button is the one exception: it is a persistent site-wide action and doesn't count towards the rule. |
| Secondary | White fill, 1 px Navy border, Navy text | Sapphire border and text | Explore Collections, Explore Trade Partnership |
| Text link | Sapphire text, arrow "→" | Underline | "Explore Rings →", "Chat on WhatsApp" |
| On Navy | White fill, Navy text | Surface-alt fill | Primary action on Deep Navy (hero, CTA band) |
| Outline on Navy | Transparent, 1 px White border, White text | White fill, Navy text | Secondary action in the hero |

- Height 48 px (44 px minimum tap target), horizontal padding 24 px, radius 2 px, sentence case.
- Focus: 2 px Sapphire outline, 2 px offset, on every interactive element except text inputs, selects and text areas, which use the 2 px Sapphire border in 6.11 instead.
- Disabled: Muted text, `--color-line` border, no fill. Avoid disabled buttons where possible; validate on submit instead.
- Never: pill shapes, gold fills, icons-only primary buttons, stacked competing primary buttons.

### 6.3 Eyebrow + heading block

```
[2px gold bar] EYEBROW TEXT          ← eyebrow token, Muted or Sapphire (Muted Strong or Sapphire on Hero Mist)
Section heading in Cormorant         ← display-2, Navy
Optional intro line in DM Sans       ← body-lg, Ink, max 720 px
```

### 6.4 Hero

- **Background:** full-width Deep Navy (`#0F1F5C`) panel, so the hero stands apart from the white header above and the white proof strip below.
- **Height:** see 5.5 (fills most of the first screen on desktop; never below 600 px).
- **Desktop:** two columns (5/7 split from 1280 px; 6/6 between 1024 and 1279 px so the headline and buttons aren't squeezed), content vertically centred. Left: eyebrow, H1, supporting copy, CTAs (primary + secondary + text link). Right: one product photograph, 4:5 or 1:1.
- **Image:** either a product shot (a cut-out or white-background shot on a white card within the navy panel; the white card gives depth without shadows, and no border is needed against navy) or one editorial portrait of AURNA pieces being worn: a single model, cropped close enough that the jewellery is clearly visible and in focus. The pieces shown must be real AURNA designs, and a model release and image-usage rights must be on file. No couples, proposals, romance or overlaid text. Everywhere else, imagery stays product-only. The Trade Partnership heading panel uses the same image.
- **Portrait alt text:** describe the jewellery first, using "laboratory-grown diamond", e.g. "Woman wearing a yellow-gold ring with a round laboratory-grown diamond on a stone-set band, and round stud earrings".
- **Text on the hero:** White H1, set upright (15.3:1); Hero Mist supporting copy (13.0:1); Gold eyebrow (7.6:1); White text link. Buttons: White "On Navy" primary and White outline secondary (6.2). White focus ring. Never Muted grey or Sapphire text on navy.
- **Mobile:** image first (full width), then copy and CTAs; buttons full width, stacked.
- No gradient, glow, slider, video or overlaid text on the image. A gold or platinum piece leads, whether shown alone or worn.

### 6.5 Proof strip

- Four items in a row (desktop), 2 × 2 grid (mobile). **White background with 1 px top and bottom borders**, directly under the Deep Navy hero. It reads as a plinth for the hero. Vertical 1 px dividers between items on desktop.
- Each item: 24 px Navy line icon, a short label (DM Sans 600, 15 px), an optional one-line description (`body-sm`, Muted).
- Quiet: no boxes around items, no gold, no numbers or counters.

### 6.6 Category card (Collections)

- Image 4:5, product on white, `--radius-none`, 1 px line border.
- Below: category name (`display-3`), one line (`body-sm`, Muted), text link ("Explore Rings →").
- Hover (desktop): image zooms to 1.03 over 400 ms; border turns Sapphire. No overlay.
- Grid: 3 per row desktop (six cards → 3 × 2), 2 per row tablet and mobile. If a category is hidden, keep 3 per row and let the last row be shorter.

### 6.7 Product card (Selected designs)

```
┌───────────────────────────┐
│                           │  Image 1:1 — 45° hero view on white
│     [product photo]       │
│                           │
│ [45°] [top] [side]        │  thumbnails, tap/click to switch
├───────────────────────────┤
│ AR-SOL-01                 │  code token, Sapphire
│ The Classic Four-Prong    │  display-3, Navy
│ Round laboratory-grown    │  body-sm, Ink
│ diamond · 1 ct onwards    │
│ (centre stone) · 14K/18K  │
│ gold                      │
│ Ready stock               │  body-sm, Muted (only if confirmed)
│ Ask on WhatsApp →         │  text link
│ Ask about this design →   │  text link (opens enquiry panel, code pre-filled)
└───────────────────────────┘
```

- Extra views (top, side) are visible thumbnails, 44 px tap targets, with accessible labels ("Show top view"). No swipe dots, sliders or hover-only views: every view must be reachable by tap and keyboard.

- Metal colour dots (Yellow / White / Rose), 12 px, only for metals actually offered, with text labels for screen readers.
- No prices, badges, ratings, "new" tags, wishlist hearts or cart buttons.
- Grid: 4 per row desktop, 2 per row mobile.

### 6.8 Feature columns (Three ways to work / Our Approach pillars)

- Three columns desktop, stacked mobile. Each: 2 px gold marker bar, title (`display-3`), 2–3 lines (`body`), optional text link.
- Optional "How it works" row: four numbered steps in DM Sans 600 with Sapphire numerals, connected by a 1 px line on desktop; a vertical list on mobile.

### 6.9 Editorial card (The Science)

- Two cards side by side (desktop), stacked (mobile). White with 1 px border, or `--color-surface-alt` with no border.
- Optional real image (macro stone, certificate, hallmark), 16:9. Title (`display-3`), 2–3 lines, text link CTA.

### 6.10 Catalogue request band (dark section)

- Full-width Deep Navy background. Content max 960 px.
- Gold eyebrow (allowed here), white H2, one line of white body text, the short catalogue form **or** a white button, plus a white "Chat on WhatsApp" text link.
- Below the band, on white: one quiet consumer line in `body-sm`: *"Looking for a piece for yourself? Ask about a design →"*

### 6.11 Forms

| Element | Spec |
|---|---|
| Label | Always visible above the field (DM Sans 500, 14 px, Ink). Never placeholder-only. |
| Input | 48 px high, white, 1 px `--color-muted` border, radius 2 px, 16 px text (prevents iOS zoom) |
| Focus | 2 px Sapphire border |
| Optional fields | Mark "(optional)"; don't asterisk required ones unless most fields are optional |
| Selects | Native select styled to match. Use segmented chips for short choice sets (jewellery type, stone shape) on mobile. |
| Help / error text | `body-sm`; errors in `--color-error` with an icon and a message that says how to fix it |
| File upload (Customise) | Drop zone with 1 px dashed Muted border; JPG, PNG, WEBP; size limit stated; thumbnail previews |
| Consent | Checkbox with link to the privacy notice; never pre-ticked |
| Submit | Primary button, full width on mobile |
| Confirmation | Replaces the form in place: success icon, heading, one-line message, a WhatsApp link |
| Enquire panel | Header Enquire opens a right-side panel (desktop) or full-screen sheet (mobile) starting with a selector: **I'm a retailer / business** · **I'm buying for myself** |

Field wording follows compliance rules: "Stone shape" or "Laboratory-grown diamond shape", never "Diamond shape".

### 6.12 Footer

- `--color-surface-alt` background, Navy text, 1 px top border.
- Brand block: AURNA master logo, `aurna-logo-horizontal.svg` (56 px tall on desktop; 2.2), on its own row above the link columns on desktop, with the brand line (Cormorant italic, 18 px) to its right and a 1 px line below.
- Four columns desktop (Trade · Collections · Company · Connect), stacked accordion groups on mobile. Company: Customise · The Science · About us · Our Approach · Contact. Collections links go to the individual collection pages.
- Bottom row (`body-sm`, Muted Strong on Surface Alt): © AURNA Jewellery · Privacy · Refunds · Shipping · Service terms · business identity. Publish only approved policy links and real contact details.

### 6.13 Icons

- Line icons, 1.5 px stroke, 24 px grid, square caps, Navy (Sapphire when interactive).
- Required set: WhatsApp, enquiry/mail, phone, menu, close, arrow-right, chevron, certificate, hallmark, ready stock, made-to-order, custom design, white-label, retailer/store, upload, check, alert.
- No emoji, no filled or duotone icons, no sparkle or diamond-glint icons.

---

## 7. Imagery

### 7.1 Product photography standard

| Rule | Detail |
|---|---|
| Real only | Actual AURNA pieces. No AI-generated or rendered product images where details could misrepresent the piece. |
| Background | Pure white. The hero is the one exception: a product on a white card, or an editorial portrait (7.2) |
| Fixed angle order | 1. 45° tilted hero view · 2. top view · 3. side view · 4. scale shot (on hand or ear) when available |
| Framing | Piece centred, consistent scale across a grid, no cropping of prongs or clasps |
| Colour | True-to-life metal colour and stone appearance; no added sparkle, glints or over-sharpening; never alter geometry |
| Lead metal | Gold and platinum lead hero and category images; silver appears in Everyday Essentials |
| Formats | AVIF/WebP with JPG fallback; responsive `srcset`; hero under 200 KB on mobile |

### 7.2 Editorial imagery (limited)

Allowed: bench and quality-check details, certificates and hallmarks, a retailer counter or display, and, in the homepage hero only, one editorial portrait of AURNA pieces being worn: a single model, cropped close enough that the jewellery is clearly visible and in focus. The pieces shown must be real AURNA designs, and a model release and image-usage rights must be on file. No couples, proposals, romance or overlaid text. Everywhere else, imagery stays product-only.

Not allowed: couples, proposals, romance or emotional storytelling, lifestyle scenes elsewhere on the site, stock "artisan" photos, invented heritage.

### 7.3 Aspect ratios

| Use | Ratio |
|---|---|
| Hero | 4:5 (desktop right column), 1:1 or 4:5 (mobile) |
| Category card | 4:5 |
| Product card | 1:1 |
| Editorial card | 16:9 |

---

## 8. Motion

- Subtle and functional: 200–400 ms, `cubic-bezier(0.2, 0, 0, 1)`.
- Allowed: fade-up on section entry (once, 16 px travel), image zoom on hover (1.03), panel and menu slides, button colour transitions.
- Not allowed: sliders, carousels, parallax, auto-playing video, counters, pulsing or shaking elements, sparkle effects.
- Respect `prefers-reduced-motion`: disable entry and zoom animations.

---

## 9. Accessibility (WCAG 2.2 AA)

- Text contrast as in 3.3; never place text over product images.
- One H1 per page; logical heading order.
- All interactive elements keyboard-reachable with a visible focus ring; tap targets ≥ 44 × 44 px.
- Descriptive alt text for products (e.g., "Four-prong solitaire ring in 18K yellow gold with a round laboratory-grown diamond, 45° view"); empty alt for decorative images.
- Form labels, error messages linked to fields (`aria-describedby`), status messages announced (`aria-live`).
- Icon-only controls (WhatsApp, menu, close) have accessible names.
- Language attribute set (`en-IN`); layouts leave room for Hindi text later.

---

## 10. Content rules that affect design

- **Compliance (BIS IS 19469:2025):** use "laboratory-grown diamond" in specs, labels, product cards, the proof strip, forms and page titles. No bare "diamond" implying natural origin. No "LGD", "lab diamond", "lab-grown" (abbreviated), "cultured", "synthetic" or "artificial" in formal copy. Gold shows karat and BIS hallmark (HUID).
- **No prices** on the site at soft launch.
- **No unverified claims or badges:** no "certified", "ethical", "sustainable", "guaranteed" or similar unless confirmed; no fake reviews, ratings, retailer logos or trust seals.
- **Layouts must not depend on text baked into images.** All text is live HTML.
- **Repetition check:** "considered" belongs to the brand line; avoid repeating it in headings.

---

## 11. Page templates (soft launch)

| Page | Section order |
|---|---|
| **Home** | Header → Hero (Deep Navy) → Proof strip → Collections (6 cards) → Selected designs (6–8 products) → Trade partnership (three routes + how it works) → Customise teaser (Hero Mist) → The Science (2 editorial cards) → Retailer support → Catalogue request band + consumer line → Footer. Backgrounds and heights per 5.4 and 5.5. |
| **Collections hub** (`/collections/`) | Page heading with breadcrumb → six collection cards linking to the collection pages → ordering from the collections (feature columns) → catalogue band → footer |
| **Collection page** (`/collections/<name>/`) | Page heading with breadcrumb and enquiry CTA → the designs (product grid, 4 per row) → about this collection (styles, plus a specifications panel) → other collections (link chips) → catalogue band → footer |
| **About us** (`/about/`) | Page heading with breadcrumb → who we are, with an at-a-glance specifications panel → our philosophy (brand line as heading, four principles as feature columns) → catalogue band → footer |
| **Customise** | Heading + intro → what can be customised (feature columns) → retailer route + trade form (`#custom-development`) → consumer route + short form with image upload → how requests are reviewed → footer (no catalogue band: see 5.4) |
| **The Science** | Heading → editorial sections (what it is; HPHT and CVD; origin vs quality; the 4Cs; IGI certificates; BIS hallmarking; quality checks; documents supplied with each piece) → catalogue band → footer |
| **Our Approach** | Heading → three pillars (feature columns) → design and materials → where and how AURNA works → catalogue band → footer |
| **Trade Partnership** | Heading → who AURNA works with → AURNA designs → custom development (summary, links to Customise) → white-label supply (`#white-label`) → loose stones and replenishment (only if offered) → materials and categories → retailer support → how a trade enquiry works → FAQs (accordion) → trade enquiry form + WhatsApp link → footer (no catalogue band: see 5.4) |
| **Request Trade Catalogue** | Short heading and line → short form → what happens next → footer |
| **Contact** | Heading → enquiry selector (trade / consumer) → form → WhatsApp, email, phone, business details → footer |
| **Policy pages** (Privacy, Refunds, Shipping, Service terms) | Short heading panel with breadcrumb and last-updated date → single text column (max 760 px) → footer. No catalogue band. |

---

## 12. Do and don't

| Do | Don't |
|---|---|
| Let white space and product photos lead | Use ivory, cream, gradients or glows |
| Use navy as ink and as the hero and catalogue band backgrounds, and gold as a 2 px detail | Fill any other large area with navy, or any area with gold |
| Show codes and specifications clearly | Hide information in carousels or hover-only states on mobile |
| Keep one primary button per view | Stack competing primary CTAs |
| Use square-cornered buttons (2 px) | Use pills, shadows or glossy effects |
| Show real, true-colour product photos in a fixed angle order | Use renders, stock images or added sparkle |
| Write "laboratory-grown diamond" | Write "lab-grown", "LGD" or a bare "diamond" in specs |
| Keep the WhatsApp route visible on mobile | Rely on copy-to-clipboard or visual-only forms |
| Give the hero its own Deep Navy panel under a white, bordered header | Let header, hero and the next section run together in white |
| Give every section a minimum height and padding inside it | Leave short sections squeezed between tall ones, or stack two short sections |
| Separate light backgrounds with a 1 px border | Rely on White vs Surface Alt alone (too close to separate sections) |
| Use Muted Strong for secondary text on Hero Mist and Surface Alt | Use the standard Muted grey on a tinted background |

---

## 13. Design hand-off checklist

- [ ] Tokens (colour, type, spacing, radius) implemented as CSS variables exactly as above
- [ ] Approved logo files from `img/logo/` used at the sizes in 2.2, with favicons and touch icon in every page `<head>`
- [ ] Only Cormorant Garamond 500/600/500 italic and DM Sans 400/500/600 loaded
- [ ] Header nav reads: Collections · Customise · The Science · About us · Our Approach · Trade Partnership, with Enquire and WhatsApp, on one line from 1200 px
- [ ] Deep Navy backgrounds only in the homepage hero and one catalogue band per page; none on pages that end in their own form (5.4)
- [ ] One primary button per view in page content (header Enquire excepted)
- [ ] Homepage hero is a full-width Deep Navy panel, clearly distinct from the header and proof strip
- [ ] Section backgrounds follow the rhythm in 5.4, with 1 px borders wherever two light backgrounds meet
- [ ] Every section meets the minimum heights and padding in 5.5, using `min-height` (never fixed `height`)
- [ ] No two short sections sit next to each other
- [ ] Gold used only in the logo, 2 px markers and eyebrow text on Deep Navy
- [ ] All product images real, in the fixed angle order, AVIF/WebP with fallbacks
- [ ] Every form has visible labels, consent, error states and an in-place confirmation, and submits to a monitored inbox or CRM
- [ ] Contrast, focus states, tap targets and reduced-motion checked on mobile and desktop
- [ ] No prices, badges, placeholder data or barred terms on any page
