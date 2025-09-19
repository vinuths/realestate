import React from "react";

const Home = () => {
  const sectionStyle = {
    width: "100%",
    padding: "60px 20px",
    textAlign: "center",
    fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
    backgroundColor: "#f9f9f9",
    color: "#333",
  };

  const headingStyle = {
    fontSize: "2.5rem",
    marginBottom: "20px",
    fontWeight: "700",
    color: "#222",
  };

  const paragraphStyle = {
    fontSize: "1.1rem",
    maxWidth: "800px",
    margin: "0 auto",
    lineHeight: "1.6",
    color: "#444",
  };

  const cardContainer = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "20px",
    marginTop: "30px",
  };

  const card = {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    width: "250px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    color: "#333",
    transition: "transform 0.3s ease",
    cursor: "default",
  };

  const button = {
    marginTop: "20px",
    padding: "12px 24px",
    backgroundColor: "#0077b6", // calm blue
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  };

  return (
    <div style={{ backgroundColor: "#f1f3f5" }}>
      {/* Hero Section */}
      <section style={{ ...sectionStyle, paddingTop: "100px" }}>
        <h1 style={{ ...headingStyle, fontSize: "3rem" }}>Welcome to RealtyCorp</h1>
        <p style={paragraphStyle}>
          Experts in <strong>building construction</strong>, <strong>layout development</strong>, and{" "}
          <strong>farmland apartments</strong>. Bringing your dream property to life with trust and quality.
        </p>
        <button
          style={button}
          onClick={() => (window.location.href = "/projects")}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#005f86")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#0077b6")}
        >
          Explore Projects
        </button>
      </section>

      {/* Services */}
      <section style={sectionStyle}>
        <h2 style={headingStyle}>Our Services</h2>
        <div style={cardContainer}>
          <div style={card}>
            <h3>Building Construction</h3>
            <p>We construct modern, durable residential and commercial buildings.</p>
          </div>
          <div style={card}>
            <h3>Layout Development</h3>
            <p>We plan and develop well-designed residential layouts for sale.</p>
          </div>
          <div style={card}>
            <h3>Farmland Apartments</h3>
            <p>Unique living spaces surrounded by nature in curated farmland locations.</p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section style={sectionStyle}>
        <h2 style={headingStyle}>Featured Projects</h2>
        <div style={cardContainer}>
          <div style={card}>
            <h3>Sky Residency</h3>
            <p>Modern apartments in the heart of the city.</p>
          </div>
          <div style={card}>
            <h3>Green Valley</h3>
            <p>Eco-living layout development near hills and farms.</p>
          </div>
          <div style={card}>
            <h3>Lakeview Farms</h3>
            <p>Farmland apartments with serene lakeside views.</p>
          </div>
        </div>
        <button
          style={button}
          onClick={() => (window.location.href = "/projects")}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#005f86")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#0077b6")}
        >
          View All Projects
        </button>
      </section>

      {/* Why Choose Us */}
      <section style={sectionStyle}>
        <h2 style={headingStyle}>Why Choose Us?</h2>
        <div style={cardContainer}>
          <div style={card}>
            <h3>Trusted by Hundreds</h3>
            <p>We’ve helped 100+ families find their dream properties.</p>
          </div>
          <div style={card}>
            <h3>4 Experienced Directors</h3>
            <p>Led by 4 visionaries with years of industry expertise.</p>
          </div>
          <div style={card}>
            <h3>Quality & Transparency</h3>
            <p>No hidden charges. Clear documentation. Always reliable.</p>
          </div>
        </div>
      </section>

      {/* Our Directors */}
      <section style={sectionStyle}>
        <h2 style={headingStyle}>Meet Our Directors</h2>
        <div style={cardContainer}>
          <div style={card}>
            <h3>Director 1</h3>
            <p>Construction & Planning</p>
          </div>
          <div style={card}>
            <h3>Director 2</h3>
            <p>Layouts & Approvals</p>
          </div>
          <div style={card}>
            <h3>Director 3</h3>
            <p>Sales & Customer Relations</p>
          </div>
          <div style={card}>
            <h3>Director 4</h3>
            <p>Farmland Development</p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section style={sectionStyle}>
        <h2 style={headingStyle}>Ready to Build Your Future?</h2>
        <p style={paragraphStyle}>We’re just a message away. Let’s get started today!</p>
        <button
          style={button}
          onClick={() => (window.location.href = "/contact")}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#005f86")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#0077b6")}
        >
          Contact Us
        </button>
      </section>

      {/* Footer */}
      <footer
        style={{
          backgroundColor: "#222",
          padding: "20px",
          textAlign: "center",
          color: "#aaa",
          fontSize: "0.9rem",
          marginTop: "40px",
        }}
      >
        © {new Date().getFullYear()} RealtyCorp. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
