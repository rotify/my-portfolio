import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["Work", "About", "Experience", "Contact"];

  return (
    <header className={`nav ${scrolled ? "nav--solid" : ""}`}>
      <div className="wrap nav__inner">
        <a href="#top" className="nav__logo serif">
          Shogbola Rotimi<span className="gold">.</span>
        </a>
        <nav className="nav__links">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`}>{l}</a>
          ))}
        </nav>
        <a href="#contact" className="nav__cta">
          Let&rsquo;s talk <span>&#8599;</span>
        </a>
      </div>
    </header>
  );
}