import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface TemperatureProps {
  temperature: number;
}

const TemperatureCard: React.FC<TemperatureProps> = ({ temperature }) => {
  const [isCelsius, setIsCelsius] = useState(true);

  const convertedTemp = temperature - 273.15;
  const roundedTemperature = Math.round(convertedTemp * 100) / 100;

  const handleCelsiusClick = () => {
    setIsCelsius(true);
  };

  const handleFahrenheitClick = () => {
    setIsCelsius(false);
  };

  const convertTemperature = () => {
    if (isCelsius) {
      return roundedTemperature;
    } else {
      return (roundedTemperature * 9) / 5 + 32;
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-slate-300">Temperature:</CardTitle>
      </CardHeader>
      <CardContent className="text-center">
        <div className="my-5 flex items-center justify-center">
          <h1
            className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl"
            id="temp"
          >
            {convertTemperature()}
          </h1>
          <div className="flex ml-2">
            <h3
              className="scroll-m-20 text-2xl font-semibold tracking-tight mr-1.5 cursor-pointer"
              onClick={handleCelsiusClick}
            >
              °C
            </h3>
            <h3
              className="scroll-m-20 text-2xl font-semibold tracking-tight text-slate-300 cursor-pointer"
              onClick={handleFahrenheitClick}
            >
              °F
            </h3>
          </div>
        </div>
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-5">
          Caution
        </h3>
      </CardContent>
    </Card>
  );
};

export default TemperatureCard;
