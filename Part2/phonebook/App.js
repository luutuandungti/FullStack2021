import React, { useEffect, useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/person'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setNewFilter] = useState('')
  const [notificationMessage, setNotificationMessage] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }

  const handleDeletePerson = (event) => {
    event.preventDefault()
    if (window.confirm(`Delete ${event.target.name}?`)) {
      personService
        .del(event.target.id)
        .then(() => {
          personService.getAll()
            .then(initialList => setPersons(initialList))
        })
    }
  }

  const handleAddPerson = (event) => {
    event.preventDefault()
    const newPerson = { name: newName, number: newNumber }
    if (persons.find(element => element.name === newName)) {
      alert(`${newName} is already added to phonebook`)
    } else {
      personService
        .create(newPerson)
        .then(returnedPerson => {
          console.log(returnedPerson)
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewNumber('')
          setNotificationMessage(`Added ${newName}`)
          setTimeout(() => {
            setNotificationMessage('')
          }, 5000)


        })
    }
  }

  useEffect(() => {
    personService
      .getAll()
      .then(initialList => setPersons(initialList))
  }, [])


  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notificationMessage} />
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <h2>Add new</h2>
      <PersonForm
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        handleAddPerson={handleAddPerson}
      />
      <div>new name: {newName}</div>
      <h2>Numbers</h2>
      <Persons
        persons={persons}
        filterValue={filter}
        handleDeletePerson={handleDeletePerson} />
    </div>
  )
}

export default App