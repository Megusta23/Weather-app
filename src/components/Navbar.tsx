import { useState } from "react";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const [location, setLocation] = useState("");
  const currentLocation = useLocation();

  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(e.target.value);
  };

  const handleSearch = () => {
    if (location.trim()) {
      // You can pass this to parent component or API call here
      console.log("Searching for:", location);
      // Example: window.location.href = `/?location=${location}`;
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const isActive = (path: string) => currentLocation.pathname === path;

  return (
    <nav className="flex justify-between items-center bg-slate-900 px-10 py-4">
      <p className="scroll-m-20 text-xl font-semibold tracking-tight text-white">
        Everyday Weather
      </p>
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-2">
          <ul className="flex">
            <li>
              <a
                href="/"
                className={`leading-7 [&:not(:first-child)]:mt-6 mr-14 transition ${
                  isActive("/")
                    ? "text-blue-600"
                    : "text-white hover:text-slate-300"
                }`}
              >
                Dashboard
              </a>
            </li>
            <li>
              <a
                href="/map"
                className={`leading-7 [&:not(:first-child)]:mt-6 mr-14 transition ${
                  isActive("/map")
                    ? "text-blue-600"
                    : "text-white hover:text-slate-300"
                }`}
              >
                Map
              </a>
            </li>
          </ul>
          <input
            type="text"
            placeholder="Enter city or region..."
            value={location}
            onChange={handleLocationChange}
            onKeyPress={handleKeyPress}
            className="px-4 py-2 rounded bg-slate-800 text-white placeholder-slate-400 border border-slate-700 focus:outline-none focus:border-blue-500"
          />
          <button
            onClick={handleSearch}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Search
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
