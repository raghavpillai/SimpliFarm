import styles from '../styles/dashboard.module.css'
import React, {Component, useState} from 'react';
import {Chart as ChartJS} from "chart.js/auto";
import { Doughnut } from 'react-chartjs-2';

export default function CostSplit(props) {

    const options = { 
        responsive: true,
        maintainAspectRatio: true
    }

    const data = {
        labels: ['Water Cost in Dollars', 'Fertilzer Cost in Dollars'],
        datasets: [
          {
            label: '# of Votes',
            data: props.data,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      };

    return (
        <Doughnut className ="self-center" options={options} data={data} />
    )
}