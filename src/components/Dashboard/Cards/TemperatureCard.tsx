import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TemperatureCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-slate-300">Temperature:</CardTitle>
      </CardHeader>
      <CardContent className="text-center">
        <div className="my-5 flex align-center justify-center">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            32
          </h1>
          <div className="flex ml-2">
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mr-1.5 cursor-pointer">
              °C
            </h3>
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight text-slate-300 cursor-pointer">
              °F
            </h3>
          </div>
        </div>
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-5">
          Caution
        </h3>
      </CardContent>
    </Card>
  );
};

export default TemperatureCard;
