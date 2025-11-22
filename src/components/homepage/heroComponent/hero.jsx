
import "./style/style.scss"
import FindDoctor from "./findDoctor"
import { useEffect, useState } from "react"
import { client } from "../../../lib/sanity";

const query = `*[_type == "herocomponent"][0]{
  "heroImageUrl": heroImage.asset->url,
  "welcomeTextImageUrl": welcomeTextImage.asset->url,
  welcomeText,
  heading,
  subheading,
  description,
  firstCtaText,
  firstCtaUrl,
  watchVideoText,
  watchVideoUrl,
  stats[]{
    statNumber,
    statLabel
  }
}`
export default function HeroComponent() {
    const [data, setData] = useState(null);
    const backgroundImage = data ? `url(${data.heroImageUrl})` : "none";
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
        <section className="hero-component" style={{ backgroundImage }}>
            <div className="hero-component-container">
                <div className="hero-content">
                    <div className="welcome-title">
                        <span><img src={data?.welcomeTextImageUrl} alt="" />{data?.welcomeText}</span>
                        <h2 className="welcome-heading">{data?.heading}</h2>
                        <p className="sub-heading">{data?.subheading}</p>
                        <p className="description">{data?.description}</p>
                    </div>
                    <div className="hero-cta-group">
                        <a href={data?.firstCtaUrl} className="btn btn-primary">{data?.firstCtaText}</a>
                        <a href={data?.watchVideoUrl} className="btn btn-secondary">
                            <img src="./video-play-icon.svg" alt="" />
                            <span>{data?.watchVideoText}</span>
                        </a>
                    </div>
                </div>
                <div className="hero-stats">
                    {
                        data?.stats?.map((stat, index) => {
                            return (
                                <div className="stat-item" key={index}>
                                    <div className="stat-item-value">{stat.statNumber}</div>
                                    <div className="stat-item-label">{stat.statLabel}</div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="find-doctor">
                    <FindDoctor />
                </div>
            </div>
        </section>
    )
}