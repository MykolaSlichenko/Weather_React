import "./current-weather.css";

const CurrentWeather = () => {
    return (
        <div className='weather'>
            <div className='top'>
                <div>
                    <p className='city'>City</p>
                    <p className='weather-description'>description</p>
                </div>
                <img alt='weather' className='weather-icon'  />
            </div>
            <div className='bottom'>
                <p className='temperature'>20°C</p>
                <div className='details'>
                    <div className='parameter-row'>
                        <span className='parameter-label'>Details</span>
                        <span className='parameter-value'>Cloudy</span>
                    </div>
                    <div className='parameter-row'>
                        <span className='parameter-label'>Feels like</span>
                        <span className='parameter-value'>12°C</span>
                    </div>
                    <div className='parameter-row'>
                        <span className='parameter-label'>Wind</span>
                        <span className='parameter-value'>15 m/s</span>
                    </div>
                    <div className='parameter-row'>
                        <span className='parameter-label'>Humidity</span>
                        <span className='parameter-value'>100%</span>
                    </div>
                    <div className='parameter-row'>
                        <span className='parameter-label'>Pressure</span>
                        <span className='parameter-value'>122 mmHg</span>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default CurrentWeather;