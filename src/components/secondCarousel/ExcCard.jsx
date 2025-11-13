import "./styles/excCard.scss";

function ExcCard({ item }) {
  console.log(item);

  const imgSrc = item.imageUrl;
  return (
    <div
      className="ExcCardCarousel-item"
      role="group"
      aria-roledescription="slide"
    >
      <div className="img">
        <img
          src={imgSrc}
          alt="card image"
          className="card-image"
        />
      </div>

      <div className="card-body">
        {item?.subtitle ? (
          <p className="card-sub">{item.subtitle}</p>
        ) : null}
      </div>
    </div>
  );
}

export default ExcCard;
