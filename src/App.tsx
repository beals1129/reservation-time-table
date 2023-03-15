import React, { useState } from "react";
import "./App.css";
import TimeTableBox from "./lib/TimeTable";

function App() {
  const [time, setTime] = useState<number[]>();
  console.log(time);
  return (
    <div className="App">
      <TimeTableBox
        startNum={10}
        endNum={22}
        maxTime={3}
        complete={[12, 13, 20]}
        onClick={(time: number[]) => setTime(time)}
      />
    </div>
  );
}

export default App;
