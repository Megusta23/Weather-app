import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface WindProps {
  windSpeed: number;
}

const WindCard: React.FC<WindProps> = ({ windSpeed }) => {
  const [isKilometer, setIsKilometer] = useState<boolean>(true);
  const [blackButtonColor, setBlackButtonColor] = useState<string>("#0f172a"); //black
  const [grayButtonColor, setGrayButtonColor] = useState<string>("#cbd5e1"); //gray

  const kilometersPerHour = windSpeed * 3.6;
  const roundedWindSpeed = Math.round(kilometersPerHour * 100) / 100;

  const handleUnitToggle = (unit: string) => {
    if (unit === "Kilometer") {
      setIsKilometer(true);
      setBlackButtonColor("#0f172a"); //black
      setGrayButtonColor("#cbd5e1"); //gray
    } else if (unit === "Mile") {
      setIsKilometer(false);
      setBlackButtonColor("#cbd5e1"); //gray
      setGrayButtonColor("#0f172a"); //black
    }
  };

  const convertKilometesToMiles = () => {
    if (isKilometer) {
      return roundedWindSpeed;
    } else {
      return Math.round((roundedWindSpeed / 1.609344) * 100) / 100;
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-slate-300">Wind:</CardTitle>
      </CardHeader>
      <CardContent className="text-center">
        <div className="my-5 flex items-center justify-center flex-col">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            {convertKilometesToMiles()}
          </h1>
          <div className="flex mt-5">
            <h3
              className="scroll-m-20 text-2xl font-semibold tracking-tight mr-1.5 cursor-pointer"
              onClick={() => handleUnitToggle("Kilometer")}
              style={{ color: blackButtonColor }}
            >
              km
            </h3>
            <h3
              className="scroll-m-20 text-2xl font-semibold tracking-tight text-slate-300 cursor-pointer"
              onClick={() => handleUnitToggle("Mile")}
              style={{ color: grayButtonColor }}
            >
              mi
            </h3>
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight ml-2">
              /h
            </h3>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default WindCard;
