---
name: Professional Kinetic
colors:
  surface: '#f8f9ff'
  surface-dim: '#d0dbed'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e6eeff'
  surface-container-high: '#dee9fc'
  surface-container-highest: '#d9e3f6'
  on-surface: '#121c2a'
  on-surface-variant: '#4a4455'
  inverse-surface: '#27313f'
  inverse-on-surface: '#eaf1ff'
  outline: '#7b7486'
  outline-variant: '#ccc3d7'
  surface-tint: '#7331df'
  primary: '#5300b7'
  on-primary: '#ffffff'
  primary-container: '#6d28d9'
  on-primary-container: '#dac5ff'
  inverse-primary: '#d3bbff'
  secondary: '#9d4300'
  on-secondary: '#ffffff'
  secondary-container: '#fd761a'
  on-secondary-container: '#5c2400'
  tertiary: '#3f4049'
  on-tertiary: '#ffffff'
  tertiary-container: '#575761'
  on-tertiary-container: '#cfcdd9'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ebddff'
  primary-fixed-dim: '#d3bbff'
  on-primary-fixed: '#250059'
  on-primary-fixed-variant: '#5b00c5'
  secondary-fixed: '#ffdbca'
  secondary-fixed-dim: '#ffb690'
  on-secondary-fixed: '#341100'
  on-secondary-fixed-variant: '#783200'
  tertiary-fixed: '#e3e1ed'
  tertiary-fixed-dim: '#c7c5d1'
  on-tertiary-fixed: '#1a1b23'
  on-tertiary-fixed-variant: '#46464f'
  background: '#f8f9ff'
  on-background: '#121c2a'
  surface-variant: '#d9e3f6'
typography:
  headline-xl:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 28px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-sm:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1140px
  gutter: 24px
  section-padding: 80px
  stack-sm: 12px
  stack-md: 24px
  stack-lg: 48px
---

## Brand & Style
This design system is engineered for professional storytelling, blending the structural reliability of a corporate CV with the energetic pulse of a creative portfolio. The brand personality is **ambitious, precise, and high-energy**.

The style is **Modern Corporate** with a focus on **Vibrant Accents**. It utilizes high-contrast color blocking to guide the eye through professional milestones, using white space not just as a buffer, but as a deliberate tool for legibility. The aesthetic response should be one of immediate trust coupled with a recognition of contemporary technical proficiency.

## Colors
The palette centers on a deep, authoritative **Royal Purple** as the primary anchor, representing stability and seniority. To inject vitality and highlight "calls to value" (like contact buttons or key skills), a **Vibrant Orange** is introduced as a secondary accent.

- **Primary (Purple):** Used for headings, primary buttons, and structural identity.
- **Secondary (Orange):** Reserved for high-priority interactive elements, status indicators, and subtle highlights within text.
- **Tertiary (Soft Lavender):** Used for background containers and subtle section grouping to prevent visual fatigue.
- **Neutral (Slate/Ink):** Used for body copy and borders to maintain a professional, grounded feel.

## Typography
The system exclusively utilizes **Hanken Grotesk** to maintain a sharp, contemporary, and geometric appearance. 

The type hierarchy is designed for "scanning." Headlines use heavy weights and tight letter spacing to create a strong visual impact for section titles. Body text is set with generous line heights to ensure long-form professional summaries remain readable. Small labels are uppercased with increased tracking to serve as metadata markers (e.g., dates or categories).

## Layout & Spacing
This design system employs a **Fixed Grid** model for desktop to ensure the resume-style content remains structured and scannable. 

- **Desktop:** A 12-column grid with a maximum container width of 1140px. Gutters are fixed at 24px to provide clear separation between content blocks.
- **Mobile:** Transition to a single-column fluid layout with 20px side margins. 
- **Vertical Rhythm:** Sections are separated by a consistent 80px padding to create a "breathable" narrative flow. Smaller internal components (like job titles and descriptions) follow an 8px-based stacking logic.

## Elevation & Depth
Depth is achieved through **Tonal Layers** rather than heavy shadows. This keeps the interface feeling "flat-plus" and professional.

- **Level 0 (Surface):** The main background uses the pure white or ultra-light lavender.
- **Level 1 (Cards):** Subsurface elements use a subtle 1px border in a light neutral tone or a very soft, diffused ambient shadow (4% opacity) to suggest lift.
- **Level 2 (Interaction):** Active states or hovered cards may increase shadow spread or add a 2px Primary Purple border to indicate focus.

## Shapes
The shape language is **Rounded**, striking a balance between approachable and professional. 

Standard components like input fields and cards use a 0.5rem (8px) radius. Buttons and tags should lean towards a more pronounced rounding or even pill-shapes to differentiate them from structural containers. This soft geometry offsets the sharp, technical nature of the Hanken Grotesk typeface.

## Components
- **Buttons:** Primary buttons are solid Purple with white text. Secondary "Action" buttons (like 'Hire Me' or 'Download CV') use the Vibrant Orange to break the monochromatic flow.
- **Chips/Tags:** Used for skill sets. These should have a light Purple background with dark Purple text to remain legible but subordinate to the main content.
- **Experience Cards:** Use a vertical line (Primary Purple) on the left margin to create a timeline effect.
- **Input Fields:** Minimalist design with a bottom-only border that transforms into a full 2px Orange border on focus.
- **Lists:** Bullet points are replaced with small Orange geometric icons to maintain color rhythm.
- **Progress Bars:** For technical proficiencies, use a two-tone bar: a light lavender track with a solid Orange fill.