import Footer from "../components/Footer/footer";
import Header from "../components/homepage/header/header";
import HeroComponent from "../components/homepage/heroComponent/hero";
import HighlightCards from "../components/homepage/highlightCards/highlightCards";
import Specialist from "../components/homepage/specialist/specialist";
import Testimonials from "../components/homepage/testimonials/testimonials";
import AboutUs from "../components/parkFacilities/parkFacilities";
const Home = () => {
  return (
    <>
      <Header />
      <HeroComponent />
      <HighlightCards />
      <Specialist />
      <AboutUs />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Home;

