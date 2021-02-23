import React from "react";

export default function ForecastPreview(props) {
    //Forecast hours
    function formatHours(timestamp) {
        let date = new Date(timestamp);
        let hour = date.getHours();
        if (hour < 10) {
            hour = `0${hour}`;
        }
        let minutes = date.getMinutes();
        if (minutes < 10) {
            minutes = `0${minutes}`;
        }
        return `${hour}:${minutes}`;
    }

    return (
        <div className="WeatherForecast col">
            <strong>{formatHours(props.data.dt * 1000)}</strong>
            <img src={`http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`} id="icon" />
            <small><strong>{Math.round(props.data.main.temp_max)}ºC</strong>{Math.round(props.data.main.temp_min)}ºC</small>
        </div>
    )
}