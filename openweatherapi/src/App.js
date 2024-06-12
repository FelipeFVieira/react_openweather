import './App.css';
import React, { useState, useEffect } from 'react';
import { getWeatherByCity } from './helpers/requests';
import GalaxyNav from './components/GalaxyNav.js';
import GalaxyMain from './components/GalaxyMain.js';

function App() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getWeatherByCity('São Paulo');
        setWeatherData(data);
        console.log(data.temp);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="App">
      <GalaxyNav/>
      <GalaxyMain/>

    </div>
  );
}

export default App;