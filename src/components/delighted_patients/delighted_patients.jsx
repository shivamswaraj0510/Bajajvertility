import React, { useEffect, useState } from "react";
import "./styles/delighted_patients.scss";
import { client } from "../../lib/sanity";

const DelightedPatientsCarousel = () => {
  const [title, setTitle] = useState("Loading...");
  const [reviews, setReviews] = useState([]);
  const [idx, setIdx] = useState(0);
  const [fade, setFade] = useState(true);

  // Fetch data from Sanity
  useEffect(() => {
    const fetchData = async () => {
      const data = await client.fetch(`
        *[_type == "delighted"]{
          title,
          reviews[]{
            "imageUrl": image_link.asset->url,
            image_description
          }
        }
      `);

      if (data.length > 0) {
        setTitle(data[0].title);
        setReviews(data[0].reviews);
      }
    };

    fetchData();
  }, []);

  const next = () => {
    setFade(true);
    setTimeout(() => {
      setIdx((p) => (p + 1) % reviews.length);
      setFade(false);
    }, 600);
  };

  useEffect(() => {
    if (reviews.length > 0) {
      const t = setInterval(next, 5000);
      return () => clearInterval(t);
    }
  }, [reviews]);

  const ReviewCard = ({ review }) => (
    <div className="review-card">
      <div className="card-top">
        <img
          src={review.imageUrl}
          alt={review.image_description}
          style={{ width: "192px", height: "96px" }}
        />
        <p>{review.image_description}</p>
      </div>
    </div>
  );

  if (reviews.length === 0) {
    return <p>Loading reviews...</p>;
  }

  const leftReview = reviews[idx];
  const rightReview = reviews[(idx + 1) % reviews.length];

  return (
    <section className="delighted-section">
      <h2 className="title">{title}</h2>
      <div className="title-accents" aria-hidden="true">
        <span className="line-blue" />
        <span className="line-orange" />
      </div>
      <p className="subtitle">Our True Guardians</p>

      <div className="reviews-container">
        <div className="card-wrapper" fadeClass={fade ? "fade-in" : "fade-out"}>
          <ReviewCard review={leftReview} />
          <ReviewCard review={rightReview} />
        </div>
      </div>
    </section>
  );
};

export default DelightedPatientsCarousel;