import Header from "./components/Header/Header";
import SecondCarousel from "./components/secondCarousel/secondCarousel";
import Hpcarousel from "./components/hpcarousel/hpcarousel";
import FirstCarousel from "./components/HomepageBanner/FirstCarousel";
import ThirdCarousel from "./components/thirdCarousel/ThirdSection";
import SearchForm from "./components/SearchForm/SearchForm";

function App() {
  return (
    <>
      <Header />
      <Hpcarousel />
      <SearchForm />
      <FirstCarousel />
      <SecondCarousel />
      <ThirdCarousel />
    </>
  );
}

export default App;
