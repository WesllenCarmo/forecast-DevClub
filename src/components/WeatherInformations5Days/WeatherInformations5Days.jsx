import styles from './WeatherInformations5Days.module.css'
function WeatherInformations5Days({ forecast5Days }) {
    if (!forecast5Days) {
        return null;
    }
    let dailyForecast = {}

    for(let forecast of forecast5Days.list) {
        const date = new Date(forecast.dt * 1000).toLocaleDateString()

        if (!dailyForecast[date]) {
            dailyForecast[date] = forecast;
        }

    }
    const nextFiveDays = Object.values(dailyForecast).slice(1,6)
    function convertDate(date) {
        const newDate = new Date(date * 1000).toLocaleDateString('pt-BR', { weekday: 'long', day: '2-digit'})
        return newDate;
    }
    
    return (
        <div className={styles.weatherContainer}>
            <h3>Previsão dos Próximos 5 Dias</h3>
            {nextFiveDays.map(forecast => (
                <div key={forecast.dt}>
                    <p>{convertDate(forecast.dt)}</p>
                    <img src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`} alt={forecast.weather[0].description} />
                    <p>{forecast.weather[0].description}</p>
                    <p>{Math.round(forecast.main.temp_min)}°C / {Math.round(forecast.main.temp_max)}°C</p>
                </div>
            ))}
        </div>
    )
}
export default WeatherInformations5Days;