import { withsomeHoc } from "./someHoc";
const Counter  = ({counter, increment}) => {
    return (
      <>
        <div>{counter}</div>
        <button onClick={increment}>Increment</button>
      </>
    );
    
}

export default withsomeHoc(Counter, 3);