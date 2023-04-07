import React from "react";

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
    <div className="forecast-data-item">
      <div>{date}</div>
      <div>{time}</div>
      <div>
        <img src={iconURL} alt={data.weather[0].description} />
      </div>
      <div>{data.weather[0].description}</div>
      <div>{Math.round(data.main.temp)}°C</div>
    </div>
  );
};

export default ForecastData;
