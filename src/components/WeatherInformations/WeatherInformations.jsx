import styles from './WeatherInformations.module.css'
function WeatherInformations({ forecast }) {
    if (!forecast.weather) {
        return null;
    }
    
    return (
        <div className={styles.weatherContainer}>
            <div className={styles.weatherInfo}>
                <h2>{forecast.name}</h2>
            </div>
            <div className={styles.weatherInfo}>
                <img src={`https://openweathermap.org/payload/api/media/file/${forecast.weather[0].icon}.png`} alt="Weather Icon" />
                <p className={styles.temperature}>{Math.round(forecast.main.temp)}°C</p>
            </div>
            <p className={styles.description}>{forecast.weather[0].description}</p>
            <div className={styles.details}>
                <p>Sensação térmica: {Math.round(forecast.main.feels_like)}°C</p>
                <p>Umidade: {Math.round(forecast.main.humidity)}%</p>
                <p>Pressão: {Math.round(forecast.main.pressure)} hPa</p>
            </div>
        </div>
    )
}
export default WeatherInformations;