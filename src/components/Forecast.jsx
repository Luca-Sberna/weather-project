import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import ForecastData from "./ForecastData";

const Forecast = ({ lat, lon, name }) => {
  const [forecast, setForecast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=9de3048330c9ad5a92b57969431fd298&units=metric&limit=5`;

  useEffect(() => {
    const fetchForecast = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(forecastURL);
        if (response.ok) {
          const { list } = await response.json();
          const uniqueDays = new Set(
            list.map((forecast) => forecast.dt_txt.slice(0, 10)),
          );
          const uniqueForecasts = [...uniqueDays].map((day) => {
            return list.find((forecast) => {
              return forecast.dt_txt.slice(0, 10) === day;
            });
          });
          setForecast(uniqueForecasts);
        } else {
          alert("Error fetching results");
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchForecast();
  }, [forecastURL]);

  return (
    <>
      {isLoading ? (
        <Row>
          <Col className="d-flex justify-content-center pt-5">
            <Spinner
              className="my-2"
              animation="border"
              role="status"
              variant="danger"
            ></Spinner>
          </Col>
        </Row>
      ) : (
        <>
          <Container fluid>
            <h2 className="fw-bold text-uppercase">{name}</h2>
            <p className="fw-bold">Next 5 Days</p>
            <Row>
              {forecast.slice(1, 6).map((forecastData) => (
                <Col md={4} lg={6} xl={2} className="forecast-data g-2">
                  <ForecastData key={forecastData.dt} data={forecastData} />
                </Col>
              ))}
            </Row>
          </Container>
        </>
      )}
    </>
  );
};

export default Forecast;
