import React from "react";

export const withsomeHoc = (Component, entity=1) => {
    return function WrappedComponents(props){
        const [c, setC] = React.useState(0)
        return <Component {...props} counter={c} increment={()=>{setC(c + entity)}} decrement={()=>{setC(c -entity)}}/>
    }
}