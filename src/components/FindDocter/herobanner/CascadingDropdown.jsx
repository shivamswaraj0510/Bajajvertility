import { useState, useEffect } from "react";
import "./styles/dropdown.scss";

const CascadingDropdown = ({ data = [] }) => {
  const [selectedHospital, setSelectedHospital] = useState("");
  const [selectedSpeciality, setSelectedSpeciality] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [specialities, setSpecialities] = useState([]);
  const [doctors, setDoctors] = useState([]);

  // Reset all selections when data changes
  useEffect(() => {
    setSelectedHospital("");
    setSelectedSpeciality("");
    setSelectedDoctor("");
    setSpecialities([]);
    setDoctors([]);
  }, [data]);

  // Update doctors list when speciality changes
  useEffect(() => {
    if (!selectedHospital || !selectedSpeciality) {
      setDoctors([]);
      return;
    }

    const hospitalData = data.find(
      (item) => item.Hospital === selectedHospital
    );
    const specialityData = hospitalData?.specialities?.find(
      (item) => item.speciality === selectedSpeciality
    );

    setDoctors(specialityData?.doctors || []);
  }, [selectedHospital, selectedSpeciality, data]);

  const handleHospitalChange = (e) => {
    const hospital = e.target.value;
    setSelectedHospital(hospital);
    setSelectedSpeciality(""); // Reset speciality when hospital changes
    setSelectedDoctor(""); // Reset doctor when hospital changes

    const hospitalData = data.find((item) => item.Hospital === hospital);
    setSpecialities(hospitalData?.specialities || []);
    setDoctors([]); // Clear doctors list when hospital changes
  };

  return (
    <div className="cascading-dropdown-container">
      <div className="dropdown">
        <label htmlFor="hospital-select">Select Hospital:</label>
        <select
          id="hospital-select"
          value={selectedHospital}
          onChange={handleHospitalChange}
        >
          <option value="">Choose a Hospital</option>
          {data.map((item, index) => (
            <option
              key={`hospital-${item.Hospital}-${index}`}
              value={item.Hospital}
            >
              {item.Hospital}
            </option>
          ))}
        </select>
      </div>

      <div className="dropdown">
        <label htmlFor="speciality-select">Select Speciality:</label>
        <select
          className="right-left-border"
          id="speciality-select"
          value={selectedSpeciality}
          onChange={(e) => setSelectedSpeciality(e.target.value)}
          disabled={!selectedHospital}
        >
          <option value="">Choose a Speciality</option>
          {specialities.map((item, index) => (
            <option
              key={`speciality-${item.speciality}-${index}`}
              value={item.speciality}
            >
              {item.speciality}
            </option>
          ))}
        </select>
      </div>
      <div className="dropdown">
        <label htmlFor="doctor-select">Select Doctor:</label>
        <select
          id="doctor-select"
          value={selectedDoctor}
          onChange={(e) => setSelectedDoctor(e.target.value)}
          disabled={!selectedHospital || !selectedSpeciality}
        >
          <option value="">Choose a Doctor</option>
          {doctors.map((doctor, index) => (
            <option key={`doctor-${doctor}-${index}`} value={doctor}>
              {doctor}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default CascadingDropdown;
