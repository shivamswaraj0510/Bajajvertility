import "./style/style.scss"
import { client } from "../../../lib/sanity";
import { useEffect, useState } from "react";


const query = `*[_type == "highlightCardsSection"][0]{
  cards[]{
    title,
    description,
    imageAlt,
    image{
      asset->{
        url
      }
    }
  }
}`
export default function HighlightCards() {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {

                const response = await client.fetch(query);
                setData(response);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        fetchData();
    }, [])

    return (
        <section className="hilightCards">
            <div className="highlight-cards-container">
                {
                    data?.cards?.map((card, index) => {
                        return (
                            <div className="highlight-card" key={index}>
                                <img src={card.image.asset.url} alt={card.imageAlt} className="highlight-card-image" />
                                <div className="card-body">
                                    <h3 className="card-title">{card.title}</h3>
                                    <p className="card-description">{card.description}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>

    )
}