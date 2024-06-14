import './weatherMain.css';
import React, { useState, useEffect } from 'react';
import Search from '../../images/search.png';
import {getWeatherByCity} from '../../helpers/requests';
import weatherLogo from '../../images/weather.png'
import windLogo from '../../images/wind.png'
const WeatherMain = () => {

    const [weatherData, setWeatherData] = useState(null);
    const [localizationValue, setLocalizationValue] = useState(null);

    console.log(localizationValue)
    

    const fetchData = async () => {
        try {
            const data = await getWeatherByCity(localizationValue);
            setWeatherData(data);
            
            console.log(weatherData[0].temp);
        } catch (error) {
            console.error('Erro ao buscar dados:', error);
        }
    };

    return (   
    <div className='main-weather'>
        <div className='container'>
            <input onChange={(e) => setLocalizationValue(e.target.value)} placeholder='Search localization'/>
            <img onClick={fetchData} className='search' src={Search}/>
        </div>

        <div className='weather-details'>

        {weatherData && (
                <div className='cards' >
                    <img src= {weatherLogo} className='weather-logo'/>
                    <h2>{weatherData[0].name}</h2>
                    <br/>
                    <p><span>Temperature: </span>{weatherData[0].temp}°C</p>
                    <br/>
                    <p>Min Temperature: {weatherData[0].temp_min}°C</p>
                    <br/>
                    <p>Max Temperature: {weatherData[0].temp_max}°C</p>
                    <br/>
                    <p>Feels Like: {weatherData[0].feels_like}°C</p>
                    
                
                    
                   
                   
                </div>
            )}

        {weatherData && (
        <div className='cards' >
            <img src= {windLogo} className='weather-logo'/>
            <br/>
            <h2>Weather Details</h2>
            <br/>
            <p>Pressure: {weatherData[0].pressure} hPa</p>
            <br/>
            <p>Humidity: {weatherData[0].humidity}%</p>
            <br/>
            <p>Wind Speed: {weatherData[0].wind_speed} m/s</p>
            <br/>
            <p>Wind Direction: {weatherData[0].wind_deg}°</p>
        </div>
            )}

        </div>
       
    </div>
    )
}

export default WeatherMain;