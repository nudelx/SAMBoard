import React from 'react'
import { Doughnut } from 'react-chartjs'

const data = [
  {
    color: "#F7464A",
    highlight:"#FF5A5E",
    label: "Red",
    value: 122.03
  },
  {
    color: "#F74ccc",
    highlight:"#FF5aaa",
    label: "Blue",
    value: 33
  }
]

const Pie = ({ }) => {
  return (
    <div>
      <Doughnut width="600" height="250"  data={data}/>
    </div>
  )
}

export default Pie
