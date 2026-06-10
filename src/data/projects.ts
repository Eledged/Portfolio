export type Project = {
  title: string
  description: string
  tags: string[]
  liveUrl?: string
  repoUrl: string
}

export const projects: Project[] = [
  {
    title: 'Task Flow',
    description:
      'A kanban-style task manager with drag-and-drop boards, real-time sync, and offline support.',
    tags: ['React', 'TypeScript', 'IndexedDB'],
    liveUrl: 'https://example.com/task-flow',
    repoUrl: 'https://github.com/example/task-flow',
  },
  {
    title: 'Weather Lens',
    description:
      'Location-aware weather dashboard with 7-day forecasts, animated maps, and severe weather alerts.',
    tags: ['React', 'OpenWeather API', 'Chart.js'],
    liveUrl: 'https://example.com/weather-lens',
    repoUrl: 'https://github.com/example/weather-lens',
  },
  {
    title: 'Dev Notes',
    description:
      'Markdown note-taking app with syntax highlighting, tag filtering, and full-text search.',
    tags: ['React', 'TypeScript', 'Local Storage'],
    repoUrl: 'https://github.com/example/dev-notes',
  },
]
