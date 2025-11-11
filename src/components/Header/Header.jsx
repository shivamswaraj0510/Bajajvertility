// import "./styles/style.scss";
// import { useNavigate } from 'react-router-dom';
// import VitalityLogo from "../../assets/main_logo.png";
// const Header = () => {
//   return (
//     <header className="header">
//       <div className="header-logo">
//         <img src={VitalityLogo} alt="bajaj vitality" />
//       </div>
//       <div className="header-menu">
//         <ul className="sub-menu">
//           <li className="tabNone">
//             <a href="/find-doctor" className="gradBtn white ">
//               <span>
//                 <img
//                   loading="lazy"
//                   className="navIconMain"
//                   src="https://www.parkhospital.in/public/images/icon/navIcon1.png"
//                   alt="Find Doctor"
//                 />
//                 &nbsp; Find Doctors
//               </span>
//             </a>
//           </li>
//           <li className="tabNone">
//             <a href="/book_appointment" className="gradBtn white ">
//               <span>
//                 <img
//                   loading="lazy"
//                   className="navIconMain"
//                   src="https://www.parkhospital.in/public/images/icon/navIcon2.png"
//                   alt="Health Packages&lt;"
//                 />
//                 &nbsp; Book Appointment
//               </span>
//             </a>
//           </li>
//           <li className="tabNone bgblue">
//             <a href="/buy-madicines" className="gradBtn white">
//               <span>
//                 <img
//                   loading="lazy"
//                   className="navIconMain"
//                   src="https://www.parkhospital.in/public/images/icon/navIcon3.png"
//                   alt="Book Appointment"
//                 />
//                 &nbsp; Buy Medicines
//               </span>
//             </a>
//           </li>
//           <li className="tabNone">
//             <a href="/about" className="gradBtn white ">
//               <span>
//                 about
//               </span>
//             </a>
//           </li>
//           <li className="tabNone">
//             <a href="/careers" className="gradBtn white ">
//               <span>
//                 Careers
//               </span>
//             </a>
//           </li>
//         </ul>
//       </div>
//     </header>
//   )
// };

// export default Header;
import "./styles/style.scss";
import VitalityLogo from "../../assets/main_logo.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <img src={VitalityLogo} alt="Bajaj Vitality" />
      </div>

      <div className="header-right">
        <nav className="nav-links">
          <a href="/">Home</a>
          <a href="/about">About Us</a>
          <a href="/buy-medicines">Buy Medicines</a>
          <a href="/careers">Careers</a>
        </nav>

        <div className="header-buttons">
          <a href="/find-doctor" className="find-btn">
            Find Doctors
          </a>
          <a href="/book_appointment" className="book-btn">
            Book Appointment
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
