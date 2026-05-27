# Design System - Jack 3D Portfolio

## Register
brand

## Visual Theme
Cinematic Dark Mode. High contrast, bold typography, and deep shadows. The aesthetic is "technical luxury" — combining raw 3D power with refined, editorial precision.

## Color Palette
Using OKLCH for maximum vibrancy and consistent lightness.

### Neutrals (Tinted toward brand hue)
- **Deep Space (Background)**: `oklch(15% 0.01 260)` (Deep navy-black, avoids pure `#000`)
- **Cloud White (Primary Text)**: `oklch(92% 0.01 260)` (Soft off-white, avoids pure `#fff`)
- **Steel Gray (Secondary Text)**: `oklch(75% 0.01 260)` (Muted slate for descriptions)

### Accents
- **Electric Purple (Action)**: `oklch(55% 0.22 300)` (Saturated purple for primary CTAs)
- **Border Glass**: `oklch(92% 0.01 260 / 20%)` (Semi-transparent white for borders)

## Typography
- **Primary Font**: 'Kanit', sans-serif
- **Headings**: Font-black, uppercase, tight tracking, leading-none.
- **Body**: Font-light/medium, relaxed leading, max-width 65ch.
- **Scale**: Fluid `clamp()` based scale with $\ge 1.25$ ratio between steps.

## Layout & Spacing
- **Spacing Scale**: 
  - `xs`: 0.5rem
  - `sm`: 1rem
  - `md`: 2rem
  - `lg`: 4rem
  - `xl`: 8rem
- **Rhythm**: Tight groupings (gap-3/4) paired with generous section separations (py-24 to py-32).
- **Containers**: Avoided where possible; fluid width with `px-6` to `px-10` padding.

## Motion
- **Easing**: `cubic-bezier(0.22, 1, 0.36, 1)` (Ease-out-quint) for all entrance and interaction transitions.
- **Duration**: 
  - UI Transitions: 200-300ms
  - Entrance Animations: 600-900ms
