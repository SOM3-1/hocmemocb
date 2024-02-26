import { withsomeHoc } from "./someHoc";
const Decree  = ({counter, decrement}) => {
    return (
      <>
        <div>{counter}</div>
        <button onClick={decrement}>Decrement</button>
      </>
    );
    
}

export default withsomeHoc(Decree, 1);