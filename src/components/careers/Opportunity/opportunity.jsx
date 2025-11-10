import "./styles/style.scss"

const Opportunity = ({ data }) => {
    return (
        <section className="opportunity-section">
            <h3 className="section-heading">
                {data.heading}
            </h3>
            <div className="cards-container">
                {data.cards && data.cards.length > 0 && data.cards.map((card, index) => (
                    <div className="opportunity-card" key={index}>
                        <div className="card-img">
                            <img src={card.imageUrl} alt={card.heading} />
                        </div>
                        <div className="card-body">
                            <div className="card-body-content">
                                <h4 className="card-title">{card.heading}</h4>
                                <p className="card-description">{card.description}</p>
                            </div>
                            <div className="cta">
                                <a href={card.ctaUrl}>{card.cta}</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
export default Opportunity;