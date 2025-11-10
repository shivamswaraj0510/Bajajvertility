import React, { useEffect, useRef, useState } from "react";

/**
 * Lightweight auto-scrolling carousel for the hero .visual card.
 * - Changes slide every 1000ms
 * - Cross-fade + subtle float for a calm, hospital-friendly feel
 * - No external libraries
 * - Images scaled to fit inside the existing rounded card
 */

const IMAGE_URLS = [
  // 1) Drugstore illustration
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCWQ90dv7YIyKmPpkMjkw1ZHwuIiqs4suoBA&s",
  // 2) Assorted pills close-up
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZcpCBBpyRNj9JwV7eglho5_8IuDUUumvRqw&s",
  // 3) Pharmacy counter illustration
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcknGRaCmS13UIQ-P3dTVUWp-9sl923psLiQ&s",
];

export default function HeroVisualCarousel({
  interval = 3000,   // 1 second as requested
  fadeMs = 600       // cross-fade duration
}) {
  const [active, setActive] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    // Auto-advance
    timerRef.current = setInterval(() => {
      setActive((i) => (i + 1) % IMAGE_URLS.length);
    }, interval);
    return () => clearInterval(timerRef.current);
  }, [interval]);

  return (
    <div className="visual" aria-hidden="true">
      <div className="visual__carousel" style={{ "--fade": `${fadeMs}ms` }}>
        {IMAGE_URLS.map((src, i) => (
          <figure
            key={src}
            className={`visual__slide ${i === active ? "is-active" : ""}`}
          >
            <img
              className="visual__img"
              src={src}
              alt=""            // decorative in hero
              loading="eager"
              draggable="false"
            />
          </figure>
        ))}
      </div>
    </div>
  );
}