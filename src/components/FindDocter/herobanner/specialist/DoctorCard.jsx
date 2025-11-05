import "./styles/docStyles.scss";

const DoctorCard = ({card}) => {
  console.log(card);
  
  return (
    <div className="doc-card-container">
      <div className="left">
        <div className="location">{card.location}</div>
        <div className="doc-img">
          <img src={card.imageUrl} alt="doc-img" />
        </div>
      </div>
      <div className="right">
        <div className="doc-info">
          <h3 className="doc-name">{card.name}</h3>
          <p className="doc-experience">{card.experience}</p>
          <span className="doc-designation">{card.designation}</span>
          <span className="doc-speciality">{card.speciality}</span>
        </div>
        <div className="doc-contact">
          <a href={card.appointmentUrl} className="appointment-btn">
            Book an Appointment
          </a>
          <a href={card.profileUrl} className="view-profile-btn">
            View Profile
          </a>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
