# Lameh Design System — LLM-Readable Specification

This document is a self-contained, fact-dense specification of the Lameh Design System (originally a Figma file for a Saudi financial-research / company-intelligence product). It is intended as input to an LLM that needs to generate, audit, or convert UI that conforms to this system. Numbers are exact; do not paraphrase tokens.

---

## 1. Design language summary

- **Product domain**: financial research, company intelligence, board reports, market data, AI-generated analysis.
- **Primary mode**: dark UI; light mode is fully supported as a mirror, never as a separate style.
- **Brand color**: a vivid emerald green (`#00D991`). Reserved for CTAs, focus, and "live / on-brand" affordances. Never used on plain text in dark mode (use `#4CDF95` instead).
- **Tone**: dense, data-rich, calm. Heavy use of tabular numbers, sparklines, subtle grids, and selective brand glow on active CTAs.
- **Type families**: `DM Sans` (everything by default) and `Space Grotesk` (brand eyebrows only). Arabic headings would use `Janna LT Bold`.
- **Geometry**: base-4 spacing, 1.5–4 px stroke icons, **sharp corners** — radii 0 / 2 / 3 / 4 px only, with `radius-pill` reserved for the switch track. The system never exceeds 4 px corner rounding.
- **Motion**: short (140–320 ms), eased with `cubic-bezier(0.2, 0, 0, 1)`; brand glow on hover for primary CTAs.

---

## 2. Color

### 2.1 Primitive ramps (13 steps each — `0`, `0.5`, `1` … `9`, `9.5`, `10`)

Use **only inside semantic tokens** unless a one-off chart/data viz needs a raw hue. Step `0` is white, `10` is black; the half-steps (`0.5`, `9.5`) provide soft surface tints.

```
Neutral
  0    #FFFFFF   0.5  #EEF0F2   1    #DFE0E2   2    #C8CACD
  3    #A9ACB2   4    #93979F   5    #777A80   6    #5A5D61
  7    #3E3F43   8    #303133   9    #212224   9.5  #131414   10  #000000

Brand  (emerald — primary CTA / live / on-brand)
  0    #FFFFFF   0.5  #E6FDF5   1    #CCFAEB   2    #99F5D7
  3    #66F0C3   4    #33EAAF   5    #00D991   6    #00B378
  7    #008C5E   8    #006645   9    #00402B   9.5  #002B1D   10  #000000

Accent (deep green — secondary brand, used for headings on light bg)
  0    #FFFFFF   0.5  #E8F6F0   1    #C8EADA   2    #9DD6BD
  3    #65BF99   4    #43B290   5    #229876   6    #0E7D5E
  7    #066147   8    #024531   9    #012B1D   9.5  #051A12   10  #000000

Warning  (amber)
  0    #FFFFFF   0.5  #FFF8E6   1    #FFEEBF   2    #FFDC7E
  3    #FFC83D   4    #FFB02E   5    #E08A00   6    #B06700
  7    #7A4700   8    #4A2B00   9    #2A1800   9.5  #1B0F00   10  #000000

Error    (red)
  0    #FFFFFF   0.5  #FDE8E9   1    #FBCCCD   2    #F59697
  3    #EE5A5D   4    #EE2E30   5    #C91F24   6    #A01619
  7    #770F12   8    #4D090B   9    #2A0506   9.5  #1C0303   10  #000000

Info     (cyan / blue)
  0    #FFFFFF   0.5  #E7F4FB   1    #BFDEF0   2    #82C0E1
  3    #5BC0EB   4    #2FA0D6   5    #1382B8   6    #0C6595
  7    #084970   8    #052E48   9    #021726   9.5  #030E17   10  #000000
```

Conventions:
- Lower numbers are lighter; higher numbers are darker.
- Brand and Accent are both greens; Brand is brighter (interactive), Accent is deeper (decorative).
- There is **no** "Success" ramp — semantic `success` references Brand/Accent steps.

### 2.2 Semantic tokens (light + dark)

All product UI references semantic tokens, never primitives. Dark is the default.

