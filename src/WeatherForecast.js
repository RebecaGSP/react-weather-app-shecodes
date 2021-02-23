import React, {useState} from "react";
import axios from "axios";
import ForecastPreview from "./ForecastPreview";

export default function WeatherForecast(props) {
    const[loaded, setLoaded] = useState(false);
    const[forecast, setForecast] = useState(null);

    function handleResponse(response) {
        setForecast(response.data)
        setLoaded(true);
    }

    if (loaded && props.city === forecast.city.name) {
        return (
            <div className="WeatherForecast row">
                {forecast.list.slice(0, 7).map(function(forecastItem) {
                    return <ForecastPreview data={forecastItem}/>
                })}
            </div>
        );
    } else {
        const apiKey = "48b09ccbd64506cbc4fe7db34fbff847";
        const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`
        axios.get(apiUrl).then(handleResponse)
    
        return <p>{props.city}</p>

    }
}