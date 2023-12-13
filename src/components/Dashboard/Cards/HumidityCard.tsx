import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface HumidityProps {
  humidity: number;
  numToString: string;
}

const HumidityCard: React.FC<HumidityProps> = ({ humidity, numToString }) => {
  const [humidityIndex, setHumidityIndex] = useState(numToString);

  useEffect(() => {
    switch (true) {
      case humidity >= 85:
        // Too high and uncomfortable
        setHumidityIndex("Uncomfortable");
        break;
      case humidity >= 68:
        // Acceptable but slightly muggy
        setHumidityIndex("Acceptable");
        break;
      case humidity == 43:
        // Ideal Humidity
        setHumidityIndex("Ideal");
        break;
      case humidity <= 25:
        //Acceptable but slightly muggy
        setHumidityIndex("Potentially harmful");
        break;
    }
  }, [humidity]);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-slate-300">Humidity:</CardTitle>
      </CardHeader>
      <CardContent className="text-center">
        <div className="my-5 flex items-center justify-center">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            {humidity}
          </h1>
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl ml-2">
            %
          </h1>
        </div>
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-5">
          {humidityIndex}
        </h3>
      </CardContent>
    </Card>
  );
};

export default HumidityCard;
