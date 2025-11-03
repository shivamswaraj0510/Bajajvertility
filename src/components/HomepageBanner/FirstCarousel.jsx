import { useEffect, useState } from "react";
import CardCarousel from "./cardCarousel";
import "./styles/stylemain.scss";
import { client } from "../../lib/sanity";

const query = `*[_type == "cardCarousel"]{
  _id,
  title,
  cards[]{
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

const FirstCarousel = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    let mounted = true;
    async function fetchData() {
      try {
        const docs = await client.fetch(query);
        // flatten cards from all documents and map to cardCarousel shape
        const cards = (docs || []).flatMap((doc) =>
          (doc.cards || []).map((c, idx) => ({
            id: c._key ?? `${doc._id}-${idx}`,
            title: doc.title || "",
            subtitle: c.alt || "",
            image: c?.image?.asset?.url || "",
            order: c.order ?? idx,
            // include rating from Sanity so frontend can render stars
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
        <h2 className="heading">Our Network of Hospitals</h2>
      </div>
      <div className="sub-heading-section">
        <p>
          Park Group of Hospitals is second largest private hospital chain in
          North India with a network of 13 hospitals to provide healthcare
          services.
        </p>
        <h3>All Locations</h3>
      </div>
      <CardCarousel items={items} />
    </section>
  );
};

export default FirstCarousel;
