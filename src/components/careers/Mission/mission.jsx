import "./styles/styles.scss"
import { PortableText } from "@portabletext/react";

const Mission = ({ data }) => {
    const isImgOnLeft = data.imageOnLeft ? "container-flow-left" : "";
    return (
        <section className="mission-section">
            <div className={`mission-container ${isImgOnLeft}`}>
                <div className="mission-content">
                    <h3 className="mission-heading">{data.heading}</h3>
                    <PortableText value={data.body} />
                </div>
                <div className="mission-img">
                    <img src={data.imageUrl} alt={data.heading} />
                </div>
            </div>
        </section>
    );
}

export default Mission;