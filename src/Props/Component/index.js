import React from "react";

const Component = (props) => {
  console.log(props);
  return (
    <div>
      Name from Child Component :{props.name} {props.n}{" "}
    </div>
  );
};

export default Component;
