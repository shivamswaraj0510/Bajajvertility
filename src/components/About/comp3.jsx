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
            Bajaj Vitality, a visionary healthcare initiative by the Bajaj Group, was launched to transform the Indian medical landscape by offering high-quality, affordable, and accessible healthcare. Backed by a ₹10,000 crore investment, the company is building a nationwide network of hospitals, especially in tier-two and tier-three cities, using a cluster-based model to ensure operational efficiency and economies of scale. Integrating digital platforms like Bajaj Finserv Health and Bajaj Allianz, Bajaj Vitality aims to deliver seamless care through telemedicine, diagnostics, and pharmacy services—making ethical, inclusive, and future-ready healthcare a reality for millions.
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
