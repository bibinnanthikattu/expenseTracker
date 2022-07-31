import React from 'react';
import './Chart.css'

import{ ChartBar } from './ChartBar';

export const Chart = (props) => {
  const highestValue = props.dataPoints.map(datapoint => datapoint.value);
  const maxValue = Math.max(...highestValue)
  return (
      <div className='chart' >
          {
              props.dataPoints.map(datapoint => (
                  <ChartBar key={datapoint.label} value={datapoint.value} maxValue={maxValue} label={datapoint.label} /> 
              ))
          }
    </div>
  )
}
