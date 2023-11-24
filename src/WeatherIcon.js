import { WeatherSvg } from "weather-icons-animated";

export default function WeatherIcon(props) {
  const codeMapping = {
    "clear-sky-day": "sunny",
    "clear-sky-night": "clear-night",
    "few-clouds-day": "partlycloudy",
    "few-clouds-night": "cloudy",
    "scattered-clouds-day": "fog",
    "scattered-clouds-night": "fog",
    "broken-clouds-day": "cloudy",
    "broken-clouds-night": "cloudy",
    "shower-rain-day": "rainy",
    "shower-rain-night": "rainy",
    "rain-day": "pouring",
    "rain-night": "pouring",
    "thunderstorm-day": "lightning",
    "thunderstorm-night": "lightning",
    "snow-day": "snowy",
    "snow-night": "snowy",
    "mist-day": "windy",
    "mist-night": "windy",
  };
  return <WeatherSvg state={codeMapping[props.code]} width={60} height={60} />;
}
