import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Map2 from "./Map2";
import Amazon from "./Amazon";
import DemoMap from "../src/demomap/index";
import UseEffct from "./UseEffect";
import UseRefDemo from "./UseRefDemo";
import Props from "./Props";
import Props2 from "./Props2";
import Products from "./Products";
import UseRef from "./UseRef1";
import Products2 from "./Products2";
import PropsDrilling from "./PropDrilling";
import UseContextDemo from "./UseContext";
// import Map4 from './demomap/Map4';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Map2 />} />
          <Route path="/map2" element={<Map2 />} />
          <Route path="/amazon" element={<Amazon />} />
          <Route path="/demomap" element={<DemoMap />} />
          <Route path="/useeffect" element={<UseEffct />} />
          <Route path="/useref" element={<UseRefDemo />} />
          <Route path="/props" element={<Props />} />
          <Route path="/props2" element={<Props2 />} />
          <Route path="/products" element={<Products />} />
          <Route path="/useref2" element={<UseRef />} />
          <Route path="/products2" element={<Products2 />} />
          <Route path="/prop-drilling" element={<PropsDrilling />} />
          <Route path="/use-context" element={<UseContextDemo />} />
          {/* <Route path='/map4' element={<Map4/>}/> */}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
