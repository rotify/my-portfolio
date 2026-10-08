import { profile } from "../data";
export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__glow" aria-hidden="true" />
      <div className="wrap hero__inner">
        <span className="eyebrow hero__a" style={{"--i":0}}>Available for new work</span>
        <h1 className="hero__title display hero__a" style={{"--i":1}}>
          Building the <span className="grad-text">web</span>, one idea at a time.
        </h1>
        <p className="hero__intro hero__a" style={{"--i":2}}>
          I&rsquo;m <strong>{profile.name}</strong> — {profile.intro}
        </p>
        <div className="hero__actions hero__a" style={{"--i":3}}>
          <a href="#work" className="btn btn--primary">View work</a>
          <a href={`mailto:${profile.email}`} className="btn btn--ghost">Get in touch</a>
        </div>
        <div className="hero__meta hero__a" style={{"--i":4}}>
          <span>{profile.location}</span><i /><span>{profile.degree}</span>
        </div>
      </div>
    </section>
  );
}
