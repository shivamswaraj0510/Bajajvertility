import NavBottom from "./comps/navBottom";
import NavTop from "./comps/navTop";
import { client } from "../../../lib/sanity";
import { useCallback, useEffect, useState } from "react";
import"./style/style.scss";

const offerQuery = `*[_type == "navTop"][0]{
  offerText,
  locationText,
  emailText,
  phoneText
}
`;

const mainNavQuerry = `*[_type == "mainnavbar"][0]{
  navItems[]{
    label,
    href,
    dropdown[]{
      label,
      href
    }
  },
  openHoursTitle,
  openHoursTimeline,
  ctaLabel,
  ctaHref
    }
`;
export default function Header() {
    const [navTopData, setNavTopData] = useState(null);
    const [mainNavData, setMainNavData] = useState(null);

    const fetchData = useCallback(async (query, setData) => {
        try {
            const res = await client.fetch(query);
            setData(res);
        } catch (err) {
            console.error(err);
        }
    }, []);

    useEffect(() => {
        fetchData(offerQuery, setNavTopData);
        fetchData(mainNavQuerry, setMainNavData);
    }, [fetchData]);

    return (
        <header className="navigation-bar">
            {navTopData && <NavTop data={navTopData} />}
            {mainNavData && < NavBottom data={mainNavData} />}
        </header>
    );
}