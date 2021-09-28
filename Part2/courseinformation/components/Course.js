import React from 'react'

const Header = ({ course }) => {
  return (
    <h1>{course.name}</h1>
  )
}

const Total = ({ course }) => {
  const reducer = (previousValue, currentValue) => previousValue + currentValue.exercises;
  const sum = course.parts.reduce(reducer, 0);
  return (
    <p>Number of exercises {sum}</p>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  )
}

const Content = ({ course }) => {
  let partArray = []
  course.parts.forEach(element => {
    partArray.push(<Part part={element} key={element.id} />)
  });
  return (
    <div>
      {partArray}
    </div>
  )
}

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

const Courses = ({ courses }) => {
  let partArray = []
  courses.forEach(element => {
    partArray.push(<Course course={element} key={element.id} />)
  });
  return (
    <div>
      {partArray}
    </div>
  )
}

export default Courses