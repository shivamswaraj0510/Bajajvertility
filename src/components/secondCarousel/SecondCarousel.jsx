import { useState, useEffect } from "react";
import ExcCardCarousel from "./ExcCardCarousel";
import "./styles/stylemain.scss";
import { client } from "../../lib/sanity";

const querry = `
*[_type == "excCardCarousel"]{
  _id,
  heading,
  subheading,
  visible,
  cta {
    label,
    href
  },
  "cards": cards | order(order asc){
    _key,
    subtitle,
    order,
    image{
      asset->{
        url,
        metadata {
          dimensions,
          mimeType,
          lqip
        }
      }
    }
  }
}`;
const SecondCarousel = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await client.fetch(querry);
        if (result && result.length > 0) {
          setData(result[0]); // Get the first document
        }
      } catch (error) {
        console.error("Error fetching carousel data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="second-carousel">
      <div className="headings">
        <h2 className="heading">{data?.heading || "Center Of Excellence"}</h2>
        <h3 className="sub-heading">
          {data?.subheading || "The Park Flag-bearers"}
        </h3>
      </div>
      {data && (
        <ExcCardCarousel items={data.cards} visible={data.visible ?? 4} />
      )}
      <div className="btn">
        <a href={data?.cta?.href || "#"}>{data?.cta?.label || "view more"}</a>
      </div>
    </section>
  );
};

export default SecondCarousel;
