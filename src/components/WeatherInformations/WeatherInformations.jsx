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
            <p>{forecast.weather[0].description}</p>
            <div>
                <p>Sensação térmica: {Math.round(forecast.main.feels_like)}°C</p>
                <p>Umidade: {Math.round(forecast.main.humidity)}%</p>
                <p>Pressão: {Math.round(forecast.main.pressure)} hPa</p>
            </div>
        </div>
    )
}
export default WeatherInformations;