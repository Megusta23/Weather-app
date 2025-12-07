import React, { useEffect, useState } from "react";
import CardContainer from "./Cards/CardContainer";
import Forecast from "./Forecast";
import axios from "../../utils/axios";

interface Props {
  backgroundColor: string;
  NumToString: string;
}

const Dashboard: React.FC<Props> = ({ backgroundColor, NumToString }) => {
  const [color, setColor] = useState(backgroundColor);

  // translating the numbers into string ( 1 = Good, 2 = Fair, 3 = Moderate, 4 = Poor, 5 = Very Poor)
  const [text, setText] = useState(NumToString);

  // setting all the individual polution data
  const [polutionData, setPolutionData] = useState({
    co: 0,
    no: 0,
    no2: 0,
    o3: 0,
    so2: 0,
    pm2_5: 0,
    pm10: 0,
    nh3: 0,
  });
  // setting the aqi (Air quality index)
  const [aqi, setAqi] = useState(0);
  let polutionNuber = aqi;

  useEffect(() => {
    axios
      .get(
        `air_pollution?lat=43.343033&lon=17.807894&appid=1a154aba2aa00fda1867370bf176965d`
      )
      .then((response) => {
        const data = response.data.list[0].components;
        const airIndex = response.data.list[0].main.aqi;

        setAqi(airIndex);
        setPolutionData(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const pollutionComponents = Object.entries(polutionData).map(
    ([name, value]) => (
      <div key={name} className="text-center">
        <h3 className="text-2xl font-semibold tracking-tight">{name}</h3>
        <p className="leading-7">{value} µg/m³</p>
      </div>
    )
  );

  // the switch casses for the bacground change based on the air polution index
  useEffect(() => {
    switch (true) {
      case polutionNuber == 1:
        // Good
        setColor("#a3e635"); // green
        setText("Good");
        break;
      case polutionNuber == 2:
        // Fair
        setColor("#facc15"); // yellow
        setText("Fair");
        break;
      case polutionNuber == 3:
        // Moderate
        setColor("#fbbf24"); // orange
        setText("Moderate");
        break;
      case polutionNuber == 4:
        // Poor
        setColor("#fb923c"); // orange
        setText("Poor");
        break;
      case polutionNuber == 5:
        // Very Poor
        setColor("#ef4444"); // red
        setText("Very Poor");
        break;
    }
  }, [polutionNuber]);

  return (
    <div className="p-10 flex flex-row bg-slate-100">
      <div className="mr-10 basis-3/5">
        <h1 className="scroll-m-20  pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Today’s weather highlights:
        </h1>
        <CardContainer />
        <Forecast />
      </div>

      {/* The right side of the dashboard that displays air pollution */}
      <div
        className="basis-2/5 rounded-xl flex flex-col items-center justify-center"
        style={{ backgroundColor: color }}
      >
        {/* The main text that displays the air quality index */}
        <div className="text-center">
          <h1 className="scroll-m-20 text-8xl font-extrabold tracking-tight lg:text-8xl">
            {text}
          </h1>
        </div>

        {/* All the chemicals that add up to create the air pollution index */}
        <div className="grid grid-cols-4 gap-5 mt-20">
          {pollutionComponents}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
