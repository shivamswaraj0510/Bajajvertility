import { useState, useEffect } from "react";
import SingleCardCarousel from "./SingleCardCarousel";
import "./styles/stylemain.scss";
import { client } from "../../lib/sanity";

const query = `*[_type == "thirdSectionSingleCarousel"]{
  _id,
  heading,
  description,
  stats[]{ value, label },
  visible,
  "cards": cards | order(order asc){
    _key,
    title,
    subtitle,
    "rating": coalesce(rating, renaking),
    order,
    image{ asset->{ url, metadata { dimensions, mimeType, lqip } } }
  }
}`;
const ThirdSection = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await client.fetch(query);
      setData(() => result || []);
    }
    fetchData();
  }, []);

  const doc = Array.isArray(data) && data.length > 0 ? data[0] : null;


  return (
    <section className="third-carousel">
      <div className="headings">
        <h2 className="heading">
          {doc?.heading || "Explore the World of Quality Healthcare"}
        </h2>
      </div>

      <div className="sub-heading-section">
        <p>
          {doc?.description}
        </p>
      </div>

      <div className="main-content">
        <SingleCardCarousel
          items={doc?.cards || []}
          visible={doc?.visible ?? 1}
        />
        <div id="counter">
          <ul class="text-center">
            {
              data[0]?.stats.map((stat, index) => (
                <li key={index}>
                  <div class="countBox text-start px-sm-5">
                    <span class="counter-value orange" data-count={stat.value}>
                      {stat.value}
                    </span>
                    <span class="plus orange"></span>
                    <p>{stat.label}</p>
                  </div>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ThirdSection;
