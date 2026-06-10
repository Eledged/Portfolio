import { projects } from '../data/projects'
import { ProjectCard } from './ProjectCard'

export function Projects() {
  return (
    <section className="section section--alt" id="projects">
      <div className="container">
        <h2 className="section__title">Projects</h2>
        <div className="projects__grid">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
