import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const primaryGreen = "#0dee33ff";
  const darkNavy = "#0a1624";
  const lightGray = "#f5f7fa";

  // Hover state for admin button
  const [adminHover, setAdminHover] = useState(false);

  const styles = {
    navbar: {
      backgroundColor: darkNavy,
      color: primaryGreen,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "1rem 3rem",
      position: "sticky",
      top: 0,
      zIndex: 1000,
      fontFamily: "'Montserrat', sans-serif",
      boxShadow: `0 2px 15px ${primaryGreen}44`,
      flexWrap: "wrap",
    },
    logo: {
      fontSize: "1.8rem",
      fontWeight: "700",
      textDecoration: "none",
      color: primaryGreen,
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
      userSelect: "none",
      letterSpacing: "1.5px",
    },
    navLinks: {
      display: "flex",
      gap: "2rem",
      flexWrap: "wrap",
      alignItems: "center",
    },
    link: {
      color: lightGray,
      textDecoration: "none",
      fontSize: "1.1rem",
      fontWeight: "500",
      padding: "8px 0",
      position: "relative",
      transition: "color 0.3s ease",
      userSelect: "none",
    },
    activeLink: {
      color: primaryGreen,
      borderBottom: `3px solid ${primaryGreen}`,
      fontWeight: "700",
    },
    adminLink: {
      backgroundColor: primaryGreen,
      color: darkNavy,
      padding: "8px 18px",
      borderRadius: "6px",
      textDecoration: "none",
      fontWeight: "700",
      boxShadow: `0 4px 12px ${primaryGreen}88`,
      transition: "background-color 0.3s ease, box-shadow 0.3s ease",
      userSelect: "none",
      ...(adminHover && {
        backgroundColor: "#0acc2fff",
        boxShadow: `0 6px 18px ${primaryGreen}cc`,
      }),
    },
  };

  // Custom link renderer
  const renderLink = (to, label, isAdmin = false) => {
    if (isAdmin) {
      return (
        <NavLink
          to={to}
          end
          style={styles.adminLink}
          onMouseEnter={() => setAdminHover(true)}
          onMouseLeave={() => setAdminHover(false)}
        >
          {label}
        </NavLink>
      );
    }

    return (
      <NavLink
        to={to}
        end
        style={({ isActive }) => ({
          ...styles.link,
          ...(isActive ? styles.activeLink : {}),
        })}
      >
        {label}
      </NavLink>
    );
  };

  return (
    <header style={styles.navbar}>
      <div>
        <NavLink to="/" style={styles.logo}>
          <span role="img" aria-label="Home">
            🏠
          </span>
          GREENTECH
        </NavLink>
      </div>
      <nav style={styles.navLinks}>
        {renderLink("/", "Home")}
        {renderLink("/projects", "Projects")}
        {renderLink("/contact", "Contact")}
        {renderLink("/about", "about")}
        {renderLink("/admin", "Admin", true)}

      </nav>
    </header>
  );
};

export default Navbar;
