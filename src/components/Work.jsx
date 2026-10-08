import { projects } from "../data";
export default function Work() {
  return (
    <section className="work" id="work">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow">Selected work</span>
          <h2 className="sec-title display">Things I&rsquo;ve built.</h2>
        </div>
        <div className="cards">
          {projects.map((p, i) => (
            <a key={p.id} className="card reveal" style={{"--delay": `${i*90}ms`}}
               href={p.url} target={p.url.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
              <div className="card__top">
                <span className="card__id display">{p.id}</span>
                <span className="card__arrow">&#8599;</span>
              </div>
              <h3 className="card__title display">{p.title}</h3>
              <p className="card__sub">{p.subtitle}</p>
              <p className="card__desc">{p.description}</p>
              <div className="card__tags">
                {p.tags.map((t) => <span key={t}>{t}</span>)}
              </div>
              <span className="card__year">{p.year}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
