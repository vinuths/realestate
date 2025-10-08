import React, { useState, useEffect } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const primaryGreen = "#80b918";
  const darkBackground = "#0B2B24";
  const textLight = "#E6E6E6";
  const cardBg = "#102C28";
  const accentRed = "#d93025";
  const inputBg = "#1D3C35";
  const fontFamily = "'Montserrat', sans-serif";

  // Validation function
  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = "Email is invalid";
    if (!form.message.trim()) errs.message = "Message is required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  // Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);

    // Simulate async API submission
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
      setForm({ name: "", email: "", message: "" });
      setErrors({});
    }, 1500);
  };

  // Auto-hide success message after 5 seconds
  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => setSubmitted(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [submitted]);

  // Clear form handler
  const clearForm = () => {
    setForm({ name: "", email: "", message: "" });
    setErrors({});
    setSubmitted(false);
  };

  return (
    <div
      style={{
        backgroundColor: darkBackground,
        color: textLight,
        minHeight: "100vh",
        padding: "60px 20px",
        fontFamily,
      }}
    >
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <h2
          style={{
            textAlign: "center",
            color: primaryGreen,
            fontSize: "2.8rem",
            marginBottom: "50px",
          }}
        >
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
          {/* Info Section */}
          <section
            aria-label="Contact Information"
            style={{ flex: "1 1 300px", minWidth: "280px" }}
          >
            <h3 style={{ marginBottom: "20px", color: primaryGreen }}>
              Get in Touch
            </h3>
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:info@yourcompany.com" style={{ color: "#C4FCEF" }}>
                info@yourcompany.com
              </a>
            </p>
            <p>
              <strong>Phone:</strong>{" "}
              <a href="tel:+911234567890" style={{ color: "#C4FCEF" }}>
                +91 12345 67890
              </a>
            </p>
            <p>
              <strong>Address:</strong>
              <br />
              123, Business Street, City, State, Country
            </p>

            <div style={{ marginTop: "25px" }}>
              <h4 style={{ color: primaryGreen, marginBottom: "10px" }}>
                Follow Us
              </h4>
              <div
                style={{
                  display: "flex",
                  gap: "15px",
                  fontSize: "1.5rem",
                }}
              >
                {/* Facebook */}
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  style={{ color: "#3b5998", transition: "color 0.3s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = primaryGreen)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#3b5998")}
                >
                  <svg
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M22.675 0h-21.35C.59 0 0 .59 0 1.317v21.367C0 23.409.59 24 1.325 24h11.494v-9.294H9.692v-3.622h3.127V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.466.099 2.799.143v3.24h-1.922c-1.505 0-1.796.716-1.796 1.766v2.317h3.59l-.467 3.623h-3.123V24h6.116C23.41 24 24 23.41 24 22.683V1.317C24 .59 23.41 0 22.675 0z" />
                  </svg>
                </a>

                {/* Twitter */}
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  style={{ color: "#1DA1F2", transition: "color 0.3s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = primaryGreen)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#1DA1F2")}
                >
                  <svg
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M23.954 4.569c-.885.392-1.83.656-2.825.775 1.014-.609 1.794-1.574 2.163-2.724-.95.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124-4.09-.205-7.719-2.165-10.148-5.144-.425.722-.666 1.561-.666 2.475 0 1.708.87 3.215 2.188 4.099-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.112-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.376 4.604 3.415-1.68 1.319-3.808 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.179 1.396 4.768 2.209 7.557 2.209 9.054 0 14-7.496 14-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  style={{ color: "#0077B5", transition: "color 0.3s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = primaryGreen)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#0077B5")}
                >
                  <svg
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.5 1 4.98 2.12 4.98 3.5zM.2 8.2H4.8V24H.2zM9.3 8.2h4.4v2.3h.1c.6-1.1 2-2.3 4.1-2.3 4.4 0 5.2 2.9 5.2 6.6V24h-4.6v-7.1c0-1.7-.1-3.9-2.3-3.9-2.3 0-2.6 1.7-2.6 3.8V24H9.3z" />
                  </svg>
                </a>
              </div>
            </div>
          </section>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            style={{
              flex: "1 1 400px",
              minWidth: "320px",
              background: cardBg,
              padding: "30px",
              borderRadius: "12px",
              boxShadow: `0 8px 24px ${primaryGreen}33`,
              display: "flex",
              flexDirection: "column",
            }}
            noValidate
            aria-label="Contact form"
          >
            <h3 style={{ color: primaryGreen, marginBottom: "20px" }}>
              Send a Message
            </h3>

            {/* Name */}
            <label htmlFor="name">Name*</label>
            <input
              type="text"
              name="name"
              id="name"
              value={form.name}
              onChange={handleChange}
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "name-error" : undefined}
              placeholder="Your Name"
              style={{
                backgroundColor: inputBg,
                color: textLight,
                padding: "10px",
                border: errors.name
                  ? `2px solid ${accentRed}`
                  : "1.5px solid #555",
                borderRadius: "8px",
                marginBottom: errors.name ? "6px" : "20px",
                transition: "border-color 0.3s",
              }}
              onFocus={(e) =>
                (e.currentTarget.style.borderColor = primaryGreen)
              }
              onBlur={(e) =>
                (e.currentTarget.style.borderColor = errors.name
                  ? accentRed
                  : "#555")
              }
            />
            {errors.name && (
              <span
                id="name-error"
                style={{
                  color: accentRed,
                  fontSize: "0.85rem",
                  marginBottom: "15px",
                }}
                role="alert"
              >
                {errors.name}
              </span>
            )}

            {/* Email */}
            <label htmlFor="email">Email*</label>
            <input
              type="email"
              name="email"
              id="email"
              value={form.email}
              onChange={handleChange}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
              placeholder="you@example.com"
              style={{
                backgroundColor: inputBg,
                color: textLight,
                padding: "10px",
                border: errors.email
                  ? `2px solid ${accentRed}`
                  : "1.5px solid #555",
                borderRadius: "8px",
                marginBottom: errors.email ? "6px" : "20px",
                transition: "border-color 0.3s",
              }}
              onFocus={(e) =>
                (e.currentTarget.style.borderColor = primaryGreen)
              }
              onBlur={(e) =>
                (e.currentTarget.style.borderColor = errors.email
                  ? accentRed
                  : "#555")
              }
            />
            {errors.email && (
              <span
                id="email-error"
                style={{
                  color: accentRed,
                  fontSize: "0.85rem",
                  marginBottom: "15px",
                }}
                role="alert"
              >
                {errors.email}
              </span>
            )}

            {/* Message */}
            <label htmlFor="message">Message*</label>
            <textarea
              name="message"
              id="message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "message-error" : undefined}
              placeholder="Your message..."
              style={{
                backgroundColor: inputBg,
                color: textLight,
                padding: "10px",
                border: errors.message
                  ? `2px solid ${accentRed}`
                  : "1.5px solid #555",
                borderRadius: "8px",
                marginBottom: errors.message ? "6px" : "20px",
                resize: "vertical",
                transition: "border-color 0.3s",
              }}
              onFocus={(e) =>
                (e.currentTarget.style.borderColor = primaryGreen)
              }
              onBlur={(e) =>
                (e.currentTarget.style.borderColor = errors.message
                  ? accentRed
                  : "#555")
              }
            />
            {errors.message && (
              <span
                id="message-error"
                style={{
                  color: accentRed,
                  fontSize: "0.85rem",
                  marginBottom: "15px",
                }}
                role="alert"
              >
                {errors.message}
              </span>
            )}

            <div style={{ display: "flex", gap: "15px", marginTop: "10px" }}>
              <button
                type="submit"
                disabled={loading}
                style={{
                  backgroundColor: primaryGreen,
                  color: darkBackground,
                  padding: "14px",
                  fontWeight: "bold",
                  border: "none",
                  borderRadius: "8px",
                  cursor: loading ? "not-allowed" : "pointer",
                  fontSize: "1.1rem",
                  flex: 1,
                  transition: "background-color 0.3s",
                }}
                onMouseEnter={(e) =>
                  !loading && (e.currentTarget.style.backgroundColor = "#6fae15")
                }
                onMouseLeave={(e) =>
                  !loading && (e.currentTarget.style.backgroundColor = primaryGreen)
                }
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
              <button
                type="button"
                onClick={clearForm}
                disabled={loading}
                style={{
                  backgroundColor: "#555",
                  color: textLight,
                  padding: "14px",
                  fontWeight: "bold",
                  border: "none",
                  borderRadius: "8px",
                  cursor: loading ? "not-allowed" : "pointer",
                  fontSize: "1.1rem",
                  flex: 1,
                  transition: "background-color 0.3s",
                }}
                onMouseEnter={(e) =>
                  !loading && (e.currentTarget.style.backgroundColor = "#333")
                }
                onMouseLeave={(e) =>
                  !loading && (e.currentTarget.style.backgroundColor = "#555")
                }
                aria-label="Clear form"
              >
                Clear
              </button>
            </div>

            {submitted && (
              <p
                style={{
                  color: "#1e8536",
                  marginTop: "20px",
                  fontWeight: "600",
                  textAlign: "center",
                }}
                role="alert"
                aria-live="polite"
              >
                Thank you for contacting us! We will get back to you soon.
              </p>
            )}
          </form>
        </div>

        {/* Google Map */}
        <div
          style={{
            marginTop: "60px",
            borderRadius: "12px",
            overflow: "hidden",
            boxShadow: `0 8px 24px ${primaryGreen}33`,
            height: "350px",
          }}
          aria-label="Company location on map"
        >
          <iframe
            title="Company Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019525027545!2d-122.42177808468115!3d37.77928057975832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808cc9c548ad%3A0x7ec3b3d8ab6bcae9!2sTwitter%20HQ!5e0!3m2!1sen!2sus!4v1682000000000!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/911234567890" // Replace with your WhatsApp number in international format
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        style={{
          position: "fixed",
          bottom: "25px",
          right: "25px",
          backgroundColor: "#25D366",
          color: "#fff",
          borderRadius: "50%",
          width: "60px",
          height: "60px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
          fontSize: "28px",
          textDecoration: "none",
          zIndex: 1000,
          transition: "background-color 0.3s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#1ebe57")}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#25D366")}
      >
        <svg
          fill="currentColor"
          viewBox="0 0 24 24"
          width="28"
          height="28"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d="M20.52 3.48A11.952 11.952 0 0012 0C5.373 0 0 5.373 0 12c0 2.11.559 4.089 1.528 5.798L0 24l6.418-1.496A11.922 11.922 0 0012 24c6.627 0 12-5.373 12-12 0-3.202-1.243-6.204-3.48-8.52zm-8.5 17.086c-1.747 0-3.455-.52-4.93-1.49l-.352-.208-3.81.887.9-3.718-.233-.374a9.356 9.356 0 01-1.436-5.268c0-5.156 4.189-9.344 9.345-9.344 2.494 0 4.837.972 6.602 2.74a9.315 9.315 0 012.732 6.61c0 5.155-4.19 9.344-9.345 9.344zm5.125-6.646c-.278-.14-1.644-.81-1.898-.903-.255-.093-.44-.14-.626.14-.185.28-.715.903-.877 1.088-.16.186-.32.209-.595.07-.278-.139-1.173-.433-2.235-1.38-.826-.736-1.382-1.646-1.547-1.926-.162-.28-.017-.431.123-.57.127-.127.278-.328.42-.492.14-.16.185-.278.278-.463.092-.185.046-.347-.023-.487-.07-.14-.625-1.51-.854-2.073-.224-.54-.452-.467-.626-.476-.16-.008-.347-.01-.53-.01-.18 0-.48.068-.73.347-.255.28-.972.95-.972 2.316 0 1.367.995 2.69 1.135 2.877.14.186 1.96 2.99 4.75 4.193.665.287 1.183.458 1.586.588.666.213 1.27.183 1.75.111.534-.082 1.644-.672 1.877-1.322.232-.65.232-1.206.162-1.322-.07-.116-.255-.186-.534-.326z" />
        </svg>
      </a>
    </div>
  );
};

export default Contact;
