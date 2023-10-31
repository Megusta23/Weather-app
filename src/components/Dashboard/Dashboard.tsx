import CardContainer from "./Cards/CardContainer";

const chemicals: {
  title: string;
  amount: number;
}[] = [
  {
    title: "SO2",
    amount: 19,
  },
  {
    title: "NO2",
    amount: 22,
  },
  {
    title: "PM10",
    amount: 12,
  },
  {
    title: "PM2.5",
    amount: 9,
  },
  {
    title: "O3",
    amount: 59,
  },
  {
    title: "CO",
    amount: 3200,
  },
];

const Dashboard = () => {
  return (
    <div className="p-10 flex flex-row bg-slate-100">
      <div className="mr-10 basis-3/5">
        <h1 className="scroll-m-20  pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Today’s weather highlights:
        </h1>
        <CardContainer />
      </div>

      {/* the right side of the dashbouard that displays air polution */}
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

        {/* all the chemicals that add up to create the air polution index */}
        <div className="grid grid-cols-4 gap-5 mt-20">
          {chemicals.map((item, index) => (
            <div key={index} className="text-center">
              <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                {item.title}
              </h3>
              <p className="leading-7">{item.amount} µg/m³</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
