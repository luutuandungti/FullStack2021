import React from 'react'
import CountryDisplay from './CountryDisplay'
import Country from './Country'

const Countries = (props) => {
  const { countries, filterValue } = props

  const filteredCountries = countries.filter((element) => element.name.toLocaleLowerCase().match(filterValue.toLocaleLowerCase()))

  if (filteredCountries.length > 10) {
    return (
      <div>Too many countries to display</div>
    )
  } else if (filteredCountries.length === 1) {
    return (
      <CountryDisplay country={filteredCountries[0]} show={true} />
    )
  } else {
    return (
      filteredCountries.map(element => <Country key={element.name} country={element} />)
    )
  }
}

export default Countries
