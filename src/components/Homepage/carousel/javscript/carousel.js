import * as React from "react";

export function useCarousel(opts) {
  const {
    slideCount,
    autoplay = false,
    interval = 5000,
    trackRef,
    visibleDesktop = 3,
  } = opts;

  const [index, setIndex] = React.useState(0);
  const [visibleCount, setVisibleCount] = React.useState(1);
  const timerRef = React.useRef(null);
  const trackElRef = React.useRef(null);

  const updateTransform = React.useCallback(
    (i) => {
      const track = trackElRef.current || (trackRef && trackRef.current);
      if (!track) return;
      const pct = -(i * 100);
      track.style.transform = `translate3d(${pct}%, 0, 0)`;
    },
    [trackRef]
  );

  const setTrack = React.useCallback(
    (node) => {
      trackElRef.current = node;
      updateTransform(index);
    },
    [index, updateTransform]
  );

  const next = React.useCallback(() => {
    setIndex((i) => {
      const n = (i + 1) % slideCount;
      updateTransform(n);
      return n;
    });
  }, [slideCount, updateTransform]);

  const prev = React.useCallback(() => {
    setIndex((i) => {
      const n = (i - 1 + slideCount) % slideCount;
      updateTransform(n);
      return n;
    });
  }, [slideCount, updateTransform]);

  const goTo = React.useCallback(
    (n) => {
      const clamped = Math.max(0, Math.min(slideCount - 1, n));
      setIndex(clamped);
      updateTransform(clamped);
    },
    [slideCount, updateTransform]
  );

  // autoplay
  React.useEffect(() => {
    if (!autoplay) return;
    timerRef.current = window.setInterval(next, interval);
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, [autoplay, interval, next]);

  // visible count: 3 on desktop, 1 on mobile
  React.useEffect(() => {
    const update = () => {
      setVisibleCount(window.innerWidth >= 768 ? visibleDesktop : 1);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [visibleDesktop]);

  const handleKeyDown = React.useCallback(
    (e) => {
      if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    },
    [next, prev]
  );

  return { index, next, prev, goTo, setTrack, handleKeyDown, visibleCount };
}