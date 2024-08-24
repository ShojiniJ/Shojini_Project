import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FiFacebook, FiTwitter, FiLinkedin, FiYoutube } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="text-center text-lg-start">
      <Container className="p-4">
        <Row className="d-flex justify-content-center mb-4">
          <Col xs="auto">
            <a href="#!" className="btn btn-outline-dark rounded-circle me-2">
              <FiFacebook />
            </a>
            <a href="#!" className="btn btn-outline-dark rounded-circle me-2">
              <FiTwitter />
            </a>
            <a href="#!" className="btn btn-outline-dark rounded-circle me-2">
              <FiLinkedin />
            </a>
            <a href="#!" className="btn btn-outline-dark rounded-circle">
              <FiYoutube />
            </a>
          </Col>
        </Row>
        <Row className="text-center">
          <Col>
            <p>Example@email.com</p>
            <p>&copy; 2024 Name. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
