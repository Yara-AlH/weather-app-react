import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row row-cols-1 row-cols-md-2 g-4 mainInfo">
        <div className="col">
          <div className="card-body default-location leftDiv">
            <div className="geo">
              <div className="city" id="city">
                {props.data.cityName}
              </div>
              <div className="country">{props.data.countryName}</div>
              <div className="lastUpdate">
                <span id="current-date">
                  <FormattedDate date={props.data.date} />
                </span>
              </div>
              <div className="condition">{props.data.description}</div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card-body default-data rightDiv">
            <div className="temperature">
              <div className="temp">
                <span className="tempNumber">
                  {Math.round(props.data.temperature)}{" "}
                </span>
                <span className="units">
                  <div>
                    <div className="celcius">°C</div>
                    <div className="icon">
                      <WeatherIcon
                        code={props.data.icon}
                        width={60}
                        height={60}
                      />
                    </div>
                  </div>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
