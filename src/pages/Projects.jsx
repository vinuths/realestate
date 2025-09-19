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

  const containerStyle = {
    padding: "60px 20px",
    background: "#f5f5f5",
    minHeight: "100vh",
    fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
  };

  const titleStyle = {
    textAlign: "center",
    fontSize: "2.5rem",
    marginBottom: "20px",
    color: "#333",
    fontWeight: "700",
  };

  const searchInputStyle = {
    padding: "12px 16px",
    width: "100%",
    maxWidth: "400px",
    margin: "0 auto 40px auto",
    display: "block",
    borderRadius: "8px",
    border: "1.8px solid #ccc",
    fontSize: "1rem",
    outline: "none",
    boxSizing: "border-box",
    transition: "border-color 0.3s",
  };

  const addButtonStyle = {
    display: "inline-block",
    marginBottom: "40px",
    padding: "14px 24px",
    backgroundColor: "#5a4d9d",
    color: "#fff",
    borderRadius: "8px",
    fontWeight: "600",
    fontSize: "1.1rem",
    textDecoration: "none",
    boxShadow: "0 4px 15px rgba(90, 77, 157, 0.6)",
    transition: "background-color 0.3s ease",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "20px",
    maxWidth: "1200px",
    margin: "0 auto",
  };

  const cardStyle = {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    border: "1px solid #eee",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
  };

  const buttonStyle = {
    display: "inline-block",
    marginTop: "auto",
    padding: "10px 18px",
    backgroundColor: "#1e3c72",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "5px",
    fontWeight: "bold",
    textAlign: "center",
  };

  const fallbackStyle = {
    textAlign: "center",
    fontSize: "1.2rem",
    color: "#777",
    marginTop: "30px",
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Our Projects</h2>

      <Link
        to="/admin/add"
        style={addButtonStyle}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#483d8b")}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#5a4d9d")}
      >
        + Add New Project
      </Link>

      <input
        type="text"
        placeholder="Search projects..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={searchInputStyle}
        onFocus={(e) => (e.target.style.borderColor = "#5a4d9d")}
        onBlur={(e) => (e.target.style.borderColor = "#ccc")}
      />

      {filteredProjects.length === 0 ? (
        <div style={fallbackStyle}>
          <p>No projects match your search.</p>
          {projects.length === 0 && (
            <>
              <p>Looks like there are no projects yet!</p>
              <Link to="/admin" style={addButtonStyle}>
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
                e.currentTarget.style.transform = "scale(1.04)";
                e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.15)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
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
                  color: "#1e3c72",
                  fontSize: "1.4rem",
                  marginBottom: "10px",
                  fontWeight: "700",
                }}
              >
                {project.title}
              </h3>
              <p style={{ color: "#555", fontSize: "1rem", minHeight: "60px" }}>
                {project.shortDescription}
              </p>
              {project.pdfUrl && (
                <a
                  href={project.pdfUrl}
                  download={project.pdfName || "project.pdf"}
                  style={{
                    display: "inline-block",
                    marginTop: "8px",
                    fontSize: "0.85rem",
                    color: "#d93025",
                    textDecoration: "underline",
                    cursor: "pointer",
                    fontWeight: "600",
                  }}
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
