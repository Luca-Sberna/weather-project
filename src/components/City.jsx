import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import sun from "../assets/img/sun.gif";
import cloud from "../assets/img/cloud.gif";
import rain from "../assets/img/rain.gif";
import snow from "../assets/img/snow.gif";
import haze from "../assets/img/haze.gif";

const City = ({ data }) => {
  const { name, main, weather, sys } = data; // Destructuring dell'oggetto
  const { temp, humidity } = main;
  const { country } = sys;
  const { main: weatherMain, description } = weather[0];
  const currentDate = new Date().toLocaleString("en-US", {
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
  console.log(currentDate);

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
      case "drizzle":
        return "🌧️";
      case "thunderstorm":
        return "⛈️";
      case "haze":
        return "🌫️";
      case "snow": //snow non si trova in nesusn modo aggiunta come unica opzione rimasta(si spera) in caso default
        return "❄️";
      default:
        return "❄️";
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
      case "Drizzle":
        return `${rain}`;
      case "Haze":
        return `${haze}`;
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
      <Row className="pt-0 ">
        <Col className="d-flex justify-content-between align-items-center">
          <h3 className="fw-bold text-primary">
            {name},{country}
          </h3>
        </Col>
      </Row>
      <Col>
        <p className="fw-bold ">{currentDate}</p>
      </Col>
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
