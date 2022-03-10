import React from 'react';

import './Chart.css';
import ChartBar from './ChartBar';

const Chart = (props) => {
  return (
    <div className='chart'>
      {/* this way we show as many <ChartBar /> elements, as dataPoint elements we have: */}
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={null}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
