import React from 'react'

const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div >
  )
}

const Part = (props) => {

  return (
    <div>
      <p>{props.name} {props.exercises}</p>
    </div>
  )
}

const Content = (props) => {
  let partArray = []
  props.parts.forEach(element => {
    partArray.push(<Part name={element.name} exercises={element.exercises} />)
  });

  console.log(partArray)
  return (
    <div>
      {partArray}
    </div>
  )
}

const Total = (props) => {
  let total = 0

  props.parts.forEach(element => total += element.exercises)

  return (
    <div>
      <p>Number of exercies {total} </p>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App
