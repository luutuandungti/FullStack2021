import React from 'react'

const CountryDisplay = (props) => {
  const show = props.show
  const country = props.country
  const countryName = country.name
  const languages = country.languages.map(element => <div key={element.name}>{element.name}</div>)
  const flag = country.flag

  if (show !== true) {
    return (<div></div>)
  } else {
    return (
      <div>
        <h1>{countryName}</h1>
        <h2>languages</h2>
        {languages}
        <img src={flag} alt="flag" height="100px"></img>
      </div>
    )
  }
}

export default CountryDisplay
