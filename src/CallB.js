import { useState, useEffect } from "react";
export const CallB = ({ displayName }) => {
  const [name, setName] = useState("");

  useEffect(() => {
    setName(displayName);
    console.log("re render?");
  }, [displayName]);

  return <div>{name}</div>;
};
