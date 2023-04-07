import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const City = ({ data }) => {
  const { name, main, weather, sys } = data; // Destructuring dell'oggetto
  const { temp, humidity } = main;
  const { country } = sys;
  const { main: weatherMain, description } = weather[0];

  function getIcon(description) {
    switch (description) {
      case "clear sky":
      case "Clear":
        return "☀️";
      case "Clouds":
      case "overcast clouds":
      case "few clouds":
      case "scattered clouds":
      case "broken clouds":
        return "☁️";
      case "light rain":
      case "moderate rain":
      case "heavy intensity rain":
      case "very heavy rain":
      case "extreme rain":
        return "🌧️";
      case "thunderstorm":
        return "⛈️";
      case "snow":
        return "❄️";
      default:
        return "🌀"; // Mostra l'icona del sole se non trova nessuna corrispondenza
    }
  }

  return (
    <Container fluid className="mx-auto border rounded-4 p-1 my-4">
      <Row>
        <h3>
          {name} , {country}
        </h3>
      </Row>
      <Row>
        <Col className="fw-bold">Themp:</Col>
        <Col>{temp}&#176;C</Col>
        <Col>🌡️</Col>
      </Row>
      <Row>
        <Col className="fw-bold">Humidity:</Col>
        <Col>{humidity}% </Col>
        <Col>💧</Col>
      </Row>
      <Row>
        <Col className="fw-bold">Weather:</Col>
        <Col>{weatherMain} </Col>
        <Col>{getIcon(description)}</Col>
      </Row>
      <Row>
        <Col className="fw-bold">Forecast:</Col>
        <Col xs={4} className="">
          {description}
        </Col>
        <Col>{getIcon(description)}</Col>
      </Row>
    </Container>
  );
};

export default City;
