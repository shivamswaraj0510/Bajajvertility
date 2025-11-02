"use client";
import { useEffect, useState, useCallback } from "react";
import "./style/style.scss";
import Background from "./Background";
import Carousel from "./Carousel";

const _query = `*[_type == "hpcarousel"] | order(order asc) {
  _id,
  title,
  order,
  "kind": uploadType,
  "desktopUrl": select(
    uploadType == "video" => videofiledesktop.asset->url,
    imagedesktop.asset->url
  ),
  "tabletUrl": select(
    uploadType == "video" => coalesce(videofiletabletview.asset->url, videofiledesktop.asset->url),
    coalesce(imagetabletview.asset->url, imagedesktop.asset->url)
  ),
  "hero": select(herotext == "yes" => {
    "main": maintext,
    "sub": subtext,
    "x": herotextpositionx,
    "y": herotextpositiony
  }),
  "cta": select(wantctabtn => {"text": ctabtntext, "url": ctabtnurl})
}`;

function Hpcarousel() {
  const [data, _setData] = useState([
    {
      _id: "default",
      order: 1,
      kind: "image",
      desktopUrl:
        "https://d1rq68njgylyqg.cloudfront.net/banner/ParkGroupWebBanner3.webp",
    },
    {
      _id: "default",
      order: 2,
      kind: "video",
      desktopUrl: "https://d1rq68njgylyqg.cloudfront.net/banner/banner2_v.mp4",
    },
    {
      _id: "default",
      order: 3,
      kind: "image",
      desktopUrl:
        "https://d1rq68njgylyqg.cloudfront.net/banner/ParkGroupWebBanner3.webp",
    },
    {
      _id: "default",
      order: 4,
      kind: "image",
      desktopUrl:
        "https://d1rq68njgylyqg.cloudfront.net/banner/ParkGroupWebBanner3.webp",
    },
  ]);
  const [active, setActive] = useState(0);
  const [autoAdvanceEnabled, setAutoAdvanceEnabled] = useState(true);
  const hero = data[active];

  // useEffect(() => {
  //   async function fetchData() {
  //     const result = await client.fetch(query);
  //     setData(() => result || []);
  //   }
  //   fetchData();
  // }, []);
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
