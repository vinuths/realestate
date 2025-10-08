import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditProject = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const storedProjects = JSON.parse(localStorage.getItem('projects')) || [];
    setProject(storedProjects[parseInt(id)]);
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProject(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    const storedProjects = JSON.parse(localStorage.getItem('projects')) || [];
    storedProjects[parseInt(id)] = project;
    localStorage.setItem('projects', JSON.stringify(storedProjects));
    navigate('/admin/projects');
  };

  if (!project) return <p>Loading...</p>;

  return (
    <div style={{ padding: '40px', maxWidth: '600px', margin: '0 auto' }}>
      {/* <h2>Edit Project</h2> */}
      <input
        type="text"
        name="title"
        value={project.title}
        onChange={handleChange}
        placeholder="Title"
        style={{ display: 'block', margin: '12px 0', width: '100%', padding: '10px' }}
      />
      <textarea
        name="shortDescription"
        value={project.shortDescription}
        onChange={handleChange}
        placeholder="Short Description"
        style={{ display: 'block', margin: '12px 0', width: '100%', padding: '10px' }}
        rows={5}
      />
      <input
        type="text"
        name="imageUrl"
        value={project.imageUrl}
        onChange={handleChange}
        placeholder="Image URL"
        style={{ display: 'block', margin: '12px 0', width: '100%', padding: '10px' }}
      />
      <input
        type="text"
        name="pdfUrl"
        value={project.pdfUrl}
        onChange={handleChange}
        placeholder="PDF URL"
        style={{ display: 'block', margin: '12px 0', width: '100%', padding: '10px' }}
      />
      <button
        onClick={handleSave}
        style={{
          padding: '10px 20px',
          backgroundColor: '#5a4d9d',
          color: '#fff',
          fontWeight: 'bold',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
        }}
      >
        Save Changes
      </button>
    </div>
  );
};

export default EditProject;
