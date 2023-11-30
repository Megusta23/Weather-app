import { Routes, Route, BrowserRouter } from "react-router-dom";

//configuring the dotEnv to secure the API key

import Dashboard from "./components/Dashboard/Dashboard";
import Map from "./components/Map/Map";

import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/map" element={<Map />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
