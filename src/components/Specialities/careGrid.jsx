
import React, { useEffect, useState } from "react";
import "./styles/careGrid.scss";
import { client } from "../../lib/sanity";

const query = `
*[_type == "careGrid"][0]{
  eyebrow,
  careTitle,
  careSubtitle,
  specialties[]{
    label
  }
}
`;

const CareGrid = () => {
  const [data, setData] = useState(null);
  const [activeIndex, setActiveIndex] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    client
      .fetch(query)
      .then((res) => {
        if (!mounted) return;
        setData(res);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        if (!mounted) return;
        setError("Failed to load care grid content.");
        setLoading(false);
      });
    return () => {
      mounted = false;
    };
  }, []);

  // Optional: fallback content if Sanity has no data yet
  const fallbackSpecialties = [
    "Neurology",
    "Bones",
    "Oncology",
    "Otorhinolaryngology",
    "Ophthalmology",
    "Cardiovascular",
    "Pulmonology",
    "Renal Medicine",
    "Gastroenterology",
    "Urology",
    "Dermatology",
    "Gynaecology",
  ];

  if (loading) {
    return (
      <section className="care-section">
        <div className="care-header">
          <div className="eyebrow" aria-hidden="true">
           <img src="./Vector.png"/>
            <span>Loading…</span>
          </div>
          <h2>Loading Care Specialties</h2>
          <p className="care-subtitle">Please wait while we fetch the latest content.</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="care-section">
        <div className="care-header">
          <div className="eyebrow" aria-hidden="true">
            <img src="./Vector.png"/>
            <span>OUR CARE</span>
          </div>
          <h2>Our Care Specialties</h2>
          <p className="care-subtitle">{error}</p>
        </div>
      </section>
    );
  }

  const eyebrow = data?.eyebrow ?? "OUR CARE";
  const careTitle = data?.careTitle ?? "Our Care Specialties";
  const careSubtitle =
    data?.careSubtitle ??
    "At Bajaj Vitality, we offer a wide range of medical services tailored to your needs, from routine check-ups to specialized treatments.";
  const specialties = (data?.specialties ?? []).map((s) => s.label) || fallbackSpecialties;

  // Ensure exactly 12 for 4×3 (optional hard guard)
  const normalized = specialties.slice(0, 12);

  return (
    <section className="care-section" aria-labelledby="care-title">
      <div className="care-header">
        <div className="eyebrow" aria-hidden="true">
          <img src="./Vector.png"/>
          <span>{eyebrow}</span>
        </div>
        <h2 id="care-title">{careTitle}</h2>
        <p className="care-subtitle">{careSubtitle}</p>
      </div>

      <div className="care-grid">
        {normalized.map((label, idx) => (
          <button
            key={idx}
            className={`care-tile ${activeIndex === idx ? "active" : ""}`}
            onClick={() => setActiveIndex(idx)}
            type="button"
            aria-pressed={activeIndex === idx}
          >
            {/* Sample double-heart icon (replace path later) */}
            <svg className="heart-icon" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M12 21s-6.2-4.5-9.2-8.4C-0.2 8.7 1.8 4.1 6 3.5c2-.3 4 .6 6 2.6 2-2 4-2.9 6-2.6 4.2.6 6.4 5.2 3.2 9.1C18.4 16.5 12 21 12 21z"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 18s-4.5-3.3-6.7-6.2c-2-2.6-.7-5.6 1.9-6 1.6-.2 3 .5 4.8 2.2 1.7-1.7 3.2-2.4 4.8-2.2 2.7.4 3.9 3.4 1.9 6C16.5 14.7 12 18 12 18z"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.92"
              />
            </svg>
            <span className="care-label">{label}</span>
          </button>
        ))}
      </div>
    </section>
  );
};

export default CareGrid;
