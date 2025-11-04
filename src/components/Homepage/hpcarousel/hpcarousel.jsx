"use client";
import { useEffect, useState, useCallback } from "react";
import "./style/style.scss";
import Background from "./Background";
import Carousel from "./Carousel";
import { client } from "../../../lib/sanity";

const query = `*[_type == "HpCardCarousel"] | order(order asc){
  _id,
  kind,
  title,
  alt,
  order,
  "desktopUrl": select(kind == "image" => image.asset->url),
  "videoUrl": select(kind == "video" => video.asset->url)
}
 `;

function Hpcarousel() {
  const [data, setData] = useState([]);
  const [active, setActive] = useState(0);
  const [autoAdvanceEnabled, setAutoAdvanceEnabled] = useState(true);
  const hero = data[active];

  useEffect(() => {
    async function fetchData() {
      const result = await client.fetch(query);
      setData(() => result || []);
    }
    fetchData();
  }, []);
  function handleActive(index) {
    setActive(index);
    // user clicked a button -> stop automatic advancing
    setAutoAdvanceEnabled(false);
  }

  const handleProgressComplete = useCallback(() => {
    if (!autoAdvanceEnabled) return;
    setActive((prev) => {
      if (data.length === 0) return prev;
      return (prev + 1) % data.length;
    });
  }, [autoAdvanceEnabled, data.length]);

  // Auto-advance for non-video (image) slides using a timer.
  // Videos will call onVideoEnded from Background which triggers handleProgressComplete.
  useEffect(() => {
    if (!autoAdvanceEnabled) return;
    if (!data || data.length === 0) return;
    // Only auto-advance images; videos are advanced when their 'ended' event fires
    if (hero?.kind === "image") {
      const timer = setTimeout(() => {
        handleProgressComplete();
      }, 5000); // change delay as needed
      return () => clearTimeout(timer);
    }
    return undefined;
  }, [
    active,
    autoAdvanceEnabled,
    data,
    data.length,
    hero?.kind,
    handleProgressComplete,
  ]);

  return (
    <div className="hpcarousel-container">
      <div className="hpcarousel-head">
        <Background
          hero={hero}
          onVideoEnded={() => {
            handleProgressComplete();
          }}
        >
          <Carousel items={data} active={active} onChange={handleActive} />
        </Background>
      </div>
    </div>
  );
}

export default Hpcarousel;
