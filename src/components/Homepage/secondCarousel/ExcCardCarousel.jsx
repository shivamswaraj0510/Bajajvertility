import { useMemo, useState } from "react";
import "./styles/style.scss";

function ExcCardCarousel({ items = [], visible = 4 }) {
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

  const getImageUrl = (item) => {
    return (
      item?.image?.asset?.url ||
      // fallback shapes
      item?.image?.url ||
      item?.img ||
      item?.thumbnail ||
      null
    );
  };

  return (
    <div className="exccardCarousel-container">
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
            const imgSrc = getImageUrl(item);
            const key = item?._key || item?._id || `${start}-${idx}`;
            return (
              <div
                key={key}
                className="cardCarousel-item card"
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
                  {item?.subtitle ? (
                    <p className="card-sub">{item.subtitle}</p>
                  ) : null}
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

export default ExcCardCarousel;
