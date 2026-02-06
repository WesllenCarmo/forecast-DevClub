function WeatherInformations({ weatherInfo }) {
    if (!weatherInfo.weather) {
        return null;
    }
    
    return (
        <div>
            <div>
                <h2>{weatherInfo.name}</h2>
            </div>
            <div>
                <img src={`https://openweathermap.org/payload/api/media/file/${weatherInfo.weather[0].icon}.png`} alt="Weather Icon" />
                <p>{Math.round(weatherInfo.main.temp)}°C</p>
            </div>
        </div>
    )
}
export default WeatherInformations;