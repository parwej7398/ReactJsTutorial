import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { routes } from "./Routes";
import Layout from "./Layout";
import Login from "./Authentication/Login";
import Calculator from "./Calculator";
import SignUp from "./Authentications/SignUp";
import SignIn from "./Authentications/SignIn";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/login" element={<Login />} />
          <Route path="/calculator" element={<Calculator />} /> */}

          <Route path="/signup" Component={SignUp} />
          <Route path="/signin" Component={SignIn} />

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