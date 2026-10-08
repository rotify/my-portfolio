import { profile, skills } from "../data";
export default function About() {
  return (
    <section className="about" id="about">
      <div className="wrap about__grid reveal">
        <div className="about__card">
          <span className="eyebrow">About</span>
          <p className="about__lead display">{profile.about}</p>
        </div>
        <div className="about__side">
          <span className="eyebrow">Stack</span>
          <ul className="chips">
            {skills.map((s) => <li key={s}>{s}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}
