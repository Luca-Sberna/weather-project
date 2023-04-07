import React from "react";
import { useState } from "react";
import { Col, Container } from "react-bootstrap";

const Forecast = () => {
  const [forecast, setForecast] = useState([]);
  const [query, setQuery] = useState("");

  const forecastURL =
    "https://api.openweathermap.org/data/2.5/forecast?appid=9de3048330c9ad5a92b57969431fd298&q=" +
    query;

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${forecastURL}&units=metric&limit=20`);
      if (response.ok) {
        const { list } = await response.json();
        setForecast(list);
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Col xs={12} className="mx-auto mb-5">
      {forecast?.map((forecastData) => (
        <Forecast key={forecastData.id} data={forecastData} />
      ))}
    </Col>
  );
};

export default Forecast;
