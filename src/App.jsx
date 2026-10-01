import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
 
      <label for="tytul"><h2>Tytuł Książki</h2></label>
      <input type='text' id='tytul'></input>
      <label for="autor"><h2>Autor Książki</h2></label>
      <input type='text' id='autor'></input>

      <h2>Gatunek</h2>
      <select>
        <option></option>
    <option value={1} id='powiesc'>Powieść</option>
    <option value={2} id='kryminal'>Kryminał</option>
    <option value={3} id='fantastyka'>Fantastyka</option>
    <option value={4} id='biografia'>Biografia</option>

      </select>





        <button
          type="button"
          onClick="dodaj">Dodaj
        </button>
      </section>

      
    </>











  )
}

export default App
