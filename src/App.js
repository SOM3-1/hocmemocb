import logo from "./logo.svg";
import "./App.css";
import { useCallback, useState } from "react";
import { memo } from "react";
import Counter from "./Counter";
import Decree from "./Decree";
import ExampleComponent from "./ExampleComponent";
import { useMemo } from "react";
import { CallB } from "./CallB";
function App() {
  const [c, setC] = useState(0);
  const [name, setName] = useState("");

  const expensiveFunc = (val) => {
    let i = 0;
    while (i < 100000000) {
      i++;
    }
    return val * val;
  };

  //memoising a value
  const result = useMemo(() => {
    return expensiveFunc(c);
  }, [c]);

  //use call back - memoising a functions
  //I will pass the method to another component so it used to re render when ever c value changed hence
  // too many re-renders, so made it as callback and made the funciton re-initilaise only when name changes
  //when the state changes whole component re intialises the method, same was with result
  const displayName = useCallback(() => {
    return name;
  },[name]);

  return (
    <div className="App">
      {/* <Counter/>
    <Decree/>
    <ExampleComponent/> */}
      <div>number is {c}</div>
      <button
        onClick={() => {
          setC(Math.random() * 100);
        }}
      >
        Random
      </button>
      <div>Square of the number is {result}</div>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <CallB displayName={displayName} />
    </div>
  );
}

export default App;
