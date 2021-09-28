import React, { useState } from 'react'
import CountryDisplay from './CountryDisplay'


const Country = (props) => {
  const { country } = props
  const [show, setShow] = useState(false)

  const onClickHandler = () => {
    setShow(!show)
  }

  return (
    <div>
      <div>
        {country.name} <button onClick={onClickHandler}>Show</button>
      </div>
      <CountryDisplay country={country} show={show} />
    </div>
  )
}

export default Country