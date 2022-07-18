import React, { useRef } from 'react'
import ReactECharts from 'echarts-for-react'
import * as echarts from 'echarts'
const AreaChart = ({
  w = '100%',
  h = '9.5rem',
  lineColor = '#0773ff',
  areaColor = '#0773ff',
  chartData,
  dataArray,
}) => {
  const option = {
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: Array.from(Array(dataArray == null ? 6 : dataArray.length), (e, i) => i + 1),
    },
    yAxis: {
      type: 'value',
      // boundaryGap: false,
    },
    series: [
      {
        data: dataArray == null ? [820, 932, 901, 934, 1290, 1330] : dataArray,
        type: 'line',
        smooth: true,
        areaStyle: {},
        lineStyle: { color: lineColor },
        symbolSize: 5,
        symbol: 'circle',
        color: lineColor,
      },
    ],
    areaStyle: {
      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        {
          offset: 0,
          color: areaColor,
        },
        {
          offset: 0.9,
          color: 'rgb(255, 255, 255)',
        },
      ]),
    },
    grid: {
      containLabel: true,
      x: 0,
      x2: 10,
      y: 10,
      y2: 20,
    },
    tooltip: {
      trigger: 'axis',
    },
  }

  // const option = {

  //   xAxis: {
  //     type: 'category',
  //     boundaryGap: false,
  //     data: ['x', 'x', 'x', 'x', 'x']
  //   },
  //   yAxis: {
  //     type: 'value',
  //     // boundaryGap: false,
  //   },
  //   legend: {
  //     data: ['COC', 'IRR', 'LIRR'],
  //     top: 0
  //   },
  //   series: [
  //     {
  //       name: "COC",
  //       data: [820, 932, 901, 934, 1290],
  //       type: 'line',
  //       smooth: true,
  //       areaStyle: {},
  //       lineStyle: { color: 'red' },
  //       symbolSize: 5,
  //       symbol: 'circle',
  //       color: 'red'
  //     },
  //     {
  //       name: "IRR",
  //       data: [70, 200, 250, 225, 300, 320, 350],
  //       type: 'line',
  //       smooth: true,
  //       areaStyle: {},
  //       lineStyle: { color: "green" },
  //       symbolSize: 5,
  //       symbol: 'circle',
  //       color: "green"
  //     },
  //     {
  //       name: "LIRR",
  //       data: [400, 350, 420, 600, 400],
  //       type: 'line',
  //       smooth: true,
  //       areaStyle: {},
  //       lineStyle: { color: "blue" },
  //       symbolSize: 5,
  //       symbol: 'circle',
  //       color: "blue"
  //     }
  //   ],
  //   areaStyle: {
  //     color: "#ffffff00"
  //   },
  //   // areaStyle: {
  //   //   color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
  //   //     {
  //   //       offset: 0,
  //   //       color: areaColor
  //   //     },
  //   //     {
  //   //       offset: 0.9,
  //   //       color: 'rgb(255, 255, 255)'
  //   //     }
  //   //   ])
  //   // },
  //   grid: {
  //     x: 40,
  //     y: 10,
  //     x2: 10,
  //     y2: 20
  //   },
  //   tooltip: {
  //     trigger: 'axis'
  //   }
  // };

  const instance = useRef(null)

  return (
    <>
      <ReactECharts ref={instance} option={option} style={{ height: h, width: w }} />
    </>
  )
}

export default AreaChart
