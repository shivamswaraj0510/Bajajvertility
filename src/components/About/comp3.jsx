"use client";
import React, { useEffect, useState } from "react";
import { client } from "../../lib/sanity";
import "./comp3.scss";

const query = `*[_type == "videoContent"]{
  "videoUrl": videourl.asset->url,
  description
}`;

const AboutusComp3 = () => {
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    client
      .fetch(query)
      .then((res) => {
        console.log("🎥 Video data from Sanity:", res);
        setVideos(res);
      })
      .catch((err) => {
        console.error("❌ Error fetching video:", err);
        setError(err.message);
      });
  }, []);

  if (error) return <p className="error-text">Error: {error}</p>;
  if (!videos.length) return <p className="loading-text">Loading videos...</p>;

  return (
    <div className="aboutus-comp3-container">
      <div className="aboutus-comp3-container_inner">
        <div>
          <p className="fixedtext">
            Our founder and Chairman, Dr. Ajit Gupta started his professional
            journey in 1981 and established a clinic in South Delhi, India. The
            purpose of the clinic was to deliver high-quality, accessible and
            affordable healthcare to people. In January 2005, Dr. Ajit Gupta
            established the Park Hospital in West Delhi, which was subsequently
            transferred to our Company in 2011. We adopted a cluster-based
            approach to grow our network of hospitals, leveraging the benefits
            of proximity between our hospitals, leading to operational
            efficiencies and enabling us to benefit from economies of scale.
          </p>
        </div>

        {videos.map((video, index) => (
          <div key={index} className="video-block">
            {video.videoUrl ? (
              <video className="aboutus-video" autoPlay loop muted playsInline>
                <source src={video.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <p className="no-video-text">No video uploaded.</p>
            )}

            {video.description && (
              <div className="video-description">
                {Array.isArray(video.description) ? (
                  video.description.map((block, i) => (
                    <p key={i}>{block.children?.[0]?.text}</p>
                  ))
                ) : (
                  <p>{video.description}</p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutusComp3;
