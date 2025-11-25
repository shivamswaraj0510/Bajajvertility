import { useState, useEffect } from "react";
import { client } from "../../../lib/sanity";
import "./styles/style.scss"

const query = `*[_type == "subscribeNewsLatter" && !(_id in path("drafts.**"))][0]{
  "backGroundImage": image.asset->url,
    heading,
    description,
}`
export default function SubscribeNewslatter() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [imageLoaded, setImageLoaded] = useState(false);
    const backgroundImage = data ? `url(${data.backGroundImage})` : "none";

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await client.fetch(query);
                console.log(response);

                setData(response);

                if (response?.heroImageUrl) {
                    const img = new Image();
                    img.onload = () => {
                        setImageLoaded(true);
                        setLoading(false);
                    };
                    img.onerror = () => {
                        setLoading(false);
                    };
                    img.src = response.heroImageUrl;
                } else {
                    setLoading(false);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
                setLoading(false);
            }
        }
        fetchData();
    }, [])
    return (
        <section className="subscribeNewslatter">
            <div className="subscribeNewslatter__container" style={{ backgroundImage }}>
                <div className="subscribeNewslatter__wrapper">
                    <div className="subscribeNewslatter__wrapper__content">
                        <h2 className="subscribeNewslatter__wrapper__content__title">{data?.heading}</h2>
                        <p className="subscribeNewslatter__wrapper__content__text">{data?.description}</p>
                    </div>
                    <div className="subscribeNewslatter__wrapper__form">
                        <div className="subscribeNewslatter__wrapper__form__ipdiv">
                            <img src="./mail_black.svg" alt="email" />
                            <input className="subscribeNewslatter__wrapper__form__input" type="text" name="email" placeholder="Enter your email address" />
                        </div>
                        <button className="subscribeNewslatter__wrapper__form__button">Subscribe</button>
                    </div>
                </div>
            </div>
        </section>
    )
}