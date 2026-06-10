---
name: Testing Agent
description: "Use when: writing tests, setting up test files, improving test coverage, or working with testing frameworks in the portfolio project."
---

# Testing Agent for Portfolio

## Overview

This agent provides testing guidance for the portfolio project. Use these practices for unit tests, component tests, and integration tests across React components and TypeScript utilities.

## Testing Stack

The portfolio uses the following testing tools:
- **Vitest** — Fast unit test framework (TypeScript native)
- **React Testing Library** — Component testing with user-centric approach
- **jsdom** — DOM simulation for testing

**Setup:**
```bash
npm install --save-dev vitest @testing-library/react @testing-library/jest-dom jsdom
```

**Vite Config for Tests (vite.config.ts):**
```typescript
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
  },
})
```

## Test Organization

### File Structure
```
src/
  __tests__/         # Global test utilities and setup
    setup.ts         # Test environment setup
  components/
    Button/
      Button.tsx
      Button.test.tsx
  pages/
    Home/
      HomePage.tsx
      HomePage.test.tsx
  utils/
    helpers.test.ts
```

### Naming Conventions
- Test files: `ComponentName.test.tsx` or `functionName.test.ts`
- Test suites: `describe('ComponentName', () => {...})`
- Test cases: `it('should [expected behavior]', () => {...})`

## Test Types

### Unit Tests
Test individual functions and utilities in isolation.

```typescript
import { describe, it, expect } from 'vitest'
import { formatDate } from '../utils/formatDate'

describe('formatDate', () => {
  it('should format date correctly', () => {
    const result = formatDate(new Date('2026-06-11'))
    expect(result).toBe('Jun 11, 2026')
  })

  it('should handle invalid dates', () => {
    expect(() => formatDate(null as any)).toThrow()
  })
})
```

### Component Tests
Test React components using React Testing Library (user-centric approach).

```typescript
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Button } from './Button'

describe('Button', () => {
  it('should render button text', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument()
  })

  it('should call onClick handler on click', async () => {
    const handleClick = vi.fn()
    render(<Button onClick={handleClick}>Click</Button>)
    
    await userEvent.click(screen.getByRole('button'))
    expect(handleClick).toHaveBeenCalledOnce()
  })

  it('should be disabled when disabled prop is true', () => {
    render(<Button disabled>Click</Button>)
    expect(screen.getByRole('button')).toBeDisabled()
  })
})
```

### Integration Tests
Test multiple components working together.

```typescript
describe('Navigation and Page Integration', () => {
  it('should navigate to projects page when link is clicked', async () => {
    render(<App />)
    
    const projectsLink = screen.getByRole('link', { name: /projects/i })
    await userEvent.click(projectsLink)
    
    expect(screen.getByText(/my projects/i)).toBeInTheDocument()
  })
})
```

## Best Practices

### Query Priority (React Testing Library)
Use queries in this order:
1. **getByRole** — Most accessible (semantic HTML)
2. **getByLabelText** — Form inputs
3. **getByPlaceholderText** — Input fields
4. **getByText** — Non-interactive elements
5. **getByTestId** — Last resort (use sparingly)

### Test Structure
Follow AAA pattern:
- **Arrange** — Set up test data and state
- **Act** — Perform the action being tested
- **Assert** — Verify the expected outcome

### Mocking
- Mock external APIs and services
- Use `vi.fn()` for spying on functions
- Keep mocks minimal and focused
- Clean up mocks after each test with `afterEach`

### Async Testing
- Use `async/await` for async operations
- Use `waitFor` for elements that appear asynchronously
- Always await user interactions

```typescript
it('should display data after loading', async () => {
  render(<DataComponent />)
  
  await waitFor(() => {
    expect(screen.getByText(/loaded data/i)).toBeInTheDocument()
  })
})
```

## Running Tests

```bash
npm test                  # Run all tests
npm test -- --watch     # Watch mode
npm test -- --coverage  # Generate coverage report
```

## Test Coverage Goals

- **Utilities & Helpers**: 80%+ coverage
- **Components**: 70%+ coverage (focus on user interactions)
- **Pages**: 60%+ coverage (complex logic gets higher priority)

## Common Testing Patterns

### Testing Props
```typescript
it('should render with different variants', () => {
  const { rerender } = render(<Button variant="primary">Primary</Button>)
  expect(screen.getByRole('button')).toHaveClass('primary')

  rerender(<Button variant="secondary">Secondary</Button>)
  expect(screen.getByRole('button')).toHaveClass('secondary')
})
```

### Testing Conditional Rendering
```typescript
it('should show error message when error prop is true', () => {
  const { rerender } = render(<Form error={false} />)
  expect(screen.queryByText(/error/i)).not.toBeInTheDocument()

  rerender(<Form error={true} />)
  expect(screen.getByText(/error/i)).toBeInTheDocument()
})
```

### Testing Hooks
```typescript
import { renderHook, act } from '@testing-library/react'
import { useCounter } from './useCounter'

it('should increment counter', () => {
  const { result } = renderHook(() => useCounter())
  
  act(() => {
    result.current.increment()
  })
  
  expect(result.current.count).toBe(1)
})
```

## Agent Behavior

When creating or reviewing tests:
1. **Focus on user interactions** — Test behavior, not implementation
2. **Use semantic queries** — Query by role, label, or visible text
3. **Keep tests focused** — One concept per test
4. **Avoid test interdependencies** — Tests should be independent and runnable in any order
5. **Mock external dependencies** — APIs, timers, file I/O
6. **Write readable assertions** — Use clear, descriptive assertion messages
