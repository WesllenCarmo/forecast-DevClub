import styles from './WeatherInformations5Days.module.css'
function WeatherInformations5Days({ forecast5Days }) {
    if (!forecast5Days) {
        return null;
    }
    console.log(forecast5Days);
    let dailyForecast = {}

    for(let forecast of forecast5Days.list) {
        const date = new Date(forecast.dt * 1000).toLocaleDateString()

        if (!dailyForecast[date]) {
            dailyForecast[date] = forecast;
        }

    }
    console.log(dailyForecast);
    
    return (
        <div className={styles.weatherContainer}>
            <p>Forecast 5 Days</p>
        </div>
    )
}
export default WeatherInformations5Days;