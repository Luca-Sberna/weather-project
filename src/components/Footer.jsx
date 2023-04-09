import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <Container fluid className="bg text-center py-5 text-light">
      <Row className="pb-3">
        <Col>
          <FontAwesomeIcon
            icon={faInstagram}
            size="3x"
            className="shadow rounded-pill p-1"
          />
        </Col>
        <Col>
          <FontAwesomeIcon
            icon={faFacebook}
            size="3x"
            className="shadow rounded-circle p-1"
          />
        </Col>
        <Col>
          <FontAwesomeIcon
            icon={faTwitter}
            size="3x"
            className="shadow rounded-circle p-1"
          />
        </Col>
      </Row>
      <Row>
        <Col>{year}</Col>
      </Row>
      <Col>©EpiWeather©</Col>
      <Col>All rights reserved to Luca Sberna.</Col>
    </Container>
  );
};

export default Footer;
