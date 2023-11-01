import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const forecast: {
  title: string;
  icon: string;
}[] = [
  {
    title: "Today",
    icon: "Icon",
  },
  {
    title: "Tomorrow",
    icon: "Icon",
  },
  {
    title: "Wednesday",
    icon: "Icon",
  },
  {
    title: "Thursday",
    icon: "Icon",
  },
  {
    title: "Friday",
    icon: "Icon",
  },
];

const Forecast = () => {
  return (
    <div className="grid gap-5 grid-cols-5 mt-10">
      {forecast.map((item, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle className="text-slate-300 text-center">
              {item.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <div className="my-5 flex items-center justify-center">
              <img src="" alt={item.icon} />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Forecast;
