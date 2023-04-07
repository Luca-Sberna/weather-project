import React from "react";
import { useState } from "react";
import { Container, Row, Col, Form, FormLabel } from "react-bootstrap";
import City from "./City";
import Forecast from "./Forecast";
import { Link } from "react-router-dom";

const Home = () => {
  const [query, setQuery] = useState("");
  const [city, setCity] = useState([]);

  const baseURL =
    "https://api.openweathermap.org/data/2.5/find?appid=9de3048330c9ad5a92b57969431fd298&q=" +
    query;

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${baseURL}&units=metric&limit=20`);
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
      <Container fluid className="pt-5">
        <Row>
          <Col xs={12} className=" my-3">
            <h1 className="text-center">⛈️EpiWeather🌞</h1>
          </Col>
          <Col xs={10} className="mx-auto">
            <Form onSubmit={handleSubmit}>
              <FormLabel className="fw-bold">Search your City!:</FormLabel>
              <Form.Control
                type="search"
                value={query}
                onChange={handleChange}
                placeholder="type and press Enter for search your city"
                className="rounded-pill"
              />
            </Form>
          </Col>
          <Col xs={10} className="mx-auto mb-5">
            {city?.map((cityData) => (
              <Link to={"/details/:id/"} className="text-decoration-none">
                <City key={cityData.id} data={cityData} />
              </Link>
            ))}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
