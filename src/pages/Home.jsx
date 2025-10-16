import React from "react";
import SimpleSkylineAnimation from "./SimpleSkylineAnimation"; // Adjust path

const Home = () => {
  const primaryGreen = "#80b918";  // Softer, luxury olive green
  const darkBackground = "#0B2B24"; // Deep dark green-blue for luxe feel
  const cardBg = "rgba(255, 255, 255, 0.1)"; // translucent white cards for content
  const textLight = "#E6E6E6";  // Soft off-white text
  const accentGray = "#A3B18A"; // Soft muted green for secondary text
  const goldAccent = "#FFD700"; // Gold for highlights/buttons
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
    fontSize: "3.5rem",
    fontWeight: "700",
    marginBottom: "25px",
    color: goldAccent,
    letterSpacing: "1.2px",
    textShadow: "0 0 8px rgba(255, 215, 0, 0.7)",
  };

  const subHeadingStyle = {
    fontSize: "2.2rem",
    fontWeight: "700",
    marginBottom: "30px",
    color: primaryGreen,
    textShadow: "0 0 6px rgba(128, 185, 24, 0.7)",
  };

  const paragraphStyle = {
    maxWidth: "720px",
    margin: "0 auto 40px auto",
    fontSize: "1.15rem",
    lineHeight: "1.7",
    color: accentGray,
  };

  const cardContainer = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "30px",
    marginTop: "40px",
  };

  // Updated card styles:
  const card = {
    backgroundColor: cardBg,
    borderRadius: "16px",
    padding: "35px 30px",
    width: "320px",
    boxShadow: "0 8px 30px rgba(0, 0, 0, 0.25)",
    color: textLight,
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "default",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backdropFilter: "blur(12px)",
    border: "1px solid rgba(255, 255, 255, 0.12)",
    gap: "18px",
  };

  const cardHover = {
    transform: "translateY(-10px)",
    boxShadow: `0 22px 44px ${primaryGreen}bb`,
  };

  const iconWrapper = {
    width: "72px",
    height: "72px",
    borderRadius: "50%",
    backgroundColor: primaryGreen,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "2.8rem",
    color: darkBackground,
    boxShadow: `0 0 14px ${primaryGreen}cc`,
    marginBottom: "12px",
  };

  const cardTitle = {
    fontSize: "1.6rem",
    fontWeight: "700",
    color: primaryGreen,
    marginBottom: "8px",
    textAlign: "center",
  };

  const cardDesc = {
    fontSize: "1.1rem",
    color: accentGray,
    textAlign: "center",
    lineHeight: "1.5",
  };

  const button = {
    marginTop: "30px",
    padding: "14px 42px",
    backgroundColor: primaryGreen,
    color: darkBackground,
    fontWeight: "700",
    border: "none",
    borderRadius: "12px",
    cursor: "pointer",
    fontSize: "1.2rem",
    boxShadow: `0 6px 18px ${primaryGreen}cc`,
    transition: "background-color 0.3s ease, box-shadow 0.3s ease",
  };

  const buttonHover = {
    backgroundColor: goldAccent,
    color: darkBackground,
    boxShadow: `0 8px 25px ${goldAccent}dd`,
  };

  const IconPlaceholder = ({ children }) => (
    <div style={iconWrapper}>
      {children}
    </div>
  );

  return (
    <div style={{ backgroundColor: darkBackground, minHeight: "100vh" }}>
      {/* Hero Section */}
      <section style={{ ...sectionStyle, paddingTop: "140px", paddingBottom: "120px" }}>
        <h1 style={headingStyle}>Welcome to Singara Estate And Properties</h1>
         {/* <SimpleSkylineAnimation /> */}
        <p style={{ ...paragraphStyle, maxWidth: "600px", marginBottom: "40px" }}>
          We develop and sell <strong>high-quality residential layouts</strong>, <strong>apartments</strong>, and <strong>buildings</strong>. 
          Your trusted partner for premium properties designed with excellence and care.
        </p>
        <button
          style={button}
          onClick={() => (window.location.href = "/projects")}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = buttonHover.backgroundColor;
            e.currentTarget.style.color = buttonHover.color;
            e.currentTarget.style.boxShadow = buttonHover.boxShadow;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = button.backgroundColor;
            e.currentTarget.style.color = button.color;
            e.currentTarget.style.boxShadow = button.boxShadow;
          }}
        >
          Explore Our Properties
        </button>
      </section>

      {/* What We Offer */}
      <section style={sectionStyle}>
        <h2 style={subHeadingStyle}>What We Offer</h2>
        <div style={cardContainer}>
          {[
            {
              icon: "🏘️",
              title: "Residential Layouts",
              desc: "Strategically planned and approved layouts ready for sale.",
            },
            {
              icon: "🏢",
              title: "Apartments for Sale",
              desc: "Modern, eco-friendly apartments designed for comfortable living.",
            },
            {
              icon: "🏗️",
              title: "Completed Buildings",
              desc: "Premium buildings developed with quality materials and expert care.",
            },
          ].map(({ icon, title, desc }, i) => (
            <div
              key={i}
              style={card}
              onMouseEnter={(e) => Object.assign(e.currentTarget.style, cardHover)}
              onMouseLeave={(e) => Object.assign(e.currentTarget.style, card)}
            >
              <IconPlaceholder>{icon}</IconPlaceholder>
              <h3 style={cardTitle}>{title}</h3>
              <p style={cardDesc}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Properties */}
      <section style={sectionStyle}>
        <h2 style={subHeadingStyle}>Featured Properties</h2>
        <div style={cardContainer}>

          
          {[
            {
              icon: "🏢",
              title: "Sky Residency",
              desc: "Modern apartments located in the heart of the city, ready to move in.",
            },
            {
              icon: "🌄",
              title: "Green Valley Layout",
              desc: "Spacious residential layouts surrounded by nature and greenery.",
            },
            {
              icon: "🏞️",
              title: "Lakeview Apartments",
              desc: "Serene apartments with beautiful lakeside views for peaceful living.",
            },
          ].map(({ icon, title, desc }, i) => (
            <div
              key={i}
              style={card}
              onMouseEnter={(e) => Object.assign(e.currentTarget.style, cardHover)}
              onMouseLeave={(e) => Object.assign(e.currentTarget.style, card)}
            >
              <IconPlaceholder>{icon}</IconPlaceholder>
              <h3 style={cardTitle}>{title}</h3>
              <p style={cardDesc}>{desc}</p>
            </div>
          ))}
        </div>
        <button
          style={button}
          onClick={() => (window.location.href = "/projects")}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = buttonHover.backgroundColor;
            e.currentTarget.style.color = buttonHover.color;
            e.currentTarget.style.boxShadow = buttonHover.boxShadow;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = button.backgroundColor;
            e.currentTarget.style.color = button.color;
            e.currentTarget.style.boxShadow = button.boxShadow;
          }}
        >
          View All Properties
        </button>
      </section>

      {/* Why Buy From Us */}
      <section style={sectionStyle}>
        <h2 style={subHeadingStyle}>Why Buy From Us?</h2>
        <div style={cardContainer}>
          {[
            {
              icon: "🤝",
              title: "Trusted Developer",
              desc: "100+ happy families who bought directly from us.",
            },
            {
              icon: "📋",
              title: "Transparent Process",
              desc: "Clear documentation with no hidden fees.",
            },
            {
              icon: "🌱",
              title: "Sustainable Development",
              desc: "Eco-friendly and thoughtfully designed properties.",
            },
          ].map(({ icon, title, desc }, i) => (
            <div
              key={i}
              style={card}
              onMouseEnter={(e) => Object.assign(e.currentTarget.style, cardHover)}
              onMouseLeave={(e) => Object.assign(e.currentTarget.style, card)}
            >
              <IconPlaceholder>{icon}</IconPlaceholder>
              <h3 style={cardTitle}>{title}</h3>
              <p style={cardDesc}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Directors */}
      <section style={sectionStyle}>
        <h2 style={subHeadingStyle}>Meet Our Directors</h2>
        <div style={cardContainer}>
          {[
            
            {
              icon: "🌱",
              title: "Deepak TR",
              desc: "Agriculturist & Horticulturist — Founder of Urban Krushika, driving sustainable agriculture initiatives.",
              // photo: "https://randomuser.me/api/portraits/men/76.jpg",
            },
            {
              icon: "🏗️",
              title: "Prasana",
              desc: "Civil Engineer & Owner of SneahBuildCare — Expert in structural design and construction management.",
              // photo: "https://randomuser.me/api/portraits/women/65.jpg",
            },
            {
              icon: "⚖️",
              title: "Ramesh",
              desc: "Advocate & Business Strategist — Providing legal counsel and overseeing diverse business ventures.",
              // photo: "https://randomuser.me/api/portraits/men/77.jpg",
            },
            {
              icon: "💻",
              title: "Vinuth S",
              desc: "Software Engineer & Developer — Leading our tech innovations and digital solutions.",
              // photo: "https://randomuser.me/api/portraits/men/75.jpg",
            },
          ].map(({ icon, title, desc, photo }, i) => (
            <div
              key={i}
              style={card}
              onMouseEnter={(e) => Object.assign(e.currentTarget.style, cardHover)}
              onMouseLeave={(e) => Object.assign(e.currentTarget.style, card)}
            >
              {photo && (
                <img
                  src={photo}
                  alt={title}
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    marginBottom: "18px",
                    border: `3px solid ${primaryGreen}`,
                    boxShadow: `0 0 10px ${primaryGreen}aa`,
                  }}
                />
              )}
              <IconPlaceholder>{icon}</IconPlaceholder>
              <h3 style={cardTitle}>{title}</h3>
              <p style={cardDesc}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section style={sectionStyle}>
        <h2 style={subHeadingStyle}>Ready to Own Your Dream Property?</h2>
        <p style={{ ...paragraphStyle, marginBottom: "40px" }}>
          Contact us today to learn more about our available properties and layouts.
        </p>
        <button
     
     style={button}
          onClick={() => (window.location.href = "/contact")}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = buttonHover.backgroundColor;
            e.currentTarget.style.color = buttonHover.color;
            e.currentTarget.style.boxShadow = buttonHover.boxShadow;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = button.backgroundColor;
            e.currentTarget.style.color = button.color;
            e.currentTarget.style.boxShadow = button.boxShadow;
          }}
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
        © {new Date().getFullYear()} Singara Estate and properties. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
