import React, { Component } from "react";
import { scaleBand, scaleLinear } from "d3-scale";
import XYAxis from "./Axis/XYAxis.jsx";
import Grid from "./Grid/Grid.jsx";
import Bar from "./Bar/Bar.jsx";
import { transition } from "d3-transition";

class MyChart extends Component {
  //Framer motion text variants
  constructor(props) {
    super(props);
    this.state = {
      data: null, // Initially set data to null
      loading: true, // Set loading state to true
    };
  }
  componentDidMount() {
    // Simulate data fetching delay
    setTimeout(() => {
      // Once data is fetched, update the state
      this.setState({
        data: this.props.data,
        loading: false, // Update loading state to false
      });
    }, 1000); // Adjust the delay time as per your requirement
  }

  render() {
    const { data, loading } = this.state;

    if (loading) {
      return <div>Loading...</div>; // Render loading message while data is being fetched
    }

    const parentWidth = 600;
    const margin = {
      top: 10,
      right: 10,
      bottom: 20,
      left: 40,
    };
    const ticks = 6;
    const t = transition().duration(2000);

    const width = parentWidth - margin.left - margin.right;
    const height = parentWidth * 0.5 - margin.top - margin.bottom;

    const xScale = scaleBand()
      .domain(data.map((d) => d.name))
      .range([0, width])
      .padding(0.4);

    const yScale = scaleLinear()
      .domain([0, Math.max(...data.map((d) => d.value))])
      .range([height, 0])
      .nice();

    return (
      <div>
        <svg
          width={width + margin.left + margin.right}
          height={height + margin.top + margin.bottom}
        >
          <g transform={`translate(${margin.left}, ${margin.top})`}>
            <XYAxis {...{ xScale, yScale, height, ticks, t }} />
            <Grid {...{ xScale, yScale, width, ticks, t }} />
            <Bar
              {...{
                xScale,
                yScale,
                data,
                height,
                t,
               
              }}
            />
          </g>
        </svg>
      </div>
    );
  }
}
export default MyChart;
