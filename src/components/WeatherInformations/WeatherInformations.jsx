function WeatherInformations({ forecast }) {
    if (!forecast.weather) {
        return null;
    }
    
    return (
        <div>
            <div>
                <h2>{forecast.name}</h2>
            </div>
            <div>
                <img src={`https://openweathermap.org/payload/api/media/file/${forecast.weather[0].icon}.png`} alt="Weather Icon" />
                <p>{Math.round(forecast.main.temp)}°C</p>
            </div>
        </div>
    )
}
export default WeatherInformations;