import { useEffect, useState } from "react";
export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = ["Work", "About", "Experience"];
  return (
    <header className={`nav ${scrolled ? "nav--float" : ""}`}>
      <div className="nav__inner">
        <a href="#top" className="nav__logo display">Rotimi<span className="grad-text">.</span></a>
        <nav className="nav__links">
          {links.map((l) => <a key={l} href={`#${l.toLowerCase()}`}>{l}</a>)}
        </nav>
        <a href="#contact" className="nav__cta">Let&rsquo;s talk</a>
      </div>
    </header>
  );
}
