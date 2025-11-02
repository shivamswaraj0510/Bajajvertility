// components/CardCarousel.jsx
import { useMemo, useState } from "react";
import "./styles/style.scss";
import star from "../../assets/starholo.png";

function CardCarousel({ items = [], visible = 4 }) {
  const total = items?.length ?? 0;
  const [start, setStart] = useState(0);
  const pageSize = Math.max(1, visible);

  // Compute visible items with wrap-around
  const visibleItems = useMemo(() => {
    if (total === 0) return [];
    const out = [];
    for (let i = 0; i < pageSize; i++) {
      out.push(items[(start + i) % total]);
    }
    return out;
  }, [items, start, pageSize, total]);

  if (total === 0) return null;

  const prev = () => setStart((s) => (s - pageSize + total) % total);
  const next = () => setStart((s) => (s + pageSize) % total);

  const renderStars = (rating) => {
    const starsArr = [];
    const maxStars = 5;
    const filledStars = Math.min(Math.max(0, rating ?? 0), maxStars);
    for (let i = 0; i < maxStars; i++) {
      starsArr.push(
        <img
          key={i}
          src={star}
          alt="star"
          className={`star-icon ${
            i < filledStars ? "star-filled" : "star-empty"
          }`}
          style={{
            opacity: i < filledStars ? 1 : 0.3,
            width: "20px",
            height: "20px",
            marginRight: "4px",
          }}
        />
      );
    }
    return starsArr;
  };

  return (
    <div className="cardCarousel-container">
      <button
        type="button"
        className="cardCarousel-btn cardCarousel-btn--left"
        onClick={prev}
        aria-label="Previous"
      >
        ‹
      </button>

      <div className="cardCarousel-viewport">
        <div className="cardCarousel-track">
          {visibleItems.map((item, idx) => (
            <div
              key={item?._id ?? item?._key ?? `${start}-${idx}`}
              className="cardCarousel-item card"
              role="group"
              aria-roledescription="slide"
            >
              {item?.imageUrl && (
                <img
                  src={item.imageUrl}
                  alt={item?.alt || "card image"}
                  className="card-image"
                />
              )}

              <div className="card-body">
                {/* Optional rating if provided on items */}
                {typeof item?.rating === "number" && (
                  <div
                    className="rating-container"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      marginTop: "8px",
                    }}
                  >
                    <div className="stars-wrapper">
                      {renderStars(item.rating)}
                    </div>
                    <span
                      className="rating-number"
                      style={{
                        fontSize: "14px",
                        fontWeight: "500",
                        color: "#666",
                      }}
                    >
                      {item.rating}/5
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        className="cardCarousel-btn cardCarousel-btn--right"
        onClick={next}
        aria-label="Next"
      >
        ›
      </button>
    </div>
  );
}

export default CardCarousel;
