import { useState, useRef } from 'react'
import axios from 'axios'
import WeatherInformations from '../src/components/WeatherInformations/WeatherInformations.jsx'
import './App.css'


function App() {
  const [weather, setWeather] = useState()
  const inputRef = useRef()

  async function searchCity() {

    const city = inputRef.current.value
    const key = import.meta.env.VITE_OPENWEATHER_API_KEY
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric&lang=pt_br`

    const apiInfo = await axios.get(url)
    setWeather(apiInfo.data)
    console.log(apiInfo.data)
    
    
  }
  return (
    <div>
      <h1>DevClub Previsão do Tempo</h1>
      <input ref={inputRef}type="text" placeholder='Digite o nome da cidade:'/>
      <button onClick={searchCity}>Buscar</button>

      {weather && <WeatherInformations forecast={weather}/>}
    </div>
  )
}

export default App
