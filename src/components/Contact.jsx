import { profile } from "../data";

export default function Contact() {
  return (
    <footer className="contact" id="contact">
      <div className="wrap">
        <p className="eyebrow">05 &mdash; Contact</p>
        <h2 className="contact__title serif">
          Let&rsquo;s build something <span className="gold italic">together</span>.
        </h2>

        <a className="contact__email serif" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>

        <div className="contact__row">
          <span>{profile.phone}</span>
          <span>{profile.location}</span>
          <span>Available for new work</span>
        </div>

        <div className="contact__foot">
          <span>&copy; {new Date().getFullYear()} {profile.name}</span>
          <a href="#top">Back to top &#8599;</a>
        </div>
      </div>
    </footer>
  );
}