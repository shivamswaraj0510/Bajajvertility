import "./styles/roundedCard.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ExcCard from "./ExcCard";
export default function RoundedCardSlider({ items = [] }) {
    var settings = {
        infinite: true,
        autoplay: true,
        speed: 900,
        autoplaySpeed: 4000,
        centerPadding: '70px',
        cssEase: "linear",
        slidesToShow: 3,
        slidesToScroll: 1,
    };
    return (
        <div className="rounded-card-container">
            <Slider {...settings}>
                {items.map((item, index) => (
                    <ExcCard item={item} key={index} />
                ))}
            </Slider>
        </div>
    );
}