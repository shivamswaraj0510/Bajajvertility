import "./styles/style.scss";
import { useState, useEffect } from "react";
import { client } from "../../../lib/sanity";
const query = `*[_type == "careersHeroBanner"][0] {
  _id,
    heading,
  "imageUrl": bannerImage.asset->url,
}
`;
const HeroBanner = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    let active = true;
    client
      .fetch(query)
      .then((res) => {
        if (!active) return;
        setData(res);
      })
      .catch((err) => {
        if (!active) return;
        console.error("Failed to fetch careers hero banner:", err);
      });
    return () => {
      active = false;
    };
  }, []);

  return (
    <>
      {data && (
        <section className="hero-banner">
          <div className="hero-banner-image">
            <img src={data.imageUrl} alt="Hero Banner" />
          </div>
          <div className="hero-banner-text">{data.heading}</div>
        </section>
      )}
    </>
  );
};
export default HeroBanner;
