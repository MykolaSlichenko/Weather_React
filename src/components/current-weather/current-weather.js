import React from 'react';
import "./current-weather.css";

const CurrentWeather = ({data}) => {
    // const dateUtc = data.dt;
    // const d = new Date('');
    // const currentTime = d.setUTCSeconds(dateUtc);

    return (
        <div className='weather'>
            {console.log('data from current weather', data)}
            <div className='top'>
                <div>
                    <p className='city'>{data.city}</p>
                    <p className='weather-description'>{data.weather[0].description}</p>
                    <p>{data.dt}</p>
                </div>
                <img alt='weather' className='weather-icon' src={`icons/${data.weather[0].icon}.png`} />
            </div>
            <div className='bottom'>
                <p className='temperature'>{Math.round(data.main.temp)}°C</p>
                <div className='details'>
                    <div className='parameter'>
                        <span className='parameter-label'>Feels like</span>
                        <span className='parameter-value'>{Math.round(data.main.feels_like)}°C</span>
                    </div>
                    <div className='parameter'>
                        <span className='parameter-label'>Wind</span>
                        <span className='parameter-value'>{data.wind.speed} m/s</span>
                    </div>
                    <div className='parameter'>
                        <span className='parameter-label'>Humidity</span>
                        <span className='parameter-value'>{data.main.humidity}%</span>
                    </div>
                    <div className='parameter'>
                        <span className='parameter-label'>Pressure</span>
                        <span className='parameter-value'>{Math.round(data.main.pressure * 0.750062)} mmHg</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CurrentWeather;