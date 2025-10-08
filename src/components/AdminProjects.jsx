import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminProjects = () => {
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("projects")) || [];
    setProjects(stored);
  }, []);

  const deleteProject = (index) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this project?");
    if (!confirmDelete) return;

    const updated = [...projects];
    updated.splice(index, 1);
    setProjects(updated);
    localStorage.setItem("projects", JSON.stringify(updated));
  };

  const editProject = (index) => {
    navigate(`/admin/edit/${index}`);
  };

  const containerStyle = {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    padding: "60px 20px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: "#fff",
  };

  const titleStyle = {
    textAlign: "center",
    fontSize: "2.5rem",
    marginBottom: "40px",
    fontWeight: "700",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "24px",
    maxWidth: "1200px",
    margin: "0 auto",
  };

  const cardStyle = {
    backgroundColor: "#fff",
    color: "#333",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "column",
  };

  const imgStyle = {
    width: "100%",
    height: "180px",
    objectFit: "cover",
    borderRadius: "8px",
    marginBottom: "12px",
  };

  const titleText = {
    fontSize: "1.4rem",
    fontWeight: "700",
    color: "#5a4d9d",
    marginBottom: "10px",
  };

  const descText = {
    fontSize: "1rem",
    color: "#555",
    marginBottom: "12px",
  };

  const buttonGroup = {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "auto",
  };

  const btn = {
    flex: "1",
    margin: "4px",
    padding: "10px",
    border: "none",
    borderRadius: "6px",
    fontWeight: "600",
    fontSize: "0.9rem",
    cursor: "pointer",
    transition: "background-color 0.3s",
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Manage Projects</h2>

      {projects.length === 0 ? (
        <p style={{ textAlign: "center", fontSize: "1.2rem" }}>
          No projects found.
        </p>
      ) : (
        <div style={gridStyle}>
          {projects.map((project, index) => (
            <div key={index} style={cardStyle}>
              {project.imageUrl && (
                <img src={project.imageUrl} alt={project.title} style={imgStyle} />
              )}
              <h3 style={titleText}>{project.title}</h3>
              <p style={descText}>{project.shortDescription}</p>

              {project.pdfUrl && (
                <a
                  href={project.pdfUrl}
                  download={project.pdfName || "project.pdf"}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: "0.9rem",
                    color: "#d93025",
                    textDecoration: "underline",
                    fontWeight: "600",
                    marginBottom: "10px",
                  }}
                >
                  📄 Download PDF
                </a>
              )}

              <div style={buttonGroup}>
                <button
                  style={{
                    ...btn,
                    backgroundColor: "#ffc107",
                    color: "#333",
                  }}
                  onClick={() => editProject(index)}
                  onMouseOver={e => e.target.style.backgroundColor = "#e0a800"}
                  onMouseOut={e => e.target.style.backgroundColor = "#ffc107"}
                >
                  {/* ✏️ Edit */}
                </button>

                <button
                  style={{
                    ...btn,
                    backgroundColor: "#dc3545",
                    color: "#fff",
                  }}
                  onClick={() => deleteProject(index)}
                  onMouseOver={e => e.target.style.backgroundColor = "#c82333"}
                  onMouseOut={e => e.target.style.backgroundColor = "#dc3545"}
                >
                  🗑️ Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminProjects;
