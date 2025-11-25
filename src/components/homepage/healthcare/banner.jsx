import React, { useEffect, useState } from "react";
import { client } from "../../../lib/sanity"; // your sanity client
import "./banner.scss";

const query = `*[_type == "comp_healthcare_banner"][0]{
  tag,
  title,
  description,
  buttonText,
  "icon": icons.asset->url,
  "image": image.asset->url
}`;

export default function HealthcareBanner() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchBanner = async () => {
      const result = await client.fetch(query);
      setData(result);
    };
    fetchBanner();
  }, []);

  if (!data) return null;

  return (
    <section className="health-banner">
      {/* LEFT SIDE CONTENT */}
      <div className="health-left">
        <div className="tag-row">
          <img src={data.icon} className="tag-icon" alt="tag" />
          <span className="tag-text">{data.tag}</span>
        </div>

        <h2 className="banner-title">{data.title}</h2>

        <p className="banner-description">{data.description}</p>

        <button className="banner-btn">{data.buttonText}</button>
      </div>

      {/* RIGHT SIDE IMAGES */}
      <div className="health-right">
        <img className="right-big" src={data.image} alt="main visual" />
        <div className="circle-dot"></div>
      </div>
    </section>
  );
}
