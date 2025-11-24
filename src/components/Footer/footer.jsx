import React, { useEffect, useState } from "react";
import "./styles/footer.scss";
import { client } from "../../lib/sanity";

const query = `*[_type == "footer"][0]{
  cta_text,
  cta_description,
  btn_text1,
  btn_text2,
  btn_text3,
  btn_text4,
  section_title,
  footerSections[]->{
    heading,
    linkItem[]{
      name,
      redirectionLink
    }
  },
  section_title2,
  footerSections2[]->{
    heading,
    linkItem[]{
      name,
      redirectionLink
    }
  }
}
`;

const Footer = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const res = await client.fetch(query);
        console.log(res, "ni");

        setData(res);
      } catch (err) {
        console.error("Error fetching banner data:", err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="hero-banner-container">
        <div className="loading">Loading...</div>
      </div>
    );
  }

  const cta_text = data?.cta_text;
  const cta_description = data?.cta_description;
  const section_title = data?.section_title;
  const section_title2 = data?.section_title2;
  const btn_text1 = data?.btn_text1;
  const btn_text2 = data?.btn_text2;
  const btn_text3 = data?.btn_text3;
  const btn_text4 = data?.btn_text4;

  const footer_sections = data?.footerSections[0];
  const footer_sections2 = data?.footerSections2[0];

  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__brand">
          <img src="./Group.svg" alt="Bajaj Finserv Logo" className="footer__logo" re />
          <h1>{cta_text}</h1>
          <p>{cta_description}</p>
          <div className="footer__buttons">
            <button className="btn"><img src="./call_icon.svg" /> {btn_text1}</button>
            <button className="btn"><img src="./logo2.svg" />{btn_text2}</button>
            <button className="btn"><img src="./logo4.svg" />{btn_text3}</button>
            <button className="btn"><img src="./logo3.svg" /> {btn_text4}</button>
          </div>
        </div>

        <div className="footer__links">
          <div className="footer__column">
            <h4>{section_title}</h4>
            <ul>
              {(footer_sections?.linkItem ?? []).map((item, idx) => (
                <li key={item?.id ?? `${item?.name || "item"}-${idx}`}>
                  {item?.name ?? "—"}
                </li>
              ))}
            </ul>
          </div>
          <div className="footer__column">
            <h4>{section_title2}</h4>
            <ul>
              {(footer_sections2?.linkItem ?? []).map((item, idx) => (
                <li key={item?.id ?? `${item?.name || "item"}-${idx}`}>
                  {item?.name ?? "—"}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="footer__social">
          <img src="./social_media_logo1.svg" />
          <img src="./social_media_logo2.svg" />
          <img src="./social_media_logo3.svg" />
          <img src="./social_media_logo4.svg" />
        </div>
        <div className="footer__policies">
          <span>Privacy Policy</span>
          <span>Terms & Condition</span>
          <span>Do not share or sell my information</span>
        </div>
        <div className="footer__copyright">
          2025 © <strong>Bajaj Vitality</strong>. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
