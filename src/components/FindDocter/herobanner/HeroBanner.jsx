import { client } from "../../../lib/sanity";
import { useEffect, useState } from "react";
import CascadingDropdown from "./CascadingDropdown";
import "./styles/style.scss";

const query = `*[_type == "findDocotrsHeroBanner"]{
  bannerText,
  "bannerImageUrl": bannerImage.asset->url,
  cascadingDropdown[]{
    Hospital,
    specialities[]{
      speciality,
      doctors[]
    }
  }
    }`;
const HeroBanner = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const res = await client.fetch(query);
        console.log(res);

        setData(res?.[0] || null);
      } catch (err) {
        setError(err.message);
        console.error("Error fetching banner data:", err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="hero-banner-container">
        <div className="loading">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="hero-banner-container">
        <div className="error">Failed to load banner</div>
      </div>
    );
  }

  return (
    <div className="hero-banner-container">
      <div className="img-container">
        {data?.bannerImageUrl && (
          <img
            src={data.bannerImageUrl}
            alt={data.bannerText || "Find Doctors Hero Banner"}
          />
        )}
        {data?.bannerText && (
          <div className="banner-text">
            <h3>{data.bannerText}</h3>
          </div>
        )}
        <div className="casc-dropdown">
          <CascadingDropdown data={data.cascadingDropdown} />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
