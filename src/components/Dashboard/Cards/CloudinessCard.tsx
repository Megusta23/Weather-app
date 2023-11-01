import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CloudinessCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-slate-300">Cloudiness:</CardTitle>
      </CardHeader>
      <CardContent className="text-center">
        <div className="my-5 flex items-center justify-center">
          <img src="" alt="Icon" />
        </div>
      </CardContent>
    </Card>
  );
};

export default CloudinessCard;
