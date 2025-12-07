import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import axios from "axios";
import { useEffect, useState } from "react";

interface ForecastItem {
  title: string;
  icon: string;
  temp: number;
  description: string;
}

const Forecast = () => {
  const [forecastData, setForecastData] = useState<ForecastItem[]>([]);

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=1a154aba2aa00fda1867370bf176965d&units=metric`
      )
      .then((response) => {
        const data = response.data.list;
        const dailyForecasts: ForecastItem[] = [];
        const seenDays = new Set<string>();

        // Get one forecast per day (the first one for each day)
        data.forEach((item: any) => {
          const date = new Date(item.dt * 1000);
          const dayName = date.toLocaleDateString("en-US", { weekday: "long" });

          if (!seenDays.has(dayName)) {
            seenDays.add(dayName);
            dailyForecasts.push({
              title: dayName,
              icon: item.weather[0].icon,
              temp: Math.round(item.main.temp),
              description: item.weather[0].main,
            });
          }
        });

        setForecastData(dailyForecasts.slice(0, 5));
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const getIconUrl = (iconCode: string) => {
    return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  };

  return (
    <div className="grid gap-5 grid-cols-5 mt-10">
      {forecastData.map((item, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle className="text-slate-300 text-center text-xl">
              {item.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <div className="my-2 flex items-center justify-center">
              <img
                src={getIconUrl(item.icon)}
                alt={item.description}
                className="w-16 h-16"
              />
            </div>
            <p className="text-lg font-semibold ">{item.temp}°C</p>
            <p className="text-sm text-slate-400">{item.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Forecast;
