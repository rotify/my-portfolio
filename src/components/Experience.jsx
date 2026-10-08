import { experience } from "../data";
export default function Experience() {
  return (
    <section className="exp" id="experience">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow">Experience</span>
          <h2 className="sec-title display">Where I&rsquo;ve been.</h2>
        </div>
        <div className="exp__list">
          {experience.map((e, i) => (
            <div key={i} className="exp__row reveal" style={{"--delay": `${i*80}ms`}}>
              <div className="exp__meta">
                <span className="exp__year display">{e.year}</span>
                <span className="exp__org">{e.org}</span>
              </div>
              <div className="exp__body">
                <h3 className="exp__role display">{e.role}</h3>
                <ul>{e.points.map((pt, j) => <li key={j}>{pt}</li>)}</ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
