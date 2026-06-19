# Design System — NVRMND Studio Inspired

Electric Brutalist design language. Every style available in each font family.

---

## Font Families

### 1. SF Pro Display
**Stack:** `"SF Pro Display", Arial, sans-serif`
Primary font for all headings, body copy, navigation, and UI.

| Style Name | Weight | Style | File |
|---|---|---|---|
| Ultralight | 100 | Normal | SF-Pro-Display-Ultralight.otf |
| Ultralight Italic | 100 | Italic | SF-Pro-Display-UltralightItalic.otf |
| Thin | 200 | Normal | SF-Pro-Display-Thin.otf |
| Thin Italic | 200 | Italic | SF-Pro-Display-ThinItalic.otf |
| Light | 300 | Normal | SF-Pro-Display-Light.otf |
| Light Italic | 300 | Italic | SF-Pro-Display-LightItalic.otf |
| Regular | 400 | Normal | SF-Pro-Display-Regular.otf |
| Regular Italic | 400 | Italic | SF-Pro-Display-RegularItalic.otf |
| Medium | 500 | Normal | SF-Pro-Display-Medium.otf |
| Medium Italic | 500 | Italic | SF-Pro-Display-MediumItalic.otf |
| Semibold | 600 | Normal | SF-Pro-Display-Semibold.otf |
| Semibold Italic | 600 | Italic | SF-Pro-Display-SemiboldItalic.otf |
| Bold | 700 | Normal | SF-Pro-Display-Bold.otf |
| Bold Italic | 700 | Italic | SF-Pro-Display-BoldItalic.otf |
| Heavy | 800 | Normal | SF-Pro-Display-Heavy.otf |
| Heavy Italic | 800 | Italic | SF-Pro-Display-HeavyItalic.otf |
| Black | 900 | Normal | SF-Pro-Display-Black.otf |
| Black Italic | 900 | Italic | SF-Pro-Display-BlackItalic.otf |

**CSS Usage:**
```css
font-family: "SF Pro Display", Arial, sans-serif;
font-weight: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
font-style: normal | italic;
```

---

### 2. OffBit Trial (Pixel)
**Stack:** `"OffBit Trial", Arial, sans-serif`
Regular pixel typeface for accent text and decorative elements.

| Style Name | Weight | Style | File |
|---|---|---|---|
| Regular | 400 | Normal | OffBitTrial-Regular.ttf |
| Bold | 700 | Normal | OffBitTrial-Bold.ttf |

**CSS Usage:**
```css
font-family: "OffBit Trial", Arial, sans-serif;
font-weight: 400 | 700;
```

---

### 3. OffBit 101 (Pixel Condensed)
**Stack:** `"OffBit 101", Arial, sans-serif`
Condensed pixel typeface. Used for the logo mark and brand wordmark.

| Style Name | Weight | Style | File |
|---|---|---|---|
| 101 Regular | 400 | Normal | OffBitTrial-101.ttf |
| 101 Bold | 700 | Normal | OffBitTrial-101Bold.ttf |

**CSS Usage:**
```css
font-family: "OffBit 101", Arial, sans-serif;
font-weight: 400 | 700;
```

---

### 4. OffBit Dot (Dot Matrix)
**Stack:** `"OffBit Dot", Arial, sans-serif`
Dot-matrix typeface. Used for the oversized footer wordmark.

| Style Name | Weight | Style | File |
|---|---|---|---|
| Dot Regular | 400 | Normal | OffBitTrial-Dot.ttf |
| Dot Bold | 700 | Normal | OffBitTrial-DotBold.ttf |

**CSS Usage:**
```css
font-family: "OffBit Dot", Arial, sans-serif;
font-weight: 400 | 700;
```

---

## Typography Scale

| Token | Font Family | Size | Weight | Line Height | Letter Spacing | Usage |
|---|---|---|---|---|---|---|
| `hero-display` | SF Pro Display | 120px | 600 (Semibold) | 108px (0.9) | -2px | Hero headline — massive above-fold type |
| `hero-display-light` | SF Pro Display | 120px | 300 (Light) | 108px (0.9) | -2px | Hero variant — light weight contrast pairing |
| `section-heading` | SF Pro Display | 51.2px | 400 (Regular) | 58.88px (1.15) | -1.5px | Section-level headings |
| `sub-heading-medium` | SF Pro Display | 48px | 500 (Medium) | 52.8px (1.1) | -1px | Mid-level headings and feature callouts |
| `card-heading` | SF Pro Display | 40px | 500 (Medium) | 44px (1.1) | -1px | Card and block-level headings, service titles |
| `body-regular` | SF Pro Display | 18px | 400 (Regular) | 20px (1.1) | normal | Primary body copy, testimonials |
| `body-light` | SF Pro Display | 22px | 300 (Light) | 30.8px (1.4) | -0.1px | Introductory paragraphs, newsletter text |
| `ui-label` | SF Pro Display | 16px | 400 (Regular) | 16px (1.0) | 0.2px | Navigation links, button labels, UI micro-copy |
| `caption-meta` | SF Pro Display | 13.6px | 400 (Regular) | 13.6px (1.0) | 0.2px | Footer metadata, timestamps, small labels, nav |
| `logo-pixel` | OffBit 101 | 16px | 400 (Regular) | 16px (1.0) | 0.8px | Brand logo mark in nav |
| `footer-wordmark` | OffBit Dot | 180px | 700 (Bold) | 0.85 | -2px | Oversized footer wordmark |

---

## Color Tokens