#### Surfaces
| Token | Dark | Light |
|---|---|---|
| `bg-page` | `Neutral 9.5` `#131414` | `Neutral 0` `#FFFFFF` |
| `bg-surface` | `Neutral 9` `#212224` | `Neutral 0` `#FFFFFF` |
| `bg-surface-2` | `Neutral 8` `#303133` | `#F7F7F8` |
| `bg-surface-3` | `Neutral 7` `#3E3F43` | `Neutral 0.5` `#EEF0F2` |
| `bg-subtle` | `Neutral 9` `#212224` | `Neutral 0.5` `#EEF0F2` |
| `bg-muted` | `Neutral 8` `#303133` | `Neutral 1` `#DFE0E2` |
| `bg-hover` | `Neutral 8` `#303133` | `Neutral 0.5` `#EEF0F2` |
| `bg-pressed` | `Neutral 7` `#3E3F43` | `Neutral 1` `#DFE0E2` |
| `bg-selected` | `Brand 9.5` `#002B1D` | `Brand 0.5` `#E6FDF5` |
| `bg-disabled` | `Neutral 8` `#303133` | `Neutral 1` `#DFE0E2` |
| `bg-inverse` | `Neutral 0` `#FFFFFF` | `Neutral 9.5` `#131414` |
| `bg-overlay` | `rgba(0,0,0,0.64)` | `rgba(19,20,20,0.40)` |

#### Text
| Token | Dark | Light |
|---|---|---|
| `text-primary` | `#FFFFFF` | `#131414` |
| `text-secondary` | `#DFE0E2` | `#3E3F43` |
| `text-tertiary` | `#A9ACB2` | `#5A5D61` |
| `text-muted` | `#93979F` | `#777A80` |
| `text-disabled` | `#777A80` | `#93979F` |
| `text-inverse` | `#131414` | `#FFFFFF` |
| `text-brand` | `#00D991` (Brand 5) | `#008C5E` (Brand 7) |
| `text-on-brand` | `#002B1D` | `#002B1D` |
| `text-link` | `#5BC0EB` (Info 3) | `#0C6595` (Info 6) |
| `text-success` | `#4CDF95` | `#076338` |
| `text-warning` | `#FFC83D` | `#7A4700` |
| `text-error` | `#EE5A5D` | `#A01619` |

#### Borders
| Token | Dark | Light |
|---|---|---|
| `border-subtle` | `Neutral 8` | `Neutral 0.5` |
| `border-default` | `Neutral 7` | `Neutral 1` |
| `border-emphasis` | `Neutral 6` | `Neutral 2` |
| `border-strong` | `Neutral 3` | `Neutral 4` |
| `border-brand` | `Brand 5` `#00D991` | `Brand 6` `#00B378` |
| `border-error` | `Error 4` `#EE2E30` | `Error 4` `#EE2E30` |
| `border-focus` | `Brand 5` `#00D991` | `Brand 6` `#00B378` |
| `border-disabled` | `Neutral 7` | `Neutral 1` |

#### Status surfaces
| Token | Dark | Light |
|---|---|---|
| `surface-success` | `#022114` | `#E6FDF5` |
| `surface-warning` | `Warning 9` `#2A1800` | `#FFF8E6` |
| `surface-error`   | `Error 9` `#2A0506` | `#FDE8E9` |
| `surface-info`    | `Info 9` `#021726` | `#E7F4FB` |

#### Action (brand interactions)
| Token | Dark | Light |
|---|---|---|
| `action-brand` | `Brand 5` `#00D991` | `Brand 6` `#00B378` |
| `action-brand-hover` | `Brand 4` `#33EAAF` | `Brand 7` `#008C5E` |
| `action-brand-pressed` | `Brand 6` `#00B378` | `Brand 8` `#006645` |
| `action-brand-subtle` | `Brand 9.5` `#002B1D` | `Brand 0.5` `#E6FDF5` |
| `action-brand-text` | `Brand 9.5` `#002B1D` (text on action-brand) | `#FFFFFF` |

### 2.3 Pairing rules (AA)
- `bg-page` × `text-primary` ≥ 16.0:1.
- `action-brand` × `action-brand-text` ≥ 7.0:1 (always tested).
- Body text on `bg-surface-2` uses `text-secondary` (≥ 7:1), not `text-primary`.
- Status messages always pair `surface-*` with the matching `text-*` (e.g. `surface-error` + `text-error`).

