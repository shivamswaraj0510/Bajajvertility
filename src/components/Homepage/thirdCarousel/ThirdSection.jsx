import { useState, useEffect } from "react";
import SingleCardCarousel from "./SingleCardCarousel";
import "./styles/stylemain.scss";
import { client } from "../../../lib/sanity";

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
          {doc?.description ||
            `Park Group of Hospitals, situated in North India. The Group is
          undergoing rapid expansion making in chain of super-speciality
          hospitals including cancer and tertiary level care where patients
          continue medical intervention and care in the state-of-the-art
          facilities for various ailments`}
        </p>
      </div>

      <div className="main-content">
        <SingleCardCarousel
          items={doc?.cards || []}
          visible={doc?.visible ?? 1}
        />
        <div id="counter">
          <ul class="text-center">
            <li>
              <div class="countBox text-start px-sm-5">
                <span class="counter-value" data-count="13">
                  13
                </span>
                <span class="plus orange"></span>
                <p>NABH Accredited Hospitals</p>
              </div>
            </li>
            <li>
              <div class="countBox text-start px-sm-5">
                <span class="counter-value orange" data-count="3000">
                  3000
                </span>
                <span class="plus orange"></span>
                <p>Beds</p>
              </div>
            </li>
            <li>
              <div class="countBox text-start px-sm-5">
                <span class="counter-value orange" data-count="890">
                  890
                  <span class="plus orange">+</span>
                </span>
                <p> Dedicated team of Doctors</p>
              </div>
            </li>
            <li>
              <div class="countBox text-start px-sm-5">
                <span class="counter-value orange" data-count="30">
                  30
                </span>
                <span class="plus orange"></span>
                <p>Speciality</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ThirdSection;
