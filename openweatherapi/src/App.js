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
        console.log(data.temp);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="App">
      <header>
        <div>
aaa
        </div>
        <div>
aaa
        </div>
        <nav>
          <a href="">home</a>
          <a href="">weather</a>
          <a href="">forecast</a>
        </nav>

      </header>

      <main>


      </main>
    </div>
  );
}

export default App;