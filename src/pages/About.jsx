import React from "react";

const About = () => {
  const primaryGreen = "#80b918";
  const darkBackground = "#0B2B24";
  const textLight = "#E6E6E6";
  const accentGray = "#A3B18A";
  const goldAccent = "#FFD700";
  const fontFamily = "'Montserrat', sans-serif";

  const sectionStyle = {
    width: "100%",
    padding: "80px 20px",
    textAlign: "center",
    fontFamily,
    backgroundColor: darkBackground,
    color: textLight,
  };

  const headingStyle = {
    fontSize: "3rem",
    fontWeight: "700",
    color: goldAccent,
    marginBottom: "30px",
    textShadow: "0 0 6px rgba(255, 215, 0, 0.7)",
  };

  const subHeadingStyle = {
    fontSize: "2rem",
    fontWeight: "700",
    color: primaryGreen,
    marginBottom: "20px",
    textShadow: "0 0 5px rgba(128, 185, 24, 0.6)",
  };

  const paragraphStyle = {
    maxWidth: "900px",
    margin: "0 auto",
    fontSize: "1.15rem",
    lineHeight: "1.8",
    color: accentGray,
    marginBottom: "40px",
    textAlign: "justify",
  };

  const cardContainer = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "30px",
    marginTop: "40px",
  };

  const card = {
    backgroundColor: "rgba(255, 255, 255, 0.07)",
    borderRadius: "16px",
    padding: "35px 30px",
    width: "300px",
    boxShadow: "0 6px 20px rgba(0, 0, 0, 0.3)",
    backdropFilter: "blur(8px)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    color: textLight,
    transition: "0.3s ease",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const iconWrapper = {
    fontSize: "2.8rem",
    marginBottom: "15px",
    color: primaryGreen,
  };

  const cardTitle = {
    fontSize: "1.3rem",
    fontWeight: "700",
    color: primaryGreen,
    marginBottom: "10px",
    textAlign: "center",
  };

  const cardDesc = {
    fontSize: "1rem",
    color: accentGray,
    textAlign: "center",
    lineHeight: "1.5",
  };

  const button = {
    marginTop: "40px",
    padding: "14px 40px",
    backgroundColor: primaryGreen,
    color: darkBackground,
    fontWeight: "700",
    border: "none",
    borderRadius: "12px",
    fontSize: "1.2rem",
    cursor: "pointer",
    boxShadow: `0 6px 18px ${primaryGreen}cc`,
  };

  return (
    <div style={{ backgroundColor: darkBackground, minHeight: "100vh" }}>
      {/* Hero Section */}
      <section style={{ ...sectionStyle, paddingTop: "140px" }}>
        <h1 style={headingStyle}>About GREENTECH</h1>
        <p style={paragraphStyle}>
          GREENTECH is a leading real estate development company with a passion for creating high-quality, eco-conscious residential spaces. 
          From modern apartments to approved residential layouts and turnkey buildings, we strive to deliver value-driven solutions built with trust and transparency.
        </p>
      </section>

      {/* Company Profile Section */}
      <section style={sectionStyle}>
        <h2 style={subHeadingStyle}>Company Profile</h2>
        <p style={paragraphStyle}>
          <strong>GREENTECH Developers</strong> is a professionally managed company established with the vision of delivering innovative and sustainable real estate projects across India.
          With a diverse leadership team comprising experts in civil engineering, law, agriculture, and software development, we bring a unique and holistic approach to real estate development.
          <br /><br />
          Our projects include premium residential layouts, well-crafted apartments, and eco-friendly buildings that combine modern design with functional space planning.
          We prioritize government approvals, legal compliance, and environment-friendly practices in all our developments.
          <br /><br />
          Whether you're a first-time buyer or an experienced investor, GREENTECH stands as a trusted partner offering complete transparency, customer support, and value for money.
        </p>
      </section>

      {/* Mission & Vision */}
      <section style={sectionStyle}>
        <h2 style={subHeadingStyle}>Our Mission</h2>
        <p style={paragraphStyle}>
          To design and develop quality living spaces that blend sustainability, innovation, and affordability — enhancing lifestyles and empowering communities.
        </p>

        <h2 style={subHeadingStyle}>Our Vision</h2>
        <p style={paragraphStyle}>
          To become one of India’s most trusted and environmentally responsible real estate companies — shaping cities, uplifting communities, and protecting nature.
        </p>
      </section>

      {/* Values */}
      <section style={sectionStyle}>
        <h2 style={subHeadingStyle}>Core Values</h2>
        <div style={cardContainer}>
          {[
            { icon: "🤝", title: "Integrity", desc: "We operate with full transparency and ethical responsibility." },
            { icon: "🌱", title: "Sustainability", desc: "Green building is not just a trend; it's our foundation." },
            { icon: "📋", title: "Transparency", desc: "We ensure clear documentation and government approvals." },
            { icon: "🏗️", title: "Quality", desc: "We never compromise on construction and material standards." },
          ].map(({ icon, title, desc }, i) => (
            <div key={i} style={card}>
              <div style={iconWrapper}>{icon}</div>
              <h3 style={cardTitle}>{title}</h3>
              <p style={cardDesc}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Meet the Directors */}
      <section style={sectionStyle}>
        <h2 style={subHeadingStyle}>Leadership Team</h2>
        <div style={cardContainer}>
          {[
            {
              icon: "💻",
              title: "Vinuth S",
              desc: "Software Engineer & Developer — Leads GREENTECH's digital innovation and smart solutions.",
            },
            {
              icon: "🌾",
              title: "Deepak TR",
              desc: "Agriculturist & Urban Krushika Founder — Pioneer of sustainable development and organic farming integration.",
            },
            {
              icon: "🏗️",
              title: "Prasana",
              desc: "Civil Engineer & Owner of SneahBuildCare — Oversees construction quality and structural excellence.",
            },
            {
              icon: "⚖️",
              title: "Ramesh",
              desc: "Advocate & Business Strategist — Guides all legal matters and drives GREENTECH's strategic growth.",
            },
          ].map(({ icon, title, desc }, i) => (
            <div key={i} style={card}>
              <div style={iconWrapper}>{icon}</div>
              <h3 style={cardTitle}>{title}</h3>
              <p style={cardDesc}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={sectionStyle}>
        <h2 style={subHeadingStyle}>Connect With GREENTECH</h2>
        <p style={paragraphStyle}>
          Looking for your dream property, investment opportunity, or sustainable home? Let’s build your future together.
        </p>
        <button
          style={button}
          onClick={() => (window.location.href = "/contact")}
        >
          Contact Us
        </button>
      </section>

      {/* Footer */}
      <footer
        style={{
          backgroundColor: "#081E12",
          padding: "25px",
          textAlign: "center",
          color: primaryGreen,
          fontSize: "1rem",
          letterSpacing: "1.2px",
          fontWeight: "600",
          boxShadow: `inset 0 1px 5px ${primaryGreen}44`,
          marginTop: "40px",
        }}
      >
        © {new Date().getFullYear()} GREENTECH. All rights reserved.
      </footer>
    </div>
  );
};

export default About;
