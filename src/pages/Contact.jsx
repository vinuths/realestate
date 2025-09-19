import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = "Email is invalid";
    if (!form.message.trim()) errs.message = "Message is required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    // Here you can add your form submission logic (API call etc)
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
    setErrors({});
  };

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "50px auto",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        padding: "0 20px",
      }}
    >
      <h2 style={{ textAlign: "center", color: "#1e3c72", marginBottom: "30px" }}>
        Contact Us
      </h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "40px",
          justifyContent: "center",
        }}
      >
        {/* Contact Info */}
        <div style={{ flex: "1 1 300px", minWidth: "280px" }}>
          <h3 style={{ marginBottom: "15px", color: "#5a4d9d" }}>Get in Touch</h3>
          <p style={{ fontSize: "1rem", color: "#555", marginBottom: "10px" }}>
            <strong>Email:</strong>{" "}
            <a href="mailto:info@yourcompany.com" style={{ color: "#1e3c72", textDecoration: "none" }}>
              info@yourcompany.com
            </a>
          </p>
          <p style={{ fontSize: "1rem", color: "#555", marginBottom: "10px" }}>
            <strong>Phone:</strong>{" "}
            <a href="tel:+911234567890" style={{ color: "#1e3c72", textDecoration: "none" }}>
              +91 12345 67890
            </a>
          </p>
          <p style={{ fontSize: "1rem", color: "#555" }}>
            <strong>Address:</strong> 123, Business Street, City, State, Country
          </p>

          <div style={{ marginTop: "25px" }}>
            <h4 style={{ color: "#5a4d9d", marginBottom: "10px" }}>Follow Us</h4>
            <div style={{ display: "flex", gap: "15px", fontSize: "1.5rem" }}>
              <a
                href="https://facebook.com/yourcompany"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#3b5998" }}
                aria-label="Facebook"
              >
                <i className="fab fa-facebook"></i> {/* You can use FontAwesome or replace with SVG */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#3b5998"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path d="M22.675 0h-21.35C.59 0 0 .59 0 1.317v21.367C0 23.409.59 24 1.325 24h11.494v-9.294H9.692v-3.622h3.127V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.466.099 2.799.143v3.24l-1.922.001c-1.505 0-1.796.716-1.796 1.766v2.317h3.59l-.467 3.623h-3.123V24h6.116C23.41 24 24 23.41 24 22.683V1.317C24 .59 23.41 0 22.675 0z" />
                </svg>
              </a>
              <a
                href="https://twitter.com/yourcompany"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#1DA1F2" }}
                aria-label="Twitter"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#1DA1F2"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path d="M24 4.557a9.83 9.83 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724 9.865 9.865 0 0 1-3.127 1.195 4.917 4.917 0 0 0-8.379 4.482A13.949 13.949 0 0 1 1.671 3.149 4.917 4.917 0 0 0 3.195 9.86a4.9 4.9 0 0 1-2.228-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 0 1-2.224.085 4.919 4.919 0 0 0 4.59 3.417 9.867 9.867 0 0 1-6.102 2.103c-.396 0-.787-.023-1.175-.068a13.945 13.945 0 0 0 7.548 2.212c9.057 0 14.01-7.507 14.01-14.01 0-.213-.004-.425-.014-.636A10.012 10.012 0 0 0 24 4.557z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/company/yourcompany"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#0077B5" }}
                aria-label="LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#0077B5"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.849-3.037-1.85 0-2.132 1.445-2.132 2.939v5.667H9.361V9h3.414v1.561h.048c.476-.9 1.637-1.849 3.368-1.849 3.6 0 4.268 2.368 4.268 5.455v6.285zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zm1.777 13.019H3.56V9h3.554v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.726v20.548C0 23.224.792 24 1.771 24h20.451C23.206 24 24 23.224 24 22.274V1.726C24 .774 23.206 0 22.225 0z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          style={{
            flex: "1 1 400px",
            minWidth: "320px",
            background: "#fff",
            padding: "30px",
            borderRadius: "12px",
            boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
            display: "flex",
            flexDirection: "column",
          }}
          noValidate
        >
          <h3 style={{ marginBottom: "20px", color: "#5a4d9d" }}>Send a Message</h3>

          <label htmlFor="name" style={{ marginBottom: "6px", fontWeight: "600" }}>
            Name*
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            style={{
              padding: "10px 14px",
              marginBottom: errors.name ? "5px" : "20px",
              borderRadius: "8px",
              border: errors.name ? "2px solid #d93025" : "1.8px solid #ccc",
              outline: "none",
              fontSize: "1rem",
              transition: "border-color 0.3s ease",
            }}
            aria-invalid={!!errors.name}
            aria-describedby="name-error"
          />
          {errors.name && (
            <span
              id="name-error"
              style={{ color: "#d93025", fontSize: "0.85rem", marginBottom: "15px" }}
              role="alert"
            >
              {errors.name}
            </span>
          )}

          <label htmlFor="email" style={{ marginBottom: "6px", fontWeight: "600" }}>
            Email*
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            style={{
              padding: "10px 14px",
              marginBottom: errors.email ? "5px" : "20px",
              borderRadius: "8px",
              border: errors.email ? "2px solid #d93025" : "1.8px solid #ccc",
              outline: "none",
              fontSize: "1rem",
              transition: "border-color 0.3s ease",
            }}
            aria-invalid={!!errors.email}
            aria-describedby="email-error"
          />
          {errors.email && (
            <span
              id="email-error"
              style={{ color: "#d93025", fontSize: "0.85rem", marginBottom: "15px" }}
              role="alert"
            >
              {errors.email}
            </span>
          )}

          <label htmlFor="message" style={{ marginBottom: "6px", fontWeight: "600" }}>
            Message*
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={form.message}
            onChange={handleChange}
            style={{
              padding: "10px 14px",
              marginBottom: errors.message ? "5px" : "20px",
              borderRadius: "8px",
              border: errors.message ? "2px solid #d93025" : "1.8px solid #ccc",
              outline: "none",
              fontSize: "1rem",
              resize: "vertical",
              transition: "border-color 0.3s ease",
            }}
            aria-invalid={!!errors.message}
            aria-describedby="message-error"
          />
          {errors.message && (
            <span
              id="message-error"
              style={{ color: "#d93025", fontSize: "0.85rem", marginBottom: "15px" }}
              role="alert"
            >
              {errors.message}
            </span>
          )}

          <button
            type="submit"
            style={{
              padding: "14px",
              backgroundColor: "#5a4d9d",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              fontSize: "1.1rem",
              fontWeight: "600",
              cursor: "pointer",
              boxShadow: "0 5px 15px rgba(90, 77, 157, 0.6)",
              transition: "background-color 0.3s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#483d8b")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#5a4d9d")}
          >
            Send Message
          </button>

          {submitted && (
            <p
              style={{
                marginTop: "20px",
                color: "#1e8536",
                fontWeight: "600",
                fontSize: "1rem",
                textAlign: "center",
              }}
              role="alert"
            >
              Thank you for reaching out! We will get back to you soon.
            </p>
          )}
        </form>
      </div>

      {/* Embedded Google Map */}
      <div
        style={{
          marginTop: "50px",
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
          maxWidth: "900px",
          marginLeft: "auto",
          marginRight: "auto",
          height: "350px",
        }}
      >
        <iframe
          title="Company Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019525027545!2d-122.42177808468115!3d37.77928057975832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808cc9c548ad%3A0x7ec3b3d8ab6bcae9!2sTwitter%20HQ!5e0!3m2!1sen!2sus!4v1682000000000!5m2!1sen!2sus"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
};

export default Contact;
