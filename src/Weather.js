import React, {useState} from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
    const [ready, setReady] = useState(false)
    const [weatherData , setWeatherData] = useState({});

    //Current Date
    function formatDate(timestamp) {
        let date = new Date(timestamp);
        let weekDay = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
        ];
        let day = weekDay[date.getDay()];
        return `${day}, ${formatHours(timestamp)}`;
    }
      
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

    //City API call
    function handleResponse(response) {
        console.log(response.data)
        setWeatherData({
            city: response.data.name,
            currentDate: formatDate(response.data.dt * 1000),
            description: response.data.weather[0].description,
            temperature: Math.round(response.data.main.temp),
            wind: Math.round(response.data.wind.speed),
            humidity: response.data.main.humidity,
            iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
        })
        setReady(true)
    }

    if (ready) {
        return (
            <div className="Weather">
                <div className="card">
                    <h1 className="title">What the Weather</h1>
                    <div className="card-body">
                        <form>
                            <div className="input-group">
                                <input type="text" placeholder="Search for any city" className="form-control" autoFocus="on"/>
                                <button type="submit" className="input-group-text" id="basic-addon2"value="Search">Search</button>
                            </div>
                        </form>
                        <div className="row">
                            <div className="col-4 mt-3">
                                <h1>{weatherData.city}</h1>
                                <ul>
                                    <li><strong>Last Updated: {weatherData.currentDate}</strong></li>
                                    <li><h5>{weatherData.description}</h5></li>
                                </ul>
                                <div className="clearfix">
                                    <img src={weatherData.iconUrl} alt={weatherData.description} className="float-left"/>
                                    <div className="float-left">
                                        <h2 className="temperature float-left">{weatherData.temperature}</h2>
                                        <span className="unit">ºC | ºF</span>
    
                                    </div>
                                </div>
                                <ul>
                                    <li>Precipitation: 0%</li>
                                    <li>Wind: {weatherData.wind}Mph</li>
                                    <li>Humidity: {weatherData.humidity}%</li>
                                </ul>
                            </div>
                            <div className="col-8 mt-6">
                                <h2>Forecast</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        const apiKey = "48b09ccbd64506cbc4fe7db34fbff847";
        const apiUrl = `https:/api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`
        axios.get(apiUrl).then(handleResponse)

        return "Loading...";
    }

}