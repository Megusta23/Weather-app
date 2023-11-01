import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PressureCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-slate-300">Pressure:</CardTitle>
      </CardHeader>
      <CardContent className="text-center">
        <div className="my-5 flex items-center justify-center">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            1032.76
          </h1>
        </div>
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          mbar
        </h3>
      </CardContent>
    </Card>
  );
};

export default PressureCard;
