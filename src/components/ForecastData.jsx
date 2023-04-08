import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import sun from "../assets/img/sun.gif";
import cloud from "../assets/img/cloud.gif";
import rain from "../assets/img/rain.gif";
import snow from "../assets/img/snow.gif";

const ForecastData = ({ data }) => {
  const date = new Date(data.dt * 1000).toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
  /*   const time = new Date(data.dt * 1000).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
  }); */
  const iconURL = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

  function getBgForecast(description) {
    switch (description) {
      case "Sun":
        return `${sun}`;
      case "Clear":
        return `${sun}`;
      case "Clouds":
        return `${cloud}`;
      case "Rain":
        return `${rain}`;
      case "Drizzle":
        return `${rain}`;
      case "Snow":
        return `${snow}`;
      default:
        return "#f0f0f0"; // Sfondo grigio come fallback
    }
  }

  return (
    <Card
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${getBgForecast(data.weather[0].main)})`,
      }}
      className="cont-forecast mb-3 shadow border-0 "
    >
      <Card.Body>
        <div className=" rounded-4 shadow pt-1 px-3 bg-opacity-25 ">
          <Card.Title className="text-center fw-bold shadow  rounded-pill mt-2 mb-3 bg-primary text-light">
            {date}
          </Card.Title>
          <div className="d-flex justify-content-between align-items-center">
            <Card.Text className="mb-2 text-danger fw-bold rounded-circle ">
              {Math.round(data.main.temp)}°C
            </Card.Text>
          </div>
        </div>

        <Card.Text className="text-center mt-3">
          <img
            className="img-fluid shadow rounded-pill bg-primary opacity-75"
            src={iconURL}
            alt={data.weather[0].description}
          />
        </Card.Text>

        <Card.Text className="text-center text-danger rounded-pill shadow w-50 mx-auto  bg-primary ">
          {" "}
          {data.weather[0].description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ForecastData;
