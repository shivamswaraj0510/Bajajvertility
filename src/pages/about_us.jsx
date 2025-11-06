import { useNavigate } from "react-router-dom";
import React from "react";
import AboutUs from "../components/About/about_us_comp1";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/footer";
import AboutComp2 from "../components/About/comp2";
import AboutusComp3 from "../components/About/comp3";
const About = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <AboutUs />
        <AboutComp2 />
        <AboutusComp3 />
      <Footer />
    </>
  );
};

export default About;
