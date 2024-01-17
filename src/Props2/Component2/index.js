import React from "react";

const Component2 = (props) => {
  const handleChange = () => {
    props.setName("Amir");
  };
  return (
    <div>
      <p>Name from Child Component : {props.name}</p>
      <button onClick={handleChange}>Change Name</button>
    </div>
  );
};

export default Component2;
