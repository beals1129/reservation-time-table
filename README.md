# Start

```
npm i reservation-time-table
```

## Props

- `startNum` : start time
- `endNum` : end time
- `maxTime` : maximum number of time choices
- `complete`(option) : unselectable time array
- `onClick` : (function) : returns an array of start time and end time
  - [-1, null] : nothing selected
  - [2, null] : start time selected
  - [2, 10] : start time and end time selected

## Example

```ts
import TimeTableBox from "./lib/TimeTable";

function App() {
  const [time, setTime] = useState<number[]>();
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
```
