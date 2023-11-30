import React from 'react'
import ReactDOM from 'react-dom'

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

  // console.log(course.parts[0].exercises)

  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

const Header = ({course}) => {
  return (
    <h1>
      {course.name}
    </h1>
  )
}

const Content = ({parts}) => {
  return(
    <div>
      <Part name={parts[0].name} exercises={parts[0].exercises}></Part>
      <Part name={parts[1].name} exercises={parts[1].exercises}></Part>
      <Part name={parts[2].name} exercises={parts[2].exercises}></Part>
    </div>
  )
}

const Part = ({name, exercises}) => {
  return(
    <p>
      {name} {exercises}
    </p>
  )
}

const Total = ({parts}) => {
  return(
    <div>
      {parts[0].exercises  + parts[1].exercises + parts[2].exercises}
    </div>
  )
}

//   return (
//     <div>
//       <h1>{course}</h1>
//       <p>
//         {part1} {exercises1}
//       </p>
//       <p>
//         {part2} {exercises2}
//       </p>
//       <p>
//         {part3} {exercises3}
//       </p>
//       <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
//     </div>
//   )
// }

ReactDOM.render(<App />, document.getElementById('root'))