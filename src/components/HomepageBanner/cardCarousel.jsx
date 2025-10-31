import { useMemo, useState } from "react";
import "./styles/style.scss";
import star from "../../assets/starholo.png";
function CardCarousel({
  items = [
    {
      id: 1,
      title: "Cozy Apartment",
      subtitle: "2 BHK in downtown",
      image:
        "https://www.parkhospital.in/storage/app/public/images/about/A9PkLLeksZUeeKhvWuOe23dnGvjNeBT6P53lFcEW.webp",
      renaking: 4,
      description: "Bright apartment with city views and modern kitchen.",
    },
    {
      id: 2,
      title: "Modern Loft",
      subtitle: "Open plan living",
      image:
        "https://www.parkhospital.in/storage/app/public/images/about/A9PkLLeksZUeeKhvWuOe23dnGvjNeBT6P53lFcEW.webp",
      renaking: 4,
      description: "Loft with high ceilings and lots of natural light.",
    },
    {
      id: 3,
      title: "Penthouse Suite",
      subtitle: "Skyline view",
      image:
        "https://www.parkhospital.in/storage/app/public/images/about/A9PkLLeksZUeeKhvWuOe23dnGvjNeBT6P53lFcEW.webp",
      description: "Luxurious top-floor suite with private terrace.",
      renaking: 4,
    },
    {
      id: 4,
      title: "Garden House",
      subtitle: "Private backyard",
      image:
        "https://www.parkhospital.in/storage/app/public/images/about/A9PkLLeksZUeeKhvWuOe23dnGvjNeBT6P53lFcEW.webp",
      description: "Charming house with a large private garden.",
      renaking: 4,
    },
    {
      id: 5,
      title: "Studio Flat",
      subtitle: "Compact & smart",
      image:
        "https://www.parkhospital.in/storage/app/public/images/about/A9PkLLeksZUeeKhvWuOe23dnGvjNeBT6P53lFcEW.webp",
      renaking: 4,
      description: "Perfect starter studio with efficient layout.",
    },
    {
      id: 6,
      title: "Beach Villa",
      subtitle: "Steps from the sand",
      image:
        "https://www.parkhospital.in/storage/app/public/images/about/A9PkLLeksZUeeKhvWuOe23dnGvjNeBT6P53lFcEW.webp",
      description: "Wake up to ocean views in this spacious villa.",
      renaking: 4,
    },
    {
      id: 7,
      title: "Country Cottage",
      subtitle: "Peaceful retreat",
      image:
        "https://www.parkhospital.in/storage/app/public/images/about/A9PkLLeksZUeeKhvWuOe23dnGvjNeBT6P53lFcEW.webp",
      description: "Cozy cottage surrounded by rolling hills.",
      renaking: 4,
    },
    {
      id: 8,
      title: "City Condo",
      subtitle: "Convenient location",
      image:
        "https://www.parkhospital.in/storage/app/public/images/about/A9PkLLeksZUeeKhvWuOe23dnGvjNeBT6P53lFcEW.webp",
      description: "Condo close to transport, shops and cafes.",
      renaking: 4,
    },
    {
      id: 9,
      title: "Suburban Home",
      subtitle: "Family-friendly",
      image:
        "https://www.parkhospital.in/storage/app/public/images/about/A9PkLLeksZUeeKhvWuOe23dnGvjNeBT6P53lFcEW.webp",
      description: "Four-bedroom home in a quiet neighborhood.",
      renaking: 4,
    },
    {
      id: 10,
      title: "Riverside Cabin",
      subtitle: "Nature escape",
      image:
        "https://www.parkhospital.in/storage/app/public/images/about/A9PkLLeksZUeeKhvWuOe23dnGvjNeBT6P53lFcEW.webp",
      description: "Rustic cabin on the river, great for weekends.",
      renaking: 4,
    },
    {
      id: 11,
      title: "Designer Flat",
      subtitle: "High-end finishes",
      image:
        "https://www.parkhospital.in/storage/app/public/images/about/A9PkLLeksZUeeKhvWuOe23dnGvjNeBT6P53lFcEW.webp",
      description: "Designer interiors with premium fixtures.",
      renaking: 3,
    },
    {
      id: 12,
      subtitle: "Ski access",
      image:
        "https://www.parkhospital.in/storage/app/public/images/about/A9PkLLeksZUeeKhvWuOe23dnGvjNeBT6P53lFcEW.webp",
      renaking: 4,
    },
  ],
  visible = 4,
}) {
  const total = items?.length || 0;

  const [start, setStart] = useState(0);
  const pageSize = Math.max(1, visible);
  // compute visible items with wrap-around
  const visibleItems = useMemo(() => {
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
    const stars = [];
    const maxStars = 5;
    const filledStars = Math.min(Math.max(0, rating || 0), maxStars);

    for (let i = 0; i < maxStars; i++) {
      stars.push(
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
    return stars;
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
        <div
          className="cardCarousel-track"
        >
          {visibleItems.map((item, idx) => (
            <div
              key={item?.id ?? item?._id ?? `${start}-${idx}`}
              className="cardCarousel-item card"
              role="group"
              aria-roledescription="slide"
            >
              {item?.image || item?.img || item?.thumbnail ? (
                <img
                  src={item.image || item.img || item.thumbnail}
                  alt={item?.title || item?.name || "card image"}
                  className="card-image"
                />
              ) : null}

              <div className="card-body">
                {item?.subtitle ? (
                  <p className="card-sub">{item.subtitle}</p>
                ) : null}

                {item?.renaking ? (
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
                      {renderStars(item.renaking)}
                    </div>
                    <span
                      className="rating-number"
                      style={{
                        fontSize: "14px",
                        fontWeight: "500",
                        color: "#666",
                      }}
                    >
                      {item.renaking}/5
                    </span>
                  </div>
                ) : null}

                {!item?.title && !item?.subtitle && !item?.image && (
                  <pre className="card-json" style={{ whiteSpace: "pre-wrap" }}>
                    {JSON.stringify(item, null, 2)}
                  </pre>
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
