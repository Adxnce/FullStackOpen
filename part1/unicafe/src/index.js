import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseGood = () => setGood(good + 1)
  const increaseBad = () => setBad(bad + 1)
  const increaseNeutral = () => setNeutral(neutral + 1)

  return (
    <div>
      <h2>Give Feedback</h2>
        <Button handleClick={increaseGood} text={"good"}/>
        <Button handleClick={increaseNeutral} text={"neutral"}/>
        <Button handleClick={increaseBad} text={"bad"}/>
      
      <h2>Statistics</h2>
        <Statistics good={good} bad={bad} neutral={neutral} ></Statistics>
    </div>
  )
}


const Button = ({handleClick, text}) => {
  return(
    <button onClick={handleClick}>{text}</button>
  )
}

const StatisticLine = ({text, value}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({good, bad, neutral}) => {

  const all = (good + bad + neutral)
  const average = (good - bad)/all
  const positive = good/all

  if (all == 0) {
    return "No feedback Given"
  }

  return(
    <table>
      <StatisticLine text="good" value={good}></StatisticLine>
      <StatisticLine text="neutral"value={neutral}></StatisticLine>
      <StatisticLine text="bad" value={bad}></StatisticLine>
      <StatisticLine text="all"value={all}></StatisticLine>
      <StatisticLine text="average"value={average}></StatisticLine>
      <StatisticLine text="positive"value={positive}></StatisticLine>
    </table>
  )
}



ReactDOM.render(<App />, 
  document.getElementById('root')
)