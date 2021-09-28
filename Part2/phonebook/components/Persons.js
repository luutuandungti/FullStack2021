import React from 'react'

const Persons = (props) => {
  const { persons, filterValue, handleDeletePerson } = props

  return (
    persons.filter((element) => element.name.toLocaleLowerCase().match(filterValue.toLocaleLowerCase()))
      .map(element => <div key={element.name}>{element.name}  {element.number}
        <button
          id={element.id}
          name={element.name}
          onClick={handleDeletePerson}>delete</button></div>)
  )
}
export default Persons
