
# Scent Lab — Custom Perfume Studio

Scent Lab is a modern custom perfume studio website concept where visitors
can explore fragrance families, learn about signature scents, and inquire
about personalized perfume experiences.

## Commit 2 — Responsive Design and Dark Mode

This version builds on the initial HTML layout by introducing a reusable
design system, responsive navigation, and a persistent light/dark theme.

## Features

- Responsive layouts for mobile, tablet, and desktop screens
- Tailwind CSS v4 browser CDN
- Custom color and font tokens
- Reusable component classes using `@apply`
- Light and dark themes using the `.dark` class
- Theme preference saved with `localStorage`
- Mobile navigation menu
- Accessible form labels and input fields
- Contact form demonstration
- Automatically updated footer year

## Technologies

- HTML5
- Tailwind CSS v4 browser CDN
- JavaScript
- Google Fonts

## Design System

### Color Palette

The intended 60-30-10 design principle is:

| Proportion | Color | Hex | Purpose |
|---|---|---|---|
| 60% | Cream | `#F5F0E8` | Main background and open space |
| 30% | Ink | `#29251F` | Text, footer, and emphasis |
| 10% | Gold | `#B58A5A` | Accents, highlights, and calls to action |

Supporting colors:

| Color | Hex | Purpose |
|---|---|---|
| Sand | `#E7DED1` | Cards and secondary backgrounds |
| Muted | `#71695F` | Secondary text |

The 60-30-10 proportions describe the intended visual balance, not a
measured pixel-by-pixel distribution.

### Typography

- **Playfair Display:** Headings and decorative text
- **DM Sans:** Body text and interface elements

### Visual Style

**Modern Editorial Minimalism**

The design combines editorial-style headings, generous spacing, restrained
gold accents, and simple fragrance-inspired cards to create a premium look.

### Reusable CSS Classes

The following component classes are defined using Tailwind's `@apply`:

- `.section-wrap`
- `.eyebrow`
- `.section-title`
- `.body-copy`
- `.btn-primary`
- `.btn-outline`
- `.surface-card`
- `.form-field`
- `.nav-link`
- `.option-label`

These classes help keep styling consistent across the website.

## Dark Mode

The theme toggle adds or removes the `dark` class on the HTML root element.
Tailwind's `dark:` variants provide alternative colors for supported
sections, cards, navigation links, and form fields.

The selected theme is stored under the `scent-lab-theme` local storage key.
When no saved preference exists, the site uses the browser's preferred
color scheme as its initial theme.

## Responsive Design

The site uses Tailwind's mobile-first responsive prefixes, including:

- `sm:` for small-screen adjustments
- `md:` for tablet-sized layouts
- `lg:` for larger desktop layouts

The navigation menu changes to a collapsible menu on smaller screens.

## Accessibility

- Semantic page sections and headings
- Navigation labels
- Form labels associated with their inputs
- Required name, email, and message fields
- Accessible theme-toggle state
- Mobile menu state exposed through `aria-expanded`
- Visible keyboard focus styling

## Contrast Verification

Body-text contrast ratios still need to be measured against their actual
background colors in both light and dark modes. The final measured results
should be added here after testing against the WCAG AA target of 4.5:1 for
normal-sized text.

## Contact Form Notice

The contact form is a front-end demonstration. It does not send or store
messages on a server.

## Project Structure

```text
scent-lab/
├── index.html
├── script.js
└── README.md
```

## How to Run

1. Open the project folder.
2. Open `index.html` in a browser.
3. Ensure you have an internet connection for Tailwind CSS and Google Fonts.
4. Resize the browser to test responsive layouts.
5. Use the theme button to switch between light and dark modes.
6. Refresh the page to test theme persistence.

## Planned Development

- **Commit 1:** Initial HTML structure and visual layout.
- **Commit 2:** Responsive design, reusable classes, and dark mode.
- **Commit 3:** Interactive perfume customization and form validation.
- **Commit 4:** GSAP animations, scroll effects, and final refinements.