---

## 3. Typography

Font: `DM Sans, system-ui, -apple-system, Segoe UI, Roboto, sans-serif` (default). Eyebrow only: `Space Grotesk, DM Sans, sans-serif`. Arabic headings: `Janna LT Bold`.

Format: `role / step — weight — size / line-height — letter-spacing`. Letter-spacing is in px (Figma units); divide by font-size for `em` if needed.

| Token | Weight | Size | LH | LS | Notes |
|---|---:|---:|---:|---:|---|
| `display-lg` | 700 Bold | 40 | 48 | -1.5 | Hero headlines |
| `display-md` | 700 Bold | 32 | 40 | -1.0 | Page-level titles |
| `display-sm` | 700 Bold | 28 | 36 | -0.5 | Stat-card values, panel titles |
| `heading-xl` | 600 SemiBold | 24 | 32 | -0.5 | Section openers |
| `heading-lg` | 600 SemiBold | 22 | 28 | -0.5 | Card titles, modal titles |
| `heading-md` | 600 SemiBold | 20 | 28 | -0.25 | Subsection |
| `heading-sm` | 600 SemiBold | 18 | 24 | -0.25 | Card headers |
| `heading-xs` | 600 SemiBold | 16 | 22 | 0 | Small section titles |
| `body-lg` | 500 Medium | 16 | 24 | 0 | Marketing / docs body |
| `body-md` | 500 Medium | 14 | 20 | 0 | **Default app body** |
| `body-sm` | 500 Medium | 13 | 18 | 0 | Dense tables, captions |
| `label-lg` | 600 SemiBold | 14 | 20 | 0 | Button text, inline labels |
| `label-md` | 600 SemiBold | 12 | 16 | 0.25 | Form labels, badges |
| `label-sm` | 600 SemiBold | 11 | 14 | 0.5 | Sub-labels |
| `label-xs` | 600 SemiBold | 10 | 14 | 0.5 | Tiny chips |
| `caption-md` | 500 Medium | 12 | 16 | 0 | Helper text, timestamps |
| `caption-sm` | 500 Medium | 11 | 14 | 0 | Secondary timestamps |
| `caption-xs` | 500 Medium | 10 | 14 | 0.5 | Footnote |
| `overline` | 600 SemiBold | 11 | 16 | 1.5 | UPPERCASE, section overlines |
| `eyebrow` | 700 Bold (Space Grotesk) | 12 | 16 | 2.0 | UPPERCASE, brand eyebrows only |

Rules:
- Numbers use `font-variant-numeric: tabular-nums` everywhere — KPIs, tables, time displays.
- `eyebrow` is always uppercase and uses Space Grotesk; never use it without a colored or accent context.
- Headings never go below 16px (`heading-xs`). For sub-16px hierarchies, use `label-*`.
- Body text should never wrap below `body-sm`. Use `caption-*` for non-flowing metadata only.

---

## 4. Spacing (base-4)

```
0      0 px       1      4 px       4     16 px       10    40 px
px     1 px       1.5    6 px       5     20 px       12    48 px
0.5    2 px       2      8 px       6     24 px       16    64 px
                  2.5   10 px       7     28 px       20    80 px
                  3     12 px       8     32 px       24    96 px
```

Conventions:
- Inner padding of cards / form rows: `space-4` (16px).
- Gap between fields in a form: `space-4` (16px) vertical, `space-3` (12px) horizontal.
- Card-to-card gutter on a grid: `space-3` or `space-4`.
- Section vertical rhythm: `space-8` between content blocks, `space-12`–`space-16` between sections.
- Tight chip / pill inner padding: `space-2` to `space-3`.
- The half-steps (`0.5`, `1.5`, `2.5`) exist for icon-text alignment and dense rows only; avoid them in marketing layouts.

---

## 5. Radius

Lameh corners are sharp and architectural — small components stay at 2 px, medium controls use 3 px, and large containers cap at 4 px. Tooltips have no radius at all. `radius-pill` is reserved for the switch track and nothing else.

