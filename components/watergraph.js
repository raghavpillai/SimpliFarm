import styles from '../styles/dashboard.module.css'
import React, {Component, useState} from 'react';
import {Chart as ChartJS} from "chart.js/auto";
import { Line } from 'react-chartjs-2';

export default function WaterGraph(props) {
    const labels = ["S", "M", "T", "W", "R", "F", "S", "U", "M", "T", "W", "R", "F", "S"];

    const options = { 
        responsive: true,
        maintainAspectRatio: true,
        animation: {
            duration: 3500,
            easing: 'easeInOutBack',
            delay: 250,
            colors: { type: 'color', properties: ['borderColor', 'backgroundColor'], from: 'transparent' },
        },
        plugins: {
            legend: {
                display: true
            },
        }
    }

    const data = {
        labels: labels,
        datasets: [
            {
                label: "Consumption (liters)",
                backgroundColor: "#FDFCFF",
                borderColor: "#56E1FF",
                data: props.data,
            },
        ],
    };

    return (
        <Line className ="self-center" options={options} data={data} />
    )
}