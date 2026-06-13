---
name: Vibrant Clarity
colors:
  surface: '#faf8ff'
  surface-dim: '#d2d9f4'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f3ff'
  surface-container: '#eaedff'
  surface-container-high: '#e2e7ff'
  surface-container-highest: '#dae2fd'
  on-surface: '#131b2e'
  on-surface-variant: '#464554'
  inverse-surface: '#283044'
  inverse-on-surface: '#eef0ff'
  outline: '#767586'
  outline-variant: '#c7c4d7'
  surface-tint: '#494bd6'
  primary: '#4648d4'
  on-primary: '#ffffff'
  primary-container: '#6063ee'
  on-primary-container: '#fffbff'
  inverse-primary: '#c0c1ff'
  secondary: '#5d5d67'
  on-secondary: '#ffffff'
  secondary-container: '#e3e1ed'
  on-secondary-container: '#64636d'
  tertiary: '#8127cf'
  on-tertiary: '#ffffff'
  tertiary-container: '#9c48ea'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e1e0ff'
  primary-fixed-dim: '#c0c1ff'
  on-primary-fixed: '#07006c'
  on-primary-fixed-variant: '#2f2ebe'
  secondary-fixed: '#e3e1ed'
  secondary-fixed-dim: '#c7c5d1'
  on-secondary-fixed: '#1a1b23'
  on-secondary-fixed-variant: '#46464f'
  tertiary-fixed: '#f0dbff'
  tertiary-fixed-dim: '#ddb7ff'
  on-tertiary-fixed: '#2c0051'
  on-tertiary-fixed-variant: '#6900b3'
  background: '#faf8ff'
  on-background: '#131b2e'
  surface-variant: '#dae2fd'
typography:
  headline-xl:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.02em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  container-max: 1280px
  gutter: 24px
  margin-desktop: 40px
  margin-tablet: 24px
  margin-mobile: 16px
---

## Brand & Style
The design system focuses on a high-clarity, sophisticated aesthetic that merges corporate precision with a vibrant, modern energy. The target audience includes tech-savvy professionals and creative teams who value efficiency and visual polish.

The style is **Modern Minimalism** with a focus on high-contrast clarity. It utilizes heavy whitespace to allow the vibrant primary purple to act as a functional beacon for action and importance. The emotional response should be one of confidence, technological edge, and effortless organization.

## Colors
The palette is anchored by a vibrant Indigo-Purple primary, chosen for its digital-first energy and high legibility against white surfaces.

- **Primary**: The core action color, used for buttons, active states, and primary branding.
- **Secondary**: A soft lavender-tinted surface color used for background layering and subtle UI containers.
- **Surface**: Pure white (#FFFFFF) is the primary canvas to maintain a clean, professional "airiness."
- **Neutral**: Deep slate tones are used for typography and iconography to ensure maximum readability and a grounded feel.

## Typography
This design system utilizes **Hanken Grotesk** across all roles to maintain a unified, contemporary, and sharp appearance. 

The type scale is designed for high legibility. Headlines use tighter letter spacing and heavier weights to create a strong visual anchor. Body text maintains a generous line height for long-form readability. For mobile, headline sizes are aggressively scaled down to ensure content remains the primary focus without excessive scrolling.

## Layout & Spacing
The design system employs a **Fixed Grid** model for desktop and a **Fluid Grid** for mobile devices. 

- **Desktop**: A 12-column grid centered within a 1280px max-width container. 
- **Tablet**: A 8-column grid with 24px gutters.
- **Mobile**: A 4-column grid with 16px gutters.

Spacing follows a strict 4px (0.25rem) base unit. Layouts should prioritize "breathing room," using larger vertical gaps (32px, 48px, 64px) between distinct sections to reinforce the minimalist narrative.

## Elevation & Depth
The design system uses **Tonal Layers** combined with **Low-Contrast Outlines**. 

Depth is primarily communicated through color shifts rather than heavy shadows. Cards and containers sit on a white background using a very thin (1px) border in a light lavender tone. 

When interaction occurs (e.g., hovering over a card), a soft, ambient purple-tinted shadow may be applied to suggest lift. The primary depth mechanism is the use of the secondary lavender color (#F5F3FF) to create "wells" or distinct functional areas within the white canvas.

## Shapes
The shape language is consistently **Rounded**, using an 8px (0.5rem) base radius. 

This balance provides a professional structure while appearing approachable and modern. Larger components like modal sheets and primary cards should scale up to `rounded-xl` (24px) to soften the overall interface and lean into the clean, modern aesthetic.

## Components
- **Buttons**: Primary buttons are solid purple with white text. Secondary buttons use a lavender background with purple text. Tertiary buttons are ghost-style with purple text and no border.
- **Inputs**: Use a 1px border in light lavender. On focus, the border transitions to the primary purple with a subtle 2px outer glow in the same hue.
- **Chips**: Small, rounded elements with the secondary lavender background and deep purple text for categorization.
- **Cards**: Pure white background with a 1px lavender border. Use `rounded-lg` for card corners.
- **Lists**: Clean, borderless rows separated by subtle 1px dividers. 
- **Checkboxes/Radios**: Use the primary purple for the active/checked state to ensure high contrast against the white background.
- **Navigation**: Sidebar or top-nav should use a subtle secondary lavender background to distinguish the navigation area from the content canvas.