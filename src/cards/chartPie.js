import React from 'react'
import { Doughnut } from 'react-chartjs'

const data = [
  {
    color: "#F7464A",
    highlight:"#FF5A5E",
    label: "Red",
    value: 1.03
  },
  {
    color: "#F74ccc",
    highlight:"#FF5aaa",
    label: "Blue",
    value: 1
  },
  {
    color: "#F7464A",
    highlight:"#FF5A5E",
    label: "Red",
    value: 1
  },
  {
    color: "#F74ccc",
    highlight:"#FF5aaa",
    label: "Blue",
    value: 1
  },
  {
    color: "#F7464A",
    highlight:"#FF5A5E",
    label: "Red",
    value: 1
  },
  {
    color: "#F74ccc",
    highlight:"#FF5aaa",
    label: "Blue",
    value: 1
  },
  {
    color: "#F7464A",
    highlight:"#FF5A5E",
    label: "Red",
    value: 1
  },
  {
    color: "#F74ccc",
    highlight:"#FF5aaa",
    label: "Blue",
    value: 1
  }
]

 const OPT = {
  showTooltips: true,
  segmentShowStroke: true,
  percentageInnerCutout: 50,
  segmentStrokeColor: '#e6e6e6',
  animateRotate: true,
  animationSteps: 75,
  abelFontFamily : "Arial",
  labelFontStyle : "normal",
  labelFontSize : 24,
  labelFontColor : "#666",
  drawPieSegments: function () { return 33 ;}
}

const Pie = ({ }) => {
  return (
    <div>
      <Doughnut width="100" height="100"  data={data} options={OPT} />
    </div>
  )
}

export default Pie