```
none   0 px       sm    3 px        pill  9999 px  (switch track only)
xs     2 px       md    4 px (max)
```

When to use:
- `radius-none` → tooltips and any sharp data-viz edges.
- `radius-xs` (2 px) → small buttons, chips, badges, tags, checkboxes, small inputs, pagination buttons, progress bars, news thumbnails.
- `radius-sm` (3 px) → default — medium buttons, icon buttons, inputs / select, segmented tab tracks.
- `radius-md` (4 px) → maximum — cards, modals, alerts, empty states, panels, large buttons, data tables, large inputs.
- `radius-pill` → switch track (functional, not stylistic).

Sizing rule for sizeable components: the radius scales with the size of the control. Small variant uses `radius-xs`, medium uses `radius-sm`, large uses `radius-md`. Never exceed `radius-md`.


---

## 6. Elevation, focus, and glow

Numeric shadows are reconstructions of the named Figma styles (the Figma metadata only carried labels). Keep these values stable; if a designer disputes a value, update everywhere from a single token.

```
shadow-xs    0 1px 1px rgba(0,0,0,0.16)
shadow-sm    0 1px 2px rgba(0,0,0,0.20),  0 1px 2px rgba(0,0,0,0.12)
shadow-md    0 4px 8px rgba(0,0,0,0.24),  0 1px 2px rgba(0,0,0,0.16)
shadow-lg    0 12px 24px rgba(0,0,0,0.32), 0 2px 6px rgba(0,0,0,0.20)
shadow-xl    0 24px 48px rgba(0,0,0,0.36), 0 4px 12px rgba(0,0,0,0.24)
shadow-2xl   0 32px 64px rgba(0,0,0,0.48), 0 8px 24px rgba(0,0,0,0.32)

glow-brand        0 0 0 1px rgba(0,217,145,0.32), 0 0 24px rgba(0,217,145,0.32)
glow-brand-soft   0 0 32px rgba(0,217,145,0.16)
focus-brand       0 0 0 3px rgba(0,217,145,0.32)
focus-error       0 0 0 3px rgba(238,46,48,0.32)
```

When to use:
- `shadow-xs` → chips, tags, inline pills.
- `shadow-sm` → cards at rest.
- `shadow-md` → hovered cards, dropdown menus.
- `shadow-lg` → popovers, tooltips, floating panels.
- `shadow-xl` → modals.
- `shadow-2xl` → full-screen overlays / immersive search.
- `glow-brand` / `glow-brand-soft` → reserved for hovered brand CTAs and active filter chips.
- `focus-brand` → all focusable elements, 3 px outset, never replaced by `outline`.

---

## 7. Motion

```
duration-instant   80 ms     duration-base   200 ms
duration-fast     140 ms     duration-slow   320 ms

ease-standard    cubic-bezier(0.2, 0, 0, 1)
ease-emphasized  cubic-bezier(0.2, 0, 0, 1.2)
```

Rules:
- Hover / focus transitions: `duration-fast` + `ease-standard`.
- Open / close (modals, popovers): `duration-base` + `ease-emphasized` for entry, `ease-standard` for exit.
- Layout shifts (panels, accordions): `duration-slow` + `ease-standard`.
- Never animate `color` and `background` simultaneously over more than `duration-fast`.

---

## 8. Layout grid

Three breakpoints carried over from the Figma "Responsive Logic" page:

```
mobile     390 px       4 cols   16 gutter   16 margin
tablet    1024 px       8 cols   16 gutter   32 margin
desktop   1728 px      12 cols   24 gutter   64 margin (surface 1500 wide)
wide      ≥1920 px     same as desktop, centered
```

- The 12-column desktop grid is the default for the workspace. Sidebar panels never break the grid; they sit alongside the surface.
- Content max-width on desktop: 1500 px (= column 1 to column 12, ignoring side gutters).

---

## 9. Iconography

Library: `lucide-react` (1.75 px stroke). Sizes:
- Inline icons (in text or buttons): 16 px.
- Form / button leading icons: 18 px.
- Toolbar / header icons: 20–22 px.
- Empty-state / hero icons: 24–32 px.

