import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface WindProps {
  windSpeed: number;
}

const WindCard: React.FC<WindProps> = ({ windSpeed }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-slate-300">Wind:</CardTitle>
      </CardHeader>
      <CardContent className="text-center">
        <div className="my-5 flex items-center justify-center">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            {windSpeed}
          </h1>
          <div className="flex ml-2">
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mr-1.5 cursor-pointer">
              km
            </h3>
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight text-slate-300 cursor-pointer">
              mi
            </h3>
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight ml-2">
              /h
            </h3>
          </div>
        </div>
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-5">
          Light Air
        </h3>
      </CardContent>
    </Card>
  );
};

export default WindCard;
