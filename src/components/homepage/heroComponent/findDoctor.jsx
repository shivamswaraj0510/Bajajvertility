import { useState, useEffect } from "react";
import "./style/findDoctor.scss";

export default function FindDoctor() {
    const [isAvailable, setIsAvailable] = useState(false);
    const [option, setOption] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const toggleOptions = () => {
        setIsOpen(!isOpen);
    };
    const handleToggle = () => {
        setIsAvailable(!isAvailable);
    };
    const handleOptionSelect = (selectedOption) => {
        setOption(selectedOption);
        setIsOpen(false);
    };
    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (!event.target.closest(".select-option")) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('click', handleOutsideClick);
        }

        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, [isOpen]);
    return (
        <div className="findDoctor">
            <h4 className="heading">Find a doctor</h4>
            <form action="">
                <div className="input-group">
                    <div className="form-group">
                        <input type="text" id="doctor-name" placeholder="Search Doctor Name" />
                    </div>
                    <div className="form-group ">
                        <div className={`select-option ${isOpen ? 'open' : ''}`} onClick={toggleOptions}>
                            {option ? (
                                <div className="selected-option">
                                    <span>{option}</span>
                                    <img src="./arrow-down.svg" alt="" />
                                </div>
                            ) : (
                                <div className="selected-option ">
                                    <span className="default">Speciality</span>
                                    <img src="./arrow-down.svg" alt="" />
                                </div>
                            )}
                            {isOpen && (
                                <div className="options-container">
                                    <div className="option" onClick={() => handleOptionSelect('Neurology')}>Neurology</div>
                                    <div className="option" onClick={() => handleOptionSelect('Bones')}>Bones</div>
                                    <div className="option" onClick={() => handleOptionSelect('Cardiovascular')}>Cardiovascular</div>
                                    <div className="option" onClick={() => handleOptionSelect('Urology')}>Urology</div>
                                    <div className="option" onClick={() => handleOptionSelect('Gynecology')}>Gynecology</div>
                                </div>
                            )}
                        </div>
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
