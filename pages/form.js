import Image from 'next/image'
import styles from '../styles/form.module.css'
import React, {Component, useState} from 'react';
import {onAuthStateChanged} from "firebase/auth";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { NativeSelect, InputLabel, Select, OutlinedInput, MenuItem } from '@mui/material';
import Navbar from '../components/navbar';
import Link from 'next/link';

const fields = ["zip-code", "acres", "soilPPM", "crop-type"];


export default function Form() {


    const [zipCode, setZipCode] = useState('')
    const [acres, setAcres] = useState('');
    const [currentSoilPPM, setCurrentSoilPPM] = useState('');
    const [expectedSoilPPM, setExpectedSoilPPM] = useState('');
    const [cropType, setCropType] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
    }


    // handlechange(event){
    //     console.log(this.state)
    //     for(let field in fields){
    //         if(event.target.id.search(fields[field])){
    //             let temp = this.state.inputs.slice()
    //             temp[field] = event.target.value
    //             this.setState({inputs: temp})
    //             console.log(this.state)
    //             return;
    //         }
    //     }

    // }


    return (
        <>  
            {/* <div className="image-background h-[100%] w-[100%] absolute m-0">
            </div> */}
            {/* <Navbar /> */}
            
            <div className='h-screen w-full relative overflow-y-hidden'>
                <div id="bottomCircle"className='absolute rounded-full bg-[#AAF1FF] -translate-x-1/2 translate-y-1/2 left-1/2 -bottom-8 w-[50rem] h-[40rem] z-0'></div>
                <div className='w-full h-[5rem] bg-[#C8F5FF] px-4 flex items-center justify-between'>
                    <Link href={"/"}>
                        <div className='font-black text-3xl cursor-pointer'>
                            FU
                        </div>
                    </Link>
                    <Link href={"/profile"}>
                        <div className='font-semibold text-2xl cursor-pointer'>
                            Profile
                        </div>
                    </Link>

                </div>
                <div className='flex justify-center pt-16 z-50'>
                    <form id="form" className='w-[28rem] h-[35rem] bg-[#F9FEFF] p-6 shadow-2xl z-50' onSubmit={handleSubmit}>
                        <label className=''>
                            Zip Code
                        </label>
                        <input className='w-full border-2 rounded-lg p-2 mb-6' 
                            value={zipCode}
                            onChange={e => setZipCode(e.target.value)}
                            name="zip"
                            type="text"
                        >
                        </input>

                        <label className=''>
                            Acres
                        </label>
                        <input className='w-full border-2 rounded-lg p-2 mb-6' 
                            onChange={(e) => setAcres(e.target.value)}
                            value={acres}
                            type="text"
                        >
                        </input>

                        <label className=''>
                            Current Soil PPM
                        </label>
                        <input className='w-full border-2 rounded-lg p-2 mb-6' 
                            onChange={(e) => setCurrentSoilPPM(e.target.value)}
                            value={currentSoilPPM}
                            type="text"
                        >
                        </input>

                        <label className=''>
                            Expected Soil PPM
                        </label>
                        <input className='w-full border-2 rounded-lg p-2 mb-6' 
                            onChange={(e) => setExpectedSoilPPM(e.target.value)}
                            value={expectedSoilPPM}
                            type="text"
                        >
                        </input>
                    </form>

                </div>

            </div>
        </>
    )
}

