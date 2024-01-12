import React, { useEffect, useState } from "react";

const UseEffct = () => {
  const [count, setCount] = useState(10);


  const handleClick = () => {
    setCount(count + 10);
  };



  useEffect(() => {
    // setCount(count + 1);
    alert("Welcome on Website");
    
  }, [handleClick]);

  return (
    <div>
      <p>{count}</p>
      <button onClick={handleClick}>click Here</button>
    </div>
  );
};

export default UseEffct;
