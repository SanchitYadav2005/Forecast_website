function Weather({weatherData}){
    return(
        <div className="card">
            <div className="card-img">
                <img src={weatherData.current.condition.icon}/>
            </div>
            <p className="weather-detail">{weatherData.current.condition.text}</p>
            <p className="weather-detail">Temprature in °C:- {weatherData.current.temp_c}</p>
            <p className="weather-detail">Temprature in °F:- {weatherData.current.temp_f}</p>
            <p className="weather-detail">humidity:- {weatherData.current.humidity}</p>
            <p className="weather-detail">Feels Like:- {weatherData.current.feelslike_c}</p>
            <p className="weather-detail">Local Time:- {weatherData.location.localtime}</p>
        </div>
    )
}

export default Weather;