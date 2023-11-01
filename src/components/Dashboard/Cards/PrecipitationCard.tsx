import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PrecipitationCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-slate-300">Precipitation:</CardTitle>
      </CardHeader>
      <CardContent className="text-center">
        <div className="my-5 flex items-center justify-center">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            9
          </h1>
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl ml-2">
            %
          </h1>
        </div>
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-5">
          Heavy
        </h3>
      </CardContent>
    </Card>
  );
};

export default PrecipitationCard;
