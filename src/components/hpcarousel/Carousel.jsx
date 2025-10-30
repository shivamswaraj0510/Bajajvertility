import React from "react";

function Carousel({ items, active, onChange }) {
  const total = items.length;
  if (total === 0) return null;

  return (
    <div className="hpcarousel-controls" aria-label="Carousel items">
      <div className="hpcarousel-button-list" role="tablist">
        {items.map((it, idx) => (
          <div key={it._id}>
            <button
              role="tab"
              aria-selected={idx === active}
              aria-controls={`carousel-panel-${idx}`}
              className={`hpcarousel-button ${
                idx === active ? "is-active" : ""
              }`}
              onClick={() => onChange(idx)}
            >
              {`Item ${idx + 1}`}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
