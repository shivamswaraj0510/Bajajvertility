import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>About Us Page</h1>
      <p>This is the About page content.</p>
      <button
        style={{ marginTop: "20px", padding: "10px 20px" }}
        onClick={() => navigate("/")}
      >
        Go Back to Home
      </button>
    </div>
  );
};

export default About;
