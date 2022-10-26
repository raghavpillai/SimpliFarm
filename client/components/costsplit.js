import styles from '../styles/dashboard.module.css'
import React, {Component, useState} from 'react';
import {Chart as ChartJS} from "chart.js/auto";
import { Line } from 'react-chartjs-2';

export default function CostSplit(props) {
    const labels = ["W", "T", "F", "S", "U", "M", "T", "W", "H", "F", "S", "U", "M", "T"];

    const options = { 
        responsive: true,
        maintainAspectRatio: true,
        animation: {
            duration: 3500,
            easing: 'easeInOutBack',
            delay: 250,
            colors: { type: 'color', properties: ['borderColor', 'backgroundColor'], from: 'transparent' }
        },
        animations: {
            tension: {
                delay: 2000,
                duration: 2000,
                easing: 'easeInOutBack',
                from: 0,
                to: 0.3,
                loop: false
            }
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
                label: "Water Cost (USD)",
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: '#FDFCFF',
                data: props.data[0],
            },
            {
                label: "Fertilizer Cost (USD)",
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