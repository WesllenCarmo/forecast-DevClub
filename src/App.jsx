import { useRef } from 'react'
import './App.css'


function App() {
  const inputRef = useRef()
  function searchCity() {
    console.log(inputRef.current.value)
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
