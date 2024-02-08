import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { routes } from "./Routes";
import Layout from "./Layout";
import Login from "./Authentication/Login";
import Calculator from "./Calculator";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/login" element={<Login />} />
          <Route path="/calculator" element={<Calculator />} /> */}
          {routes.map((route, index) => {
            return (
              <Route key={index} path={route.path} element={<Layout children={route.element} />} />
            );
          })}

        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;










{/* {routes.map((route, index) => {
            return (
              <Route key={index} path={route.path} element={route.element} />
            );
          })} */}