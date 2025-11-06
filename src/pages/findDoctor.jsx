import HeroBanner from "../components/FindDocter/herobanner/HeroBanner";
import Specialist from "../components/FindDocter/specialist/Specialist";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/footer";
import HealthBlogsSection from "../components/Header_carousel/header_carousel";
import UpdatesCarousel2 from "../components/carousel/carousel";

const FindDoctor = () => {
  return (
    <>
      <Header />
      <HeroBanner />
      <Specialist />
      <HealthBlogsSection id="2a831094-d12b-46da-99ca-531d704bd07a" />
      <UpdatesCarousel2 docId="8dc53cb4-3cc0-460c-b616-fa9a89503fff" />
      <Footer />
    </>
  );
};
export default FindDoctor;
