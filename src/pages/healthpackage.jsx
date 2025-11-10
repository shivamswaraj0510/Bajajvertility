import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/footer";
import HealthPackageC1 from "../components/HealthPackage/healthpackageC1";
import HealthPackagesmain from "../components/HealthPackage/healthpackagemain"
const HealthPackage = () => {
  return (
    <div>
      <Header />
      <HealthPackageC1 />
      <HealthPackagesmain />
      <Footer />
    </div>
  );
};

export default HealthPackage;
