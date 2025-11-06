import { useEffect, useState } from "react";
import DoctorCard from "./DoctorCard";
import "./styles/styles.scss";
import Pagination from "@mui/material/Pagination";
import {client} from "../../../lib/sanity"

const query = `*[_type == "doctor"] | order(coalesce(order, 9999) asc, name asc) {
  _id,
  name,
  location,
  "imageUrl": image.asset->url,
  experience,
  designation,
  speciality,
  appointmentUrl,
  profileUrl,
  order
}
`;
const Specialist = () => {
  const [data, setData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    async function fetchData() {
      try {
        const docs = await client.fetch(query);
        setData(docs);
      } catch (err) {
        console.error("Failed to fetch doctors data", err);
      }
    }
    fetchData();
  }, []);
  // const [visibleCards, setVisibleCards] = useState(null);
  let itemsPerPage;
  let startIndex;
  let endIndex;
  let visibleCards;
  let totalPages;
  if (data) {
    itemsPerPage = 3;
    startIndex = (currentPage - 1) * itemsPerPage;
    endIndex = startIndex + itemsPerPage;
    visibleCards = data.slice(startIndex, endIndex);
    console.log(visibleCards);

    totalPages = Math.ceil(data.length / itemsPerPage);
  }

  return (
    <div className="specialist-section">
      <div className="section-heading">
        <h3 className="main-heading">Our Team of Specialists</h3>
        <h5 className="sub-heading">The Skilled Force</h5>
      </div>
      <div className="section-content">
        {visibleCards && visibleCards.map((card) => <DoctorCard card={card} />)}
      </div>
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={(e, value) => {
          setCurrentPage(() => value);
        }}
        shape="rounded"
        variant="outlined"
        color="primary"
        backgroundcolor="secondary"
        defaultPage={1}
        siblingCount={5}
        boundaryCount={2}
      />
    </div>
  );
};
export default Specialist;
