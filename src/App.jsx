import { useState, useRef } from 'react'
import axios from 'axios'
import WeatherInformations from '../src/components/WeatherInformations/WeatherInformations.jsx'
import WeatherInformations4Days from './components/WeatherInformations4Days/WeatherInformations4Days.jsx'
import './App.css'


function App() {
  const [weather, setWeather] = useState()
  const [weather4Days, setWeather4Days] = useState()
  const inputRef = useRef()

  async function searchCity() {

    const city = inputRef.current.value
    const key = import.meta.env.VITE_OPENWEATHER_API_KEY

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric&lang=pt_br`
    const url4dayforecast = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&units=metric&lang=pt_br`

    const apiInfo = await axios.get(url)
    const apiInfo4DayForecast = await axios.get(url4dayforecast)

    setWeather4Days(apiInfo4DayForecast.data)
    setWeather(apiInfo.data)
  }
  return (
    <div className='container'>
      <h1>DevClub Previsão do Tempo</h1>
      <input ref={inputRef}type="text" placeholder='Digite o nome da cidade:'/>
      <button onClick={searchCity}>Buscar</button>

      {weather && <WeatherInformations forecast={weather}/>}
      {weather4Days && <WeatherInformations4Days forecast4Days={weather4Days}/>}
    </div>
  )
}

export default App
