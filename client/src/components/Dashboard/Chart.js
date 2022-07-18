import React, { Component } from 'react'
import ReactApexChart from "react-apexcharts";


export class Chart extends Component {
    constructor(props) {
        super(props);
        this.state = {
        
          series: [{
              name: "Amount ",
              data: props.cdata.map((ele)=>{
                return ele.Amount
              }),
          },{
            name:"Units consumed ",
            data: props.cdata.map((ele)=>{
                return ele.Unit
              }),
          }],
          options: {
            chart: {
              height: 350,
              type: 'line',
              zoom: {
                enabled: false
              }
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              curve: 'straight'
            },
            title: {
              text: 'Bill per month',
              align: 'left'
            },
            grid: {
              row: {
                colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                opacity: 0.5
              },
            },
            xaxis: {
              categories: props.cdata.map((ele)=>{
                return ele.BillGenDate
              })
            }
          },
        
        
        };
      } 
  render() {
    return (
      <div>
        <div id="chart">
  <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={350} />
</div>
      </div>
    )
  }
}

export default Chart
