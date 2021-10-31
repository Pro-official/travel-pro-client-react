import React from "react";
import { Col, Row, Button } from "react-bootstrap";
import { useHistory, useLocation } from "react-router";
import "./Register.css";
import registerBanner from "../../image/register.jpg";
// import { Link } from "react-router-dom";
import useAuth from "./../../hooks/useAuth";

const Register = () => {
  const { setIsLoading, signInUsingGoogle, setUser } = useAuth();
  const location = useLocation();
  const history = useHistory();
  // handle redirecting using google login
  const handleGoogleSignIn = () => {
    setIsLoading(true);
    signInUsingGoogle()
      .then((result) => {
        const user = result.user;
        setUser(user);
        history.push(location.state?.from || "/home");
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="register">
      <div>
        <Row className="d-flex justify-content-center align-items-center">
          <Col className="register-text text-white" sm={4}>
            <div className="text-white text-center">
              <h1>Travel Pro</h1>
              <p>Log In To Your Account</p>
            </div>
            <div className="d-flex justify-content-center p-2 text-white ">
              <Button onClick={handleGoogleSignIn} className="register-button">
                Google Sign In
              </Button>
            </div>
          </Col>
          <Col sm={8}>
            <img className="register-image" src={registerBanner} alt="" />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Register;
