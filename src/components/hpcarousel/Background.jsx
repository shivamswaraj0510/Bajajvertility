import React from "react";

function Background({ hero, children, onVideoEnded }) {
  const videoRef = React.useRef(null);

  const [width, setWidth] = React.useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  React.useEffect(() => {
    if (typeof window === "undefined") return;

    const handleResize = () => setWidth(window.innerWidth);
    // Initialize once
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // const assetUrl = width >= 1280 ? hero?.desktopUrl : hero?.tabletUrl;
  const assetUrl = hero?.desktopUrl ;

  return (
    <div className="hpcarousel-bg">
      {hero?.kind === "video" && assetUrl && (
        <video
          ref={videoRef}
          className="hpcarousel-video"
          preload="auto"
          autoPlay
          muted
          playsInline
          loop={false}
          onEnded={() => onVideoEnded?.()}
        >
          <source src={assetUrl} />
          Your browser does not support the video tag.
        </video>
      )}

      {hero?.kind === "image" && assetUrl && (
        <img
          className="hpcarousel-image"
          src={assetUrl}
          alt={hero.title ?? "carousel image"}
        />
      )}
      <div className="hp-background-children">{children}</div>
    </div>
  );
}

export default Background;
