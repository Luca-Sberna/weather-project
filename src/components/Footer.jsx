import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <Container fluid className="footer bg-info text-center py-5">
      <Row>
        <Col>{year}</Col>
      </Row>
      <Col>©EpiWeather©</Col>
      <Col>All rights reserved to Luca Sberna.</Col>
    </Container>
  );
};

export default Footer;
