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
    // Pega os próximos 5 dias, ignorando o dia atual
    const nextFiveDays = Object.values(dailyForecast).slice(1,6)
    // converte a data para o formato "[dia da semana], [dia do mês]"
    function convertDate(date) {
        const newDate = new Date(date * 1000).toLocaleDateString('pt-BR', { weekday: 'long', day: '2-digit'})
        return newDate;
    }
    
    return (
        // exibe as informações da previsão para os próximos 5 dias
        <div className={styles.weatherContainer}>
            <p>Previsão dos Próximos 5 Dias</p>
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