import CardCarousel from "./cardCarousel";
import "./styles/stylemain.scss";

const FirstCarousel = () => (
  <section className="first-carousel">
    <div className="headings">
      <h2 className="heading">Our Network of Hospitals</h2>
    </div>
    <div className="sub-heading-section">
      <p>
        Park Group of Hospitals is second largest private hospital chain in
        North India with a network of 13 hospitals to provide healthcare
        services.
      </p>
      <h3>All Locations</h3> 
    </div>
    <CardCarousel />
  </section>
);

export default FirstCarousel;
