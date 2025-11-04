// components/CardCarousel.jsx
import { useMemo, useState } from "react";
import "./styles/style.scss";
import star from "../../../assets/star.png";

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
          {visibleItems.map((item, idx) => {
            const key =
              item?.id ?? item?._id ?? item?._key ?? `${start}-${idx}`;
            // support different image shapes: url string or object with asset.url
            let imageSrc = null;
            if (typeof item?.image === "string") imageSrc = item.image;
            else if (item?.image?.asset?.url) imageSrc = item.image.asset.url;
            else if (item?.imageUrl) imageSrc = item.imageUrl;
            else if (item?.img) imageSrc = item.img;
            else if (item?.thumbnail) imageSrc = item.thumbnail;

            const altText =
              item?.alt || item?.subtitle || item?.title || "card image";

            const itemRating =
              typeof item?.rating === "number"
                ? item.rating
                : typeof item?.renaking === "number"
                ? item.renaking
                : undefined;

            return (
              <div
                key={key}
                className="cardCarousel-item card"
                role="group"
                aria-roledescription="slide"
              >
                {imageSrc && (
                  <img src={imageSrc} alt={altText} className="card-image" />
                )}

                <div className="card-body">
                  {item?.title ? (
                    <h4 className="card-title">{item.title}</h4>
                  ) : null}
                  {item?.subtitle ? (
                    <p className="card-sub">{item.subtitle}</p>
                  ) : null}

                  {typeof itemRating === "number" && (
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
                        {renderStars(itemRating)}
                      </div>
                      <span
                        className="rating-number"
                        style={{
                          fontSize: "14px",
                          fontWeight: "500",
                          color: "#666",
                        }}
                      >
                        {itemRating}/5
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