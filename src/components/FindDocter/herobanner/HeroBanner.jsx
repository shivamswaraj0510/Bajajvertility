import { client } from "../../../lib/sanity";
import { useEffect, useState } from "react";

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
  useEffect(()=>{
    const fetchData = async () => {
      const data = await client.fetch(query);
      console.log(data);
    };
    fetchData();
  })
  return (
    <div className="hero-banner-container">
      <h1>Hero Banner</h1>
    </div>
  );
};

export default HeroBanner;
