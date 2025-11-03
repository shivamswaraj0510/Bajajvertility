// import { useState } from "react";
// import "./App.css";
import Header from "./components/Header/Header";
import Hpcarousel from "./components/hpcarousel/hpcarousel";
import React, { useEffect, useState } from "react";
import { client } from "./lib/sanity";
import SearchForm from "./components/SearchForm/SearchForm";
import FirstCarousel from "./components/HomepageBanner/FirstCarousel";
import SecondCarousel from "./components/secondCarousel/SecondCarousel";
import Thirdsection from "./components/thirdCarousel/ThirdSection";
import ThirdSection from "./components/thirdCarousel/ThirdSection";

function App() {
  // const [count, setCount] = useState(0);
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Hpcarousel />
      <SearchForm />
      <FirstCarousel />
      <SecondCarousel />
      <ThirdSection />
    </>
  );
}

export default App;
