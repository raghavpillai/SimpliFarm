import Navbar from "../components/navbar";
import { getUser, auth } from '../lib/firebase-client';
import { useState } from "react";
import {onAuthStateChanged} from "firebase/auth";
import Image from "next/image";
import Link from "next/link";


export default function Profile(){
    const [photoURL, setPhotoURL] = useState(null)
    const [name ,setName] = useState("")
    const [email ,setEmail] = useState("")

    onAuthStateChanged(auth, (user) => {
        if (user){
            setPhotoURL(user.photoURL)
            setName(user.displayName)
            setEmail(user.email)
            localStorage.setItem('name', JSON.stringify(name));
        }
        else {
            
        }
    })

    return(
        <div className="overflow-hidden relative h-screen">
            <div className="w-[40rem] h-[40rem] rounded-xl absolute rotate-[20deg] bottom-0 right-0 translate-x-1/2 translate-y-1/2 opacity-20 bg-[#56E1FF] z-0"></div>
            <div className="w-[10rem] h-[10rem] rounded-xl absolute rotate-[15deg] -top-6 -left-12  opacity-20 bg-[#56E1FF] z-0"></div>

            <Navbar></Navbar>
            <div className='w-full h-[5rem] opacity-20 bg-[#56E1FF] mb-4 z-10'></div>

                {photoURL !== null && 
                    <div className=" flex flex-col items-center pt-8 px-12">
                    {photoURL !== null && <Image
                        className="rounded-full object-cover"
                        src={photoURL}
                        height={250}
                        width={250}
                        alt="Your profile"
                        />}
                    <div className="text-2xl font-semibold my-4">{name}</div>
                    <div className="text-xl font-semibold">{email}</div>
                    <div className="flex my-4">
                        <Link href="/form">
                        <div className="px-4 py-2 bg-[#AAF1FF] mx-4 rounded-full cursor-pointer">
                            Enter Data
                        </div>
                        </Link>
                        <Link href="/dashboard">
                        <div className="px-4 py-2 bg-[#AAF1FF] mx-4 rounded-full cursor-pointer">
                            Visit Charts
                        </div>
                        </Link>
                        

                    </div>
                    

                </div>}
        </div>
    );
}