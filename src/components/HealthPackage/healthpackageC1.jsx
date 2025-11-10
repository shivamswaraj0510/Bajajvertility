import React, { useEffect, useState } from "react";
import { client, urlFor } from "../../lib/sanity";
import "./healthpackageC1.scss"; // optional styling

const query = `*[_type == "healthpackageC1"][0]{
  packageName,
  HealthPackageimage
}`;

const HealthPackageC1 = () => {
  const [packageData, setPackageData] = useState(null);

  useEffect(() => {
    client
      .fetch(query)
      .then((data) => {
        console.log("Fetched single package:", data);
        setPackageData(data);
      })
      .catch((err) => {
        console.error("Sanity fetch error:", err);
      });
  }, []);

  if (!packageData) return <p>Loading package...</p>;

  return (
    <div
      className="healthpackagec1main"
      style={{
        backgroundImage: `url(${urlFor(packageData.HealthPackageimage).url()})`,
      }}
    >
      <p className="package-title">{packageData.packageName}</p>
    </div>
  );

};

export default HealthPackageC1;
