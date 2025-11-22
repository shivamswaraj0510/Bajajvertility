
export default function Testimonials() {
    return (
        <section className="specialist">
            <div className="specialist-container">

                <div className="specialist-content">
                    <h2 className="specialist-title">
                        <img src={items?.imageUrl} className="specialist-title-img" alt={items?.imageAlt} />
                        {items?.title}
                    </h2>
                    <h2 className="specialist-heading">{items?.heading}</h2>
                    <p className="specialist-para">{items?.description}</p>

                </div>
            </div>
        </section>
    )
}