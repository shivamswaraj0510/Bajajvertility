import { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/footer";
import HeroBanner from "../components/careers/HeroBanner/HeroBanner";
import Blogs from "../components/careers/Blog/Blogs";
import Mission from "../components/careers/Mission/mission";
import { client } from "../lib/sanity";
import Opportunity from "../components/careers/Opportunity/opportunity";

const blogsQuery = `*[_type == "joinTeamPage"]{
  _id,
  title,
  subheading,
  body
}`;

const missionQuery = `*[_type == "hrmission"] | order(order asc) {
  _id,
  heading,
  "imageUrl": image.asset->url,
  body,
  order,
  imageOnLeft
}`;

const opportunituQuery = `
*[_type == "careerOpportunity"]{
  _id,
  heading,
  cards[]{
    heading,
    description,
    "imageUrl": image.asset->url,
    cta,
    ctaUrl
  }
}
`
const Careers = () => {
  const [blogsData, setBlogsData] = useState([]);
  const [missionData, setMissionData] = useState([]);
  const [opportunityData, setOpportunityData] = useState([]);
  const [loading, setLoading] = useState({ blogs: true, mission: true });
  const [error, setError] = useState({ blogs: null, mission: null });

  useEffect(() => {
    let isMounted = true;

    const fetchBlogs = client
      .fetch(blogsQuery)
      .then((res) => {
        if (!isMounted) return;
        setBlogsData(res || []);
        setLoading((prev) => ({ ...prev, blogs: false }));
      })
      .catch((err) => {
        console.error("Failed to fetch blogs data:", err);
        if (!isMounted) return;
        setError((prev) => ({ ...prev, blogs: err?.message || "Error fetching blogs" }));
        setLoading((prev) => ({ ...prev, blogs: false }));
      });
    const fetchOpportunities = client
      .fetch(opportunituQuery)
      .then((res) => {
        console.log(res);

        setOpportunityData(res || []);
      })
      .catch((err) => {
        console.error("Failed to fetch blogs data:", err);
        if (!isMounted) return;
        setError((prev) => ({ ...prev, blogs: err?.message || "Error fetching blogs" }));
      });

    const fetchMission = client
      .fetch(missionQuery)
      .then((res) => {
        if (!isMounted) return;
        setMissionData(res || []);
        setLoading((prev) => ({ ...prev, mission: false }));
      })
      .catch((err) => {
        console.error("Failed to fetch mission data:", err);
        if (!isMounted) return;
        setError((prev) => ({ ...prev, mission: err?.message || "Error fetching mission" }));
        setLoading((prev) => ({ ...prev, mission: false }));
      });

    // Run both in parallel
    Promise.allSettled([fetchBlogs, fetchMission, fetchOpportunities]);

    return () => {
      isMounted = false;
    };
  }, []);

  const isLoading = loading.blogs || loading.mission;

  return (
    <>
      <Header />
      <HeroBanner />

      {isLoading && (
        <div style={{ padding: "1rem" }}>
          <p>Loading content…</p>
        </div>
      )}

      {error.blogs && (
        <div style={{ color: "red", padding: "1rem" }}>
          <p>{error.blogs}</p>
        </div>
      )}

      {blogsData.length > 0 &&
        blogsData.map((blog) => <Blogs data={blog} key={blog._id} />)}

      {error.mission && (
        <div style={{ color: "red", padding: "1rem" }}>
          <p>{error.mission}</p>
        </div>
      )}

      {missionData.length > 0 &&
        missionData.map((item) => <Mission data={item} key={item._id} />)}

      {opportunityData[0] &&
        (<Opportunity data={opportunityData[0]} />)}

      <Footer />
    </>
  );
};

export default Careers;
