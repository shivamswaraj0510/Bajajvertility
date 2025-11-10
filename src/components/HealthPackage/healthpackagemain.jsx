import React, { useEffect, useState } from "react";
import { client } from "../../lib/sanity"; // import your sanity client
import "./healthpackagemain.scss";

const query = `*[_type == "healthpackageGroup"][0]{
  groupTitle,
  packages[]->{
    cardTitle,
    price,
    features
  }
}`;

const HealthPackages = () => {
  const [groupData, setGroupData] = useState(null);

  useEffect(() => {
    client.fetch(query).then((res) => {
      setGroupData(res);
    });
  }, []);

  if (!groupData) return <p>Loading...</p>;

  return (
    <div className="health-packages-container">
    
      <div className="package-cards">
        {groupData.packages.map((pkg, index) => (
          <div className="package-card" key={index}>
            <h3 className="card-title">{pkg.cardTitle}</h3>
            <p className="price">₹{pkg.price}</p>
            <ul className="features-list">
              {pkg.features.map((feature, i) => (
                <li key={i}>
                  <span className="checkmark">✔</span> {feature}
                </li>
              ))}
            </ul>
            <button className="read-more">Read more</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HealthPackages;
