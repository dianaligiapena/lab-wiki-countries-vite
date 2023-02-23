import { useState } from 'react'
import './App.css'
import countriesJSON from './countries.json'

import NavBar from './components/NavBar'
import CountriesList from './components/CountriesList'

function App() {
  const [countries, setCountries] = useState(countriesJSON)


  return (
    <div className="App">

    <NavBar />

    <CountriesList countries={countries} />

    </div>
  )
}

export default App
