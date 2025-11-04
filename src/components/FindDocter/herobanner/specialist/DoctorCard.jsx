import "./styles/docStyles.scss";

const DoctorCard = () => {
  return (
    <div className="doc-card-container">
      <div className="left">
        <div className="location">jaipur</div>
        <div className="doc-img">
          <img
            src="https://parkhospital.in/storage/app/public/images/X3SwXgxn7eydxC8kV0KJQgYpDf1MO6csPvOhCYa0.jpg"
            alt="doc-img"
          />
        </div>
      </div>
      <div className="right">
        <div className="doc-info">
          <h3 className="doc-name">Dr. Anjali Sharma</h3>
          <p className="doc-experience">
            MBBS, MD (Anesthesiology), Fellowship in Pain Medicine
          </p>
          <span className="doc-designation">sr. consultant</span>
          <span className="doc-speciality">Cardiologist</span>
        </div>
        <div className="doc-contact">
          <a href="#" className="appointment-btn">
            Book an Appointment
          </a>
          <a href="#" className="view-profile-btn">
            View Profile
          </a>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
