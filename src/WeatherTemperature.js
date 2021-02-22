import react from "react";

export default function WeatherTemperature(props) {
    return (
        <div className="float-left">
            <h2 className="temperature float-left">{props.celsius}</h2>
            <span className="unit">ºC | ºF</span>
        </div>
    )
}