import { useState, useRef } from 'react'
import axios from 'axios'
import WeatherInformations from '../src/components/WeatherInformations/WeatherInformations.jsx'
import WeatherInformations5Days from './components/WeatherInformations5Days/WeatherInformations5Days.jsx'
import './App.css'


function App() {
  const [weather, setWeather] = useState()
  const [weather5Days, setWeather5Days] = useState()
  const inputRef = useRef()

  async function searchCity() {

    const city = inputRef.current.value
    const key = import.meta.env.VITE_OPENWEATHER_API_KEY

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric&lang=pt_br`
    const url5dayforecast = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&units=metric&lang=pt_br`

    const apiInfo = await axios.get(url)
    const apiInfo5DayForecast = await axios.get(url5dayforecast)

    setWeather5Days(apiInfo5DayForecast.data)
    setWeather(apiInfo.data)
  }
  return (
    <div className='container'>
      <h1>DevClub Previsão do Tempo</h1>
      <input ref={inputRef}type="text" placeholder='Digite o nome da cidade:'/>
      <button onClick={searchCity}>Buscar</button>

      {weather && <WeatherInformations forecast={weather}/>}
      {weather5Days && <WeatherInformations5Days forecast5Days={weather5Days}/>}
    </div>
  )
}

export default App
