import React, { useEffect, useMemo, useState } from "react";
import "./styles/footer.scss";
import { client } from "../../../lib/sanity";

// ---- GROQ QUERIES ----
const FOOTER_BY_ID = `
*[_type == "footer" && _id == $id][0]{
  _id,
  title,
  footerSections[]->{
    _id,
    heading,
    linkItem[]{
      name,
      redirectionLink
    }
  }
}
`;

const FOOTER_BY_TITLE = `
*[_type == "footer" && title == $title][0]{
  _id,
  title,
  footerSections[]->{
    _id,
    heading,
    linkItem[]{
      name,
      redirectionLink
    }
  }
}
`;

const FOOTER_FIRST = `
*[_type == "footer"][0]{
  _id,
  title,
  footerSections[]->{
    _id,
    heading,
    linkItem[]{
      name,
      redirectionLink
    }
  }
}
`;

export default function Footer({ footerId, footerTitle }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);

    const query = footerId ? FOOTER_BY_ID : footerTitle ? FOOTER_BY_TITLE : FOOTER_FIRST;
    const params = footerId ? { id: footerId } : footerTitle ? { title: footerTitle } : {};

    client
      .fetch(query, params)
      .then((res) => {
        if (!cancelled) setData(res ?? null);
      })
      .catch((err) => {
        console.error(err);
        if (!cancelled) setError("Failed to load footer.");
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [footerId, footerTitle]);

  const sections = useMemo(() => data?.footerSections ?? [], [data]);

  // Helper to find a section by heading and return its links
  const getLinks = (heading) => {
    const sec = sections.find((s) => s.heading?.trim().toLowerCase() === heading.trim().toLowerCase());
    return sec?.linkItem ?? [];
  };

  const renderLinks = (links) =>
    links.map((li, idx) => {
      const href = li.redirectionLink || "#";
      const isExternal = /^https?:\/\//i.test(href);
      return (
        <li key={idx} className="footer__item">
          <a
            className="footer__link"
            href={href}
            {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          >
            {li.name ?? "Untitled"}
          </a>
        </li>
      );
    });

  if (loading) {
    // Keep container + class names intact
    return (
      <footer className="footer">
        <div className="footer__container">
          <p>Loading footer…</p>
        </div>
      </footer>
    );
  }

  if (error || !data) {
    return (
      <footer className="footer" role="alert">
        <div className="footer__container">
          <p>{error ?? "Footer not found."}</p>
        </div>
      </footer>
    );
  }

  // Preserve your original markup & class names; only the <li><a> items are injected from Sanity
  const quickLinks = getLinks("Quick Links");
  const forPatients = getLinks("For Patients");
  const centresExcellence = getLinks("Centres Of Excellence"); // note: matches sample heading
  const ourHospital = getLinks("Our Hospital");
  const topProcedures = getLinks("Top Procedures");

  return (
    <footer className="footer" aria-labelledby="footer-title">
      <div className="footer__container">
        {/* Grid of sections — same structure/classes as your attached file */}
        <div className="footer__grid">
          {/* Quick Links column */}
          <nav className="footer__col" aria-label="Quick Links">
            <h3 className="footer__heading">Quick Links</h3>
            <ul className="footer__list">{renderLinks(quickLinks)}</ul>
          </nav>

          {/* For Patients column */}
          <nav className="footer__col" aria-label="For Patients">
            <h3 className="footer__heading">For Patients</h3>
            <ul className="footer__list">{renderLinks(forPatients)}</ul>
          </nav>

          {/* Centres Of Excellence column */}
          <nav className="footer__col" aria-label="Centres of Excellence">
            <h3 className="footer__heading">Centres of Excellence</h3>
            <ul className="footer__list">{renderLinks(centresExcellence)}</ul>
          </nav>

          {/* Our Hospital column */}
          <nav className="footer__col" aria-label="Our Hospital">
            <h3 className="footer__heading">Our Hospital</h3>
            <ul className="footer__list">{renderLinks(ourHospital)}</ul>
          </nav>

          {/* Top Procedures column */}
          <nav className="footer__col" aria-label="Top Procedures">
            <h3 className="footer__heading">Top Procedures</h3>
            <ul className="footer__list">{renderLinks(topProcedures)}</ul>
          </nav>

          
        </div>
      </div>
    </footer>
  );
}
