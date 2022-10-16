import styles from '../styles/dashboard.module.css'
import React, {Component, useState} from 'react';
import {Chart as ChartJS} from "chart.js/auto";
import { Line, Doughnut } from 'react-chartjs-2';
import Navbar from '../components/navbar';
import WaterGraph from '../components/watergraph';
import TempGraph from '../components/tempgraph';
import CostSplit from '../components/costsplit';
import Score from '../components/score'
import FertGraph from '../components/fertgraph';
import Humidity from '../components/humidity';



export default function Dashboard() {
    let waterlevels = []
    let fert = []
    let tempHi = []
    let tempLo = []
    let precip = []
    let humidity = []
    let costs = [[], []]
    
    let dump = JSON.parse(localStorage.getItem('obj'));
    
    console.log(dump)
    
    for(let i=0; i < 14; i++){
        console.log(dump.days[i])
        waterlevels.push(dump.days[i].ppm.water)
        costs[0].push(dump.days[i].ppm.water_cost)
        costs[1].push(dump.days[i].ppm.fert_cost)
        fert.push(dump.days[i].ppm.fert)
        tempHi.push(dump.forecast[i].max_f)
        tempLo.push(dump.forecast[i].min_f)
        precip.push(dump.forecast[i].precip)
        humidity.push(dump.forecast[i].humidity)
    }
    return (
        <>
            {/* <div className="linear-gradient absolute h-[100%] w-[100%] left-0"></div> */}
            <Navbar></Navbar>   
            <div className='w-full h-[5rem] opacity-20 bg-[#56E1FF] mb-6 z-10'></div>
            <div className='grid grid-cols-3 grid-rows-3 align-center justify-center items-center text-center'>

                <div className='font-bold align-center justify-center items-center text-center text-[3rem]'>{dump.name}, {dump.state}<br></br>{dump.country}</div>
                
                <div>
                    <div className='w-1/1 h-auto text-[2rem] font-bold text-center mt-4'>Fertility Rating</div>
                    <div className='w-1/2 mx-auto items-center my-4'>
                        <div className='self-center w-3/4 h-auto ml-[10%]'>
                            <Score data={dump.total_score}/>
                            {/* <CostSplit data={costs} /> */}
                        </div>
                    </div>
                </div>

                <div className='align-center'>
                    <div className='w-1/1 h-auto text-[2rem] font-bold text-center'>Fertilizer Usage for Wheat</div>
                    <div className='w-1/1 h-auto items-center'>
                        <div className='self-center w-3/4 h-auto ml-[10%]'>
                            <FertGraph data={fert} />
                        </div>
                    </div>
                </div>
                
                <div className='align-center'>
                    <div className='w-1/1 h-auto text-[2rem] font-bold text-center'>Water Consumption for Wheat</div>
                    <div className='w-1/1 h-auto items-center'>
                        <div className='self-center w-3/4 h-auto ml-[10%]'>
                            <WaterGraph data={waterlevels} />
                        </div>
                    </div>
                </div>

                <div className='align-center justify-center items-center text-center'>
                    <img className="w-[60%] ml-[20%] rounded-[1rem] border" src={dump.image}/>
                </div>

                <div>
                    <div className='w-1/1 h-auto text-[2rem] font-bold text-center mt-4'>Temperatures over 14 days</div>
                    <div className='w-1/1 h-auto items-center'>
                        <div className='self-center w-3/4 h-auto ml-[10%]'>
                            <TempGraph data={[tempHi, tempLo]} />
                        </div>
                    </div>
                </div>

                <div>
                    <div className='w-1/1 h-auto text-[2rem] font-bold text-center mt-4'>Humidity</div>
                    <div className='w-1/1 h-auto items-center'>
                        <div className='self-center w-3/4 h-auto ml-[10%]'>
                            <Humidity data={[tempHi, tempLo]} />
                        </div>
                    </div>
                </div>

                <div>
                    <div className='w-1/1 h-auto text-[2rem] font-bold text-center mt-4'>Costs per day for water and Fertilizer</div>
                    <div className='w-1/1 h-auto items-center'>
                        <div className='self-center w-3/4 h-auto ml-[10%]'>
                            <CostSplit data={costs} />
                        </div>
                    </div>
                </div>

            </div>



            <hr className='w-[80%] h-[.1rem] self-center bg-slate-600 translate-x-[10%] m-1'/>

            <div className='w-1/1 align-center justify-center items-center text-center'>
                <table className='w-3/4 align-center justify-center items-center text-center font-[1rem border-black translate-x-[12.5%] mt-3 mb-3'>
                    <tr>
                        <th>Prediction for the next 30 days</th>
                        <th>Amount</th>
                        <th>Confidence  </th>
                    </tr>
                    <tr>
                        <td>Fertilizer Usage</td>
                        <td>{dump.predicted_fert[0]}</td>
                        <td>{dump.predicted_fert[1]}</td>
                    </tr>
                    <tr>
                        <td>Stress</td>
                        <td>{dump.predicted_stress[0]}</td>
                        <td>{dump.predicted_stress[1]}</td>
                    </tr>
                    <tr>
                        <td>Water Usage</td>
                        <td>{dump.predicted_water[0]}</td>
                        <td>{dump.predicted_water[1]}</td>
                    </tr>
                </table>
            </div>

        </>
    );
        
    
}
