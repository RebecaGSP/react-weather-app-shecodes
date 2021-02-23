import React, {useState} from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import "./Weather.css";

export default function Weather(props) {
    const [ready, setReady] = useState(false)
    const [weatherData , setWeatherData] = useState({});
    const [city, setCity] = useState(props.defaultCity)

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
            iconUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
        })
        setReady(true)
    }

    //Search Engine
    function search() {
        const apiKey = "48b09ccbd64506cbc4fe7db34fbff847";
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        axios.get(apiUrl).then(handleResponse)
    }

    function handleSubmit(event) {
        event.preventDefault(); 
        search();    
    }

    function getCity(event) {
        setCity(event.target.value);       
    }

    if (ready) {
        return (
            <div className="Weather">
                <div className="card">
                    <h1 className="title">What the Weather?</h1>
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <div className="input-group">
                                <input type="text" placeholder="Search for any city" className="form-control" autoFocus="on" onChange={getCity}/>
                                <button type="submit" className="input-group-text" id="basic-addon2"value="Search">Search</button>
                            </div>
                        </form>
                        <WeatherInfo data={weatherData}/>
                    </div>
                </div>
            </div>
        )
    } else {
        search();
        return "Loading...";
    }

}