Color: inherits `currentColor` from the parent text token by default. Never recolor an icon outside the active text token unless it represents a status (then it uses `text-success`/`warning`/`error`).

Names referenced in the Lameh source include: `arrow-right`, `arrow-down-to-line`, `arrow-left-from-line`, `bell`, `check`, `chevron-down`, `chevron-right`, `chevron-up`, `columns-02`, `copy`, `ellipsis`, `file-down`, `folder`, `fullscreen`, `grip-vertical`, `hard-drive-upload`, `landmark`, `layout-dashboard`, `list`, `list-filter`, `maximize-2`, `megaphone`, `message-circle-question`, `mic`, `minus`, `panel-left`, `panel-right`, `panel-right-dashed`, `pencil-ruler`, `plus`, `rotate-cw`, `search-md`, `square-sigma`, `table`, `trending-down`, `trending-up`, `undo-2`, `upload-02`, `waves`, `x`, `zoom-in`, `zoom-out`, `play`, `shield-check`, `shield-warning`, `tick-circle`.

---

## 10. Component catalogue

Each entry specifies: purpose, props, variants, sizes, states, accessibility, and a canonical example. Use semantic tokens only — never primitives.

### 10.1 Button
- **Purpose**: trigger a user action.
- **Props**: `variant: primary | secondary | ghost | link`, `size: sm | md | lg`, `tone: default | danger`, `leftIcon`, `rightIcon`, `loading: boolean`, `fullWidth: boolean`, `disabled: boolean`.
- **Heights**: sm 28, md 36, lg 44.
- **Padding**: sm `0 10px`, md `0 14px`, lg `0 18px`.
- **Radius**: `radius-xs` (sm) / `radius-sm` (md) / `radius-md` (lg).
- **Type**: `label-lg` (md / lg), `label-md` (sm).
- **States**:
  - Hover (primary): `action-brand-hover` + `glow-brand-soft`.
  - Pressed: `action-brand-pressed`, translateY(0.5px).
  - Focus: `focus-brand`.
  - Disabled: opacity 0.5, no events.
  - Loading: spinner replaces leftIcon; disabled.
- **Rules**:
  - Exactly **one** primary button per visible decision. Other actions use `secondary` / `ghost`.
  - Use `tone="danger"` for destructive actions; pair with a confirmation modal for irreversible ones.
  - `link` variant inherits `text-brand`; never use for primary CTAs.
- **A11y**: must contain visible text or an `aria-label`; loading state announces "Loading" via the spinner's role.

### 10.2 Icon Button
- **Purpose**: icon-only trigger.
- **Props**: `icon` (required), `aria-label` (**required**), `size: sm | md | lg`, `variant: default | ghost | primary`.
- **Sizes**: sm 28×28, md 36×36, lg 44×44.
- **Radius**: `radius-xs` (sm) / `radius-sm` (md) / `radius-md` (lg).
- **Rules**: never use without `aria-label`. Pair with a Tooltip whenever the action is non-obvious.

### 10.3 Input
- **Purpose**: single-line text input.
- **Props**: `label`, `hint`, `error`, `size: sm | md | lg`, `leftAddon`, `rightAddon`, `fullWidth`, `required`, all native `<input>` attrs.
- **Heights**: sm 28, md 36, lg 44.
- **Padding**: sm `0 10px`, md `0 12px`, lg `0 14px`.
- **Radius**: `radius-xs` (sm) / `radius-sm` (md) / `radius-md` (lg).
- **Type**: `body-md`.
- **States**:
  - Default: `border-default`, `bg-surface`.
  - Hover: `border-emphasis`.
  - Focus: `border-focus` + `focus-brand`.
  - Invalid: `border-error`; on focus, `focus-error`.
  - Disabled: `bg-disabled`, `text-disabled`.
- **Helper / error text**: `caption-sm`, color `text-tertiary` (helper) or `text-error` (error).
- **Rules**: every input needs a label (visible or `aria-label`). Place icons in `leftAddon` (search, mail, lock) at 16 px.

### 10.4 Textarea
- Same visual contract as Input, min-height 96 px, vertical resize.

