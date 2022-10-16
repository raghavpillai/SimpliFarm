import styles from '../styles/dashboard.module.css'
import React, {Component, useState} from 'react';
import {Chart as ChartJS} from "chart.js/auto";
import { Doughnut } from 'react-chartjs-2';

export default function Score(props) {
    let fill = 'rgba(255, 99, 132, 0.2)'
    if (props.data > 70){
      fill = 'rgba(80, 200, 120, 0.7)'
    }else if (props.data > 40){
      fill = 'rgba(201, 204, 63, 0.7)'
    }else{
      fill = 'rgba(237, 41, 57, 0.7)'
    }
    const options = { 
        responsive: true,
        maintainAspectRatio: true,
        legend: {
            display: false
        },
        animation: {
          duration: 2500,
          easing: 'easeInOutCubic',
        }
    }

    const plugins = [{
      beforeDraw: function(chart) {
       var width = chart.width,
           height = chart.height,
           ctx = chart.ctx;
           ctx.restore();
           var fontSize = (height / 160).toFixed(2);
           ctx.font = fontSize + "font-bold";
           ctx.textBaseline = "top";
           var text = parseInt(props.data) + "%",
           textX = Math.round((width - ctx.measureText(text).width) / 2),
           textY = height / 2;
           ctx.fillText(text, textX, textY);
           ctx.save();
      } 
    }]

    const data = {
        labels: [],
        datasets: [
          {
            label: '# of Votes',
            data: [props.data, 100-props.data],
            borderColor: [
              'rgba(255, 255, 255, 1)',
              'rgba(162, 162, 162, 0.3)',
              'rgba(255, 255, 255, 1)',
              'rgba(255, 255, 255, 1)',
              'rgba(255, 255, 255, 1)',
              'rgba(255, 255, 255, 1)',
            ],
            backgroundColor: [
                fill,
                'rgba(54, 162, 235, 0)',
                'rgba(255, 206, 86, 0)',
                'rgba(75, 192, 192, 0)',
                'rgba(153, 102, 255, 0)',
                'rgba(255, 159, 64, 0)',
            ],
            borderWidth: 1,
          },
        ],
      };

      

    return (
        <>
            <Doughnut className ="self-center" options={options} data={data} plugins={plugins} />
        </>

    )
}