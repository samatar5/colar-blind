import React, { useContext } from "react";
import { ColorsContext } from "./App";

export default function Colors() {
  const { colors, setColors } = useContext(ColorsContext);
  console.log(colors);
  return (
    <div className="colors">
      {colors.map((color) => (
        <div
          onClick={() => {
            if (colors.filter((c) => c === color).length === 1) {
              console.log("jipppii");
            } else {
              console.log("try again");
            }
            const r = Math.floor(Math.random() * 255);
            const g = Math.floor(Math.random() * 255);
            const b = Math.floor(Math.random() * 255);
            const newColors = Array(5).fill(`rgb(${r} ${g} ${b})`);
            newColors[Math.floor(Math.random() * 5)] = `rgb(${r + 10} ${
              g + 10
            } ${b + 10})`;

            setColors(newColors);
          }}
          className="colors-card"
          style={{ background: color }}
        ></div>
      ))}
    </div>
  );
}
