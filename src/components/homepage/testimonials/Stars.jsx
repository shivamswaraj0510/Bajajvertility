
const renderStars = (rating) => {
  const starsArr = [];
  for (let i = 0; i < rating; i++) {
    starsArr.push(
      <img
        key={i}
        src="./star.png"
        alt="star"
        className="star-icon " />
    );
  }
  return starsArr;
};

export { renderStars };
