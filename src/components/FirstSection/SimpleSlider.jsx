import "./styles/style.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./Card";
export default function SimpleSlider({ items = [] }) {
  var settings = {
    infinite: true,
    autoplay: true,
    speed: 900,
    autoplaySpeed: 1500,
    cssEase: "linear",
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {items.map((item, index) => (
          <Card item={item} key={index} />
        ))}
      </Slider>
    </div>
  );
}