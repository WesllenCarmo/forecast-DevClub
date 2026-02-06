import { useRef } from 'react'
import axios from 'axios'
import './App.css'


function App() {
  const inputRef = useRef()

  async function searchCity() {

    const city = inputRef.current.value
    const key = "7703f049f8659d595b920d2eb128d0c1"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric&lang=pt_br`

    const data = await axios.get(url)
    console.log(data);
    
    
  }
  return (
    <div>
      <h1>DevClub Previsão do Tempo</h1>
      <input ref={inputRef}type="text" placeholder='Digite o nome da cidade:'/>
      <button onClick={searchCity}>Buscar</button>
    </div>
  )
}

export default App
