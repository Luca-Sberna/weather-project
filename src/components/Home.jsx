import React from "react";
import { useState } from "react";
import { Container, Row, Col, Form, FormLabel } from "react-bootstrap";
import City from "./City";
import Forecast from "./Forecast";
import { Link } from "react-router-dom";

const Home = (data) => {
  const [query, setQuery] = useState("");
  const [city, setCity] = useState([]);
  const lat = useState();
  const lon = useState();
  const [selectedCity, setSelectedCity] = useState(null);

  const baseURL =
    "https://api.openweathermap.org/data/2.5/find?appid=9de3048330c9ad5a92b57969431fd298&q=" +
    query;

  const forecastURL =
    `api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=9de3048330c9ad5a92b57969431fd298&units=metric` +
    query;

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${baseURL}&units=metric`);
      if (response.ok) {
        const { list } = await response.json();
        setCity([list[0]]);
        setSelectedCity(list[0]);
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }

    try {
      const response = await fetch(`${forecastURL}`);
      if (response.ok) {
        const { list } = await response.json();
        setCity(list);
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Container fluid className="cont-home py-4 bg-info ">
        <Row>
          <Col xs={12} className=" my-3">
            <h1 className="text-center">⛈️EpiWeather🌞</h1>
          </Col>
          <Col xs={10} className="mx-auto">
            <Form onSubmit={handleSubmit}>
              <FormLabel className="fw-bold rounded-pill p-1 shadow">
                Search your City!:
              </FormLabel>
              <Form.Control
                type="search"
                value={query}
                onChange={handleChange}
                placeholder="type and press Enter for search your city"
                className="rounded-pill shadow"
              />
            </Form>
          </Col>
          <Container>
            <Row>
              <Col className="mx-auto mb-5">
                {city?.map((cityData) => (
                  <Link to={"/details/:id/"} className="text-decoration-none">
                    <City key={cityData.id} data={cityData} />
                  </Link>
                ))}
              </Col>
            </Row>
          </Container>
        </Row>
        {selectedCity && (
          <Forecast
            lat={selectedCity.coord.lat}
            lon={selectedCity.coord.lon}
            name={selectedCity.name}
          />
        )}
      </Container>
    </>
  );
};

export default Home;
