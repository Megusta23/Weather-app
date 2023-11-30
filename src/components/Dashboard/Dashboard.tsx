import { useEffect, useState } from "react";
import CardContainer from "./Cards/CardContainer";
import Forecast from "./Forecast";
import axios from "../../utils/axios";

const Dashboard = () => {
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

  useEffect(() => {
    axios
      .get(`air_pollution?lat=50&lon=50&appid=1a154aba2aa00fda1867370bf176965d`)
      .then((response) => {
        const data = response.data.list[0].components;
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
      <div className="basis-2/5 bg-lime-400 rounded-xl flex flex-col items-center justify-center">
        {/* The main text that displays the air quality index */}
        <div className="text-center">
          <h1 className="scroll-m-20 text-8xl font-extrabold tracking-tight lg:text-8xl">
            33
          </h1>
          <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl mt-5">
            Healthy
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
