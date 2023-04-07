import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";
import ForecastData from "./ForecastData";

const Forecast = ({ lat, lon, name }) => {
  const [forecast, setForecast] = useState([]);

  const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=9de3048330c9ad5a92b57969431fd298&units=metric&limit=20`;

  useEffect(() => {
    const fetchForecast = async () => {
      try {
        const response = await fetch(forecastURL);
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
    fetchForecast();
  }, [forecastURL]);

  return (
    <Container>
      <h2>{name} 5 Day Forecast</h2>
      <div className="forecast-data">
        {forecast.map((forecastData) => (
          <ForecastData key={forecastData.dt} data={forecastData} />
        ))}
      </div>
    </Container>
  );
};

export default Forecast;
