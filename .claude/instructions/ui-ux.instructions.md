---
name: UI/UX Agent
description: "Use when: designing components, styling layouts, improving accessibility, implementing responsive design, or working on visual/interaction patterns in the portfolio."
---

# UI/UX Agent for Portfolio

## Design Principles

The portfolio emphasizes **clarity, accessibility, and modern simplicity**. Every component should:
- Be **accessible by default** (WCAG 2.1 AA standard)
- Work **responsively** across all screen sizes (mobile-first approach)
- Use **semantic HTML** for structure
- Maintain **visual hierarchy** through typography and spacing
- Keep **cognitive load** minimal for users

## Component Structure

### Organization
```
src/
  components/
    Header/
      Header.tsx          # Main component
      Header.module.css   # Scoped styles
    Hero/
      Hero.tsx
      Hero.module.css
    ProjectCard/
      ProjectCard.tsx
      ProjectCard.module.css
```

### Component Best Practices
- **One component per file** (or tightly related pair)
- **Scoped styles** via CSS modules to prevent conflicts
- **Semantic HTML elements** (not divs everywhere)
- **Clear prop names** that describe visual intent
- **Mobile-first CSS** (start with mobile, add larger screen rules)

## Styling Guidelines

### CSS Organization
```css
/* 1. Layout & Positioning */
.component {
  display: flex;
  gap: 1rem;
}

/* 2. Typography */
.component h2 {
  font-size: 1.5rem;
  line-height: 1.3;
}

/* 3. Colors & Effects */
.component {
  color: var(--color-text);
  background: var(--color-bg);
}

/* 4. Responsive overrides */
@media (max-width: 768px) {
  .component {
    flex-direction: column;
  }
}
```

### Color System
Define colors as CSS variables for consistency:
```css
:root {
  --color-primary: #0066cc;
  --color-text: #1a1a1a;
  --color-bg: #ffffff;
  --color-border: #e0e0e0;
  --color-success: #00b34a;
  --color-error: #d91a1a;
}
```

### Typography Scale
Use consistent sizing:
- **h1**: 2.5rem (page titles)
- **h2**: 2rem (section titles)
- **h3**: 1.5rem (subsections)
- **body**: 1rem (16px)
- **small**: 0.875rem

### Spacing System
Use consistent spacing scale:
```
0.25rem (4px)   - Micro spacing
0.5rem (8px)    - Small
1rem (16px)     - Default
1.5rem (24px)   - Medium
2rem (32px)     - Large
3rem (48px)     - Extra large
```

## Responsive Design

### Breakpoints
```css
/* Mobile-first approach */
.component { /* 0px+ */ }

@media (min-width: 640px) { /* Tablet */ }
@media (min-width: 1024px) { /* Desktop */ }
@media (min-width: 1280px) { /* Large desktop */ }
```

### Mobile-First Workflow
1. Design for mobile first (simplest, most constrained)
2. Add tablet enhancements (min-width: 640px)
3. Add desktop refinements (min-width: 1024px)
4. **Never use max-width media queries** (desktop-first is harder to maintain)

### Responsive Patterns
- **Flexible layouts**: Use flexbox for responsive flows
- **Fluid typography**: Scale text proportionally (optional with CSS clamp)
- **Images**: Always `max-width: 100%; height: auto;`
- **Touch targets**: Minimum 44×44px for interactive elements (mobile accessibility)

## Accessibility (a11y)

### Core Standards
- **Semantic HTML**: Use `<button>`, `<nav>`, `<main>`, `<article>`, not generic `<div>`
- **Color contrast**: 4.5:1 for normal text, 3:1 for large text (WCAG AA)
- **Keyboard navigation**: All interactive elements reachable via Tab key
- **Focus indicators**: Always visible (don't remove `:focus` styles)
- **ARIA labels**: Use for icons and unlabeled controls

### Examples
```tsx
// ❌ Bad - Not semantic
<div onClick={handleClick} role="button">Click me</div>

// ✅ Good - Semantic with proper labels
<button onClick={handleClick}>Click me</button>

// ❌ Bad - Icon without label
<button><Icon /></button>

// ✅ Good - Icon with accessible label
<button aria-label="Close menu"><Icon /></button>

// ❌ Bad - No focus visible
button:focus { outline: none; }

// ✅ Good - Clear focus indicator
button:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}
```

### Accessibility Checklist
- [ ] All interactive elements are `<button>` or `<a>` (not `<div>`)
- [ ] Color not the only way to convey information
- [ ] Text contrast meets WCAG AA (4.5:1 normal, 3:1 large)
- [ ] Focus outline is visible on all interactive elements
- [ ] Images have alt text (or aria-label if decorative)
- [ ] Form inputs have associated labels
- [ ] Keyboard-only users can access all features

## Common UI Patterns

### Links
```tsx
// External links
<a href="https://example.com" target="_blank" rel="noopener noreferrer">
  External Link
</a>

// Internal navigation (use React Router)
<Link to="/about">About</Link>
```

### Buttons
```tsx
interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  disabled?: boolean
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
}

export function Button({ children, variant = 'primary', ...props }: ButtonProps) {
  return (
    <button className={`btn btn--${variant}`} {...props}>
      {children}
    </button>
  )
}
```

### Cards
- Use `<article>` for self-contained content
- Include clear headings for context
- Maintain consistent padding and shadows
- Ensure touch targets inside cards are ≥44px

### Forms
- Associate labels with inputs using `htmlFor`
- Show validation errors clearly
- Provide helpful placeholder text
- Use appropriate input types (email, number, etc.)

## Performance & Rendering

### Optimize for Performance
- **Minimize repaints**: Use CSS for animations, not JS
- **Lazy load images**: Use `loading="lazy"` for below-fold images
- **Avoid layout thrashing**: Batch DOM reads and writes
- **Use will-change sparingly**: Only for frequently animated elements

### CSS Animation Tips
```css
/* Use transforms & opacity (GPU accelerated) */
.fade-in {
  animation: fadeIn 0.3s ease-in;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* Avoid animating: width, height, left, top (triggers layout) */
```

## Dark Mode Considerations

If implementing dark mode, use CSS variables:
```css
:root {
  --color-text: #1a1a1a;
  --color-bg: #ffffff;
}

@media (prefers-color-scheme: dark) {
  :root {
    --color-text: #f0f0f0;
    --color-bg: #1a1a1a;
  }
}
```

## Testing UI Changes

Before committing visual changes:
1. Test on **multiple browsers** (Chrome, Firefox, Safari)
2. Test on **multiple devices** (phone, tablet, desktop)
3. Verify **keyboard navigation** works
4. Check **color contrast** with a tool
5. Test with **screen reader** (or at least VoiceOver on Mac)
6. Verify **no console errors** in browser DevTools

## Common Pitfalls to Avoid

- ❌ Removing focus outlines for aesthetics (breaks accessibility)
- ❌ Using `<div>` for buttons/links without ARIA (fails accessibility)
- ❌ Fixed positions that break mobile layouts
- ❌ Colors too similar (contrast fails accessibility)
- ❌ Hover-only interactions (mobile users can't access)
- ❌ `font-size: 12px` (too small, hard to read)
- ❌ Animations that can't be paused (fails WCAG)
