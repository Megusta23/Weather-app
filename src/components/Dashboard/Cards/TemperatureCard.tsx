import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface TemperatureProps {
  temperature: number;
}

const TemperatureCard: React.FC<TemperatureProps> = ({ temperature }) => {
  const [isCelsius, setIsCelsius] = useState<boolean>(true);
  const [blackButtonColor, setBlackButtonColor] = useState<string>("#0f172a"); //black
  const [grayButtonColor, setGrayButtonColor] = useState<string>("#cbd5e1"); //gray

  const convertedTemp = temperature - 273.15;
  const roundedTemperature = Math.round(convertedTemp * 100) / 100;

  const handleUnitToggle = (unit: string) => {
    if (unit === "Celsius") {
      setIsCelsius(true);
      setBlackButtonColor("#0f172a"); //black
      setGrayButtonColor("#cbd5e1"); //gray
    } else if (unit === "Fahrenheit") {
      setIsCelsius(false);
      setBlackButtonColor("#cbd5e1"); //gray
      setGrayButtonColor("#0f172a"); //black
    }
  };

  const convertTemperature = () => {
    if (isCelsius) {
      return roundedTemperature;
    } else {
      return Math.round(((roundedTemperature * 9) / 5 + 32) * 100) / 100;
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-slate-300">Temperature:</CardTitle>
      </CardHeader>
      <CardContent className="text-center">
        <div className="my-5 flex items-center justify-center flex-col">
          <h1
            className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl"
            id="temp"
          >
            {convertTemperature()}
          </h1>
          <div className="flex mt-5">
            <div
              className="scroll-m-20 text-2xl font-semibold tracking-tight mr-1.5 cursor-pointer"
              onClick={() => handleUnitToggle("Celsius")}
              style={{ color: blackButtonColor }}
            >
              °C
            </div>
            <div
              className="scroll-m-20 text-2xl font-semibold tracking-tight text-slate-300 cursor-pointer"
              onClick={() => handleUnitToggle("Fahrenheit")}
              style={{ color: grayButtonColor }}
            >
              °F
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TemperatureCard;
