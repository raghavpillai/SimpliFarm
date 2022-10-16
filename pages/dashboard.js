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
import Precip from '../components/precipgraph';



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
        <div>
            {/* <div className="linear-gradient absolute h-[100%] w-[100%] left-0"></div> */}
            <Navbar></Navbar>   
            {/* square */}
            <div className='absolute w-[30rem] h-[30rem] opacity-10 bg-[#56E1FF] rounded-2xl top-20 -right-80 rotate-[60deg]  translate-y-full z-0'></div>
            <div className='absolute w-[20rem] h-[20rem] opacity-10 bg-[#56E1FF] rounded-2xl top-40 left-0 rotate-[-30deg]  z-0'></div>
            <div className='absolute w-[20rem] h-[20rem] opacity-10 bg-[#FFA9F3] rounded-2xl bottom-0 left-1/2 -translate-x-full translate-y-full rotate-[45deg] z-0 '></div>
            <div className='absolute w-[15rem] h-[15rem] opacity-10 bg-[#FFA9F3] rounded-2xl -bottom-3/4 right-0 -translate-x-1/2 translate-y-full rotate-[70deg] z-0 '></div>
            <div className='absolute w-[15rem] h-[15rem] opacity-10 bg-[#56E1FF] rounded-2xl -bottom-full left-0 -translate-x-1/2 translate-y-full rotate-[60deg] z-0 '></div>




            <div className='w-full h-[5rem] opacity-20 bg-[#56E1FF] mb-6 z-10'></div>
            <div className='grid grid-cols-2 grid-rows-4 align-center justify-center items-center text-center z-10 '>


                <div className='font-bold align-center justify-center items-center text-[3rem]  text-center relative'>
                    <div className=' z-50'>
                    {dump.name}, {dump.state}<br></br>{dump.country}
                    </div>
                    {/* <div className='absolute translate-x-1/2 -translate-y-1/2 top-1/2 left-1/4 -ml-24 z-0'><img className="w-[50%]  rounded-[1rem] border z-0" src={dump.image}/></div> */}
                </div>
                <div className='flex justify-center z-0'><img className="w-[55%] shadow-2xl rounded-[1rem] border z-0" src={dump.image}/></div>
                
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
                    <div className='w-1/1 h-auto text-[2rem] font-bold text-center'>Fertilizer Usage</div>
                    <div className='w-1/1 h-auto items-center'>
                        <div className='self-center w-3/4 h-auto ml-[10%]'>
                            <FertGraph data={fert} />
                        </div>
                    </div>
                </div>
                
                <div className='align-center'>
                    <div className='w-1/1 h-auto text-[2rem] font-bold text-center'>Water Consumption</div>
                    <div className='w-1/1 h-auto items-center'>
                        <div className='self-center w-3/4 h-auto ml-[10%]'>
                            <WaterGraph data={waterlevels} />
                        </div>
                    </div>
                </div>

                {/* <div className='align-center justify-center items-center text-center z-10'>
                    <img className="w-[60%] ml-[20%] rounded-[1rem] border" src={dump.image}/>
                </div> */}

                <div>
                    <div className='w-1/1 h-auto text-[2rem] font-bold text-center mt-4'>Temperatures</div>
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
                            <Humidity data={humidity} />
                        </div>
                    </div>
                </div>

                <div>
                    <div className='w-1/1 h-auto text-[2rem] font-bold text-center mt-4'>Daily Cost</div>
                    <div className='w-1/1 h-auto items-center'>
                        <div className='self-center w-3/4 h-auto ml-[10%]'>
                            <CostSplit data={costs} />
                        </div>
                    </div>
                </div>

                <div>
                    <div className='w-1/1 h-auto text-[2rem] font-bold text-center mt-4'>Precipitation</div>
                    <div className='w-1/1 h-auto items-center'>
                        <div className='self-center w-3/4 h-auto ml-[10%]'>
                            <Precip data={precip} />
                        </div>
                    </div>
                </div>



            </div>



            <hr className='w-[80%] h-[.1rem] self-center bg-slate-600 translate-x-[10%] m-1 my-8'/>

            <div className='w-1/1 align-center justify-center items-center text-center'>
                <table className='w-3/4 align-center justify-center items-center text-center font-[1rem border-black translate-x-[12.5%] mt-3 mb-12 '>
                    <tr>
                        <th className='text-3xl px-2'>30 Day Prediction</th>
                        <th className='text-3xl px-2'>Amount</th>
                        <th className='text-3xl px-2'>Confidence  </th>
                    </tr>
                    <tr>
                        <td className='text-3xl px-2'>Fertilizer Usage</td>
                        <td className='text-2xl px-2'>{dump.predicted_fert[0]}</td>
                        <td className='text-2xl px-2'>{dump.predicted_fert[1]}</td>
                    </tr>
                    <tr>
                        <td className='text-3xl px-2'>Water Usage</td>
                        <td className='text-2xl px-2'>{dump.predicted_water[0]}</td>
                        <td className='text-2xl px-2'>{dump.predicted_water[1]}</td>
                    </tr>
                    <tr>
                        <td className='text-3xl px-2'>Plant Stress</td>
                        <td className='text-2xl px-2'>{dump.predicted_stress[0]}</td>
                        <td className='text-2xl px-2'>{dump.predicted_stress[1]}</td>
                    </tr>
                </table>
            </div>

        </div>
    );
        
    
}
