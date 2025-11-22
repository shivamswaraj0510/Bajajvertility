import { renderStars } from "./Stars";
import "./styles/testimonialCard.scss";
export default function TestimonialCard({ data }) {
    console.log(data);

    return (
        <div className="testimonial-card">
            <div className="testimonial-card-header">
                <img src={data?.image} alt={data?.imageAlt} className="profile-image" />
                <div className="reviewer-details">
                    <h3 className="reviewer-name">{data?.name}</h3>
                    <p className="reviewer-location">{data?.location}</p>
                </div>
                <img src="/quotes-icon.svg" alt="quotes" className="quotes" />
            </div>
            <div className="testimonial-card-body">
                {data?.review}
            </div>
            <div className="testimonial-card-footer">
                {renderStars(data?.rating)}
            </div>
        </div>
    );
}