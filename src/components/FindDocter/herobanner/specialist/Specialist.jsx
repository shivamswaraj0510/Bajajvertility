import DoctorCard from "./DoctorCard";
import "./styles/styles.scss";
const Specialist = () => {
  return (
    <div className="specialist-section">
      <div className="section-heading">
        <h3 className="main-heading">Our Team of Specialists</h3>
        <h5 className="sub-heading">The Skilled Force</h5>
      </div>
      <div className="section-content">
        <DoctorCard />
        <DoctorCard />
      </div>

    </div>
  );
};
export default Specialist;
