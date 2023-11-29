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
          {cloudiness}
        </div>
      </CardContent>
    </Card>
  );
};

export default CloudinessCard;
