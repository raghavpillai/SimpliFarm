import styles from '../styles/form.module.css'
import React, {Component, useEffect, useState} from 'react';
import { NativeSelect, InputLabel, Select, OutlinedInput, MenuItem } from '@mui/material';
import Navbar from '../components/navbar';
import Link from 'next/link';
import { useRouter } from 'next/router'
import { getUser, postData } from '../lib/firebase-client';

export default function Form() {

    const [loaded, setLoaded] = useState(false)
    const [zipCode, setZipCode] = useState('')
    const [acres, setAcres] = useState('');
    const [currentSoilPPM, setCurrentSoilPPM] = useState('');
    const [phone, setPhone] = useState('');
    const [cropType, setCropType] = useState('');
    const [errorMessage, setErrorMessage] = useState('')

    const router = useRouter()

    function handleSubmit(event){
        handleChange(event)
        console.log(zipCode, acres, currentSoilPPM, phone, cropType)
        fetch(`http://127.0.0.1:5000/api/${zipCode}/${cropType}/${acres}/${currentSoilPPM}`, {
            method: 'GET'
        }).then(res => res.json())
        .then(res => {
            console.log(res)
            localStorage.setItem('obj', JSON.stringify(res));
            router.push('/dashboard')
        })
    }

    useEffect(()=>{
        setLoaded(true)
    }, [])

    const handleChange = async (event) => {
        event.preventDefault();
        const zipCodeInput = document.getElementById('zip-code').value
        const acresInput = document.getElementById('acres').value
        const currentPPMInput = document.getElementById('cur soil ppm').value
        const phoneNum = document.getElementById('phone').value
        const cropInput = document.getElementById('crop-type').value
        if (zipCodeInput === '' || acresInput==='' || currentPPMInput==='' || phoneNum==='' || cropInput===''){
            setErrorMessage("The form contains incorrect fields");
            return;
        }
        setErrorMessage('')
        setZipCode(zipCodeInput)
        setAcres(acresInput)
        setCurrentSoilPPM(currentPPMInput)
        setPhone(phoneNum)
        setCropType(cropInput)

        const farmData = {
            'zipZode': zipCodeInput,
            'acre': acresInput,
            'soilPPM': currentPPMInput,
            'phone': phoneNum,
            'crop': cropInput,
        }
        await postData(farmData);
        console.log("fetching")
        fetch(`http://127.0.0.1:5000/api/${zipCodeInput}/${cropInput}/${acresInput}/${currentPPMInput}`, {
            method: 'GET'
        }).then(res => res.json())
        .then(res => {
            console.log(res)
            localStorage.setItem('obj', JSON.stringify(res));
            router.push('/dashboard')
        })
    }


    if(loaded){
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
                            SF
                        </div>
                    </Link>
                    <Link href={"/profile"}>
                        <div className='font-semibold text-2xl cursor-pointer'>
                            Profile
                        </div>
                    </Link>
                </div>
                <div className='flex flex-col items-center pt-12 z-50'>
                    <div className='text-5xl font-bold mb-4'>Enter your farm data</div>
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
                            Phone number
                        </label>
                        <input className='w-full border-2 rounded-lg p-2 mb-6 input' 
                            type="text"
                            id="phone"
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
                        <div className='text-center text-red-900'>{errorMessage}</div>

                    </form>

                </div>
    
                </div>
            </>
        )
        
    }
    else {
            return(
                <p>Loading</p>
            )
        }
    
}

