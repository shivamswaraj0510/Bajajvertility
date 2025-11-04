import "./styles/style.scss";
import VitalityLogo from "../../../assets/VitalityLogo.png";
const Header = () => (
  <header className="header">
    <div className="header-logo">
      <img src={VitalityLogo} alt="bajaj vitality" />
    </div>
    <div className="header-menu">
      <ul className="sub-menu">
        <li className="tabNone">
          <a href="#" className="gradBtn white ">
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
          <a href="#" className="gradBtn white ">
            <span>
              <img
                loading="lazy"
                className="navIconMain"
                src="https://www.parkhospital.in/public/images/icon/navIcon2.png"
                alt="Health Packages&lt;"
              />
              &nbsp; Health Packages
            </span>
          </a>
        </li>
        <li className="tabNone bgblue">
          <a href="#" className="gradBtn white">
            <span>
              <img
                loading="lazy"
                className="navIconMain"
                src="https://www.parkhospital.in/public/images/icon/navIcon3.png"
                alt="Book Appointment"
              />
              &nbsp;Book Appointment
            </span>
          </a>
        </li>
        <li className="dropdown emergency-Dropdown">
          <a
            href="#"
            className="white gradBtn redBtn ambulanceDropdownToggle"
            id="ambulanceDropdownToggle"
          ></a>
          <ul className="dropdown-menu ambulanceDropdownMenu">
            <li>
              <a className="dropdown-item" href="#">
                <div className="row">
                  <div className="col-md-7 col-7">Park Emergency </div>
                  <div className="col-md-5 col-5">+91-9916699166</div>
                </div>
              </a>
            </li>

            <li className="d-block">
              <a className="dropdown-item" href="#">
                <div className="row">
                  <div className="col-md-7 col-7"></div>
                  <div className="col-md-5 col-5"></div>
                </div>
              </a>
            </li>

            <li className="d-block">
              <a className="dropdown-item" href="#">
                <div className="row">
                  <div className="col-md-7 col-7">Delhi</div>
                  <div className="col-md-5 col-5">+91-7533033025</div>
                </div>
              </a>
            </li>

            <li className="d-block">
              <a className="dropdown-item" href="#">
                <div className="row">
                  <div className="col-md-7 col-7">Gurugram</div>
                  <div className="col-md-5 col-5">+91-7503141435</div>
                </div>
              </a>
            </li>

            <li className="d-block">
              <a className="dropdown-item" href="#">
                <div className="row">
                  <div className="col-md-7 col-7">Palam Vihar</div>
                  <div className="col-md-5 col-5">+91-9891424242</div>
                </div>
              </a>
            </li>

            <li className="d-block">
              <a className="dropdown-item" href="#">
                <div className="row">
                  <div className="col-md-7 col-7">The Signature, Gurugram</div>
                  <div className="col-md-5 col-5">+91-6262828213</div>
                </div>
              </a>
            </li>

            <li className="d-block">
              <a className="dropdown-item" href="#">
                <div className="row">
                  <div className="col-md-7 col-7">Faridabad</div>
                  <div className="col-md-5 col-5">+91-7531818181</div>
                </div>
              </a>
            </li>

            <li className="d-block">
              <a className="dropdown-item" href="#">
                <div className="row">
                  <div className="col-md-7 col-7">Sonipat</div>
                  <div className="col-md-5 col-5">+91-8944000000</div>
                </div>
              </a>
            </li>

            <li className="d-block">
              <a className="dropdown-item" href="#">
                <div className="row">
                  <div className="col-md-7 col-7">Panipat</div>
                  <div className="col-md-5 col-5">+91-7027898989</div>
                </div>
              </a>
            </li>

            <li className="d-block">
              <a className="dropdown-item" href="#">
                <div className="row">
                  <div className="col-md-7 col-7">Karnal</div>
                  <div className="col-md-5 col-5">+91-9643000000</div>
                </div>
              </a>
            </li>

            <li className="d-block">
              <a className="dropdown-item" href="#">
                <div className="row">
                  <div className="col-md-7 col-7">Ambala</div>
                  <div className="col-md-5 col-5">+91-7432000000</div>
                </div>
              </a>
            </li>

            <li className="d-block">
              <a className="dropdown-item" href="#">
                <div className="row">
                  <div className="col-md-7 col-7">Patiala</div>
                  <div className="col-md-5 col-5">+91-7448000000</div>
                </div>
              </a>
            </li>

            <li className="d-block">
              <a className="dropdown-item" href="#">
                <div className="row">
                  <div className="col-md-7 col-7">Mohali</div>
                  <div className="col-md-5 col-5">+91-8599844444</div>
                </div>
              </a>
            </li>

            <li className="d-block">
              <a className="dropdown-item" href="#">
                <div className="row">
                  <div className="col-md-7 col-7">Bathinda</div>
                  <div className="col-md-5 col-5">+91-7431000000</div>
                </div>
              </a>
            </li>

            <li className="d-block">
              <a className="dropdown-item" href="#">
                <div className="row">
                  <div className="col-md-7 col-7">Behror</div>
                  <div className="col-md-5 col-5">+91-7658000000</div>
                </div>
              </a>
            </li>

            <li className="d-block">
              <a className="dropdown-item" href="#">
                <div className="row">
                  <div className="col-md-7 col-7">Jaipur</div>
                  <div className="col-md-5 col-5">+91-9992228606</div>
                </div>
              </a>
            </li>
          </ul>
          <div className="dropdown emergency-Dropdown phoneDropdown">
            <a
              href="#"
              className=" dropdown-toggle flexset"
              data-bs-toggle="dropdown"
            >
              <div
                className="mobileBtn text-center ambulanceDropdownToggle"
                id="ambulanceDropdownToggle2"
              >
                <img
                  src="https://www.parkhospital.in/public/frontend/img/icons/red-ambu.png"
                  alt="Emergency Icon"
                />
                <p className="red emer">Emergency no </p>
              </div>
            </a>
          </div>
        </li>
      </ul>
      <div className="MainMenu">
        <ul className="menu">
          <li>
            <a href="#">Home </a>
          </li>
          <li className="menu-item-has-children">
            <a href="#">About the Group &#x2193;</a>
            <div className="  single-column-menu" style={{ display: "none" }}>
              <ul>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Our Journey</a>
                </li>
                <li>
                  <a href="#">Our Visionaries</a>
                </li>
                <li>
                  <a href="#">Our Management</a>
                </li>
                <li>
                  <a href="#">Awards &amp; Accolades</a>
                </li>
                <li>
                  <a href="#">Accreditations</a>
                </li>
                <li>
                  <a href="#">Why Us</a>
                </li>
              </ul>
            </div>
          </li>
          <li className="menu-item-has-children">
            <a href="#">Our Hospitals &#x2193;</a>
            <div
              className="  our_hospitals_mega_menu single-column-menu two-col"
              style={{ display: "none" }}
            >
              <ul>
                <li>
                  <a href="#">Our Hospitals</a>
                </li>
                <li>
                  <a href="#">Delhi</a>
                </li>
                <li>
                  <a href="#">Gurugram</a>
                </li>
                <li>
                  <a href="#">Palam Vihar</a>
                </li>
                <li>
                  <a href="#">The Signature, Gurugram</a>
                </li>
                <li>
                  <a href="#">Faridabad</a>
                </li>
                <li>
                  <a href="#">Sonipat</a>
                </li>
                <li>
                  <a href="#">Panipat</a>
                </li>
                <li>
                  <a href="#">Karnal</a>
                </li>
                <li>
                  <a href="#">Ambala</a>
                </li>
                <li>
                  <a href="#">Patiala</a>
                </li>
                <li>
                  <a href="#">Mohali</a>
                </li>
                <li>
                  <a href="#">Bathinda</a>
                </li>
                <li>
                  <a href="#">Behror</a>
                </li>
                <li>
                  <a href="#">Jaipur</a>
                </li>
              </ul>
            </div>
          </li>

          <li className="menu-item-has-children">
            <a href="#">Specialities&#x2193;</a>
            <div
              className="single-column-menu specilityMenu"
              style={{ display: "none" }}
            >
              <div>
                <div>
                  <h4 className="orange">
                    Centres of Excellence (Super Specialities)
                  </h4>
                  <ul>
                    <li>
                      <a href="#">Cardiac Sciences</a>
                    </li>

                    <li>
                      <a href="#">Neurosciences - Brain &amp; Spine</a>
                    </li>

                    <li>
                      <a href="#">Plastic &amp; Cosmetic Surgery</a>
                    </li>

                    <li>
                      <a href="#">General and Laparoscopic Surgery</a>
                    </li>

                    <li>
                      <a href="#">Renal Sciences &amp; Kidney Transplant</a>
                    </li>

                    <li>
                      <a href="#">
                        Bone, Orthopaedics, Joint Replacement &amp; Sports
                        Medicine
                      </a>
                    </li>

                    <li>
                      <a href="#">
                        Gastroenterology &amp; Surgical Gastroenterology
                      </a>
                    </li>

                    <li>
                      <a href="#">Cancer Care</a>
                    </li>

                    <li>
                      <a href="#">Bone Marrow Transplant</a>
                    </li>

                    <li>
                      <a href="#">iMARS / Robot-Assisted Surgery</a>
                    </li>
                  </ul>
                </div>

                <div className="colWidth">
                  <h4 className="orange">Multi Specialities</h4>
                  <ul>
                    <li>
                      <a href="#">Bariatric Surgery</a>
                    </li>

                    <li>
                      <a href="#">Anaesthesiology</a>
                    </li>

                    <li>
                      <a href="#">Critical Care</a>
                    </li>

                    <li>
                      <a href="#">Chest &amp; Respiratory Diseases</a>
                    </li>

                    <li>
                      <a href="#">Dental Care</a>
                    </li>

                    <li>
                      <a href="#">Dermatology</a>
                    </li>

                    <li>
                      <a href="#">Endocrinology</a>
                    </li>

                    <li>
                      <a href="#">Paediatrics</a>
                    </li>

                    <li>
                      <a href="#">Internal Medicine &amp; Geriatrics</a>
                    </li>

                    <li>
                      <a href="#">Rheumatology</a>
                    </li>
                  </ul>
                </div>

                <div className="colWidth ">
                  <h4 className="orange">Multi Specialities</h4>
                  <div>
                    <ul>
                      <li>
                        <a href="#">ENT</a>
                      </li>

                      <li>
                        <a href="#">Ophthalmology</a>
                      </li>

                      <li>
                        <a href="#">Obstetrics &amp; Gynaecology</a>
                      </li>

                      <li>
                        <a href="#">Interventional Radiology &amp; Imaging</a>
                      </li>

                      <li>
                        <a href="#">Psychiatry</a>
                      </li>

                      <li>
                        <a href="#">Pathology &amp; Microbiology</a>
                      </li>

                      <li>
                        <a href="#">Paediatric Surgery</a>
                      </li>

                      <li>
                        <a href="#">Fertility Management</a>
                      </li>

                      <li>
                        <a href="#">Nuclear Medicine</a>
                      </li>
                    </ul>
                  </div>
                  <h4 className="orange mt-4 ">Support Services</h4>
                  <ul>
                    <li>
                      <a href="#">Physiotherapy</a>
                    </li>

                    <li>
                      <a href="#">Blood Bank</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li className="menu-item-has-children">
            <a href="#">Doctors</a>
          </li>

          <li className="menu-item-has-children">
            <a href="#">Careers</a>
          </li>

          <li className="menu-item-has-children">
            <a href="#">Investor Relation &#x2193;</a>
            <div
              className="single-column-menu rightPositionNav"
              style={{ display: "none" }}
            >
              <ul>
                <li>
                  <a href="#">About Company</a>
                </li>
                <li>
                  <a href="#">Shareholders Information </a>
                </li>
                <li>
                  <a href="#">Financial Information </a>
                </li>
                <li>
                  <a href="#">Investors Connect</a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </header>
);

export default Header;
