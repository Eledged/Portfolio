---
name: Portfolio Coding Agent
description: "General coding guidance for the portfolio project. Use when: writing React components, TypeScript code, styling, or working on any part of the portfolio codebase."
---

# Portfolio Coding Agent

## Project Overview

This is a personal portfolio website built with **React 19**, **TypeScript 6**, and **Vite 8**. The project uses React for component-based UI with client-side routing for a multi-page layout, TypeScript for type safety, and Vite for fast development and optimized builds.

**Tech Stack:**
- React 19.2.7
- TypeScript 6.0.2
- Vite 8.0.12
- React Router v7 (for multi-page routing)
- Deployed via GitHub Pages

**Project Structure:**
```
src/
  pages/        # Page components (Home, About, Projects, Contact, etc.)
  components/   # Reusable components (navigation, footer, cards)
  styles/       # Global and component-specific styles
  utils/        # Utility functions and helpers
  App.tsx       # Main app with routing
public/         # Static assets (favicon, etc.)
dist/           # Production build output
```

## Coding Standards

### TypeScript
- Always use **strict mode** TypeScript (already configured)
- Define types/interfaces for component props and state
- Avoid `any` types; use proper type annotations
- Export types alongside components when used by other files

### React Components
- Use **function components** (not class components)
- Prefer hooks over lifecycle methods
- Keep components small and focused on a single responsibility
- Use meaningful component names that reflect their purpose

### Naming Conventions
- Components: PascalCase (e.g., `HeroSection`, `ProjectCard`)
- Functions/variables: camelCase (e.g., `handleClick`, `isActive`)
- Constants: UPPER_SNAKE_CASE (e.g., `DEFAULT_TIMEOUT`, `API_URL`)
- Files: kebab-case for non-component files (e.g., `utils.ts`, `constants.ts`); PascalCase for components

### Styling
- Use CSS modules or inline styles as appropriate
- Avoid global CSS pollution; scope styles to components
- Keep styling simple and maintainable
- Use semantic HTML class names

### Multi-Page Routing
- Use React Router v7 for client-side navigation
- Keep routes organized in a central routing configuration
- Each page should be a separate component in `src/pages/`
- Use `<Link>` for internal navigation (not `<a>` tags)
- Implement a persistent navigation component that works across all pages
- Handle dynamic routes and nested routes as needed

## Development Workflow

### Local Development
```bash
npm run dev      # Start Vite dev server
npm run build    # Build for production (runs TypeScript check first)
npm run preview  # Preview production build locally
npm run deploy   # Build and deploy to GitHub Pages
```

### Before Committing
- Run `npm run build` to ensure TypeScript compiles without errors
- Test the changes locally with `npm run dev`
- Keep commits focused on a single change or feature

## Agent Behavior

When working on code in this project:

1. **Prioritize type safety** - Use TypeScript to catch errors early
2. **Keep components focused** - Extract logic into separate utility functions or custom hooks
3. **Follow React best practices** - Manage state efficiently, avoid unnecessary re-renders
4. **Maintain readability** - Use clear variable names and avoid overly complex logic
5. **Test locally first** - Always test changes in the dev environment before suggesting deployment
6. **Minimal dependencies** - Avoid adding new packages unless absolutely necessary; work with existing tools

## Common Tasks

### Adding a New Page
- Create a new component in `src/pages/` with a descriptive PascalCase name (e.g., `ProjectsPage.tsx`, `AboutPage.tsx`)
- Define the page component as a function that returns JSX
- Add the route to the routing configuration in `App.tsx`
- Use React Router's `<Link>` for navigation between pages
- Ensure the page is responsive and accessible

### Adding a New Component
- Create a new `.tsx` file in `src/components/` with PascalCase name
- Define props interface at the top
- Export the component as default
- Keep styles scoped to the component

### Updating Styles
- Use CSS modules or inline styles
- Ensure changes don't break existing components
- Test responsive design on multiple screen sizes

### Building and Deploying
- Run `npm run build` locally first
- Verify output in `dist/` folder
- Use `npm run deploy` to push to GitHub Pages
