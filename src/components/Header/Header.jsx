import "./styles/style.scss";


const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <a href="/">
          <img src="" alt="Bajaj Vitality" />
        </a>
      </div>

      <div className="header-right">
        <nav className="nav-links">
          <a href="/">Home</a>
          <a href="/about">About Us</a>
          <a href="/buy-madicines">Buy Medicines</a>
          <a href="/careers">Careers</a>
          <a href="/healthpackage">Health Packages</a>
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
