import SingleCardCarousel from "./SingleCardCarousel";
import "./styles/stylemain.scss";

const ThirdSection = () => (
  <section className="third-carousel">
    <div className="headings">
      <h2 className="heading">Explore the World of Quality Healthcare</h2>
    </div>
    <div className="sub-heading-section">
      <p>
        Park Group of Hospitals, situated in North India. The Group is
        undergoing rapid expansion making in chain of super-speciality hospitals
        including cancer and tertiary level care where patients continue medical
        intervention and care in the state-of-the-art facilities for various
        ailments
      </p>
    </div>
    <div className="main-content">
      <SingleCardCarousel />
        <div id="counter">
          <ul class="text-center">
            <li>
              <div class="countBox text-start px-sm-5">
                <span class="counter-value" data-count="13">
                  13
                </span>
                <span class="plus orange"></span>
                <p>NABH Accredited Hospitals</p>
              </div>
            </li>
            <li>
              <div class="countBox text-start px-sm-5">
                <span class="counter-value orange" data-count="3000">
                  3000
                </span>
                <span class="plus orange"></span>
                <p>Beds</p>
              </div>
            </li>
            <li>
              <div class="countBox text-start px-sm-5">
                <span class="counter-value orange" data-count="890">
                  890
                <span class="plus orange">+</span>
                </span>
                <p> Dedicated team of Doctors</p>
              </div>
            </li>
            <li>
              <div class="countBox text-start px-sm-5">
                <span class="counter-value orange" data-count="30">
                  30
                </span>
                <span class="plus orange"></span>
                <p>Speciality</p>
              </div>
            </li>
          </ul>
        </div>
    </div>
  </section>
);

export default ThirdSection;
