import styles from '../styles/dashboard.module.css'
import React, {Component, useState} from 'react';
import {Chart as ChartJS} from "chart.js/auto";
import { Line } from 'react-chartjs-2';

export default function Humidity(props) {

    const labels = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const options = { 
        responsive: true,
        maintainAspectRatio: true,
        animation: {
            duration: 3500,
            easing: 'easeInOutBack',
            delay: 250,
            colors: { type: 'color', properties: ['borderColor', 'backgroundColor'], from: 'transparent' }
        }
    }

    const data = {
        labels: labels,
        datasets: [
            {
                label: "",
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: '#FDFCFF',
                data: props.data[0],
            },
            {
                label: "",
                backgroundColor: "#FDFCFF",
                borderColor: "#56E1FF",
                data: props.data[1],
            },
        ],
    };

    return (
        <Line className ="self-center" options={options} data={data} />
    )
}