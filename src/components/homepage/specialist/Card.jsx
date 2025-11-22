import "./styles/cards.scss"

export default function Card({ data }) {
    return (
        <div className="specialist-card">
            <img src={data.image} alt={data.imageAlt} className="specialist-card-img"/>
            <h4 className="specialist-name">{data.name}</h4>
            <p className="specialist-profession">{data.profession}</p>
        </div>
    );
}