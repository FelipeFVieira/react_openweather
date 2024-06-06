import React, { useState, useEffect } from 'react';
import { getWeatherByCity } from './helpers/requests';
import './App.css';

function App() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getWeatherByCity('São Paulo');
        setWeatherData(data);
        console.log(data[0].temp);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="App">
      {weatherData ? (
        <p style={{ color: 'green' }}>Temperatura: {weatherData[0].temp}</p>
      ) : (
        <p style={{ color: 'white' }}>Carregando...</p>
      )}
    </div>
  );
}

export default App;