const API_KEY = "1";
const API_URL = `https://tile.openweathermap.org/map/{layer}/{z}/{x}/{y}.png?appid=${API_KEY}`;

import React, { useState, useEffect } from "react";
import axios from "axios";

interface WeatherTileProps {
  layer: string;
  zoom: number;
  xCoord: number;
  yCoord: number;
}

const WeatherTile: React.FC<WeatherTileProps> = ({
  layer,
  zoom,
  xCoord,
  yCoord,
}) => {
  const [weatherTileURL, setWeatherTileURL] = useState<string | null>(null);

  useEffect(() => {
    const fetchWeatherTile = async () => {
      try {
        const response = await axios.get(
          API_URL.replace("{layer}", layer)
            .replace("{z}", zoom.toString())
            .replace("{x}", xCoord.toString())
            .replace("{y}", yCoord.toString())
        );
        const imageBlob = await response.data.blob();
        const imageURL = URL.createObjectURL(imageBlob);
        setWeatherTileURL(imageURL);
      } catch (error) {
        console.error(error);
      }
    };

    fetchWeatherTile();
  }, [layer, zoom, xCoord, yCoord]);

  return (
    <div>
      {weatherTileURL && <img src={weatherTileURL} alt="Weather Tile" />}
    </div>
  );
};

export default WeatherTile;
