import { site } from '../data/site'

export function ContactPage() {
  return (
    <section className="section" id="contact">
      <div className="container">
        <h2 className="section__title">Contact</h2>
        <p className="contact__intro">
          I am open to freelance work and full-time opportunities. The fastest
          way to reach me is by email.
        </p>
        <div className="contact__links">
          <a href={`mailto:${site.email}`} className="btn btn--primary">
            {site.email}
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="contact__social"
          >
            GitHub
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="contact__social"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
