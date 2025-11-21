
import "../style/navTop.scss"
export default function NavTop({ data }) {

    return (
        <div className="nav-top-container">
            <div className="nav-top">
                <div className="nav-top-offer">
                    <div className="logo">
                        <img src="./offer-icon.svg" alt="offer" />
                    </div>
                    <div className="offer">{data.offerText}</div>
                </div>
                <div className="nav-top-contact-details">
                    <div className="location"><span className="loclogo">
                        <img src="./loccation-icon.svg" alt="location" />
                    </span>
                        <span className="location-text">{data.locationText}</span>
                    </div>
                    <div className="email">
                        <span className="emaillogo">
                            <img src="./mail.svg" alt="email" />
                        </span>
                        <span className="email-text">{data.emailText}</span>
                    </div>
                    <div className="mobile-number">
                        <span className="mobilelogo">
                            <img src="./phone.svg" alt="phone" />
                        </span>
                        <span className="mobile-text">{data.phoneText}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}