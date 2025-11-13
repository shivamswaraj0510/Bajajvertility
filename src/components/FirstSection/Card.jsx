import { renderStars } from "./Stars";
import "./styles/cards.scss"
const Card = ({ item }) => {

    const imgSrc = item?.image;
    return (
        <div
            className="cardCarousel-item"
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
                <p className="card-sub">{item?.title}</p>
                
                <p className="card-sub">{item?.subtitle}</p>
                {typeof item?.rating === "number" && (
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
                            {renderStars(item?.rating)}
                        </div>
                        {/* <span
                            className="rating-number"
                            style={{
                                fontSize: "14px",
                                fontWeight: "500",
                                color: "#666",
                            }}
                        >
                            {item.rating}/5
                        </span> */}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Card;