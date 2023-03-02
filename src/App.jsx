import React, { createContext, useContext, useState } from "react";
import Colors from "./Colors";
export const ColorsContext = createContext(null);

export default function App() {
  const [colors, setColors] = useState([
    "#fff",
    "#fff",
    "#fff",
    "#fff",
    "#ddd",
  ]);
  return (
    <ColorsContext.Provider value={{ colors: colors, setColors: setColors }}>
      <Colors />
    </ColorsContext.Provider>
  );
}
