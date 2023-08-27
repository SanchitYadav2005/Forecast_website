function Weather({weatherData}){
    return(
        <h1>{weatherData.location.name}</h1>
    )
}

export default Weather;