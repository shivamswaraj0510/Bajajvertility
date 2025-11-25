
import React from "react";
import "./styles/contact.scss";
import { client } from "../../lib/sanity";


const CONTACT_QUERY = `
*[_type == "contactHeader"][0]{
  kickerText,
  title,
  cards[]{
    title,
    lines,
    "iconUrl": icon.asset->url,
    "iconAlt": icon.alt
  }
}
`;


export function IconImage({ src, alt, accent = false, size = 38 }) {
  const classes = `icon-capsule ${accent ? "icon-capsule--accent" : "icon-capsule--subtle"}`;
  return (
    <img className="icon-img" src={src} alt={alt || ""} />
  );
}

function Card({ title, lines = [], iconSrc, accent = false }) {
  return (
    <article className={`contact-card ${accent ? "contact-card--accent" : "contact-card--subtle"}`}>
      <IconImage src={iconSrc} alt={`${title} icon`} accent={accent} />
      <div className="contact-card__body">
        <h3 className={`contact-card__title ${accent ? "contact-card__title--accent" : ""}`}>{title}</h3>
        {lines.map((text, i) => (
          <p key={i} className={`contact-card__line ${accent ? "contact-card__line--accent" : ""}`}>
            {text}
          </p>
        ))}
      </div>
    </article>
  );
}

export default function ContactSection() {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    let mounted = true;
    client
      .fetch(CONTACT_QUERY)
      .then((res) => {
        if (!mounted) return;
        setData(res);
      })
      .catch((e) => {
        if (!mounted) return;
        setError(e?.message || "Failed to load contact section");
      })
      .finally(() => {
        if (mounted) setLoading(false);
      });

    return () => {
      mounted = false;
    };
  }, []);

  if (loading) {
    return (
      <section className="contact-section" aria-labelledby="contact-title">
        <div className="contact-header">
          <span className="contact-kicker">Loading…</span>
          <h2 id="contact-title" className="contact-title">Loading…</h2>
        </div>
      </section>
    );
  }

  if (error || !data) {
    return (
      <section className="contact-section" aria-labelledby="contact-title">
        <div className="contact-header">
          <span className="contact-kicker">Unable to load</span>
          <h2 id="contact-title" className="contact-title">Contact</h2>
        </div>
      </section>
    );
  }

  return (
    <section className="contact-section" aria-labelledby="contact-title">
      <div className="contact-header">
        <span className="contact-kicker">
          <img src="./Vector.png"/>
          {data.kickerText}
        </span>
        <h2 id="contact-title" className="contact-title">{data.title}</h2>
      </div>

      <div className="contact-grid">
        {(data.cards || []).map((c, idx) => (
          <Card
            key={idx}
            title={c.title}
            iconSrc={c.iconUrl || ""}     
            lines={c.lines || []}         
          />
        ))}
      </div>
    </section>
  );
}
