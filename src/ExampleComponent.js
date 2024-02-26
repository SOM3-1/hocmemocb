import React, { useState, useMemo, useCallback } from 'react';

const ExampleComponent = () => {
  const [count, setCount] = useState(0);
const [x, setX] = useState(0);


const simulateLongRunningTaskWithoutMemo = useCallback(() => {
      console.log('Simulating long running task without useMemo...');
      setX(0);
      for (let i = 0; i < 9000000; i++) {
        setX(i);
      }
  }, []);

  const handleClick = useCallback(() => {
    console.log('Button clicked!');
    setCount(prevCount => prevCount + 1);
    simulateLongRunningTaskWithoutMemo();
  }, []);
  
  return (
    <div>
      <h1>useMemo and useCallback Example</h1>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment Count</button>
      <div>{x}</div>
    </div>
  );
};

export default ExampleComponent;
