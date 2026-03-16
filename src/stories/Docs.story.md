---
group: 'top'
icon: 'material-symbols:home-outline-rounded'
---

# JJK UI Components

Used for jojko.tech website and other related projects

---

## Installation

```bash
pnpm add jjk-ui
```

---

## Typography

**Quicksand** Is used as a default display font. Headings use a heavier weight and are 20% squished for a more unique look, while body text uses a normal weight.

### Sizes

`--step--2`
`--step--1` - used for small text, such as captions and labels
`--step-0` - default size for body text
`--step-1`
`--step-2`
`--step-3`
`--step-4`
`--step-5` - used for main headings and titles

---

## Motion

There are three variants for motion:

- **Default variant**: Used for elements that remain presented on the screen for the whole duration of the transition.

- **Enter variant**: Used for elements that appear on the screen during the transition.

- **Leave variant**: Used for elements that disappear from the screen during the transition.

### Standard motion

Used for quick transitions that don't require much attention and are not the main focus of the user.

  `--app-motion-standard`
  `--app-motion-standard-enter`
  `--app-motion-standard-leave`

### Emphasized motion

Used for transitions that require more attention and are the main focus of the user.

  `--app-motion-emphasis`
  `--app-motion-emphasis-enter`
  `--app-motion-emphasis-leave`

---

## Elevation

Smooth shadows in order to create a more modern and smart look. They depend on the elevation level and the current state of the element.

### Default state

By default, elements should have static elevation and floating elevation should be used on floating elements like overlays, FABs, modals, and dialogs.

`--app-elevation-float`

### Hover state

Should be used on interactive elements that are being hovered/tapped once by the user.

`--app-elevation-hover`
`--app-elevation-float-hover`

### Active state

Should be used on interactive elements that are currently being interacted with by the user.

`--app-elevation-active`
`--app-elevation-float-active`
