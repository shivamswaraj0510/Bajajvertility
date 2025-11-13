import Header from "../components/Header/Header";
import Hpcarousel from "../components/hpcarousel/hpcarousel";
import SearchForm from "../components/SearchForm/SearchForm";
import SecondCarousel from "../components/secondCarousel/SecondCarousel";
import ThirdSection from "../components/thirdCarousel/ThirdSection";
import HealthBlogsSection from "../components/Header_carousel/header_carousel";
import UpdatesCarousel2 from "../components/carousel/carousel";
import Footer from "../components/Footer/footer";
import ParkFacilities from "../components/parkFacilities/parkFacilities";
import FirstSection from "../components/FirstSection/firstSection";
const Home = () => {
  return (
    <div>
      <Header />
      <Hpcarousel />
      <SearchForm />
      <FirstSection />
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
      <ParkFacilities />
      <Footer />
    </div>
  );
};

export default Home;

// import { useNavigate } from "react-router-dom";
// import Header from "../components/Header/header";
// import Hpcarousel from "../components/hpcarousel/hpcarousel";
// import SearchForm from "../components/SearchForm/SearchForm";
// import FirstCarousel from "../components/HomepageBanner/FirstCarousel";
// import SecondCarousel from "../components/secondCarousel/SecondCarousel";
// import ThirdSection from "../components/thirdCarousel/ThirdSection";
// import HealthBlogsSection from "../components/Header_carousel/header_carousel";
// import UpdatesCarousel2 from "../components/carousel/carousel";
// import Footer from "../components/Footer/footer";
// import ParkFacilities from "../components/parkFacilities/parkFacilities";

// const Home = () => {
//   const navigate = useNavigate();

//   return (
//     <div>
//       <Header />
//       <Hpcarousel />
//       <SearchForm />
//       <FirstCarousel />
//       <SecondCarousel />
//       <ThirdSection />
//       <HealthBlogsSection id="198c471e-2897-44ee-8ac8-5f95d209f675" />
//       <UpdatesCarousel2 docId="d0357fdc-2095-466e-8ccf-b9097dda7749" />
//       <HealthBlogsSection id="a8efa322-3345-4318-975e-c617fa55b4eb" />
//       <UpdatesCarousel2 docId="4cb2c95d-8ef7-4055-8fd3-c5ff3315147f" />
//       <HealthBlogsSection id="56063877-94ee-4323-9a23-d895a284b93c" />
//       <UpdatesCarousel2 docId="1eb56971-b4a0-48e7-8b50-7f10ba3d7acd" />
//       <HealthBlogsSection id="2a831094-d12b-46da-99ca-531d704bd07a" />
//       <UpdatesCarousel2 docId="8dc53cb4-3cc0-460c-b616-fa9a89503fff" />
//       <ParkFacilities />

//       {/* ✅ Example button for navigation */}
//       <button
//         style={{ margin: "20px", padding: "10px 20px" }}
//         onClick={() => navigate("/about")}
//       >
//         Go to About Page
//       </button>

//       <Footer />
//     </div>
//   );
// };

// export default Home;
