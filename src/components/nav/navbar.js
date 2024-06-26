import './navbar.css';
import galaxyWeather from '../../images/galaxyWeather.png';
import React, { useState, useEffect } from 'react';


const GalaxyNav = () => {
    return (   
    <div className='header'>
        
        <div className='galaxyDiv'>
            <img className='galaxyWeather' src={galaxyWeather} alt="icon galaxyWeather" />
            <p>GalaxyWeather</p>
        </div>
        <nav>
            <a href="/">HOME</a>
            <a href="/weather">WEATHER</a>
            <a href="forecast">FORECAST</a>
        </nav>
    </div>
    )
}

export default GalaxyNav;