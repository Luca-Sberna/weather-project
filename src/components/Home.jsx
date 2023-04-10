import React from "react";
import { useState } from "react";
import { Container, Row, Col, Form, FormLabel, Spinner } from "react-bootstrap";
import City from "./City";
import Forecast from "./Forecast";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Aside from "./Aside";

const Home = (data) => {
  const [query, setQuery] = useState("");
  const [city, setCity] = useState([]);
  const lat = useState();
  const lon = useState();
  const [selectedCity, setSelectedCity] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const baseURL =
    "https://api.openweathermap.org/data/2.5/find?appid=9de3048330c9ad5a92b57969431fd298&q=" +
    query;

  const forecastURL =
    `api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=9de3048330c9ad5a92b57969431fd298&units=metric` +
    query;

  const handleChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch(`${baseURL}&units=metric`);
      if (response.ok) {
        const { list } = await response.json();
        if (list.length === 0) {
          alert("City not found,probably is a writing error!");
          setIsLoading(false);
          return;
        }
        setCity([list[0]]);
        setSelectedCity(list[0]);
      } else {
        alert("Error,Sorry this city doesn't exist!");
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
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Container fluid className="cont-home py-4 bg">
        <Row>
          <Col xs={12} className=" my-4">
            <h1 className="text-center">⛈️EpiWeather🌞</h1>
          </Col>
          <h3 className="text-center pb-3">
            Find the weather of neighborhoods,districts
            <br />
            City,Region or State!
          </h3>{" "}
          <Col
            xs={10}
            className="border border-info bg-search mx-auto rounded-pill p-4 shadow justify-content-center text-center"
          >
            <Form
              onSubmit={handleSubmit}
              className="shadow rounded-pill p-1 border border-info"
            >
              <Form.Control
                type="search"
                value={query}
                onChange={handleChange}
                placeholder="type and press Enter for search your city"
                className=" rounded-pill shadow px-2 w-75 my-2 mx-auto align-items-center bg-info border-info"
              />
            </Form>
          </Col>
          <Col
            xs={12}
            className="border-light mt-4 border-top border-bottom bg-info"
          >
            <p className="pt-1 opacity-50 text-center mb-0">
              <strong>Remember that</strong> to specify the State
              <br /> of a <strong>city</strong> or a <strong>country</strong>{" "}
              you need to add a <strong>comma</strong> ("<strong>,</strong>") .{" "}
            </p>
            <p className="text-center opacity-50 p-0 mb-1">Example: Milan,US</p>
          </Col>
          {city !== null && (
            <Container>
              <Row>
                <Col className="mx-auto mb-5">
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
                      <div className="">
                        <p className="text-primary fw-bold text-center">
                          Rendering your city...
                        </p>
                      </div>
                    </Row>
                  ) : (
                    city?.map((cityData) => (
                      <Link
                        to={"/details/:id/"}
                        className="text-decoration-none"
                      >
                        <City key={cityData.id} data={cityData} />
                      </Link>
                    ))
                  )}
                </Col>
              </Row>
            </Container>
          )}
        </Row>

        {selectedCity && (
          <Forecast
            lat={selectedCity.coord.lat}
            lon={selectedCity.coord.lon}
            name={selectedCity.name}
          />
        )}
      </Container>
      <Aside />
      <Footer />
    </>
  );
};

export default Home;
