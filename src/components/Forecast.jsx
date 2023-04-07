import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";
import ForecastData from "./ForecastData";

const Forecast = ({ lat, lon, name }) => {
  const [forecast, setForecast] = useState([]);

  const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=9de3048330c9ad5a92b57969431fd298&units=metric&limit=5`;

  useEffect(() => {
    const fetchForecast = async () => {
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
      }
    };
    fetchForecast();
  }, [forecastURL]);

  return (
    <Container>
      <h2>{name} 5 Days Forecast</h2>
      <div className="forecast-data">
        {forecast.slice(1, 6).map((forecastData) => (
          <ForecastData key={forecastData.dt} data={forecastData} />
        ))}
      </div>
    </Container>
  );
};

export default Forecast;
