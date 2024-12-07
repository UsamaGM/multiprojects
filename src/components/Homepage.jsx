import { NavLink } from "react-router-dom";

function Homepage() {
  return (
    <div className="w-screen h-screen bg-gradient-to-br from-purple-300 to-gray-600">
      <div className="flex flex-col justify-center items-center gap-5 select-none w-screen h-screen bg-gradient-to-tr from-cyan-600 to-amber-300 opacity-50">
        <NavLink
          className="text-3xl font-bold transition-transform duration-200 hover:cursor-pointer hover:scale-125"
          to={"/color-changer"}
        >
          Color Changer
        </NavLink>
        <NavLink
          className="text-3xl font-bold transition-transform duration-200 hover:cursor-pointer hover:scale-125"
          to={"/password-generator"}
        >
          Password Generator
        </NavLink>
        <NavLink
          className="text-3xl font-bold transition-transform duration-200 hover:cursor-pointer hover:scale-125"
          to={"/currency-converter"}
        >
          Currency Converter
        </NavLink>
      </div>
    </div>
  );
}

export default Homepage;
