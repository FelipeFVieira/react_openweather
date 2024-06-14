import React, { useState, useEffect } from 'react';
import Navbar from '../components/nav/navbar.js';
import WeatherMain from '../components/main/weatherMain.js'

function weather() {
//   const [weatherData, setWeatherData] = useState(null);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const data = await getWeatherByCity('São Paulo');
//         setWeatherData(data);
//         console.log(data.temp);
//       } catch (error) {
//         console.error('Erro ao buscar dados:', error);
//       }
//     }

//     fetchData();
//   }, []);

  return (
    <div className="App">
      <Navbar/>
      <WeatherMain/>
    </div>
  );
}

export default weather;