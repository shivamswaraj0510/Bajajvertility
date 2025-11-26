"use client"; // optional, you can remove this in React

import { useEffect, useState } from "react";
import { client } from "../../../lib/sanity";
import "./style.scss";

const healthcareCardsQuery = `*[_type == "healthcare_cards_section"][0]{
  sectionTitle,
  cards[]->{
    title,
    description,
    "icon": icons.asset->url
  }
}`;

export default function HealthcareSection() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await client.fetch(healthcareCardsQuery);
        setData(result);
      } catch (error) {
        console.error("Sanity fetch error:", error);
      }
    };

    fetchData();
  }, []);

  if (!data) return null; // prevent crash before data loads

  return (
    <section className="health-section">
      <div className="health-header">
        <p className="tagline"><img src="./Vector.png" />OUR SERVICES</p>
        <h2 className="title">{data.sectionTitle}</h2>

        <p className="subtext">
          At Bajaj Vitality, we offer a wide range of medical services tailored
          to your needs, from routine check-ups to specialized treatments.
        </p>
      </div>

      <div className="health-grid">
        {data.cards?.map((card, index) => (
          <div key={index} className="health-card">
            <div className="icon-wrap">
              <img
                src={card.icon}
                alt={card.title}
                width="40"
                height="40"
                loading="lazy"
              />
            </div>

            <h3 className="card-title">{card.title}</h3>
            <p className="card-desc">{card.description}</p>
          </div>
        ))}

        {/* Hard-coded last card */}
        <div className="health-card emergency">
          <h3 className="emergency-title">Emergency Call</h3>
          <p className="emergency-desc">
            Quick access to emergency services, ensuring immediate care when you
            need it the most.
          </p>

          <button className="contact-btn">Contact Us →</button>
        </div>
      </div>
    </section>
  );
}
