import React, { useState } from 'react'

function getRamdomInt(max) {
  return Math.floor(Math.random() * max)
}

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

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]

  const [selected, setSelected] = useState(0)
  const [voteStatus, changeVoteStatus] = useState(Array(anecdotes.length).fill(0))
  const [highestVoted, setHighestvoted] = useState(0)

  const addVote = () => () => {
    const copy = [...voteStatus]
    copy[selected] += 1
    changeVoteStatus(copy)
    if (copy[highestVoted] < copy[selected])
      setHighestvoted(selected)
  }

  const nextSelect = () => () => {
    setSelected(getRamdomInt(anecdotes.length - 1))
  }

  return (
    <div>
      <Header text="Anecdote of the day" />
      {anecdotes[selected]} <br></br>
      has {voteStatus[selected]} votes
      <div>
        <Button text="vote" handleClick={addVote()} />
        <Button text="next anecdote" handleClick={nextSelect()} />
      </div>
      <Header text="Anecdote with the most votes" />
      {anecdotes[highestVoted]} <br></br>
      has {voteStatus[highestVoted]} votes
    </div>
  )
}

export default App
