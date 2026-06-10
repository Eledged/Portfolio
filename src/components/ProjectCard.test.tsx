import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ProjectCard } from './ProjectCard'
import type { Project } from '../data/projects'

describe('ProjectCard', () => {
  const mockProject: Project = {
    title: 'Test Project',
    description: 'A test project description',
    tags: ['React', 'TypeScript'],
    liveUrl: 'https://example.com/demo',
    repoUrl: 'https://github.com/example/test-project',
  }

  it('should render project title', () => {
    render(<ProjectCard project={mockProject} />)
    expect(screen.getByText('Test Project')).toBeInTheDocument()
  })

  it('should render project description', () => {
    render(<ProjectCard project={mockProject} />)
    expect(screen.getByText('A test project description')).toBeInTheDocument()
  })

  it('should render all project tags', () => {
    render(<ProjectCard project={mockProject} />)
    expect(screen.getByText('React')).toBeInTheDocument()
    expect(screen.getByText('TypeScript')).toBeInTheDocument()
  })

  it('should render live demo link when liveUrl is provided', () => {
    render(<ProjectCard project={mockProject} />)
    const liveLink = screen.getByRole('link', { name: /live demo/i })
    expect(liveLink).toHaveAttribute('href', 'https://example.com/demo')
  })

  it('should render source code link', () => {
    render(<ProjectCard project={mockProject} />)
    const sourceLink = screen.getByRole('link', { name: /source code/i })
    expect(sourceLink).toHaveAttribute('href', 'https://github.com/example/test-project')
  })

  it('should not render live demo link when liveUrl is not provided', () => {
    const projectWithoutLive: Project = {
      ...mockProject,
      liveUrl: undefined,
    }
    render(<ProjectCard project={projectWithoutLive} />)
    const liveLinks = screen.queryAllByRole('link', { name: /live demo/i })
    expect(liveLinks).toHaveLength(0)
  })

  it('should have external link attributes', () => {
    render(<ProjectCard project={mockProject} />)
    const links = screen.getAllByRole('link')
    links.forEach((link) => {
      expect(link).toHaveAttribute('target', '_blank')
      expect(link).toHaveAttribute('rel', 'noopener noreferrer')
    })
  })
})
