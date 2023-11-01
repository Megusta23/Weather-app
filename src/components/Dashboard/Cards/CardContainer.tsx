import TemperatureCard from "./TemperatureCard";
import PressureCard from "./PressureCard";
import WindCard from "./WindCard";
import HumidityCard from "./HumidityCard";
import PrecipitationCard from "./PrecipitationCard";
import CloudinessCard from "./CloudinessCard";

const CardContainer = () => {
  return (
    <div className="grid grid-cols-3 gap-5 mt-10">
      <TemperatureCard />
      <PressureCard />
      <WindCard />
      <HumidityCard />
      <PrecipitationCard />
      <CloudinessCard />
    </div>
  );
};

export default CardContainer;
