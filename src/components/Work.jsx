import { projects } from "../data";

export default function Work() {
  return (
    <section className="work" id="work">
      <div className="wrap">
        <div className="work__head">
          <div>
            <p className="eyebrow">02 &mdash; Work</p>
            <h2 className="section-title serif">Selected projects.</h2>
          </div>
          <p className="work__note">A small set of things I&rsquo;ve built ;</p>
        </div>

        <ul className="work__list">
          {projects.map((p) => (
            <li key={p.id} className="reveal">
              <a
                className="project"
                href={p.url}
                target={p.url.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
              >
                <span className="project__id">{p.id}</span>

                <div className="project__main">
                  <h3 className="project__title serif">{p.title}</h3>
                  <p className="project__sub">{p.subtitle}</p>
                  <p className="project__desc">{p.description}</p>
                  <div className="project__tags">
                    {p.tags.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                </div>

                <div className="project__side">
                  <span className="project__year">{p.year}</span>
                  <span className="project__arrow">&#8599;</span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
