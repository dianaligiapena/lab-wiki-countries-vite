import { useState } from 'react'
import './App.css'
import countriesJSON from './countries.json'

import NavBar from './components/NavBar'
import CountriesList from './components/CountriesList'
import CountryDetails from './components/CountryDetails'

import { Routes, Route } from 'react-router-dom';

function App() {

  const [countries, setCountries] = useState(countriesJSON)


  return (
    <div className="App">

    <NavBar />

    <div className='container'>
      <div className='row'>

        <CountriesList countries={countries} />

        <Routes>
            <Route 
              path = "/:alpha3Code" 
              element = { <CountryDetails countries = {countries} /> } 
            />
        </Routes>

      </div>
    </div>

    </div>
  )
}

export default App
