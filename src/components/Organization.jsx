import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";


import Navigation from "./Navigation";
import { Nav } from "react-bootstrap";



import Footer from "./Footer";

const organizationRoles = [
  {
    title: "President",
    description:
      "The President oversees the strategic direction of the party and is responsible for major decisions.",
    link: "https://nareshvenkattechhub.github.io/president",
    gradient: "linear-gradient(135deg, #ff7e5f, #feb47b)", // Orange-Peach
  },
  {
    title: "General Secretary",
    description:
      "The General Secretary handles the internal functioning and administration of the party.",
    link: "https://nareshvenkattechhub.github.io/general-secretary",
    gradient: "linear-gradient(135deg, #4facfe, #00f2fe)", // Blue-Cyan
  },
  {
    title: "Treasurer",
    description:
      "The Treasurer is responsible for the financial management of the party.",
    link: "https://nareshvenkattechhub.github.io/treasurer",
    gradient: "linear-gradient(135deg, #43e97b, #38f9d7)", // Green-Turquoise
  },
  {
    title: "Vice President",
    description:
      "The Vice President assists the President and steps in their absence.",
    link: "https://nareshvenkattechhub.github.io/vice-president",
    gradient: "linear-gradient(135deg, #ff9a9e, #fad0c4)", // Pink-Rose
  },
  {
    title: "Associate President",
    description:
      "The Associate President works with the President and Vice President, supporting leadership.",
    link: "https://nareshvenkattechhub.github.io/associate-president",
    gradient: "linear-gradient(135deg, #667eea, #764ba2)", // Purple-Blue
  },
  {
    title: "Joint Secretary",
    description:
      "The Joint Secretary assists the General Secretary in their duties and acts in their absence.",
    link: "https://nareshvenkattechhub.github.io/joint-secretary",
    gradient: "linear-gradient(135deg, #ffcc00, #ff6699)", // Yellow-Pink
  },
];

function Organization() {
  return (

    <>

    

    <div className="container  gaps my-5">
      <h2 className="text-center mb-4 fw-bold"
          style={{ color: "#333", fontSize: "2.5rem", letterSpacing: "2px", textTransform: "uppercase" }}>
        <span className="border-bottom border-3 pb-2" style={{ borderColor: "#ff6f3e" }}>Our Organization</span>
      </h2>
      <div className="row g-4 justify-content-center">
        {organizationRoles.map((role, index) => (
          <div key={index} className="col-md-4">
            <div
              className="card shadow-lg border-0 h-100 text-center"
              style={{
                background: role.gradient,
                borderRadius: "15px",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)", // Add shadow for depth
              }}
            >
              <div className="card-body d-flex flex-column align-items-center"
                   style={{ background: "linear-gradient(to right, #ffffff, #f8f9fa)", borderRadius: "15px" }}>
                {/* Full Title inside a Rounded Rectangle with Gradient */}
                <div
                  className="mb-3 d-flex align-items-center justify-content-center"
                  style={{
                    width: "220px",
                    height: "50px",
                    background: role.gradient,
                    color: "white",
                    fontSize: "18px",
                    fontWeight: "bold",
                    borderRadius: "15px",
                    textAlign: "center",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  {role.title}
                </div>

                <p className="card-text text-muted">{role.description}</p>
                <a
                  href={role.link}
                  className="btn btn-primary btn-lg mt-3 px-4"
                  style={{
                    fontSize: "16px",
                    fontWeight: "bold",
                    borderRadius: "25px",
                    transition: "background 0.3s ease",
                  }}
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>




    </>
  );
}

export default Organization;
