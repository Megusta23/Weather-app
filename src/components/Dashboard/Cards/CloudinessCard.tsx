import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CloudinessCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-slate-300">Cloudiness:</CardTitle>
      </CardHeader>
      <CardContent className="text-center">
        <div className="my-5 flex items-center justify-center">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Icon
          </h1>
        </div>
      </CardContent>
    </Card>
  );
};

export default CloudinessCard;
