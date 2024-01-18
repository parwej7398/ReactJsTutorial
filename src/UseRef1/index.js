import { Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useRef } from "react";

const UseRef = () => {
  const [value, setValue] = useState("");
  const divRef = useRef();
  const inputRef = useRef();

  // const handleSubmit = () => {
  //   console.log(inputRef.current.value);
  // };

  const handleSubmit = () => {
    console.log(document.getElementById("name").value);
  };

  // useEffect(() => {
  //   divRef.current.innerHTML = "Parvez";
  // }, []);

  return (
    <div
      ref={divRef}
      className="flex items-center gap-6 justify-center flex-col min-h-screen"
    >
      <input id="name" type="text" ref={inputRef} className="border p-2" />

      {/* <TextField
        label="Value"
        variant="filled"
        // ref={inputRef}

        inputRef={inputRef}

        // onChange={(event) => setValue(event.target.value)}
      /> */}
      <Button onClick={handleSubmit}>Submit</Button>
      <p>{value}</p>
    </div>
  );
};

export default UseRef;
