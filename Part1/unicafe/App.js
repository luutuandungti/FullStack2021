import React, { useState } from 'react'

const Header = (props) => {
  return (
    <div>
      <h1>{props.text}</h1>
    </div>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.handleClick} > {props.text}</button>
  )
}

const StatisticLine = (props) => {
  const { text, value } = props
  return (
    <tr>
      <th colSpan="3">{text}</th>
      <td colSpan="2">{value}</td>
    </tr>

  )
}

const Statistic = (props) => {
  const { good, neutral, bad } = props
  const total = good + neutral + bad

  if (total === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  } else {
    return (
      <table>
        <tbody>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="total" value={total} />
          <StatisticLine text="avarage" value={(good - bad) / total} />
          <StatisticLine text="positive" value={good * 100 / total} />
        </tbody>
      </table>
    )
  }
}

const App = () => {

  const headerText = "Give feedback"
  const statisticText = "Statistic"

  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const addGood = () => () => {
    setGood(good + 1)
  }

  const addNeutral = () => () => {
    setNeutral(neutral + 1)
  }

  const addBad = () => () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <Header text={headerText} />
      <div>
        <Button text="Good" handleClick={addGood()} />
        <Button text="Neutral" handleClick={addNeutral()} />
        <Button text="Bad" handleClick={addBad()} />
      </div>
      <Header text={statisticText} />
      <Statistic good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
