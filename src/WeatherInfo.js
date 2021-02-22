import React from "react";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
    return (
        <div className="row">
            <div className="col-4 mt-3">
                <h1>{props.data.city}</h1>
                <ul>
                    <li><strong>Last Updated: {props.data.currentDate}</strong></li>
                    <li><h5>{props.data.description}</h5></li>
                </ul>
                <div className="clearfix">
                    <img src={props.data.iconUrl} alt={props.data.description} className="float-left"/>
                    <WeatherTemperature celsius={props.data.temperature}/>
                </div>
                <ul>
                    <li>Precipitation: 0%</li>
                    <li>Wind: {props.data.wind}Mph</li>
                    <li>Humidity: {props.data.humidity}%</li>
                </ul>
            </div>
            <div className="col-8 mt-6">
                <h2>Forecast</h2>
            </div>
        </div>
    )
}