import { profile } from "../data";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap">
        <p className="eyebrow hero__eyebrow">
          {profile.name} &mdash; Portfolio
        </p>

        <h1 className="hero__title serif">
          Building the <span className="gold italic">web</span>,
          <br />
          one idea at a time.
        </h1>

        <div className="hero__bottom">
          <ul className="hero__meta">
            {profile.available && (
              <li><span className="dot" /> Available for new work</li>
            )}
            <li>Based in {profile.location}</li>
            <li>{profile.degree}</li>
          </ul>

          <p className="hero__intro">
            I&rsquo;m <strong>{profile.name}</strong> &mdash; {profile.intro}
          </p>
        </div>
      </div>

      <div className="marquee" aria-hidden="true">
        <div className="marquee__track">
          {[...profile.marquee, ...profile.marquee].map((m, i) => (
            <span key={i} className="serif">
              {i % 2 ? <em className="gold italic">{m}</em> : m}
              <i className="marquee__sep">&#8212;</i>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}