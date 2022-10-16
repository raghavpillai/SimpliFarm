import styles from '../styles/form.module.css'
import React, {Component, useEffect, useState} from 'react';
import { NativeSelect, InputLabel, Select, OutlinedInput, MenuItem } from '@mui/material';
import Navbar from '../components/navbar';
import Link from 'next/link';

const fields = ["zip-code", "acres", "soilPPM", "crop-type"];

export default function Form() {

    const [loaded, setLoaded] = useState(false)
    const [zipCode, setZipCode] = useState('')
    const [acres, setAcres] = useState('');
    const [currentSoilPPM, setCurrentSoilPPM] = useState('');
    const [expectedSoilPPM, setExpectedSoilPPM] = useState('');
    const [cropType, setCropType] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
    }


    function handleSubmit(event){
        handleChange(event)
    }

    useEffect(()=>{
        setLoaded(true)
    }, [])

    function handleChange(event){
        event.preventDefault();
        
        setZipCode(document.getElementById('zip-code').value)
        setAcres(document.getElementById('acres').value)
        setCurrentSoilPPM(document.getElementById('cur soil ppm').value)
        setExpectedSoilPPM(document.getElementById('exp soil ppm').value)
        setCropType(document.getElementById('crop-type').value)
        console.log(zipCode, acres, currentSoilPPM, expectedSoilPPM, cropType)

    }


    if(loaded){
        return (
            <>  
                {/* <div className="image-background h-[100%] w-[100%] absolute m-0">
                </div> */}
                {/* <Navbar /> */}
                
                <div className='h-screen w-full relative overflow-y-hidden'>
                    <div className='absolute rounded-full bg-[#AAF1FF] -translate-x-1/2 translate-y-1/2 left-1/2 -bottom-8 w-[50rem] h-[40rem] z-0'></div>
                    <div className='w-full h-[5rem] bg-[#9AE9FB] z-50'></div>
                    <div className='flex justify-center pt-16 z-50'>
                        <form className='w-[28rem] h-[35rem] bg-[#F9FEFF] p-6 shadow-2xl z-50'>
                            <label className=''>
                                Zip Code
                            </label>
                            <input className='w-full border-2 rounded-lg p-2 mb-6 input' 
                                type="text"
                                id="zip-code"
                                onInput={handleChange}
                            >
                            </input>
    
                            <label className=''>
                                Acres
                            </label>
                            <input className='w-full border-2 rounded-lg p-2 mb-6 input' 
                                type="text"
                                id="acres"
                                onInput={handleChange}
                            >
                            </input>
    
                            <label className=''>
                                Current Soil PPM
                            </label>
                            <input className='w-full border-2 rounded-lg p-2 mb-6 input' 
                                type="text"
                                id="cur soil ppm"
                                onInput={handleChange}
                            >
                            </input>
    
                            <label className=''>
                                Expected Soil PPM
                            </label>
                            <input className='w-full border-2 rounded-lg p-2 mb-6 input' 
                                type="text"
                                id="exp soil ppm"
                                onInput={handleChange}
                            >
                            </input>
    
    
                            <label>
                                Crop Type
                            </label>
                            <select className='w-full border-2 rounded-lg p-2 mb-6 input' id="crop-type" onChange={handleChange}>
                                <option className="option" value=""></option>
                                <option className="option" value="Corn">Corn</option>
                                <option className="option" value="Cotton">Cotton</option>
                                <option className="option" value="Wheat">Wheat</option>
                                <option className="option" value="Soybean">Soybean</option>
                                <option className="option" value="Rice">Rice</option>
                            </select>
    
                            <div className='w-full'>
                                <button className='button border rounded' onClick={handleSubmit}>
                                    Submit
                                </button>
                            </div>
    
                        </form>
    
                    </div>
    
                </div>
            </>
        )
        return(
            <p>Loading</p>
        )
    }
    
}

