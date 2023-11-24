import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import Loader from "./Loader";
import axios from "axios";
import Footer from "./Footer";

import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleFormSubmit(event) {
    event.preventDefault();

    search();
  }

  function displayWeatherInfo(response) {
    console.log(response);
    setWeatherData({
      ready: true,
      cityName: response.data.city,
      countryName: response.data.country,
      description: response.data.condition.description,
      temperature: response.data.temperature.current,
      date: new Date(response.data.time * 1000),
      icon: response.data.condition.icon,
    });
  }

  function updateCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "0c6283dt87dcb24afbce90bd2bac3o16";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeatherInfo);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="weatherApp">
          <form className="mb-3 search-form" onSubmit={handleFormSubmit}>
            <div className="row">
              <div className="col-8">
                <input
                  className="form-control search-form"
                  type="search"
                  placeholder="Enter a city..."
                  autoComplete="off"
                  autoFocus="on"
                  onChange={updateCity}
                />
              </div>
              <div className="col-3">
                <input
                  className="btn btn-primary searchBtn"
                  type="submit"
                  value="Search"
                />
              </div>
            </div>
          </form>
          <WeatherInfo data={weatherData} />
        </div>
        <Footer />
      </div>
    );
  } else {
    search();

    return <Loader />;
  }
}
