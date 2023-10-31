import CardContainer from "./Cards/CardContainer";

const Dashboard = () => {
  return (
    <div className="p-10 flex flex-row bg-slate-100">
      <div className="mr-10 basis-3/5">
        <h1 className="scroll-m-20  pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Today’s weather highlights:
        </h1>
        <CardContainer />
      </div>
      <h1 className="basis-2/5 bg-lime-400 rounded-xl">Righr side</h1>
    </div>
  );
};

export default Dashboard;
