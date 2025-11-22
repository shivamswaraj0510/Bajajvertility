import "./styles/testimonials.scss";
import { client } from "../../../lib/sanity";
import { useState, useEffect } from "react"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestimonialCard from "./testimonialCard";
const query = `*[_type == "testimonials"][0]{
  "imageUrl": image.asset->url,
  title,
    heading,
    description,
    cards[]{
      "image":image.asset->url,
      imageAlt,
      name,
      location,
      review,
      rating
    }
}`
export default function Testimonials() {
    const [items, setItems] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await client.fetch(query);
                setItems(response);
            } catch (error) {
                setError("Failed to load testimonials. Please try again later.");
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    var settings = {
        infinite: false,
        autoplay: false,
        draggable: true,
        speed: 1500,
        slidesToShow: 3,
        slidesToScroll: 1,
    };

    if (loading) {
        return (
            <section className="testimonials">
                <div className="testimonials-container">
                    <p>Loading testimonials...</p>
                </div>
            </section>
        );
    }

    if (error) {
        return (
            <section className="testimonials">
                <div className="testimonials-container">
                    <p className="error-message">{error}</p>
                </div>
            </section>
        );
    }

    return (
        <section className="testimonials">
            <div className="testimonials-container">
                <div className="testimonials-content">
                    <h2 className="testimonials-title">
                        <img src={items?.imageUrl} className="testimonials-title-img" alt={items?.imageAlt} />
                        {items?.title}
                    </h2>
                    <h2 className="testimonials-heading">{items?.heading}</h2>
                    <p className="testimonials-para">{items?.description}</p>
                </div>
                <Slider {...settings}>
                    {items?.cards?.map((item, index) => (
                        <TestimonialCard data={item} key={index} />
                    ))}
                </Slider>
            </div>
        </section>
    )
}