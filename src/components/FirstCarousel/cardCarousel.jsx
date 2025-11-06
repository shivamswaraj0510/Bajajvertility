// components/CardCarousel.jsx
import { useMemo, useState } from "react";
import "./styles/style.scss";
import star from "../../assets/starholo.png";

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

function CardCarousel({ items = [], visible = 4 }) {
  const total = Array.isArray(items) ? items.length : 0;
  const [start, setStart] = useState(0);
  const pageSize = Math.max(1, visible);

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
          {visibleItems.map((item, idx) => {
            const imgSrc = item.image;
            const key = item?._key || item?._id || `${start}-${idx}`;
            return (
              <div
                key={key}
                className="cardCarousel-item"
                role="group"
                aria-roledescription="slide"
              >
                {imgSrc ? (
                  <div className="img">
                    <img
                      src={imgSrc}
                      alt={item?.subtitle || item?.title || "card image"}
                      className="card-image"
                    />
                  </div>
                ) : null}

                <div className="card-body">
                  <p className="card-sub">{item.title}</p>

                  <p className="card-sub">{item.subtitle}</p>
                  {typeof item.rating === "number" && (
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
            );
          })}
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
