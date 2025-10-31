import ExcCardCarousel from "./ExcCardCarousel";
import "./styles/stylemain.scss";

const SecondCarousel = () => (
  <section className="second-carousel">
    <div className="headings">
      <h2 className="heading">Center Of Excellence</h2>
      <h3 className="sub-heading">The Park Flag-bearers</h3>
    </div>
    <ExcCardCarousel />
    <div className="btn">
      <a href="#">view more</a>
    </div>
  </section>
);

export default SecondCarousel;
