import { profile } from "../data";
export default function Contact() {
  return (
    <footer className="contact" id="contact">
      <div className="wrap contact__card reveal">
        <div className="contact__glow" aria-hidden="true" />
        <span className="eyebrow">Contact</span>
        <h2 className="contact__title display">Let&rsquo;s build something <span className="grad-text">together.</span></h2>
        <a className="btn btn--primary btn--lg" href={`mailto:${profile.email}`}>{profile.email}</a>
        <div className="contact__foot">
          <span>&copy; {new Date().getFullYear()} {profile.name}</span>
          <span>{profile.location}</span>
          <a href="#top">Back to top &#8599;</a>
        </div>
      </div>
    </footer>
  );
}
