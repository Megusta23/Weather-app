import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import axios from "axios";
import { useEffect, useState } from "react";

const forecast: {
  title: string;
  icon: string;
}[] = [
  {
    title: "Today",
    icon: "Icon",
  },
  {
    title: "Tomorrow",
    icon: "Icon",
  },
  {
    title: "Wednesday",
    icon: "Icon",
  },
  {
    title: "Thursday",
    icon: "Icon",
  },
  {
    title: "Friday",
    icon: "Icon",
  },
];

const Forecast = () => {
  const [forecastData, setForecastData] = useState({
    forecast: 0,
  });

  useEffect(() => {
    axios
      .get(
        `forecast?lat=44.34&lon=10.99&appid=1a154aba2aa00fda1867370bf176965d`
      )
      .then((response) => {
        const data = response.data.list;

        setForecastData({
          forecast: data,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="grid gap-5 grid-cols-5 mt-10">
      {forecast.map((item, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle className="text-slate-300 text-center">
              {item.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <div className="my-5 flex items-center justify-center">
              <img src="" alt={item.icon} />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Forecast;
