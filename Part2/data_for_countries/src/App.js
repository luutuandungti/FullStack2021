import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import Countries from './components/Countries'

function App() {
  const [countries, setCountries] = useState([])
  const [filter, setNewFilter] = useState('')

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }

  useEffect(() => {
    axios.get('https://restcountries.eu/rest/v2/all')
      .then(resposnse => {
        setCountries(resposnse.data)
      })
  }, [])

  return (
    <div>
      find countries:
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <Countries countries={countries} filterValue={filter} />
    </div>
  )
}

export default App;
