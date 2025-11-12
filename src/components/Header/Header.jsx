import "./styles/style.scss";
import VitalityLogo from "../../assets/VitalityLogo.png";
const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <img src={VitalityLogo} alt="bajaj vitality" />
      </div>
      <div className="header-menu">
        <ul className="sub-menu">
          <li className="tabNone">
            <a href="/find-doctor" className="gradBtn white ">
              <span>
                <img
                  loading="lazy"
                  className="navIconMain"
                  src="https://www.parkhospital.in/public/images/icon/navIcon1.png"
                  alt="Find Doctor"
                />
                &nbsp; Find Doctors
              </span>
            </a>
          </li>
          <li className="tabNone">
            <a href="/book_appointment" className="gradBtn white ">
              <span>
                <img
                  loading="lazy"
                  className="navIconMain"
                  src="https://www.parkhospital.in/public/images/icon/navIcon2.png"
                  alt="Health Packages&lt;"
                />
                &nbsp; Book Appointment
              </span>
            </a>
          </li>
          <li className="tabNone bgblue">
            <a href="/buy-madicines" className="gradBtn white">
              <span>
                <img
                  loading="lazy"
                  className="navIconMain"
                  src="https://www.parkhospital.in/public/images/icon/navIcon3.png"
                  alt="Book Appointment"
                />
                &nbsp; Buy Medicines
              </span>
            </a>
          </li>
          <li className="tabNone">
            <a href="/about" className="gradBtn white ">
              <span>
                about
              </span>
            </a>
          </li>
          <li className="tabNone">
            <a href="/careers" className="gradBtn white ">
              <span>
                Careers
              </span>
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
};

export default Header;
