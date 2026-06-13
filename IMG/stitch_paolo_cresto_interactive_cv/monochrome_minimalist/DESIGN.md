---
name: Monochrome Minimalist
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f3'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#4c4546'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f1f1f1'
  outline: '#7e7576'
  outline-variant: '#cfc4c5'
  surface-tint: '#5e5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1b1b1b'
  on-primary-container: '#848484'
  inverse-primary: '#c6c6c6'
  secondary: '#5e5e5e'
  on-secondary: '#ffffff'
  secondary-container: '#e1dfdf'
  on-secondary-container: '#626262'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#1b1b1b'
  on-tertiary-container: '#848484'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e2e2e2'
  primary-fixed-dim: '#c6c6c6'
  on-primary-fixed: '#1b1b1b'
  on-primary-fixed-variant: '#474747'
  secondary-fixed: '#e4e2e2'
  secondary-fixed-dim: '#c7c6c6'
  on-secondary-fixed: '#1b1c1c'
  on-secondary-fixed-variant: '#464747'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c6'
  on-tertiary-fixed: '#1b1b1b'
  on-tertiary-fixed-variant: '#474747'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
typography:
  display-name:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  display-name-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.1em
  mono-technical:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.4'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  section-gap: 8rem
  element-gap: 2rem
  container-max-width: 720px
  margin-mobile: 24px
  gutter: 16px
---

## Brand & Style

This design system is built for a personal CV brand that prioritizes clarity, sophistication, and intentionality. The brand personality is poised and professional, leaning into a **High-End Minimalism** aesthetic that allows the content—the individual's work and experience—to take center stage without visual noise.

The style utilizes expansive whitespace to create a "gallery" feel, treating every block of text as a piece of art. It features high-contrast interactions, subtle transitions, and a centered layout that guides the eye naturally down a single-column narrative path. The emotional response should be one of calm authority and effortless precision.

## Colors

The palette is strictly monochromatic, relying on value rather than hue to establish hierarchy.

*   **Primary (#000000):** Used for headlines, icons, and primary buttons to anchor the page.
*   **Secondary (#666666):** Used for body text and metadata to provide a softer reading experience that reduces eye strain.
*   **Neutral (#F5F5F5):** Used for subtle section dividers, card backgrounds, and hover states.
*   **Background (#FFFFFF):** The canvas. Pure white is essential to maintain the minimalist "breathability" of the layout.

## Typography

The typography system pairs three sans-serifs to distinguish between identity, narrative, and utility.

*   **Hanken Grotesk** serves as the sophisticated "voice" for the name and major section headers. It is modern, sharp, and carries a high-fashion architectural quality.
*   **Inter** is the workhorse for body copy, chosen for its exceptional readability at various weights and its neutral, systematic feel.
*   **Geist** is used for "instructions," technical labels, and metadata. Its monospaced influence provides a precise, deliberate contrast to the more fluid prose.

All headlines should utilize tighter letter-spacing, while labels should be tracked out for a technical, premium feel.

## Layout & Spacing

This design system uses a **Centered Fixed-Width Layout**. By constraining the content to a maximum width of 720px, we ensure optimal line lengths for reading and create a focused, editorial column.

*   **Vertical Rhythm:** Use generous "Section Gaps" (128px+) to separate distinct life chapters or portfolio items.
*   **Alignment:** All core content is center-aligned by default, though internal card content may be left-aligned for readability.
*   **Responsive Flow:** On mobile, margins shrink to 24px, and the centered vertical column remains the primary navigational axis. No complex grids are required; the layout relies on a clean stack of elements.

## Elevation & Depth

To maintain a minimalist aesthetic, depth is achieved through **Tonal Layers** and **Low-Contrast Outlines** rather than heavy shadows.

*   **Surfaces:** Cards and containers use a subtle #F5F5F5 background or a 1px solid #EEEEEE border. 
*   **Interactivity:** Depth is signaled through "Lift on Hover" interactions where an element's background color might shift slightly or a very soft, ambient shadow (0px 4px 20px rgba(0,0,0,0.05)) appears only upon engagement.
*   **Overlays:** Any modal or menu should use a high-blur backdrop filter (glassmorphism) to keep the user grounded in the monochromatic environment.

## Shapes

The shape language is **Soft (0.25rem)**. While the overall vibe is architectural and structured, the slight rounding of corners prevents the UI from feeling aggressive or "brutalist." It adds a touch of approachability to the high-contrast black-and-white theme.

Buttons and input fields should strictly adhere to the 4px (0.25rem) radius. Icons should be stroke-based (linear) to match the refinement of the typography.

## Components

*   **Buttons:** Primary buttons are solid #000000 with white text. Secondary buttons are outlined with a 1px #000000 stroke. Hover states involve an invert (Black becomes Grey or White).
*   **Chips/Tags:** Use the `label-caps` typography style. Backgrounds should be #F5F5F5 with no border.
*   **Input Fields:** Minimalist underlines or 1px light grey borders. Focus state is a transition to a 1px black border.
*   **Cards:** Used for portfolio items. No shadow; use a subtle background fill (#F5F5F5) to define the area. Images within cards should be grayscale by default, transitioning to color on hover.
*   **Timeline:** For the CV section, use a simple vertical line (1px #EEEEEE) with small black dots to denote chronology, aligned to the center or left of the text block.
*   **Footer:** Minimalist text links in `label-caps`, center-aligned.