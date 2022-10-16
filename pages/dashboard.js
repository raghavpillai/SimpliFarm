import styles from '../styles/dashboard.module.css'
import React, {Component, useState} from 'react';
import {Chart as ChartJS} from "chart.js/auto";
import { Line, Doughnut } from 'react-chartjs-2';
import Navbar from '../components/navbar';
import WaterGraph from '../components/watergraph';
import TempGraph from '../components/tempgraph';
import CostSplit from '../components/costsplit';

let waterlevels = []
let fert = []
let tempHi = []
let tempLo = []
let precip = []
let humidity = []
let costs = [0, 0]

const dump = JSON.parse(localStorage.getItem('obj'));

console.log(dump)

for(let i=0; i < 14; i++){
    console.log(dump.days[i])
    waterlevels.push(dump.days[i].ppm.water)
    costs[0] += dump.days[i].ppm.water_cost
    costs[1] += dump.days[i].ppm.fert_cost
    fert.push(dump.days[i].ppm.fert)
    tempHi.push(dump.forecast[i].max_f)
    tempLo.push(dump.forecast[i].min_f)
    precip.push(dump.forecast[i].precip)
    humidity.push(dump.forecast[i].humidity)
}

export default function Dashboard() {

    return (
        <>
            {/* <div className="linear-gradient absolute h-[100%] w-[100%] left-0"></div> */}
            <Navbar></Navbar>
            <div className='w-full h-[5rem] opacity-20 bg-[#56E1FF] mb-6 z-10'></div>
            <div className='w-1/1 h-auto text-4xl font-bold text-center'>Results for Wheat</div>
            <div className='w-1/1 h-1/1 items-center'>
                <div className='self-center w-3/4 h-1/2 translate-x-[17.5%]'>
                    <WaterGraph data={waterlevels} />
                </div>
            </div>
            <div className='w-1/1 h-auto text-4xl font-bold text-center mt-4'>Temperatures over 7 days</div>
            <div className='w-1/1 h-1/1 items-center'>
                <div className='self-center w-3/4 h-1/2 translate-x-[17.5%]'>
                    <TempGraph data={[tempHi, tempLo]} />
                </div>
            </div>
            <div className='w-1/1 h-auto text-4xl font-bold text-center mt-4'>Water & Fertilizer Costs</div>
            <div className='w-1/1 h-1/1 items-center mt-4'>
                <div className='self-center w-3/4 h-1/2 translate-x-[17.5%]'>
                    <CostSplit data={costs} />
                </div>
            </div>
        </>
    );
        
    
}
