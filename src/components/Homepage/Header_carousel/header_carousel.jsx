import React, { useEffect, useState } from "react";
import { client } from "../../../lib/sanity"; // Import your configured Sanity client
import "./styles/header_carousel.scss";

function HealthBlogsSection({ id, className }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const query = `*[_type == "carouselHeading" && _id == $id][0]{
          title_carousel,
          subtitle_carousel
        }`;
        const result = await client.fetch(query, { id });
        setData(result);
      } catch (error) {
        console.error("Error fetching carousel heading:", error);
      }
    };

    if (id) fetchData();
  }, [id]);

  const classes = ["csBlogs", "pt-15", "pb-4", className].filter(Boolean).join(" ");

  return (
    <section className={classes} aria-labelledby="hb-title">
      <div className="hb-wrap">
        <span aria-hidden="true" className="hb-accent hb-accent--top" />
        <h2 id="hb-title" className="hb-title">
          {data?.title_carousel || "Loading..."}
        </h2>
        <p className="hb-subtitle">{data?.subtitle_carousel || ""}</p>
        <span aria-hidden="true" className="hb-accent hb-accent--bottom" />
      </div>
    </section>
  );
}

export default HealthBlogsSection;