import React from "react";
var Chart = require("chart.js");

class BarChart extends React.Component {

  componentDidMount() {
    const node = this.node;

    var myChart = new Chart(node, {
      type: "bar",
      data: {
        labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        datasets: [
          {
            label: "Amount in Cedis",
            data: [12, 19, 3, 8, 5, 9, 4, 20, 12, 23, 12, 8],
            backgroundColor: [
              "rgba(255, 0, 0)",
              "rgba(54, 162, 235)",
              "rgba(255, 206, 86)",
              "rgba(255, 99, 132)",
              "rgba(54, 162, 235)",
              "rgba(255, 206, 86)",
              "rgba(0, 89, 86)",
              "rgba(255, 0, 86)",
              "rgba(0, 255, 86)",
              "rgba(0, 255, 0)"
            ]
          }
        ]
      }
    });
  }

  render() {
    return (
      <div>
        <canvas
          style={{ width: 800, height: 400 }}
          ref={node => (this.node = node)}
        />
      </div>
    );
  }
}

export default BarChart;
