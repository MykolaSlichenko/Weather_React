import React, { useState } from "react";
import "./forecast .css";

const Forecast = ({ data }) => {
    console.log('data', data);

    const [selectedItem, setSelectedItem] = useState(null);
    const [forecastByHour, setforecastByHour] = useState(data.list.slice(0, 10));

    const handleItemClick = (index) => {
        setSelectedItem(data.list[index]);
    };

    const closeModal = () => {
        setSelectedItem(null);
    };

  const handleShowMoreItem = () => {
    setforecastByHour(data.list.slice(0, 40));
    //TODO when click button show more set state from 0 to 40 otherwise 0 to 20
    // setforecastByHour((prevDaily) => !prevDaily);
  };

    return (
        <>
            <div>
                {forecastByHour.map((item, idx) => (
                    <div key={idx} onClick={() => handleItemClick(idx)}>
                        <div className="daily-item">
                            <img src={`icons/${item.weather[0].icon}.png`} className="icon-small" alt="weather" />
                            <label className="day">{item.dt_txt.slice(5, -3)}</label>
                            {/*<label className="day">{forecastDays[idx]}</label>*/}
                            <label className="description">{item.weather[0].description}</label>
                            <label className="min-max">{Math.round(item.main.temp)}°C</label>
                        </div>
                    </div>
                ))}
            </div>
          <button onClick={() => handleShowMoreItem()}>Show More</button>

            {selectedItem && (
              <div className={`modal ${selectedItem ? 'show' : ''}`} key="modal">
                    <div className="modal-content">
                      <div className="daily-details-grid"><div>{selectedItem.dt_txt}</div>
                        {/*<button className="close" onClick={closeModal}>Close</button>*/}
                        <div className="close" onClick={closeModal}>&times;</div>

                        <div>
                          <div className="daily-item">
                            <img src={`icons/${selectedItem.weather[0].icon}.png`} className="icon-small" alt="weather" />
                            {/*<label className="day">{selectedItem.dt_txt.slice(5, -3)}</label>*/}
                            {/*<label className="day">{forecastDays[idx]}</label>*/}
                            <label className="description">{selectedItem.weather[0].description}</label>
                            <label className="min-max">{Math.round(selectedItem.main.temp)}°C</label>
                          </div>
                                <div className="daily-details-grid-item">
                                    <label>Pressure:</label>
                                    <label>{Math.round(selectedItem.main.pressure * 0.750062)}mmHg</label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label>Humidity:</label>
                                    <label>{selectedItem.main.humidity}%</label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label>Clouds:</label>
                                    <label>{selectedItem.clouds.all}%</label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label>Wind speed:</label>
                                    <label>{selectedItem.wind.speed} m/s</label>
                                </div>
                                {/*<div className="daily-details-grid-item">*/}
                                    {/*<label>Sea level:</label>*/}
                                    {/*<label>{selectedItem.main.sea_level}m</label>*/}
                                {/*</div>*/}
                                <div className="daily-details-grid-item">
                                    <label>Feels like:</label>
                                    <label>{selectedItem.main.feels_like}°C</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Forecast;