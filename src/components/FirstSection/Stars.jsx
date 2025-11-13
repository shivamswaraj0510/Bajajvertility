import React from "react";
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
        className={`star-icon ${i < filledStars ? "star-filled" : "star-empty"}`}
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

export { renderStars };
