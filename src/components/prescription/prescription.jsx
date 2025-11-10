import React, { useRef, useState } from "react";

export default function PrescriptionUpload() {
  const inputRef = useRef(null);
  const [fileName, setFileName] = useState("");

  return (
    <div className="buy-med__rx">
      <h2>Order with Prescription – How it works</h2>

      <div className="steps">
        <div className="step">
          <span className="num">1</span>
          <h3>Upload</h3>
          <p>Take a clear photo or upload a PDF of your doctor’s prescription.</p>
        </div>
        <div className="step">
          <span className="num">2</span>
          <h3>Verify</h3>
          <p>Our licensed pharmacists will review and confirm your order.</p>
        </div>
        <div className="step">
          <span className="num">3</span>
          <h3>Deliver</h3>
          <p>Get contactless delivery with live tracking.</p>
        </div>
      </div>

      <div className="rx-actions">
        <button
          className="btn-upload"
          onClick={() => inputRef.current?.click()}
        >
          📄 Upload Prescription
        </button>
        <input
          ref={inputRef}
          type="file"
          accept="image/*,.pdf"
          hidden
          onChange={(e) => setFileName(e.target.files?.[0]?.name || "")}
        />
        <button className="btn-help">👩‍⚕️ Talk to Pharmacist</button>
        {fileName && <div aria-live="polite">Selected: {fileName}</div>}
      </div>
    </div>
  );
}
