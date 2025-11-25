
// BlogNewsSection.jsx
import React, {useEffect, useState} from "react";
import "./styles/blogs.scss";
import { client } from "../../lib/sanity";

const QUERY = `*[_type == "blogNewsSection"][0]{
  _id,
  _createdAt,
  _updatedAt,
  eyebrow,
  title,
  subtitle,
  hero{
    date,
    headline,
    ctaText,
    "ctaLink": coalesce(ctaLink.current, ctaLink),
    "imageUrl": image.asset->url,
    image{
      hotspot,
      crop,
      asset->{
        url,
        metadata{dimensions, lqip, palette}
      }
    }
  },
  items[]{
    title,
    date,
    "slug": slug.current,
    "imageUrl": image.asset->url,
    image{
      hotspot,
      crop,
      asset->{
        url,
        metadata{dimensions, lqip, palette}
      }
    }
  }
}`;

const BlogNewsSection = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    client.fetch(QUERY).then((res) => {
      if (active) {
        setData(res);
        setLoading(false);
      }
    }).catch(() => setLoading(false));
    return () => { active = false; };
  }, []);

  const eyebrow = data?.eyebrow ?? "Blog & News";
  const title = data?.title ?? "Stay Informed With The Latest In";
  const subtitle = data?.subtitle ?? "Our Blog & News section keeps you updated with the latest health tips, medical breakthroughs, clinic news, and wellness advice.";

  const heroDate = data?.hero?.date ?? "October 15, 2025";
  const heroHeadline = data?.hero?.headline ?? "Understanding The Importance Of Regular Health Checkups";
  const heroCtaText = data?.hero?.ctaText ?? "Read More";
  const heroCtaLink = data?.hero?.ctaLink ?? "#";
  const heroImgUrl = data?.hero?.imageUrl;

  const item0 = data?.items?.[0] ?? null;
  const item1 = data?.items?.[1] ?? null;

  return (
    <section className="bn-section">
      <div className="bn-header">
        <div className="bn-eyebrow"><img src="./Vector.png"/>{eyebrow}</div>
        <h2 className="bn-title">{title}</h2>
        <p className="bn-subtitle">{subtitle}</p>
      </div>

      <div className="bn-grid">
        <article className="bn-hero-card">
          <div
            className="bn-hero-bg"
            style={heroImgUrl ? { backgroundImage: `url(${heroImgUrl})` } : undefined}
          />
          <div className="bn-hero-content">
            <div className="bn-hero-meta">{heroDate}</div>
            <h3 className="bn-hero-title">{heroHeadline}</h3>
            <a href={heroCtaLink} aria-label={heroCtaText}>
              <button className="bn-cta">{heroCtaText}</button>
            </a>
          </div>
        </article>
        <div className="bn-list">
          <article className="bn-item">
            <div
              className="bn-item-thumb"
              style={item0?.imageUrl ? { backgroundImage: `url(${item0.imageUrl})` } : undefined}
            />
            <div className="bn-item-content">
              <h4 className="bn-item-title">{item0?.title ?? "How to Manage Stress and Improve Mental Well-being"}</h4>
              <div className="bn-item-date">{item0?.date ?? "Tuesday · September 18, 2025"}</div>
            </div>
          </article>
          <article className="bn-item">
            <div
              className="bn-item-thumb bn-item-thumb--alt"
              style={item1?.imageUrl ? { backgroundImage: `url(${item1.imageUrl})` } : undefined}
            />
            <div className="bn-item-content">
              <h4 className="bn-item-title">{item1?.title ?? "New Advances in Emergency Care: What You Need to Know"}</h4>
              <div className="bn-item-date">{item1?.date ?? "Tuesday · September 24, 2025"}</div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default BlogNewsSection;
