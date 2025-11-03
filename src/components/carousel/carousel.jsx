import React, { useRef, useEffect, useMemo, useState } from "react";
import "./styles/carousel.scss";
import { useCarousel } from "./javscript/carousel";
import { client } from "../../lib/sanity";

// ---- GROQ QUERY ----
const CAROUSEL_BY_ID = `
*[_type == "carousel" && _id == $id][0]{
  _id,
  title,
  items[]{
    carousel_image_description,
    "carousel_image_link": carousel_image_link.asset->url,
    button_text
  }
}
`;

export default function UpdatesCarousel2({ docId }) {
  const trackRef = useRef(null);

  // ---- FETCH STATE ----
  const [doc, setDoc] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // ---- FETCH: Sanity ----
  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);

    client
      .fetch(CAROUSEL_BY_ID, { id: docId })
      .then((res) => {
        if (!cancelled) setDoc(res ?? null);
      })
      .catch((err) => {
        if (!cancelled) {
          console.error(err);
          setError("Failed to load carousel");
        }
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [docId]);

  // ---- Map Sanity items to slides your UI expects ----
  const slides = useMemo(() => {
    if (!doc?.items?.length) return [];
    return doc.items.map((it, i) => ({
      id: `${doc._id}-${i}`,
      image: it.carousel_image_link || "",
      title: it.carousel_image_description || "Untitled",
      caption: it.carousel_image_description,
      href: "#", // No URL in sample; change when you add button_url in schema
      button_text: it.button_text || "Read More",
    }));
  }, [doc]);

  // ---- Hook after we know slideCount ----
  const { index, next, prev, goTo, setTrack, handleKeyDown, visibleCount } = useCarousel({
    slideCount: slides.length,
    autoplay: false,
    interval: 5000,
    trackRef,
    visibleDesktop: 3,
  });

  useEffect(() => setTrack(trackRef.current), [setTrack]);

  // ---- Loading / Error / Empty states ----
  if (loading) {
    return (
      <section className="com-padding updateLaunche py-15 pb-md-15 pb-17" aria-busy="true">
        <div className="ul-container">
          <p>Loading carousel…</p>
        </div>
      </section>
    );
  }

  if (error || !doc) {
    return (
      <section className="com-padding updateLaunche py-15 pb-md-15 pb-17" role="alert">
        <div className="ul-container">
          <p>{error ?? "Carousel not found."}</p>
        </div>
      </section>
    );
  }

  if (slides.length === 0) {
    return (
      <section className="com-padding updateLaunche py-15 pb-md-15 pb-17">
        <div className="ul-container">
          <p>No items to show.</p>
        </div>
      </section>
    );
  }

  return (
    <section
      className="com-padding updateLaunche py-15 pb-md-15 pb-17"
      aria-labelledby="updates-title"
    >
      <div className="ul-container">
        <div
          className="ul-carousel"
          role="region"
          aria-label={doc.title ? `${doc.title} carousel` : "Carousel"}
          onKeyDown={handleKeyDown}
        >
          {/* arrows */}
          <button
            type="button"
            className="ul-nav ul-prev"
            aria-label="Previous"
            onClick={prev}
          >
            ‹
          </button>

          <div className="ul-viewport" aria-live="polite">
            <div
              className="ul-track"
              ref={trackRef}
              data-index={index}
              style={{ "--visible-count": String(visibleCount) }}
            >
              {slides.map((s, i) => (
                <article
                  key={s.id}
                  className="ul-slide"
                  aria-roledescription="slide"
                  aria-label={`${i + 1} of ${slides.length}`}
                >
                  <div className="ul-card">
                    {/* IMAGE + OVERLAYED TITLE */}
                    <div className="ul-media">
                      <img
                        src={s.image}
                        alt={s.title}
                        loading="lazy"
                        width={356}
                        height={224}
                      />
                    </div>

                    {/* CAPTION LINE BELOW IMAGE */}
                    <p className="ul-caption">{s.caption ?? s.title}</p>

                    {/* CTA BUTTON (uses button_text from Sanity) */}
                    <a
                      className="ul-read"
                      href={s.href ?? "#"}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Read more: ${s.title}`}
                    >
                      {s.button_text ?? "Read More"}
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <button
            type="button"
            className="ul-nav ul-next"
            aria-label="Next"
            onClick={next}
          >
            ›
          </button>

          {/* dots */}
          <div className="ul-dots" role="tablist" aria-label="Slides">
            {slides.map((_, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={i === index}
                aria-label={`Go to slide ${i + 1}`}
                className={`ul-dot ${i === index ? "is-active" : ""}`}
                onClick={() => goTo(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}