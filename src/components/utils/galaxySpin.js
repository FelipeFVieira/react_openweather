import './galaxySpin.css';
import React from 'react';
import galaxyWeather from '../../images/galaxyWeather.png'
const GalaxySpin = () => {

    return (   
    <div className='container'>
        <img className='spin-galaxyWeather' src={galaxyWeather} alt="icon galaxyWeather" />
    </div>
    );
}

export default GalaxySpin;