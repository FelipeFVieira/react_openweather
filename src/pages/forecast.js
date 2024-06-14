import React, { useState, useEffect } from 'react';
import Navbar from '../components/nav/navbar.js';
import ForecastMain from '../components/main/forecastMain.js'
function forecast() {


  return (
    <div className="App">
      <Navbar/>
      <ForecastMain/>
    </div>
  );
}

export default forecast;