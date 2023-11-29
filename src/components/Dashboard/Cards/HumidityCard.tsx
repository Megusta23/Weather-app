import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface HumidityProps {
  humidity: number;
}

const HumidityCard: React.FC<HumidityProps> = ({ humidity }) => {
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
          Normal
        </h3>
      </CardContent>
    </Card>
  );
};

export default HumidityCard;
