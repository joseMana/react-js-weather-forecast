import React, { useState, useEffect } from "react";
import WeatherList from "./weather-list";
import { getDailyForecastSummary } from "../services/forecastService";
import Forecast from "../models/Forecast";



function App() {
  const [forecasts, setForecasts] = useState<Forecast[]>([]);

  const loadForecasts = () => {
    getDailyForecastSummary().then((response) => {
      //console.log(response);
      setForecasts(response);
    });
  };

  loadForecasts();

  return (
    <div className="App">
      <WeatherList forecasts={forecasts} />
    </div>
  );
}

export default App;
