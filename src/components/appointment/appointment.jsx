import React, { useEffect, useState } from "react";
import "./styles/appointment.scss";
import HealthBlogsSection from "../Header_carousel/header_carousel";

const QuickAppointmentForm = () => {
  const [minDate, setMinDate] = useState("");

  useEffect(() => {
    const today = new Date();
    const y = today.getFullYear();
    const m = String(today.getMonth() + 1).padStart(2, "0");
    const d = String(today.getDate()).padStart(2, "0");
    setMinDate(`${y}-${m}-${d}`);
  }, []);

  const handlePhoneChange = (e) => {
    e.target.value = e.target.value.replace(/\D/g, "");
  };

  return (
    <section className="quick-appt pattern-bg" id="get_quick_appointment">
        <HealthBlogsSection id="6a1dbf72-ee06-4542-a679-634236d60ebc"/>
      <div className="quick-appt__card">
        <form
          method="POST"
          role="form"
          name="frmlead"
          id="frmlead"
        >
          <input type="hidden" name="_token" value="p419YK3NuDpaZVY1QZ8GIBZxHXtQUGCC7c94JHie" />
          <input type="hidden" name="type" value="quick_appointment" />
          <input type="hidden" name="page_url" value="https://www.parkhospital.in/quick-appointment" />

          <div className="quick-appt__grid">
            {/* Name */}
            <div className="field">
              <label className="label" htmlFor="name">Name*</label>
              <input
                type="text"
                name="name"
                id="name"
                className="control"
                required
                placeholder=""
              />
            </div>

            {/* Email */}
            <div className="field">
              <label className="label" htmlFor="email">Your Email</label>
              <input
                type="email"
                name="email"
                id="email"
                className="control"
                placeholder=""
              />
            </div>

            {/* Mobile */}
            <div className="field">
              <label className="label" htmlFor="phone">Mobile No.</label>
              <input
                type="text"
                name="phone"
                id="phone"
                inputMode="numeric"
                pattern="\d*"
                maxLength={10}
                className="control"
                required
                onChange={handlePhoneChange}
                placeholder=""
              />
            </div>

            {/* Location */}
            <div className="field">
              <label className="label" htmlFor="hospital">Location</label>
              <div className="select-wrap">
                <select name="hospital_id" id="hospital" className="control select" required>
                  <option value="">Select Location</option>
                  <option value="10">Delhi</option>
                  <option value="13">Gurugram</option>
                  <option value="14">Palam Vihar</option>
                  <option value="20">The Signature Gurugram</option>
                  <option value="15">Faridabad</option>
                  <option value="16">Sonipat</option>
                  <option value="17">Panipat</option>
                  <option value="18">Karnal</option>
                  <option value="11">Ambala</option>
                  <option value="21">Patiala</option>
                  <option value="22">Mohali</option>
                  <option value="39">Bathinda</option>
                  <option value="19">Behror</option>
                  <option value="12">Jaipur</option>
                </select>
              </div>
            </div>

            {/* Speciality */}
            <div className="field">
              <label className="label" htmlFor="specialities">Speciality</label>
              <div className="select-wrap">
                <select name="quick_category" id="specialities" className="control select" required>
                  <option value="">Select Specialities</option>
                  {/* Add dynamic options here */}
                </select>
              </div>
            </div>

            {/* Doctor */}
            <div className="field">
              <label className="label" htmlFor="doctor">Doctor</label>
              <div className="select-wrap">
                <select name="doctor_id" id="doctor" className="control select" required>
                  <option value="">Select Doctor Name</option>
                  {/* Add dynamic options here */}
                </select>
              </div>
            </div>

            {/* Date */}
            <div className="field">
              <label className="label" htmlFor="myDatepicker4">Select a Day*</label>
              <input
                type="date"
                className="control"
                id="myDatepicker4"
                name="appointment_date"
                min={minDate}
                required
              />
            </div>

            {/* Time */}
            <div className="field">
              <label className="label" htmlFor="appointment_time">Your Time</label>
              <div className="select-wrap">
                <select name="appointment_time" id="appointment_time" className="control select" required>
                  <option value="">Select Time slot</option>
                  <option value="Morning">Morning</option>
                  <option value="Afternoon">Afternoon</option>
                  <option value="Evening">Evening</option>
                </select>
              </div>
            </div>

            {/* Message */}
            <div className="field field--full">
              <label className="label" htmlFor="msg">Your Message</label>
              <textarea
                name="msg"
                id="msg"
                cols={30}
                rows={10}
                className="control textarea"
              />
            </div>
          </div>

          <div className="actions">
            <button type="submit" className="btn btn--red">Book An Appointment</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default QuickAppointmentForm;