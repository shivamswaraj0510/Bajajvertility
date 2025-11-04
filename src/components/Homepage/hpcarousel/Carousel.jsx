function Carousel({ items, active, onChange }) {
  const total = items.length;
  if (total === 0) return null;

  return (
    <div className="hpcarousel-controls" aria-label="Carousel items">
      <div className="hpcarousel-button-list" role="tablist">
        {items.map((it, idx) => (
          <div
            key={`${it._id ?? "item"}-${idx}`}
            className={idx == active ? "active" : ""}
            onClick={() => onChange(idx)}
          >
            <button
              role="tab"
              aria-selected={idx === active}
              aria-controls={`carousel-panel-${idx}`}
              className={`hpcarousel-button ${
                idx === active ? "is-active" : ""
              }`}
            ></button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
