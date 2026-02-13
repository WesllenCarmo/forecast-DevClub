import styles from './WeatherInformations5Days.module.css'
function WeatherInformations5Days({ forecast5Days }) {
    if (!forecast5Days) {
        return null;
    }
    console.log(forecast5Days);
    
    return (
        <div className={styles.weatherContainer}>
            <p>Forecast 5 Days</p>
        </div>
    )
}
export default WeatherInformations5Days;