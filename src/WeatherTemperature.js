import React, {useState} from "react";

export default function WeatherTemperature(props) {
    const [unit, setUnit] = useState("celsius");

    function converToFahrenheit(event) {
        event.preventDefault();
        setUnit("fahrenheit");
    }

    function converToCelsius(event) {
        event.preventDefault();
        setUnit("celsius");
    }

    if(unit === "celsius") {
        return (
            <div className="float-left">
                <h2 className="temperature float-left">{props.celsius}</h2>
                <span className="unit">ºC | <a href="/" onClick={converToFahrenheit}>ºF</a></span>
            </div>
        )
    } else {
        let fahrenheit = Math.round((props.celsius * 9)/5+32);
        return (
            <div className="float-left">
                <h2 className="temperature float-left">{fahrenheit}</h2>
                <span className="unit"><a href="/" onClick={converToCelsius}>ºC</a> | ºF</span>
            </div>
        )
    }
}