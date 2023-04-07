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
    <Container
      fluid
      className="cont-city mx-auto rounded-4 p-2  my-4 bg-info shadow overflow-hidden"
    >
      <Row>
        <h3 className="fw-bold pb-2">
          {name} , {country}
        </h3>
      </Row>
      <Row>
        <Col className="fw-bold text-danger shadow rounded-pill ">Themp:</Col>
        <Col className="text-light text-center">{temp}&#176;C</Col>
        <Col className="shadow rounded-pill ">🌡️</Col>
      </Row>
      <hr />
      <Row>
        <Col className="fw-bold text-danger shadow rounded-pill">Humidity:</Col>
        <Col className="text-light text-center">{humidity}% </Col>
        <Col className="shadow rounded-pill">💧</Col>
      </Row>
      <hr />
      <Row>
        <Col className="fw-bold text-danger shadow rounded-pill">Weather:</Col>
        <Col className="text-light text-center">{weatherMain} </Col>
        <Col className="shadow rounded-pill">{getIcon(description)}</Col>
      </Row>
      <hr />
    </Container>
  );
};

export default City;