### 10.5 Select
- **Purpose**: native dropdown.
- **Props / heights / radius**: identical to Input.
- **Visual**: built-in chevron-down at right, 14 px, color `Neutral 3`. Replace via background-image data-URI if recoloring.

### 10.6 Checkbox / Radio / Switch
- **Box**: 18 × 18, `radius-xs` (2 px, checkbox), 50% (radio), 36 × 20 pill switch (the only pill in the system).
- **Default border**: `border-emphasis`, 1.5 px.
- **Checked**: `action-brand` fill / `action-brand-text` checkmark for checkbox; `action-brand` fill for radio dot and switch thumb.
- **Indeterminate** (checkbox only): same fill as checked, 8×2 px bar instead of check.
- **Focus**: `focus-brand` ring on the box (not the label).
- **A11y**: label text is always associated via the wrapping `<label>`. Switch uses `role="switch"`.

### 10.7 Badge
- **Purpose**: read-only status label.
- **Props**: `tone: neutral | brand | success | warning | error | info`, `variant: subtle | solid`, `size: sm | md | lg`, `dot: boolean`, `leftIcon`.
- **Heights**: sm 20, md 22, lg 26.
- **Radius**: `radius-xs` (2 px).
- **Type**: `label-sm` (sm), `label-md` (md / lg).
- **Subtle background**: `surface-*` token, text `text-*` token.
- **Solid**: `action-brand` for brand; status ramp step 5 for the rest, white text.
- **Rule**: never use solid for "Active" / "Live" — use subtle + dot.

### 10.8 Tag (Chip)
- **Purpose**: removable / selectable filter pill.
- **Props**: `selected`, `clickable`, `onRemove`, `leftIcon`.
- **Height**: 26 px. **Radius**: `radius-xs` (2 px). **Background**: `bg-surface-2`. **Border**: `border-subtle`.
- **Selected**: `action-brand-subtle` background, `text-brand` text, `glow-brand-soft`.
- **Rule**: never combine `clickable` and `onRemove` on the same chip unless `onRemove` lives in a dedicated affordance area.

### 10.9 Avatar
- **Sizes**: xs 20, sm 28, md 36, lg 48, xl 64.
- **Shape**: circle by default, `square` prop for company logos.
- **Fallback**: 2-letter initials from `name`, `label-md` weight, color `text-secondary`, background `bg-surface-3`.
- **AvatarGroup**: 8 px negative left margin, 2 px page-color ring between avatars.

### 10.10 Card
- **Props**: `interactive`, `padding: sm | md | lg`.
- **Background**: `bg-surface`. **Border**: `border-subtle`. **Radius**: `radius-md` (4 px). **Shadow**: `shadow-sm` (rest), `shadow-md` (hover when interactive).
- **Header**: 16 px / 20 px padding, bottom border `border-subtle`. Title `heading-sm`. Subtitle `caption-md` in `text-tertiary`.
- **Body**: 20 px padding (md). Type `body-md` in `text-secondary`.
- **Footer**: 16 px / 24 px padding, top border `border-subtle`, background `bg-surface-2`.
- **Rule**: cards never have a coloured background; the surface is always neutral. Status comes from badges and inline text.

### 10.11 Alert
- **Tones**: `neutral | brand | info | success | warning | error`. Each maps to a `surface-*` background and `text-*` icon color.
- **Anatomy**: leading icon (18 px, status-colored) · title (`label-lg`) · description (`body-sm`, `text-secondary`) · optional actions row · optional close (×).
- **Radius**: `radius-md` (4 px). **Padding**: 12 / 14 px.
- **Rule**: alerts are dismissible only when the message is non-blocking. Errors that require user action stay until resolved.

### 10.12 Tooltip
- **Background**: `bg-inverse`. **Text**: `text-inverse`, `caption-md`. **Padding**: 6 / 10. **Radius**: `radius-none` (intentionally 0 — tooltips are sharp). **Shadow**: `shadow-lg`.
- **Delay**: 120 ms open, instant close.
- **Placement**: top by default; switch sides only when clipped.
- **Rule**: a tooltip is read-only metadata. Anything actionable goes in a popover, not a tooltip.

