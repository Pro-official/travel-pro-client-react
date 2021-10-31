import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";
import useAuth from "./../../hooks/useAuth";

const Header = () => {
  const { user, logOut } = useAuth();

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
          <Link className="logo" to="/">
            Travel Pro
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <div className="ms-auto nav-links">
              {!user.email ? (
                <Link className="nav-link me-2" to="/register">
                  Login || Registration
                </Link>
              ) : (
                <div className="d-flex justify-content-center align-items-center">
                  <Link className="nav-link me-2" to="/myplan">
                    My Plans
                  </Link>
                  <Link className="nav-link me-2" to="/addplan">
                    Add Plan
                  </Link>

                  <Link className="nav-link me-2" to="/allplan">
                    All Plans
                  </Link>
                  <Link to="" className="nav-link">
                    {user?.displayName}
                    <button
                      onClick={logOut}
                      style={buttonStyle}
                      className="nav-button ms-2 regular"
                    >
                      Logout
                    </button>
                  </Link>
                </div>
              )}
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
