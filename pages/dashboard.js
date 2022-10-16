import styles from '../styles/dashboard.module.css'
import React, {Component} from 'react';
import {Chart as ChartJS} from "chart.js/auto";
import { Line } from 'react-chartjs-2';
import Navbar from '../components/navbar';

const labels = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const options = { 
    responsive: true,
    maintainAspectRatio: true
}

const data = {
  labels: labels,
  datasets: [
    {
      label: "Milimeters of Water Needed",
      backgroundColor: "#FDFCFF",
      borderColor: "#56E1FF",
      data: [0, 10, -1, 2, 20, 30, 45],
    },
  ],
};

export default function Dashboard(){

    return (
        <>
            <Navbar></Navbar>
            <div className='w-full h-[5rem] opacity-20 bg-[#56E1FF] mb-4'></div>
            <div className="linear-gradient absolute h-[100%] w-[100%] left-0"></div>
            <div className='w-1/1 h-auto text-4xl font-bold text-center'>Results for Wheat</div>
            <div className='w-1/1 h-1/1 items-center'>
                <div className='self-center w-3/4 h-1/2 translate-x-[17.5%]'>
                    <Line className ="self-center" options={options} data={data} />
                </div>
            </div>
        </>
    )
        
    

}
