import React from "react";
import "./styles/parkFacilities.scss";

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="top-section">
        <div className="image-column">
          <div className="video-card1">
            <img src="./d9b743ac5e0c1b7c9c4624f397adce8c308503b0.png" />
          </div>
          <div className="video-card">
            <img src="./7654039b4a8f6548c9aa5a6e4ac15a377a90ab8f.png" />
            <img className="icon" src="./PlayCircle.svg" />
          </div>
        </div>
        <div className="content-column">
          <div className="section-title">
            <img src="./Vector.png" /> ABOUT US
          </div>
          <h2>Bajaj Vitality Create A Safe, Your Health Our Priority</h2>
          <p>
            Bajaj Vitality provides top-quality healthcare with experienced
            doctors, emergency services, and round-the-clock support. Your
            trusted partner for a healthier life.
          </p>

          <div className="vision-row">
            <div className="vision-card">
              <div className="vision-container"><img src="./vision_icon1.png" /></div>
              <h4>Our Vision 1</h4>
              <p>To build a better health system that is equitable and comprehensive.</p>
            </div>
            <div className="vision-card">
              <div className="vision-container"><img src="./vision_icon.png" /></div>
              <h4>Our Vision 2</h4>
              <p>Bajaj Vitality delivers expert, reliable services for all your wellness needs.</p>
            </div>
          </div>

          <button className="appointment-btn">Appointment</button>
        </div>
      </div>
      <div className="bottom-section"
        style={{
          backgroundImage: `url(./backgound.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "300px",
        }}
      >
        <div className="bottom-content">
          <div className="section-title-orange"><img src="./Vector (2).svg" />OUR COMMITMENT</div>
          <h3>
            Dedicated To Excellence In Healthcare Through Trusted Partnerships
          </h3>
          <p>
            We are committed to fostering collaboration with leading healthcare
            providers to ensure the highest standards of care.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;