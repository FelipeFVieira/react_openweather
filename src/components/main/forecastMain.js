import './forecastMain.css';
import React, { useState, useEffect } from 'react';
import Search from '../../images/search.png';
import {getForecastByCity} from '../../helpers/requests';
import weatherLogo from '../../images/weather.png'
import windLogo from '../../images/wind.png'

const ForecastMain = () => {

    const [forecastData, setForecastData] = useState(null);
    const [localizationValue, setLocalizationValue] = useState('');

    const fetchData = async () => {
        try {
            const data = await getForecastByCity(localizationValue);
            console.log(data);
            setForecastData(data);
            
        } catch (error) {
            console.error('Erro ao buscar dados:', error);
        }   
        console.log(forecastData);
    };

    return (   
    <div className='main-forecast'>
        <div className='container'>
            <input value={localizationValue} onChange={(e) => setLocalizationValue(e.target.value)} placeholder='Search localization'/>
            <img onClick={fetchData} className='search' src={Search}/>
        </div>
        <div className='forecast-cards'>
        {forecastData && forecastData.map((item, index) => (
            
            <div key={index} className='cards'>
                <h2 className='date'>{forecastData[index].date}</h2>
                <br/>
                <h2 className='info'>{forecastData[index].name}</h2>
                <br/>
                <p className='info'>Min Temperature: {forecastData[index].temp_min}°C</p>
                <br/>
                <p className='info'>Max Temperature: {forecastData[index].temp_max}°C</p>
                <br/>
                <p className='info'>Wind Speed: {forecastData[index].wind_speed} m/s</p>
                <br/>
                <p className='info'>Wind Direction: {forecastData[index].wind_deg}°</p>
                <br/>
                <p className='info'>Humidity: {forecastData[index].humidity}%</p>
                <br/>
                <p className='info'>Pressure: {forecastData[index].pressure} hPa</p>
            </div>
            
        ))}
        </div>
        {/* <div className='weather-details'>

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

        </div> */}
       
    </div>
    )
}

export default ForecastMain;