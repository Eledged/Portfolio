import { Link } from 'react-router'
import { site } from '../data/site'

export function HomePage() {
  return (
    <section className="hero" id="home">
      <div className="container hero__inner">
        <p className="hero__eyebrow">Hello, I am</p>
        <h1 className="hero__title">{site.name}</h1>
        <p className="hero__subtitle">{site.title}</p>
        <p className="hero__tagline">{site.tagline}</p>
        <div className="hero__actions">
          <Link to="/projects" className="btn btn--primary">
            View Projects
          </Link>
          <Link to="/contact" className="btn btn--secondary">
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  )
}
