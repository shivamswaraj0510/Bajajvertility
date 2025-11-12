import { useEffect, useState } from "react";
import "./styles/section.scss";
import { client } from "../../lib/sanity";
import SimpleSlider from "./SimpleSlider";

const query = `*[_type == "cardCarousel"]{
  _id,
heading,
description,
subheading,
  cards[]{
    title,
    subTitle,
    alt,
    order,
    rating,
    image{
      asset->{
        url
      }
    },
    _key
  }
}`;

const FirstSection = () => {
  const [items, setItems] = useState([]);
  const [sectionData, setSectionData] = useState([]);

  useEffect(() => {
    let mounted = true;
    async function fetchData() {
      try {
        const docs = await client.fetch(query);
        setSectionData({
          heading: docs[0].heading,
          subHeading: docs[0].subheading,
          description: docs[0].description,
        });
        // flatten cards from all documents and map to cardCarousel shape
        const cards = (docs || []).flatMap((doc) =>
          (doc.cards || []).map((c, idx) => ({
            id: c._key ?? `${doc._id}-${idx}`,
            title: c.title || "",
            alt: c.alt || "",
            subtitle: c.subtitle || "",
            image: c?.image?.asset?.url || "",
            order: c.order ?? idx,
            rating: typeof c.rating === "number" ? c.rating : undefined,
          }))
        );
        // sort by order if present
        cards.sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
        if (mounted) setItems(cards);
      } catch (err) {
        console.error("Failed to fetch carousel data", err);
      }
    }
    fetchData();
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <section className="first-carousel">
      <div className="headings">
        <h2 className="heading">{sectionData.heading}</h2>
      </div>
      <div className="sub-heading-section">
        <p>{sectionData.description}</p>
        <h3>{sectionData.subHeading}</h3>
      </div>
      {items &&
        <SimpleSlider items={items} />
      }
    </section>
  );
};

export default FirstSection;
