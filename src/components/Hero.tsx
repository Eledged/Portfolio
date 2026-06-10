import { site } from '../data/site'

export function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero__inner">
        <p className="hero__eyebrow">Hello, I am</p>
        <h1 className="hero__title">{site.name}</h1>
        <p className="hero__subtitle">{site.title}</p>
        <p className="hero__tagline">{site.tagline}</p>
        <div className="hero__actions">
          <a href="#projects" className="btn btn--primary">
            View Projects
          </a>
          <a href="#contact" className="btn btn--secondary">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  )
}
