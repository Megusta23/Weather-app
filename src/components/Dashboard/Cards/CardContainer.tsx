import { useEffect, useState } from "react";
import axios from "../../../utils/axios";

import TemperatureCard from "./TemperatureCard";
import PressureCard from "./PressureCard";
import WindCard from "./WindCard";
import HumidityCard from "./HumidityCard";
import PrecipitationCard from "./PrecipitationCard";
import CloudinessCard from "./CloudinessCard";

const CardContainer = () => {
  const [weatherData, setWeatherData] = useState({
    city: "",
    temperature: 0,
    humidity: 0,
    description: "",
    pressure: 0,
    windSpeed: 0,
    cloudiness: 0,
  });

  useEffect(() => {
    axios
      .get(`weather?lat=44.34&lon=10.99&appid=1a154aba2aa00fda1867370bf176965d`)
      .then((response) => {
        const data = response.data;
        setWeatherData({
          city: data.name,
          temperature: data.main.temp,
          humidity: data.main.humidity,
          description: data.weather[0].description,
          pressure: data.main.pressure,
          windSpeed: data.wind.speed,
          cloudiness: data.clouds.all,
        });
      })
      .catch((error) => {
        console.error("Error: ", error);
      });
  }, []);

  const currentTemperature = weatherData.temperature;
  const currentPressure = weatherData.pressure;
  const currentWindSpeed = weatherData.windSpeed;
  const currentHumidity = weatherData.humidity;

  const currentCloudiness = weatherData.cloudiness;

  return (
    <div className="grid grid-cols-3 gap-5 mt-10">
      <TemperatureCard temperature={currentTemperature} />
      <PressureCard pressure={currentPressure} />
      <WindCard windSpeed={currentWindSpeed} />
      <HumidityCard humidity={currentHumidity} />
      <PrecipitationCard />
      <CloudinessCard cloudiness={currentCloudiness} />
    </div>
  );
};

export default CardContainer;
