import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const storedProjects = JSON.parse(localStorage.getItem("projects")) || [];
    setProjects(storedProjects);
  }, []);

  const filteredProjects = projects.filter(
    (p) =>
      p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.shortDescription.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Colors
  const primaryGreen = "#80b918";
  const darkBackground = "#0B2B24";
  const cardBg = "#102C28";
  const inputBg = "#1D3C35";
  const textColor = "#E6E6E6";
  const fontFamily = "'Montserrat', sans-serif";

  const containerStyle = {
    padding: "60px 20px",
    background: darkBackground,
    minHeight: "100vh",
    fontFamily,
    color: textColor,
  };

  const titleStyle = {
    textAlign: "center",
    fontSize: "2.5rem",
    marginBottom: "30px",
    color: primaryGreen,
    fontWeight: "700",
  };

  const searchInputStyle = {
    padding: "12px 16px",
    width: "100%",
    maxWidth: "400px",
    margin: "0 auto 40px auto",
    display: "block",
    borderRadius: "8px",
    border: "2px solid #444",
    backgroundColor: inputBg,
    color: textColor,
    fontSize: "1rem",
    outline: "none",
    boxSizing: "border-box",
    transition: "border-color 0.3s",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "24px",
    maxWidth: "1200px",
    margin: "0 auto",
  };

  const cardStyle = {
    backgroundColor: cardBg,
    padding: "20px",
    borderRadius: "10px",
    boxShadow: `0 4px 12px rgba(0, 0, 0, 0.3)`,
    border: "1px solid #1a4740",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    transition: "transform 0.3s, box-shadow 0.3s",
  };

  const buttonStyle = {
    marginTop: "auto",
    padding: "10px 18px",
    backgroundColor: primaryGreen,
    color: darkBackground,
    textDecoration: "none",
    borderRadius: "5px",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: "1rem",
    transition: "background-color 0.3s",
  };

  const fallbackStyle = {
    textAlign: "center",
    fontSize: "1.2rem",
    color: "#ccc",
    marginTop: "30px",
  };

  const downloadStyle = {
    display: "inline-block",
    marginTop: "8px",
    fontSize: "0.9rem",
    color: "#f25757",
    textDecoration: "underline",
    fontWeight: "600",
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Our Projects</h2>

      <input
        type="text"
        placeholder="Search projects..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={searchInputStyle}
        onFocus={(e) => (e.target.style.borderColor = primaryGreen)}
        onBlur={(e) => (e.target.style.borderColor = "#444")}
      />

      {filteredProjects.length === 0 ? (
        <div style={fallbackStyle}>
          <p>No projects match your search.</p>
          {projects.length === 0 && (
            <>
              <p>Looks like there are no projects yet!</p>
              <Link to="/admin" style={buttonStyle}>
                Go to Admin to Add
              </Link>
            </>
          )}
        </div>
      ) : (
        <div style={gridStyle}>
          {filteredProjects.map((project, idx) => (
            <div
              key={idx}
              style={cardStyle}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "scale(1.03)";
                e.currentTarget.style.boxShadow =
                  "0 8px 24px rgba(0, 0, 0, 0.4)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow =
                  "0 4px 12px rgba(0, 0, 0, 0.3)";
              }}
            >
              {project.imageUrl && (
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  style={{
                    width: "100%",
                    height: "150px",
                    objectFit: "cover",
                    borderRadius: "8px",
                    marginBottom: "12px",
                  }}
                />
              )}
              <h3
                style={{
                  color: primaryGreen,
                  fontSize: "1.4rem",
                  marginBottom: "10px",
                  fontWeight: "700",
                }}
              >
                {project.title}
              </h3>
              <p style={{ color: "#ccc", fontSize: "1rem", minHeight: "60px" }}>
                {project.shortDescription}
              </p>
              {project.pdfUrl && (
                <a
                  href={project.pdfUrl}
                  download={project.pdfName || "project.pdf"}
                  style={downloadStyle}
                  title="Download Project PDF"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  📄 Download PDF
                </a>
              )}
              <Link to={`/projects/${idx}`} style={buttonStyle}>
                View Details
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Projects;
