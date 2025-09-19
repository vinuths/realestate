import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddProject = () => {
  const [title, setTitle] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [fullDescription, setFullDescription] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [pdfFile, setPdfFile] = useState(null);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    const errs = {};
    if (!title.trim()) errs.title = 'Project Title is required';
    if (!shortDescription.trim()) errs.shortDescription = 'Short description is required';
    if (!fullDescription.trim()) errs.fullDescription = 'Full description is required';
    if (!imageFile) errs.imageFile = 'Project image is required';
    // PDF optional, so no error
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleAdd = () => {
    if (!validate()) return;

    // Convert files to base64 (for demo, no backend)
    const readerImage = new FileReader();
    readerImage.onloadend = () => {
      const imageUrl = readerImage.result;

      const readerPdf = new FileReader();
      readerPdf.onloadend = () => {
        const pdfUrl = pdfFile ? readerPdf.result : null;

        const newProject = {
          title,
          shortDescription,
          fullDescription,
          imageUrl,
          pdfUrl,
          pdfName: pdfFile ? pdfFile.name : null,
        };

        const existing = JSON.parse(localStorage.getItem('projects')) || [];
        localStorage.setItem('projects', JSON.stringify([...existing, newProject]));
        navigate('/projects');
      };

      if (pdfFile) readerPdf.readAsDataURL(pdfFile);
      else {
        // If no PDF, just add project
        const newProject = {
          title,
          shortDescription,
          fullDescription,
          imageUrl,
          pdfUrl: null,
          pdfName: null,
        };
        const existing = JSON.parse(localStorage.getItem('projects')) || [];
        localStorage.setItem('projects', JSON.stringify([...existing, newProject]));
        navigate('/projects');
      }
    };

    readerImage.readAsDataURL(imageFile);
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
        boxSizing: 'border-box',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleAdd();
        }}
        style={{
          backgroundColor: '#fff',
          borderRadius: '12px',
          padding: '40px 35px',
          maxWidth: '600px',
          width: '100%',
          boxShadow: '0 8px 30px rgba(0, 0, 0, 0.12)',
          boxSizing: 'border-box',
        }}
        noValidate
      >
        <h2
          style={{
            color: '#5a4d9d',
            fontWeight: '700',
            fontSize: '2.4rem',
            marginBottom: '30px',
            letterSpacing: '1.2px',
            textAlign: 'center',
          }}
        >
          Add New Project
        </h2>

        {/* Title */}
        <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>
          Project Title <span style={{ color: '#d93025' }}>*</span>
        </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter project title"
          style={{
            width: '100%',
            padding: '14px 16px',
            borderRadius: '8px',
            border: errors.title ? '2px solid #d93025' : '1.8px solid #ccc',
            fontSize: '1rem',
            outline: 'none',
            marginBottom: errors.title ? '5px' : '20px',
            transition: 'border-color 0.3s',
            boxSizing: 'border-box',
          }}
          onFocus={(e) => (e.target.style.borderColor = '#5a4d9d')}
          onBlur={(e) => (e.target.style.borderColor = errors.title ? '#d93025' : '#ccc')}
        />
        {errors.title && (
          <small style={{ color: '#d93025', fontWeight: '600', marginBottom: '15px', display: 'block' }}>
            {errors.title}
          </small>
        )}

        {/* Short Description */}
        <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>
          Short Description <span style={{ color: '#d93025' }}>*</span>
        </label>
        <textarea
          value={shortDescription}
          onChange={(e) => setShortDescription(e.target.value)}
          placeholder="Brief summary of the project"
          rows={3}
          style={{
            width: '100%',
            padding: '14px 16px',
            borderRadius: '8px',
            border: errors.shortDescription ? '2px solid #d93025' : '1.8px solid #ccc',
            fontSize: '1rem',
            resize: 'vertical',
            outline: 'none',
            marginBottom: errors.shortDescription ? '5px' : '20px',
            transition: 'border-color 0.3s',
            boxSizing: 'border-box',
          }}
          onFocus={(e) => (e.target.style.borderColor = '#5a4d9d')}
          onBlur={(e) =>
            (e.target.style.borderColor = errors.shortDescription ? '#d93025' : '#ccc')
          }
        />
        {errors.shortDescription && (
          <small style={{ color: '#d93025', fontWeight: '600', marginBottom: '15px', display: 'block' }}>
            {errors.shortDescription}
          </small>
        )}

        {/* Full Description */}
        <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>
          Full Description <span style={{ color: '#d93025' }}>*</span>
        </label>
        <textarea
          value={fullDescription}
          onChange={(e) => setFullDescription(e.target.value)}
          placeholder="Detailed description of the project"
          rows={6}
          style={{
            width: '100%',
            padding: '14px 16px',
            borderRadius: '8px',
            border: errors.fullDescription ? '2px solid #d93025' : '1.8px solid #ccc',
            fontSize: '1rem',
            resize: 'vertical',
            outline: 'none',
            marginBottom: errors.fullDescription ? '5px' : '20px',
            transition: 'border-color 0.3s',
            boxSizing: 'border-box',
          }}
          onFocus={(e) => (e.target.style.borderColor = '#5a4d9d')}
          onBlur={(e) => (e.target.style.borderColor = errors.fullDescription ? '#d93025' : '#ccc')}
        />
        {errors.fullDescription && (
          <small style={{ color: '#d93025', fontWeight: '600', marginBottom: '15px', display: 'block' }}>
            {errors.fullDescription}
          </small>
        )}

        {/* Image Upload */}
        <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>
          Project Image <span style={{ color: '#d93025' }}>*</span>
        </label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImageFile(e.target.files[0])}
          style={{ marginBottom: errors.imageFile ? '5px' : '20px', cursor: 'pointer' }}
        />
        {errors.imageFile && (
          <small style={{ color: '#d93025', fontWeight: '600', marginBottom: '15px', display: 'block' }}>
            {errors.imageFile}
          </small>
        )}
        {imageFile && (
          <div
            style={{
              marginBottom: '20px',
              textAlign: 'center',
            }}
          >
            <img
              src={URL.createObjectURL(imageFile)}
              alt="Preview"
              style={{ maxWidth: '100%', maxHeight: '200px', borderRadius: '8px' }}
            />
          </div>
        )}

        {/* PDF Upload */}
        <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>
          Project PDF (Optional)
        </label>
        <input
          type="file"
          accept="application/pdf"
          onChange={(e) => setPdfFile(e.target.files[0])}
          style={{ marginBottom: '20px', cursor: 'pointer' }}
        />
        {pdfFile && (
          <div
            style={{
              marginBottom: '20px',
              fontSize: '0.9rem',
              color: '#444',
              fontWeight: '600',
              textAlign: 'center',
            }}
          >
            Selected PDF: <span style={{ fontStyle: 'italic' }}>{pdfFile.name}</span>
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          style={{
            width: '100%',
            padding: '16px',
            backgroundColor: '#5a4d9d',
            color: '#fff',
            fontSize: '1.2rem',
            fontWeight: '700',
            borderRadius: '8px',
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(90, 77, 157, 0.6)',
            transition: 'background-color 0.3s ease',
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = '#483d8b')}
          onMouseLeave={(e) => (e.target.style.backgroundColor = '#5a4d9d')}
        >
          Add Project
        </button>
      </form>
    </div>
  );
};

export default AddProject;
