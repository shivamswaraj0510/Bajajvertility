import React, { useEffect, useState } from "react";
import { client, urlFor } from "../../lib/sanity";
import "./about_us_comp1.scss"; // optional styling

const query = `*[_type == "aboutUsCompmain"][0]{
  title1,
  components[]->{
    title,
    image
  }
}`;

const AboutUs = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    client
      .fetch(query)
      .then((res) => {
        console.log("✅ Sanity response:", res);
        setData(res);
      })
      .catch((err) => {
        console.error("❌ Sanity fetch error:", err);
        setError(err.message);
      });
  }, []);

  if (error) return <div style={{ color: "red" }}>Error: {error}</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div className="aboutus-container">
      {/* Title
      <div className="aboutus-heading">
        <h2>{data.title1 || "No Title Found"}</h2>
      </div> */}

      {/* Components */}
      <div className="aboutus-components">
        {Array.isArray(data.components) && data.components.length > 0 ? (
          data.components.map((comp, index) => (
            <div key={index} className="aboutus-card">
              {comp?.image ? (
                <img
                  src={urlFor(comp.image).url()}
                  alt={comp.title || "About image"}
                  className="aboutus-card-image"
                />
              ) : (
                <div className="aboutus-noimage">No image</div>
              )}
              <h3 className="aboutus-card-title">
                {comp?.title || "Untitled"}
              </h3>
            </div>
          ))
        ) : (
          <p>No components available.</p>
        )}
      </div>
    </div>
  );
};

export default AboutUs;