### 10.13 Tabs
- **Variants**:
  - `segmented` (formerly `pill`): track `bg-surface-2`, padding 4, track radius `radius-sm` (3 px), tabs 28 px high with radius `radius-xs` (2 px). Active tab: `bg-surface`, `text-primary`, `shadow-sm`. The historical `pill` variant name still works for backwards compatibility.
  - `underline`: 40-px-tall tabs, 2 px bottom border on active in `action-brand`, text `text-brand` on active.
- **Inactive text**: `text-tertiary`. **Hover**: `text-primary`.
- **A11y**: `role="tablist"` / `role="tab"` / `aria-selected` / `role="tabpanel"`; tab order via `tabIndex={selected ? 0 : -1}`.

### 10.14 Pagination
- **Anatomy**: prev — page buttons — next. Button 32 × 32, radius `radius-xs` (2 px), font `label-md`.
- **Active**: `action-brand-subtle` background, `text-brand` text.
- **Ellipsis**: rendered when more than 7 pages and current is far from the edges; siblings default to 1.
- **Disabled prev / next**: `text-disabled`, no hover.

### 10.15 Modal
- **Overlay**: `bg-overlay`, fades in 200 ms.
- **Dialog**: `bg-surface`, `border-subtle`, `radius-md` (4 px), `shadow-xl`, pop animation 200 ms `ease-emphasized`.
- **Max widths**: sm 400, md 520 (default), lg 720, xl 960.
- **Header**: title `heading-md`, description `body-sm` in `text-tertiary`, close `IconButton` 32×32 ghost.
- **Footer**: `bg-surface-2`, right-aligned button group; `secondary` left, primary right.
- **Behavior**: ESC closes; outside click closes; body scroll locked while open; focus moves into the dialog on open.

### 10.16 Empty State
- **Anatomy**: circular illustration tile 64 × 64 (`action-brand-subtle` background, `text-brand` icon, 28 px) · title `heading-sm` · description `body-md` in `text-tertiary` (max 46ch) · optional actions row.
- **Container**: dashed `border-default`, `radius-md` (4 px), padding 40 / 24, background `bg-surface`.

### 10.17 Spinner / Progress
- **Spinner**: circular, 14 / 18 / 28 px, 2–3 px ring, top-color `action-brand`, base `border-default`, 0.7 s linear rotate.
- **Progress bar**: 6 px tall, `bg-surface-3` track, `action-brand` fill. Indeterminate: 33% wide, 1.4 s ease-in-out shuttle.

### 10.18 Data Table
- **Wrapper**: `bg-surface`, `border-subtle`, `radius-md` (4 px), internal scroll.
- **Header**: sticky, `bg-surface-2`, `label-md`, `text-tertiary`, 10 / 14 padding, bottom border `border-subtle`.
- **Body row**: 12 / 14 padding, `body-sm`. Hover row: `bg-hover`. Last row: no bottom border.
- **Numeric cells**: `text-align: right`, `font-variant-numeric: tabular-nums`, `text-primary`.
- **Positive deltas**: `text-success` (with optional `+` sign). Negative: `text-error`.

---

## 11. Composition patterns

### 11.1 Stat card
- 4-up grid (`grid-template-columns: repeat(4, 1fr)`, gap `space-3`).
- Each tile: `bg-surface`, `border-subtle`, `radius-md` (4 px), 16/18 padding, min-height 96.
- Eyebrow (`eyebrow` token, `text-tertiary`) → value (`display-sm`, `text-primary`, tabular-nums) → meta row (`caption-md`, `text-tertiary`) with an inline delta chip (`label-sm`, `text-success` or `text-error`) and helper text.

### 11.2 Company card
- Header: square `Avatar` (md) + name (`heading-sm`) + sub (`caption-md`, `text-tertiary`) + status `Badge` (success/error, dot).
- Sparkline: SVG, height 48, `viewBox 0 0 100 100`, `preserveAspectRatio="none"`. Stroke 2 in `action-brand` for up, `text-error` for down.
- 2×2 KPI grid below: each cell has an eyebrow (`label-xs` opt) and value (`label-lg`, `text-primary`, tabular-nums). The bottom-right cell is reserved for a "Open" ghost button with `chevron-right` / `arrow-right` icon.

