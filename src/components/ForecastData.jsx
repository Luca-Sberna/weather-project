import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

const ForecastData = ({ data }) => {
  const date = new Date(data.dt * 1000).toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
  const time = new Date(data.dt * 1000).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
  });
  const iconURL = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
  return (
    <Card className="cont-forecast bg-info mb-3 shadow border-0">
      <Card.Body>
        <div className=" rounded-4 shadow p-1 px-3">
          <Card.Title className="text-center fw-bold">{date}</Card.Title>
          <div className="d-flex justify-content-between align-items-center">
            <Card.Text className="mb-2 text-danger fw-bold rounded-circle shadow py-3">
              {time}
            </Card.Text>
            <Card.Text className="mb-2 text-danger fw-bold rounded-circle py-2 px-1 shadow">
              {Math.round(data.main.temp)}°C
            </Card.Text>
          </div>
        </div>
        <Card.Body className="text-center ">
          <img
            className="img-fluid shadow rounded-pill "
            src={iconURL}
            alt={data.weather[0].description}
          />
        </Card.Body>
        <Card.Text
          className="text-center text-light rounded-pill shadow w-50 mx-auto"
          href="#"
        >
          {" "}
          {data.weather[0].description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ForecastData;
