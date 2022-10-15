import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <Head>
      <title>FARMERS UNITED</title>
      <meta name="description" content="Get maximum crop yield" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    {/* Water drops */}
    <div className="bg-[#56E1FF] opacity-60 drop absolute top-28 right-24 w-32 h-32"></div>
    <div className="bg-[#56E1FF] opacity-50 drop absolute top-44 right-14 w-32 h-32"></div>

    {/* Rectangle */}
    <div className="w-[40rem] h-[15rem] opacity-20 bg-[#56E1FF] absolute -top-32 -right-32 rotate-[20deg]"></div>
    <div className="softGlow absolute h-[45rem] w-[45rem] left-0 -translate-x-1/2"></div>
    
    <div className="flex-col">
      <div className="grid grid-cols-2 h-screen place-items-center mx-32">
        <div className="flex-col space-y-2">
          <div className="text-9xl font-extrabold">
            Farmers United
          </div>
          <div>
            Do more, save more. Calculate true water needs and track water usage.
          </div>
          <div className="rounded-full bg-[#6BBDF8] inline-block px-4 py-2 font-semibold">Start now</div>
        </div>
      </div>

      <div className="grid place-items-center bg-[#12a1c0] drop-shadow-lg">
        <div>Sign Up</div>

        <div className="grid place-items-center bg-[#108ca4] p-10 w-1/2 rounded-lg space-y-4 drop-shadow-md text-white font-semibold">
          <div className="grid grid-cols-2">
            <div>ZIP Code</div>
            <input></input>
          </div>

          <div className="grid grid-cols-2">
            <div>Acres</div>
            <input></input>
          </div>

          <div className="grid grid-cols-2">
            <div>Soil PPM</div>
            <input></input>
          </div>

          <div className="grid grid-cols-2">
            <div>Crop Type</div>
            <input></input>
          </div>

          <div>Sign Up</div>
        </div>
      </div>
    </div>
    </>
  )
}
