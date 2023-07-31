
import {useState} from 'react';
import './App.css';

import Search from './components/search/search';
import CurrentWeather from './components/current-weather/current-weather';
import Forecast from "./components/forecast/forecast";
import {WEATHER_API_KEY, WEATHER_API_URL} from "./api";


function App() {

    const [currentWeather, setCurrentWeather] = useState(null);
    const [forecast, setForecast] = useState(null);
    const [daily, setDaily] = useState(false);

    const handleOpenDaily = () => {
        setDaily((prevDaily) => !prevDaily);
    };

    const handleOnSearchChange = (searchData) => {
        const [lat, lon] = searchData.value.split(" ");

        const currentWeatherFetch = fetch(
            `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
        );
        const forecastFetch = fetch(
            `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
        );

        Promise.all([currentWeatherFetch, forecastFetch])
            .then(async (response) => {
                const weatherResponse = await response[0].json();
                const forecastResponse = await response[1].json();

                setCurrentWeather({ city: searchData.label, ...weatherResponse });
                setForecast({ city: searchData.label, ...forecastResponse });
            })
            .catch(console.log);
    };

    return (
    <div className="container">
        <h1> Search for current weather and forecast</h1>
      <Search onSearchChange={handleOnSearchChange} />
        {currentWeather && <CurrentWeather data={currentWeather} />}
        {currentWeather && <button className='show-daily' onClick={handleOpenDaily}>{daily ? 'Hide Hourly' : 'Show Hourly'}</button>}
        {daily ? forecast && <Forecast data={forecast} /> : null}
    </div>
  );

}

export default App;