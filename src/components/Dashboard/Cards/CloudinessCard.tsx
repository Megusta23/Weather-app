import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface CloudinessProps {
  cloudiness: number;
}

const CloudinessCard: React.FC<CloudinessProps> = ({ cloudiness }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-slate-300">Cloudiness:</CardTitle>
      </CardHeader>
      <CardContent className="text-center">
        <div className="my-5 flex items-center justify-center">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            {cloudiness}
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

export default CloudinessCard;
