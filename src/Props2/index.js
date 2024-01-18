import React, { useState } from "react";
import Component2 from "./Component2";

const Props2 = () => {
  const [name, setName] = useState("Pankaj");

  return (
    <div className="flex flex-col gap-6">
      Name from Parent Component : {name}
      <Component2 name={name} setName={setName} />
    </div>
  );
};

export default Props2;
