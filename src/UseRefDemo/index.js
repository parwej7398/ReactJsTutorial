import React, { useEffect, useRef, useState } from "react";

const UseRefDemo = () => {
  //   const ref = useRef();
  const [value, setValue] = useState("");

  const inputRef = useRef();

  // useEffect(() => {
  //   console.log(ref);
  //   ref.current.innerHTML="New String"
  // }, []);

  //   useEffect(()=>{
  //    document.getElementById("demo").innerHTML='New Demo'
  //   },[])

  const handleSubmit = () => {
    setValue(inputRef.current.value);
  };

  //   useEffect(() => {
  //     setValue(inputRef.current.value);
  //   }, [inputRef.current.value])

  return (
    <>
      {/* <div ref={ref}>
        <p id="demo">Something</p>
      </div> */}

      <div className="flex flex-col gap-5 h-screen items-center justify-center">
        <input
          type="text"
          className="p-2 border"
          placeholder="Enter Something"
          ref={inputRef}
          //   onChange={(event) => setValue(event.target.value)}
        />
        <p className="p-2 border bg-gray-100">{value}</p>

        <button onClick={handleSubmit}>Submit</button>
      </div>
    </>
  );
};

export default UseRefDemo;
