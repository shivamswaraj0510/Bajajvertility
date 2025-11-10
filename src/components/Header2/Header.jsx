import "./styles/style.scss";
import VitalityLogo from "../../assets/VitalityLogo.png";
const Header1 = () => (
  <header className="header">
    <div className="header-logo">
      <img src={VitalityLogo} alt="bajaj vitality" />
    </div>
    <div className="header-menu"></div>
  </header>
);

export default Header1;
