import Header from "./components/Homepage/Header/Header";  
import SearchForm from "./components/Homepage/SearchForm/SearchForm";
import Hpcarousel from "./components/Homepage/hpcarousel/hpcarousel";
import FirstCarousel from "./components/Homepage/HomepageBanner/FirstCarousel";
import SecondCarousel from "./components/Homepage/secondCarousel/SecondCarousel";
import ThirdSection from "./components/Homepage/thirdCarousel/ThirdSection";
import HealthBlogsSection from "./components/Homepage/Header_carousel/header_carousel";
import UpdatesCarousel2 from "./components/Homepage/carousel/carousel";
import Footer from "./components/Homepage/Footer/footer";
import ParkFacilities from "./components/Homepage/parkFacilities/parkFacilities";
import HeroBanner from "./components/FindDocter/herobanner/HeroBanner";
import Specialist from "./components/FindDocter/herobanner/specialist/specialist";
import HealthBlog from "./components/FindDocter/herobanner/healthBlog/HealthBlog";
function App() {
  return (
    <>
      <Header />
      {/* <Hpcarousel />
      <SearchForm />
      <FirstCarousel />
      <SecondCarousel />
      <ThirdSection />
      <HealthBlogsSection id="198c471e-2897-44ee-8ac8-5f95d209f675" />
      <UpdatesCarousel2 docId="d0357fdc-2095-466e-8ccf-b9097dda7749" />
      <HealthBlogsSection id="a8efa322-3345-4318-975e-c617fa55b4eb" />
      <UpdatesCarousel2 docId="4cb2c95d-8ef7-4055-8fd3-c5ff3315147f" />
      <HealthBlogsSection id="56063877-94ee-4323-9a23-d895a284b93c" />
      <UpdatesCarousel2 docId="1eb56971-b4a0-48e7-8b50-7f10ba3d7acd" />
      <HealthBlogsSection id="2a831094-d12b-46da-99ca-531d704bd07a" />
      <UpdatesCarousel2 docId="8dc53cb4-3cc0-460c-b616-fa9a89503fff" />
      <ParkFacilities /> */}

      <HeroBanner />
      <Specialist />
      <HealthBlog/>
      <Footer />
    </>
  );
}

export default App;
