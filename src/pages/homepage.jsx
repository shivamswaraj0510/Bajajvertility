import ContactSection from "../components/Contactus/contact";
import Footer from "../components/Footer/footer";
import Header from "../components/homepage/header/header";
import HeroComponent from "../components/homepage/heroComponent/hero";

import HealthcareSection from "../components/homepage/healthcare/healthcare";
import HealthcareBanner from "../components/homepage/healthcare/banner";

import HighlightCards from "../components/homepage/highlightCards/highlightCards";
import Specialist from "../components/homepage/specialist/specialist";
import SubscribeNewslatter from "../components/homepage/subscribeNewslatter/subscribeNewslatter";
import Testimonials from "../components/homepage/testimonials/testimonials";
import HowItWorks from "../components/howItWokrs/howItWorks";
import AboutUs from "../components/parkFacilities/parkFacilities";
import BlogNewsSection from "../components/Blogs/blogs";
import CareGrid from "../components/Specialities/careGrid";
const Home = () => {
  return (
    <>
      <Header />
      <HeroComponent />
      <HighlightCards />
      <AboutUs />
      <HealthcareSection />
      <HealthcareBanner />
      <Specialist />
      <HowItWorks />
      <CareGrid />
      <Testimonials />
      <BlogNewsSection />
      <ContactSection />
      <SubscribeNewslatter />
      <Footer />
    </>
  );
};

export default Home;

