import { useState } from "react";
import RoundedButton from "./RoundedButton";

function ColorChanger() {
  const [color, setColor] = useState("olive");
  return (
    <div
      className="w-full h-screen duration-1000"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-10 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center shadow-lg bg-white gap-3 px-3 py-2 rounded-full">
          <RoundedButton
            title="Red"
            color="red"
            onClick={() => setColor("red")}
          />
          <RoundedButton
            title="Green"
            color="green"
            onClick={() => setColor("green")}
          />
          <RoundedButton
            title="Blue"
            color="blue"
            onClick={() => setColor("blue")}
          />
        </div>
      </div>
    </div>
  );
}

export default ColorChanger;
