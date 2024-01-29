import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { routes } from "./Routes";
import Layout from "./Layout";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {routes.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                element={<Layout children={route.element} />}
              />
            );
          })}
          {/* {routes.map((route, index) => {
            return (
              <Route key={index} path={route.path} element={ route.element} />
            );
          })} */}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
