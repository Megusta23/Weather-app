interface WeatherData {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
  temperature: number;
  condition: string;
}

import React, { useState, useEffect } from "react";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import axios from "axios";

const Map: React.FC = () => {
  const [weatherData, setWeatherData] = useState<WeatherData[]>([]);

  useEffect(() => {
    const fetchWeatherData = async () => {
      const response = await axios.get(
        "https://tile.openweathermap.org/map/clouds_new/10/5/5.png?appid=1"
      );
      const weatherData = response.data;
      setWeatherData(weatherData);
    };

    fetchWeatherData();
  }, []);

  const mapRef = React.createRef<L.Map>();

  return (
    <MapContainer center={[51.505, -0.09]} zoom={13} ref={mapRef}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
      />
      {weatherData.map((weather) => (
        <Marker
          key={weather.id}
          position={[weather.latitude, weather.longitude]}
        >
          <Popup>
            <h2>{weather.name}</h2>
            <p>Temperature: {weather.temperature}°C</p>
            <p>Condition: {weather.condition}</p>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
