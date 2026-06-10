import { site } from '../data/site'

export function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <h2 className="section__title">About</h2>
        <div className="about__grid">
          <div className="about__text">
            {site.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="about__skills">
            <h3>Skills</h3>
            <ul className="tag-list">
              {site.skills.map((skill) => (
                <li key={skill} className="tag">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
