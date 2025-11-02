import { useMemo, useState } from "react";
import "./styles/style.scss";
function SingleCardCarousel({
  items = [
    {
      id: 1,
      title: "Cozy Apartment",
      image:
        "https://d1rq68njgylyqg.cloudfront.net/images/Front_Image_Counter4.jpg",
      renaking: 4,
      description: "Bright apartment with city views and modern kitchen.",
    },
    {
      id: 2,
      title: "Modern Loft",
      image:
        "https://d1rq68njgylyqg.cloudfront.net/images/Front_Image_Counter10.webp",
      renaking: 4,
      description: "Loft with high ceilings and lots of natural light.",
    },
    {
      id: 3,
      title: "Penthouse Suite",
      image:
        "https://d1rq68njgylyqg.cloudfront.net/images/Front_Image_Counter4.jpg",
      description: "Luxurious top-floor suite with private terrace.",
      renaking: 4,
    },
    {
      id: 4,
      title: "Garden House",
      image:
        "https://d1rq68njgylyqg.cloudfront.net/images/Front_Image_Counter10.webp",
      description: "Charming house with a large private garden.",
      renaking: 4,
    },
    {
      id: 5,
      title: "Studio Flat",
      image:
        "https://d1rq68njgylyqg.cloudfront.net/images/Front_Image_Counter4.jpg",
      renaking: 4,
      description: "Perfect starter studio with efficient layout.",
    },
    {
      id: 6,
      title: "Beach Villa",
      image:
        "https://d1rq68njgylyqg.cloudfront.net/images/Front_Image_Counter4.jpg",
      description: "Wake up to ocean views in this spacious villa.",
      renaking: 4,
    },
    {
      id: 7,
      title: "Country Cottage",
      image:
        "https://d1rq68njgylyqg.cloudfront.net/images/Front_Image_Counter7.jpg",
      description: "Cozy cottage surrounded by rolling hills.",
      renaking: 4,
    },
    {
      id: 8,
      title: "City Condo",
      image:
        "https://d1rq68njgylyqg.cloudfront.net/images/Front_Image_Counter7.jpg",
      description: "Condo close to transport, shops and cafes.",
      renaking: 4,
    },
    {
      id: 9,
      title: "Suburban Home",
      image:
        "https://d1rq68njgylyqg.cloudfront.net/images/Front_Image_Counter7.jpg",
      description: "Four-bedroom home in a quiet neighborhood.",
      renaking: 4,
    },
    {
      id: 10,
      title: "Riverside Cabin",
      image:
        "https://d1rq68njgylyqg.cloudfront.net/images/Front_Image_Counter7.jpg",
      description: "Rustic cabin on the river, great for weekends.",
      renaking: 4,
    },
    {
      id: 11,
      title: "Designer Flat",
      image:
        "https://d1rq68njgylyqg.cloudfront.net/images/Front_Image_Counter7.jpg",
      description: "Designer interiors with premium fixtures.",
      renaking: 3,
    },
    {
      id: 12,
      image:
        "https://parkhospital.in/storage/app/public/upload/q76GLWhTiIObZq1JPkuQOZvC5apzXkRrLZG6xr2l.webp",
      renaking: 1,
    },
  ],
  visible = 1,
}) {
  const total = items?.length || 0;

  const [start, setStart] = useState(0);
  const pageSize = Math.max(1, visible);
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
  return (
    <div className="third-container">
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
              key={item?.id ?? item?._id ?? `${start}-${idx}`}
              className="cardCarousel-item card"
              role="group"
              aria-roledescription="slide"
            >
              {item?.image || item?.img || item?.thumbnail ? (
                <div className="img">
                  <img
                    src={item.image || item.img || item.thumbnail}
                    alt={item?.title || item?.name || "card image"}
                    className="card-image"
                  />
                </div>
              ) : null}
              {item?.subtitle && (
                <div className="card-body">
                  {item?.subtitle ? (
                    <p className="card-sub">{item.subtitle}</p>
                  ) : null}
                </div>
              )}
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

export default SingleCardCarousel;
