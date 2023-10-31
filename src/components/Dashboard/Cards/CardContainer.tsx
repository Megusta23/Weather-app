import TemperatureCard from "./TemperatureCard";

const CardContainer = () => {
  return (
    <div className="grid grid-cols-3 gap-5 mt-10">
      <TemperatureCard />
      <TemperatureCard />
      <TemperatureCard />
      <TemperatureCard />
      <TemperatureCard />
      <TemperatureCard />
    </div>
  );
};

export default CardContainer;
