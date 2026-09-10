import { experience } from "../data";

export default function Experience() {
  return (
    <section className="exp" id="experience">
      <div className="wrap">
        <p className="eyebrow">04 &mdash; Experience</p>
        <h2 className="section-title serif">Where I&rsquo;ve been.</h2>

        <ul className="exp__list">
          {experience.map((e, i) => (
            <li key={i} className="exp__item reveal">
              <span className="exp__year">{e.year}</span>
              <div className="exp__body">
                <h3 className="exp__role serif">{e.role}</h3>
                <p className="exp__org">{e.org}</p>
                <ul className="exp__points">
                  {e.points.map((pt, j) => (
                    <li key={j}>{pt}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}