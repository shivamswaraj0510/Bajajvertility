import "./styles/style.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect } from "react";
import { client } from "../../../lib/sanity";
import Card from "./Card";

const query = `*[_type == "specialists"][0]{
  "imageUrl": image.asset->url,
  title,
    heading,
    description,
    cards[]{
      "image":image.asset->url,
      imageAlt,
      name,
      profession
    }
}`
export default function Specialist() {
    const [items, setItems] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await client.fetch(query);
                setItems(response);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        fetchData();
    }, [])

    var settings = {
        infinite: true,
        autoplay: true,
        arrows: false,
        draggable: true,
        speed: 1500,
        autoplaySpeed: 4000,
        slidesToShow: 4,
        slidesToScroll: 4,
    };
    return (
        <>
            {items &&
                <section className="specialist">
                    <div className="specialist-container">

                        <div className="specialist-content">
                            <h2 className="specialist-title">
                                <img src={items?.imageUrl} className="specialist-title-img" alt={items?.imageAlt} />
                                {items?.title}
                            </h2>
                            <h2 className="specialist-heading">{items?.heading}</h2>
                            <p className="specialist-para">{items?.description}</p>

                        </div>
                        <div className="card-container">
                            <Slider {...settings}>
                                {items?.cards.map((item, index) => (
                                    <Card data={item} key={index} />
                                ))}
                            </Slider>
                        </div>
                    </div>

                </section>
            }
        </>
    );
}