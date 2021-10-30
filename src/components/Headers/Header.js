import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const headerStyle = {
    backgroundColor: "#d7e7ff",
  };

  const buttonStyle = {
    textDcoration: "none",
    backgroundColor: "transparent",
    border: "1px solid black",
    borderRadius: "10px",
    fontWeight: "600",
    padding: "4px 12px",
  };
  return (
    <div style={headerStyle}>
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <Link className="logo" to="/home">
            Travel Pro
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <div className="ms-auto nav-links">
              <Link className="nav-link me-4" to="/about">
                About
              </Link>
              <Link className="nav-link me-4" to="/book">
                Hotels
              </Link>
              <Link className="nav-link me-4" to="/register">
                Login / Registration
              </Link>
              <Link className="nav-link">
                Promise{" "}
                <button style={buttonStyle} className="nav-button ms-2 regular">
                  Logout
                </button>
              </Link>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
