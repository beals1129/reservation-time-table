import React from "react";
import "./App.css";
import TimeTableBox from "./lib/TimeTable";

function App() {
  return (
    <div className="App">
      <TimeTableBox
        startNum={10}
        endNum={22}
        maxTime={3}
        complete={[12, 13, 20]}
      />
    </div>
  );
}

export default App;
