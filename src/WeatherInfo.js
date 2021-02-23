import React from "react";
import WeatherForecast from "./WeatherForecast"
import WeatherTemperature from "./WeatherTemperature";
import "./WeatherInfo.css"

export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo row">
            <h1>{props.data.city}</h1>
            <div className="col-3 mt-3">
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
            <div className="col-9 mt-3">
                <div>
                    <WeatherForecast city= {props.data.city} /> 
                </div>
            </div>
        </div>
    )
}