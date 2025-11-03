import React from "react";
import "./styles/parkFacilities.scss";
import DelightedPatientsCarousel from "../delighted_patients/delighted_patients";

export default function ParkFacilities() {
  return (
    <section className="park_facilities pt-22 pb-20" aria-labelledby="park-facilities-title">
      <div className="ph-container">
        <div className="ph-row">
          {/* LEFT COLUMN */}
          <div className="ph-col ph-col-6">
            <div className="testBg pb-5">
              <div className="text-center">
                <div className="comHeading text-center mb-15">
                  <h2 id="park-facilities-title" className="white">International Patients</h2>
                  <h3 className="white">Care Beyond Boundaries</h3>
                </div>
                <p className="white">Why choose us?</p>
              </div>
            </div>

            <div className="testBlocks pt-3">
              <div className="testBlocks-inner">
                <div className="left">
                  <p className="mb-sm-5 mb-15">Detailed Study of the Case History</p>
                  <div className="upload-btn-wrapper">
                    <a href="/international" className="uploadBtn" aria-label="Upload Files for International Patients">Upload Files</a>
                  </div>
                </div>

                <div className="right">
                  <div className="block">
                    <a href="https://www.parkhospital.in/international"><p className="m-0 black">VISA Assistance</p></a>
                  </div>
                  <div className="block">
                    <a href="https://www.parkhospital.in/international"><p className="m-0 black">Airport Pick-up</p></a>
                  </div>
                  <div className="block">
                    <a href="https://www.parkhospital.in/international"><p className="m-0 black">Payment Options</p></a>
                  </div>
                  <div className="block">
                    <a href="https://www.parkhospital.in/international"><p className="m-0 black">Immediate Treatment &amp; Appointments</p></a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN (can contain an image, kept as blocks per original) */}
          <div className="ph-col ph-col-6">
            <div className="facilities-right">
              {/* The original repeats lists and visual elements; replicate a stacked card area */}
              <DelightedPatientsCarousel/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
