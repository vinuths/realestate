import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const ProjectDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const storedProjects = JSON.parse(localStorage.getItem('projects')) || [];
    setProject(storedProjects[id]);
  }, [id]);

  if (!project) {
    return (
      <div style={{ padding: '60px 20px', textAlign: 'center', fontFamily: 'Segoe UI' }}>
        <h2>Loading...</h2>
        <p>Please wait while we load the project details.</p>
      </div>
    );
  }

  return (
    <div
      style={{
        padding: '60px 20px',
        maxWidth: '1000px',
        margin: '0 auto',
        fontFamily: 'Segoe UI, sans-serif',
        lineHeight: 1.6,
      }}
    >
      <Link
        to="/projects"
        style={{
          textDecoration: 'none',
          color: '#1e3c72',
          fontWeight: 'bold',
          display: 'inline-block',
          marginBottom: '20px',
        }}
      >
        ← Back to Projects
      </Link>

      <h2 style={{ fontSize: '2.5rem', color: '#1e3c72', marginBottom: '20px' }}>
        {project.title}
      </h2>

      {project.imageUrl && (
        <img
          src={project.imageUrl}
          alt={project.title}
          style={{
            width: '100%',
            maxHeight: '450px',
            objectFit: 'cover',
            borderRadius: '10px',
            marginBottom: '30px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          }}
        />
      )}

      <p style={{ fontSize: '1.1rem', color: '#444' }}>
        {project.fullDescription || 'No detailed description provided.'}
      </p>

      {project.location && (
        <p style={{ marginTop: '10px', color: '#666' }}>
          📍 <strong>Location:</strong> {project.location}
        </p>
      )}

      {project.date && (
        <p style={{ marginTop: '5px', color: '#666' }}>
          🗓️ <strong>Launch Date:</strong> {project.date}
        </p>
      )}
    </div>
  );
};

export default ProjectDetail;