### 11.3 News list
- Stack of news rows, gap `space-3`. Each row: 88×88 thumb (`radius-xs` = 2 px, gradient placeholder using `Brand 9` + `Info 9`) + body. Body: tag `Badge` (info, sm) · source · timestamp on the meta row (`caption-sm`, `text-tertiary`), then title (`label-lg`) and 2-line clamp snippet (`body-sm`, `text-secondary`).

### 11.4 Filter bar
- Row container: `bg-surface`, `border-subtle`, `radius-md` (4 px), padding `space-3`.
- Left: Input with `search` leading icon, flex-grow.
- Middle: row of `Tag clickable` filters; first is the "All" filter with a `filter` icon.
- Right: secondary "Save alert" with `bell` icon, then primary "Run analysis".

---

## 12. Accessibility checklist

1. All interactive elements receive `focus-brand` (3 px outset) on `:focus-visible`. Never replace with `outline`.
2. Color contrast pairs are pre-verified against WCAG AA — `text-primary` / `bg-page`, `action-brand` / `action-brand-text`, status surface + matching text.
3. Every form field has a label (visible or `aria-label`); `aria-invalid` on errors; `aria-describedby` for help / error text.
4. Modals trap focus, restore focus on close, lock body scroll, respect ESC and overlay click.
5. Tabs implement `role="tablist"`, manage `aria-selected`, expose `role="tabpanel"`, support keyboard arrows (left/right rotate).
6. Tooltips are `role="tooltip"`, linked via `aria-describedby`, mounted only after a 120 ms hover/focus delay.
7. Buttons that show a loading spinner remain disabled and announce loading via the spinner's `role="status"` + `aria-label`.
8. Icons that carry meaning have an accessible name (parent button label or `aria-label`); decorative icons use `aria-hidden`.

---

## 13. Tone and voice

- **Active, telegraphic, numerical**: "Earnings beat consensus by 4.2% on stronger downstream margins."
- **No exclamation marks**, no marketing fluff. Show, don't sell.
- **Sentence case** for titles and buttons ("Run analysis", not "Run Analysis").
- **Numbers**: use SAR with a space ("SAR 1.42B"), tabular-nums, percent without space ("+12.4%"), Δ with arrow when space allows.
- **Time**: relative ("12 min ago", "1 h ago"), switch to absolute beyond 7 days.

---

## 14. Do / Don't

**Do**
- Reference only semantic tokens in product UI (`--text-primary`, `--bg-surface`, `--action-brand`).
- Pair every brand action with the matching focus ring (`focus-brand`) and the soft glow on hover.
- Use tabular numerals everywhere a digit is shown.
- Lean on subtle badges + dot for "live" / "active"; reserve solid badges for assignments ("Premium", "Beta").

**Don't**
- Don't recolor icons except for status (success / warning / error).
- Don't use Brand 5 (`#00D991`) as text on a white background — switch to Brand 7.
- Don't introduce new shadows; only the six elevation tokens are allowed.
- Don't put more than one primary button in a row of actions.
- Don't introduce a radius greater than 4 px. The Lameh system is sharp; large `radius-2xl`/`3xl` rounding belongs to other systems.
- Don't use `radius-pill` on anything except the switch track. Badges, tags, and status dots are 2-px rectangles, not pills.
- Don't show a tooltip and a popover on the same trigger.

---

## 15. Token export quick reference

When generating CSS, emit these custom properties on `:root` (dark default) and override the same names under `[data-theme="light"]`. The full set is given in §2–§7. When generating JS objects, use camelCase mirroring the dash-separated tokens (`bgPage`, `textPrimary`, `actionBrand`, `radiusMd`, `shadowMd`).

When generating Tailwind: map `colors.brand.500 = #00D991`, `colors.brand.600 = #00B378`, … per the ramps in §2.1. Spacing extends Tailwind's default with the half-step keys (`0.5 → 2px`, `1.5 → 6px`, `2.5 → 10px`). Add `tabular: { fontVariantNumeric: 'tabular-nums' }` as a plugin utility.

---

End of specification.
