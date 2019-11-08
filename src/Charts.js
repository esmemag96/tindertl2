import React, { Component } from 'react';
import './App.css';
import '../node_modules/react-vis/dist/style.css';
import {XYPlot, LineSeries, VerticalBarSeries, VerticalGridLines, HorizontalGridLines, XAxis, YAxis, ChartLabel} from 'react-vis';

class Charts extends Component {
  render() {
    const data = [
      {x: 0, y: 0},
      {x: 1, y: 1},
      {x: 2, y: 4},
      {x: 3, y: 3},
      {x: 4, y: 5},
      {x: 5, y: 2},
      {x: 6, y: 4},
      {x: 7, y: 3},
      {x: 8, y: 5},
      {x: 9, y: 3},
      {x: 10, y: 7},
      {x: 11, y: 9},
      {x: 12, y: 8}
    ];
    return (
      <div className="Charts">
        <XYPlot height={300} width={300}>
        <ChartLabel 
            text="Mes"
            className="alt-x-label"
            includeMargin={false}
            xPercent={0.06}
            yPercent={0.06}
            style={{
              transform: 'rotate(-90)',
              textAnchor: 'end',
            }}
            />
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          <ChartLabel 
            text="Matches"
            className="alt-y-label"
            includeMargin={false}
            xPercent={0.06}
            yPercent={0.06}
            style={{
              transform: 'rotate(-90)',
              textAnchor: 'end',
            }}
            />
          <LineSeries data={data} style={{strokeWidth: 5}}/>
        </XYPlot>
      </div>
    );
  }
}

export default Charts;