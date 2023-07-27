import React, { useState } from "react";
import "./forecast .css";

const Forecast = ({ data }) => {
    console.log('data', data);

    const [selectedItem, setSelectedItem] = useState(null);

    const handleItemClick = (index) => {
        setSelectedItem(data.list[index]);
    };

    const closeModal = () => {
        setSelectedItem(null);
    };

    return (
        <>
            <div>
                {data.list.slice(0, 7).map((item, idx) => (
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

            {selectedItem && (
                <div key="modal" className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={closeModal}>&times;</span>
                        <div>
                            <div className="daily-details-grid">
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
                                <div className="daily-details-grid-item">
                                    <label>Sea level:</label>
                                    <label>{selectedItem.main.sea_level}m</label>
                                </div>
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