| Token | Hex | HSL | Usage |
|---|---|---|---|
| `--color-bg` | `#d9d9d9` | `hsl(0 0% 85%)` | Page background, main surface |
| `--color-surface` | `#f4f4f4` | `hsl(0 0% 96%)` | Card surfaces, subtle section backgrounds |
| `--color-white` | `#ffffff` | `hsl(0 0% 100%)` | Button text, icon fills, overlays |
| `--color-black` | `#222222` | `hsl(0 0% 13%)` | Primary text, headings, borders, foreground |
| `--color-blue` | `#033fed` | `hsl(228 96% 47%)` | CTA buttons, nav links, interactive, accent highlights |
| `--color-green` | `#befd66` | `hsl(87 97% 70%)` | Logo background, secondary brand highlight |
| `--color-border` | `#bbbdc1` | `hsl(225 3% 73%)` | Divider lines and subtle border strokes |
| `--color-divider` | `#e4e4e4` | `hsl(0 0% 89%)` | Footer and section divider lines (60% alpha) |

---

## Spacing System (8px base grid)

| Token | Value | Usage |
|---|---|---|
| `xs` | 4px | Micro gaps, icon padding |
| `sm` | 8px | Small gaps, badge padding |
| `nav-padding-bottom` | 4.8px | Nav bottom padding |
| `md` | 16px | Standard inner padding |
| `nav-padding-v` | 19.2px | Nav vertical padding |
| `lg` | 24px | Component padding, section gutters |
| `xl` | 32px | Section internal spacing |
| `2xl` | 48px | Between components |
| `3xl` | 64px | Section padding top/bottom |
| `4xl` | 96px | Hero/section large padding |
| `5xl` | 128px | Maximum section separation |

---

## Border Radius

| Token | Value | Usage |
|---|---|---|
| `none` | 0px | All primary UI — buttons, cards, inputs, nav |
| `micro` | 2px | Hairline corner, minimal rounding |
| `small` | 4px | Subtle corner |
| `input-mixed` | `0px 2px 2px 4px` | Mixed-radius inputs |
| `pill` | 100px | Large pill shapes |

---

## How to Use Each Font Weight

### SF Pro Display — When to use each weight

| Weight | Class/Style | Use When |
|---|---|---|
| 100 (Ultralight) | `font-weight: 100` | Decorative large text, airy editorial headings |
| 200 (Thin) | `font-weight: 200` | Editorial subtext, whisper-level labels |
| 300 (Light) | `font-weight: 300` | Hero variant, body-light, intro paragraphs |
| 400 (Regular) | `font-weight: 400` | All body copy, UI labels, captions, nav links |
| 500 (Medium) | `font-weight: 500` | Card titles, service headings, mid-level callouts |
| 600 (Semibold) | `font-weight: 600` | Hero headline, section headings with impact |
| 700 (Bold) | `font-weight: 700` | Strong emphasis, CTA text, pull quotes |
| 800 (Heavy) | `font-weight: 800` | Maximum impact display, used sparingly |
| 900 (Black) | `font-weight: 900` | Ultra-heavy accent only, extreme contrast |

### OffBit Family — When to use each variant

| Family | Use When |
|---|---|
| OffBit 101 Regular/Bold | Logo wordmark, brand identity text, nav logo |
| OffBit Dot Regular | Decorative wordmarks, footer branding at large sizes |
| OffBit Dot Bold | **Footer giant wordmark** — the statement piece |
| OffBit Trial Regular | Accent labels, ticket-style callouts, editorial elements |
| OffBit Trial Bold | Stronger pixel accents, ticket headings |

---

## Grid System

- **Columns:** 4 equal columns with vertical border lines
- **Gutter:** 0px (columns touch, borders create visual separation)
- **Border color:** `var(--color-border)` — `#bbbdc1`
- **Responsive:** Collapses to 1 column on mobile, 2 columns on tablet

```css
display: grid;
grid-template-columns: repeat(4, 1fr);
```

---

## Component Patterns

### Badge
```css
background-color: var(--color-blue);
color: var(--color-white);
font-size: 11px;
font-weight: 400;
letter-spacing: 0.8px;
text-transform: uppercase;
padding: 4px 8px;
border-radius: 0;
```

### Primary CTA Button
```css
background-color: var(--color-blue);
color: var(--color-white);
padding: 12px 20px;
font-size: 13.6px;
font-weight: 400;
letter-spacing: 0.2px;
border-radius: 0;
border: none;
```

### Logo Box
```css
background-color: var(--color-green);
border: 1.5px solid var(--color-black);
padding: 6px 10px;
font-family: "OffBit 101", Arial, sans-serif;
font-size: 16px;
letter-spacing: 0.8px;
```

### Input Field
```css
border: 1px solid var(--color-border);
background-color: var(--color-white);
padding: 10px 12px;
font-size: 13.6px;
border-radius: 0;
outline: none;
```

---

## Interaction / Outline Evidence

| Signal | Value |
|---|---|
| `outline-color` | `#222222` / `#033fed` / `#ffffff` |
| `outline-width` | `3px` |
| `outline-offset` | `0px` |
| Hover transitions | `color 0.15s` |

---

## Responsive Breakpoints

| Name | Width | Behavior |
|---|---|---|
| Mobile | ≤ 479px | Single column, reduced type scale |
| Mobile | ≤ 767px | Single column |
| Tablet | ≥ 768px | 2-column grid, increased spacing |
| Desktop | ≥ 1024px | Full 4-column layout |
| Large Desktop | ≥ 1280px | Maximum layout density |
