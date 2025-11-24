import React, { useEffect, useState } from "react";
import "./styles/howItWorks.scss";
import { client } from "../../lib/sanity"; // pre-configured Sanity client

const HOW_IT_WORKS_QUERY = `
*[_type == "howItWorks"][0]{
  label,
  title,
  subtitle,
  steps[]{
    title,
    description
  }
}
`;

const DEFAULT_CONTENT = {
    label: "HOW IT WORKS",
    title: "Trusted Healthcare With A Focus On Your Well-Being",
    subtitle:
        "At Bajaj Vitality, we’ve streamlined the healthcare process to ensure you receive the best care with ease and convenience.",
    steps: [
        { title: "Book An Appointment", description: "Schedule your visit..." },
        { title: "Consult Our Experts", description: "Meet with our highly skilled..." },
        { title: "Receive Care", description: "Once a treatment plan is established..." },
        { title: "Follow-Up", description: "After your treatment, we stay connected..." },
    ],
};

const HowItWorks = () => {
    const [data, setData] = useState(DEFAULT_CONTENT);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        let mounted = true;

        client
            .fetch(HOW_IT_WORKS_QUERY)
            .then((res) => {
                if (!mounted) return;

                if (res) {
                    setData({
                        label: res.label ?? DEFAULT_CONTENT.label,
                        title: res.title ?? DEFAULT_CONTENT.title,
                        subtitle: res.subtitle ?? DEFAULT_CONTENT.subtitle,
                        steps:
                            Array.isArray(res.steps) && res.steps.length === 4
                                ? res.steps
                                : DEFAULT_CONTENT.steps,
                    });
                } else {
                    // No document found — keep defaults
                    setData(DEFAULT_CONTENT);
                }
            })
            .catch((err) => {
                console.error("Sanity fetch failed:", err);
                setError("Unable to load content right now.");
                setData(DEFAULT_CONTENT);
            })
            .finally(() => setLoading(false));

        return () => {
            mounted = false;
        };
    }, []);

    return (
        <section className="howitworks">
            {/* Eyebrow */}
            <div className="howitworks__eyebrow">
                <span className="howitworks__plus" aria-hidden="true">
                    {/* Use forward slashes in web paths */}
                    <img src="./Vector.png" />
                </span>
                <span className="howitworks__eyebrowText">{data.label}</span>
            </div>

            {/* Title & subtitle */}
            <h1 className="howitworks__title">{data.title}</h1>
            <p className="howitworks__subtitle">{data.subtitle}</p>

            {/* Optional status */}
            {loading && <div style={{ marginBottom: 8, color: "#667085" }}>Loading...</div>}
            {error && <div style={{ marginBottom: 8, color: "#d92d20" }}>{error}</div>}

            {/* Grid */}
            <div className="howitworks__grid" role="list">
                {(data.steps || []).map((step, idx) => {
                    const isBottomRow = idx >= 2;

                    const cellClasses = [
                        "howitworks__cell",
                        idx === 0 ? "howitworks__cell--left" : "",
                        idx === 1 ? "howitworks__cell--right" : "",
                        idx === 2 ? "howitworks__cell--right" : "",
                        idx === 3 ? "howitworks__cell--left" : "",
                        isBottomRow ? "howitworks__cell--bottom" : "howitworks__cell--top",
                        idx === 0 ? "howitworks__cell--tl" : "",
                        idx === 1 ? "howitworks__cell--tr" : "",
                        idx === 2 ? "howitworks__cell--bl" : "",
                        idx === 3 ? "howitworks__cell--br" : "",
                    ]
                        .filter(Boolean)
                        .join(" ");

                    const badgeText = String(idx + 1).padStart(2, "0");

                    return (
                        <div className={cellClasses} role="listitem" key={idx}>
                            <div className="howitworks__cellHeader">
                                <div className="howitworks__badge" aria-hidden="true">
                                    {badgeText}
                                </div>
                                <h3 className="howitworks__cellTitle">{step.title}</h3>
                            </div>
                            <p className="howitworks__cellBody">{step.description}</p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default HowItWorks;