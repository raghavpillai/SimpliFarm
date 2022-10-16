import Image from 'next/image'
import { useEffect, useState } from 'react';
import {onAuthStateChanged} from "firebase/auth";
import { signInWithGoogle, signOutWithGoogle, auth } from '../lib/firebase-client';
import { useRouter } from 'next/router'
import Link from 'next/link';

export default function Navbar() {
    
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const router = useRouter()

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
        if (router.asPath === '/') {
                    router.push('/profile')
                }
        // setUser(getUser());
        
    }

    const signOutWithGoogleFunct = () => {
        signOutWithGoogle();
        alert("You have signed out")
        router.push('/')
        // setUser(null)
    }

    

    
    return (
        <div className="absolute top-0 w-full h-[5rem] flex justify-between items-center py-4 px-8 z-50">
            <Link href={"/"}>
                <div className='font-black text-3xl cursor-pointer'>
                    FU
                </div>
            </Link>
            {/* <div className='absolute text-center top-6 left-1/2 -translate-x-1/2 text-xl font-semibold'>
                {user !== null && ("Hello " + user.displayName)}
            </div> */}
            <div className='flex items-center'>
                {user !== null && <Link href="/profile">
                <div className='cursor-pointer text-2xl font-semibold mr-8'>
                    Profile
                </div>
                </Link>}
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
        </div>
    );
}