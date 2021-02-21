import React from "react";
import "./Weather.css";

export default function Weather() {
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
                            <h1>Mexico</h1>
                            <ul>
                                <li><strong>Last Updated: Sunday 14:18</strong></li>
                                <li><h5>Broken Clouds</h5></li>
                            </ul>
                            <div className="clearfix">
                                <img src="http://openweathermap.org/img/wn/04n@2x.png" alt="Broken Clouds" className="float-left"/>
                                <div className="float-left">
                                    <h2 className="temperature float-left">24</h2>
                                    <span className="unit">ºC | ºF</span>

                                </div>
                            </div>
                            <ul>
                                <li>Precipitation: 0%</li>
                                <li>Wind: 2Mph</li>
                                <li>Humidity: 73%</li>
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
}