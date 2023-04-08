import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import sun from "../assets/img/sun.gif";
import cloud from "../assets/img/cloud.gif";
import rain from "../assets/img/rain.gif";
import snow from "../assets/img/snow.gif";

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

  function getBg(description) {
    switch (description) {
      case "Clear":
        return `${sun}`;
      case "Clouds":
        return `${cloud}`;
      case "Rain":
        return `${rain}`;
      case "Snow":
        return `${snow}`;
      default:
        return "#f0f0f0"; // Sfondo grigio come fallback
    }
  }

  return (
    <Container
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${getBg(weatherMain)})`,
      }}
      className="cont-city mx-auto mt-5 rounded-4 p-2 pt-0  my-4 shadow overflow-hidden"
    >
      <Row className="pt-0">
        {}
        <h3 className="fw-bold pb-2 text-primary">
          {name} , {country}
        </h3>
      </Row>
      <Row>
        <Col className="fw-bold text-danger shadow rounded-pill bg-primary">
          Themp:
        </Col>
        <Col className="text-light text-center">{temp}&#176;C</Col>
        <Col className="shadow rounded-pill bg-primary">🌡️</Col>
      </Row>
      <hr />
      <Row>
        <Col className="fw-bold text-danger shadow rounded-pill bg-primary">
          Humidity:
        </Col>
        <Col className="text-light text-center">{humidity}% </Col>
        <Col className="shadow rounded-pill bg-primary">💧</Col>
      </Row>
      <hr />
      <Row>
        <Col className="fw-bold text-danger shadow rounded-pill bg-primary">
          Weather:
        </Col>
        <Col className="text-light text-center">{weatherMain} </Col>
        <Col className="shadow rounded-pill bg-primary">
          {getIcon(description)}
        </Col>
      </Row>
      <hr />
    </Container>
  );
};

export default City;
