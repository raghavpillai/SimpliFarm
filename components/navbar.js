import Image from 'next/image'
import { useEffect, useState } from 'react';
import {onAuthStateChanged} from "firebase/auth";
import { signInWithGoogle, signOutWithGoogle, getUser, auth } from '../lib/firebase-client';

export default function Navbar() {
    
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // const [name, setName] = useState("Hello User")
        onAuthStateChanged(auth, (user) => {
            if (user){
                setUser(user)
            }
            else {
                setUser(null)
            }
            setLoading(false)
        })



    const signInWithGoogleFunct = async () => {
        await signInWithGoogle();
        // setUser(getUser());
        
    }

    const signOutWithGoogleFunct = () => {
        signOutWithGoogle();
        alert("You have signed out")
        // setUser(null)
    }

    

    
    return (
        <div className="absolute top-0 w-full h-[5rem] flex justify-between items-center py-4 px-8">
            <div className='font-black text-3xl'>
                FU
            </div>
            <div>
                {user !== null && ("Hello " + user.displayName)}
            </div>
            {!loading && (user === null ? 
                <button className="bg-white px-4 py-2 rounded-full flex z-50" onClick={()=>signInWithGoogleFunct()}>
                    <Image src="/assets/googleicon.png" width={30} height={30}></Image>
                    <p className="my-auto ml-4 text-lg">Sign In</p>
                </button> : 
                <button className="bg-white px-4 py-2 rounded-full flex z-50" onClick={()=>signOutWithGoogleFunct()}>
                    <Image src="/assets/googleicon.png" width={30} height={30}></Image>
                    <p className="my-auto ml-4 text-lg">Sign Out</p>
                </button>)
            }
        </div>
    );
}