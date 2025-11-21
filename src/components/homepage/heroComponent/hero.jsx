
import "./style/style.scss"
import FindDoctor from "./findDoctor"
export default function HeroComponent() {
    return (
        <section className="hero-component">
            <div className="hero-content">
                <div className="welcome-title">
                    <span><img src="" alt="" />Welcome to Bajaj Vitality</span>
                    <h2>We Are Here to Hear and Heal Your Health Problems</h2>
                    <p className="sub-heading">Bajaj Vitality – Your Trusted Partner in Healthcare</p>
                    <p className="description">Comprehensive medical care with expert doctors, advanced technology, and compassionate service. Your health, our priority.</p>
                </div>
                <div className="hero-cta-group">
                    <a href="#" className="btn btn-primary">Book Appointment</a>
                    <a href="#" className="btn btn-secondary">
                        <img src="./video-play-icon.svg" alt="" />
                        <span>Watch Video</span>
                    </a>
                </div>
            </div>
            <div className="hero-stats">
                <div className="stat-item">
                    <div className="stat-item-value">100+</div>
                    <div className="stat-item-label">Doctors</div>
                </div>
                <div className="stat-item">
                    <div className="stat-item-value">10+</div>
                    <div className="stat-item-label">Clinics</div>
                </div>
            </div>
            <div className="find-doctor">
                <FindDoctor />
            </div>
        </section>
    )
}