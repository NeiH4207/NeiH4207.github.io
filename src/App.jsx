import { useEffect, useState } from "react";
import { portfolio } from "./data/portfolio";

function App() {
  const year = new Date().getFullYear();
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "dark");

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <a href="#top" className="brand">
            <span className="brand-mark">
              <img className="brand-avatar" src="/avatar.jpg" alt="Vu Quoc Hien" />
            </span>
            <span className="brand-text">{portfolio.name}</span>
          </a>

          <nav className="nav" aria-label="Primary">
            {portfolio.nav.map((item) => (
              <a key={item.id} href={`#${item.id}`}>
                {item.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            className="theme-toggle"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          >
            <svg
              className="theme-toggle-icon"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="4" fill="currentColor" />
              <path
                d="M12 2v2.5M12 19.5V22M4.93 4.93l1.77 1.77M17.3 17.3l1.77 1.77M2 12h2.5M19.5 12H22M4.93 19.07 6.7 17.3M17.3 6.7l1.77-1.77"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-text">
              <p className="hero-kicker">{portfolio.role}</p>
              <h1>{portfolio.name}</h1>
              <p className="hero-subtitle">{portfolio.subtitle}</p>

              <div className="hero-actions">
                <a className="btn primary" href={portfolio.links.email}>
                  Contact me
                </a>
                <a
                  className="btn ghost"
                  href={portfolio.links.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub Profile
                </a>
              </div>

              <dl className="hero-meta">
                <div>
                  <dt>Email</dt>
                  <dd>
                    <a href={portfolio.links.email}>{portfolio.links.emailLabel}</a>
                  </dd>
                </div>
                <div>
                  <dt>GitHub</dt>
                  <dd>
                    <a href={portfolio.links.github} target="_blank" rel="noreferrer">
                      {portfolio.links.githubLabel}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt>LinkedIn</dt>
                  <dd>
                    <a href={portfolio.links.linkedin} target="_blank" rel="noreferrer">
                      {portfolio.links.linkedinLabel}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt>Scholar</dt>
                  <dd>
                    <a href={portfolio.links.scholar} target="_blank" rel="noreferrer">
                      {portfolio.links.scholarLabel}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt>Phone</dt>
                  <dd>
                    <a href={portfolio.links.phone}>{portfolio.links.phoneLabel}</a>
                  </dd>
                </div>
              </dl>
            </div>

            <div className="hero-panel">
              <div className="hero-panel-card">
                <p className="hero-panel-kicker">Currently</p>
                <h2>{portfolio.currentFocus.title}</h2>
                <p className="hero-panel-body">{portfolio.currentFocus.description}</p>
              </div>

              <div className="hero-panel-grid">
                {portfolio.stats.map((stat) => (
                  <div className="stat-card" key={stat.label}>
                    <span className="stat-label">{stat.label}</span>
                    <span className="stat-value">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Section id="summary" title="Professional Summary">
          <p className="body-lg">{portfolio.summary}</p>
        </Section>

        <Section id="skills" title="Technical Skills" alternate>
          <div className="grid-2">
            {portfolio.skillGroups.map((group) => (
              <div className="skill-group" key={group.title}>
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item.label}>
                      <strong>{item.label}:</strong> {item.value}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section id="experience" title="Work Summary">
          <div className="timeline">
            {portfolio.experiences.map((experience) => (
              <article className="timeline-item" key={`${experience.role}-${experience.company}`}>
                <header>
                  <div>
                    <h3>{experience.role}</h3>
                    <p className="item-company">
                      <a href={experience.companyUrl} target="_blank" rel="noreferrer">
                        {experience.company}
                      </a>
                    </p>
                  </div>
                  <div className="item-meta">
                    <span>{experience.period}</span>
                    <span>{experience.location}</span>
                  </div>
                </header>
                <p className="timeline-summary">{experience.summary}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section id="education" title="Education" alternate>
          <article className="education-card">
            <header>
              <div>
                <h3>{portfolio.education.school}</h3>
                <p className="item-subtitle">{portfolio.education.degree}</p>
              </div>
              <div className="item-meta">
                <span>{portfolio.education.period}</span>
                <span>{portfolio.education.location}</span>
              </div>
            </header>
            <p>{portfolio.education.description}</p>
            <p>
              <strong>Supervisor:</strong>{" "}
              <a href={portfolio.education.supervisor.url} target="_blank" rel="noreferrer">
                {portfolio.education.supervisor.name}
              </a>
            </p>
            <p>
              <strong>Thesis:</strong> {portfolio.education.thesis}
            </p>
          </article>
        </Section>

        <Section id="publications" title="Selected Publications">
          <h3 className="list-heading">International Journals (Q1 / Q2)</h3>
          <ul className="pub-list">
            {portfolio.publications.map((publication) => (
              <li key={`${publication.year}-${publication.title}`}>
                <strong>{publication.year}:</strong> <HighlightedAuthors authors={publication.authors} />.{" "}
                <a href={publication.url} target="_blank" rel="noreferrer">
                  {publication.title}
                </a>
                . <em>{publication.journal}</em> ({publication.quartile}).
              </li>
            ))}
          </ul>
        </Section>

        <Section id="honors" title="Selected Honors & Awards" alternate>
          <ul className="award-list">
            {portfolio.honors.map((honor) => (
              <li key={honor.title}>
                <strong>{honor.title}</strong>
                {honor.detail ? `, ${honor.detail}` : ""}
                {honor.location ? <span className="award-meta">{honor.location}</span> : null}
              </li>
            ))}
          </ul>
        </Section>

        <Section id="contact" title="Contact">
          <div className="contact-grid">
            <a className="contact-card" href={portfolio.links.email}>
              <span className="contact-label">Email</span>
              <span className="contact-value">{portfolio.links.emailLabel}</span>
            </a>
            <a className="contact-card" href={portfolio.links.github} target="_blank" rel="noreferrer">
              <span className="contact-label">GitHub</span>
              <span className="contact-value">{portfolio.links.githubLabel}</span>
            </a>
            <a className="contact-card" href={portfolio.links.linkedin} target="_blank" rel="noreferrer">
              <span className="contact-label">LinkedIn</span>
              <span className="contact-value">{portfolio.links.linkedinLabel}</span>
            </a>
            <a className="contact-card" href={portfolio.links.scholar} target="_blank" rel="noreferrer">
              <span className="contact-label">Scholar</span>
              <span className="contact-value">{portfolio.links.scholarLabel}</span>
            </a>
          </div>
        </Section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <p>{year} Vu Quoc Hien. Built with React and Vite.</p>
          <div className="footer-links">
            <a href={portfolio.links.email}>Email</a>
            <a href={portfolio.links.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={portfolio.links.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

function Section({ id, title, children, alternate = false }) {
  return (
    <section id={id} className={`section${alternate ? " section-alt" : ""}`}>
      <div className="container">
        <h2>{title}</h2>
        {children}
      </div>
    </section>
  );
}

function HighlightedAuthors({ authors }) {
  const parts = authors.split(/(Vu, Q\.H\.(?: \(First Author\))?)/g);

  return parts.map((part, index) =>
    part.startsWith("Vu, Q.H.") ? (
      <span className="author-highlight" key={`${part}-${index}`}>
        {part}
      </span>
    ) : (
      part
    )
  );
}

export default App;
