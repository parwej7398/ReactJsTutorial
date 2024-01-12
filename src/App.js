import React from 'react'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Map2 from './Map2';
import Amazon from './Amazon';
import DemoMap from '../src/demomap/index'
  // import Map4 from './demomap/Map4';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/map2' element={<Map2/>}/>
          <Route path='/amazon' element={<Amazon/>}/>
          <Route path='/demomap' element={<DemoMap/>}/>
          {/* <Route path='/map4' element={<Map4/>}/> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App 

