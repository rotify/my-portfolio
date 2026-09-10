import { profile, skills } from "../data";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="wrap about__grid">
        <div className="about__left">
          <p className="eyebrow">03 &mdash; About</p>
        </div>
        <div className="about__right reveal">
          <p className="about__lead serif">{profile.about}</p>

          <div className="about__skills">
            <p className="eyebrow">Tools &amp; technologies</p>
            <ul>
              {skills.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}