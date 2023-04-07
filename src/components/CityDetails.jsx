import React, { useState, useEffect } from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import City from "./City";
import Forecast from "./Forecast";
import { useParams } from "react-router-dom";

const CityDetails = () => {
  const params = useParams();

  const [city, setCity] = useState({});
  const [forecast, setForecast] = useState([]);

  const { id } = "9de3048330c9ad5a92b57969431fd298";

  const cityURL = `https://api.openweathermap.org/data/2.5/weather?id=${id}&appid=9de3048330c9ad5a92b57969431fd298&units=metric`;
  const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?id=${id}&appid=9de3048330c9ad5a92b57969431fd298&units=metric`;

  useEffect(() => {
    const fetchCity = async () => {
      try {
        const response = await fetch(cityURL);
        if (response.ok) {
          const cityData = await response.json();
          setCity(cityData);
        } else {
          alert("Error fetching city data");
        }
      } catch (error) {
        console.log(error);
      }
    };

    const fetchForecast = async () => {
      try {
        const response = await fetch(forecastURL);
        if (response.ok) {
          const { list } = await response.json();
          setForecast(list);
        } else {
          alert("Error fetching forecast data");
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchCity();
    fetchForecast();
  }, [cityURL, forecastURL]);

  return (
    <Container fluid>
      <Row>
        {city.length > 0 ? (
          <Col>
            <City city={city} />
          </Col>
        ) : (
          <Row className="justify-content-center d-flex text-center pt-5">
            <Spinner
              animation="border"
              role="status"
              variant="danger"
            ></Spinner>
            <span className="sr-only text-light pt-3 fs-2">Loading...</span>
          </Row>
        )}
      </Row>

      {forecast.length > 0 ? (
        <Row>
          <Col>
            <Forecast forecast={forecast} />
          </Col>
        </Row>
      ) : (
        <Row className="justify-content-center d-flex text-center pt-5">
          <Spinner animation="border" role="status" variant="danger"></Spinner>
          <span className="sr-only text-light pt-3 fs-2">Loading...</span>
        </Row>
      )}
    </Container>
  );
};

export default CityDetails;
