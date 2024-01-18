import { Button } from "@mui/material";
import React from "react";

const Component2 = (props) => {
  const handleChange = () => {
    props.setName("Amir");
  };
  console.log(props);
  return (
    <div>
      <p>Name from Child Component : {props.name}</p>
      <Button onClick={handleChange}>Change Name</Button>
    </div>
  );
};

export default Component2;
