import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import axios from "axios";
import React, { useState, useEffect, useRef } from "react";

interface WeatherData {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
  temperature: number;
  condition: string;
}

const Map: React.FC = () => {
  const [weatherData, setWeatherData] = useState<WeatherData[]>([]);
  const mapRef = useRef<L.Map>(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(
          "https://api.openweathermap.org/data/2.5/find?lat=44.34&lon=10.99&cnt=10&appid=1a154aba2aa00fda1867370bf176965d&units=metric"
        );
        const cities = response.data.list.map((city: any) => ({
          id: city.id.toString(),
          name: city.name,
          latitude: city.coord.lat,
          longitude: city.coord.lon,
          temperature: Math.round(city.main.temp),
          condition: city.weather[0].main,
        }));
        setWeatherData(cities);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchWeatherData();
  }, []);

  return (
    <MapContainer
      center={[44.34, 10.99]}
      zoom={8}
      ref={mapRef}
      style={{ height: "600px", width: "100%" }}
    >
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
