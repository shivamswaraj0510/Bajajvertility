import { useState } from "react";
import "./style/findDoctor.scss";

export default function FindDoctor() {
    const [isAvailable, setIsAvailable] = useState(false);

    const handleToggle = () => {
        setIsAvailable(!isAvailable);
    };

    return (
        <div className="findDoctor">
            <h4 className="heading">Find a doctor</h4>
            <form action="">
                <div className="input-group">
                    <div className="form-group">
                        <input type="text" id="doctor-name" placeholder="Search Doctor Name" />
                    </div>
                    <div className="form-group">
                        <select name="doctor-speciality" id="doctor-speciality">
                            <option value="General Physician">General Physician</option>
                            <option value="General Physician">General Physician</option>
                            <option value="General Physician">General Physician</option>
                        </select>
                    </div>
                    <div className="toggle-container">
                        <span className="label">Availability</span>
                        <div
                            className={`switch ${isAvailable ? "on" : "off"}`}
                            onClick={handleToggle}
                        >
                            <div className="circle"></div>
                        </div>
                    </div>

                </div>
                <button type="submit" className="btn btn-primary">Search</button>
            </form>
        </div>
    );
}
