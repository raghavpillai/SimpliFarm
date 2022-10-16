import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'
import { useEffect, useState } from 'react'

export default function Home() {

  return (
    <>
    <Head>
      <title>SimpliFarm</title>
      <meta name="description" content="Get maximum crop yield" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Navbar></Navbar>
    {/* Water drops */}
    {/* <div className="bg-[#56E1FF] opacity-60 drop absolute top-28 right-24 w-32 h-32"></div>
    <div className="bg-[#56E1FF] opacity-50 drop absolute top-44 right-14 w-32 h-32"></div> */}
    <div className='w-40 h-40 bg-[#56E1FF] opacity-[0.53] rounded-xl -rotate-[30deg] top-28 right-32 absolute'></div>

    {/* Rectangle */}
    <div className="w-[50rem] h-[15rem] opacity-20 bg-[#56E1FF] absolute -top-28 -right-40 rotate-[20deg]"></div>
    <div className="softGlow absolute 2xl:h-[50rem] 2xl:w-[50rem] h-[45rem] w-[45rem] left-0 2xl:translate-y-[20%] -translate-x-1/2 z-10"></div>
    <div className='absolute right-52 top-44'>
      <Image src={'/assets/heroImage2.webp'} width={450} height={450}></Image>
    </div>
    
    <div className="flex flex-col z-10 relative">
      <div className="grid grid-cols-2 h-screen place-items-center mx-28">
        <div className="flex-col space-y-2">
          <div className="2xl:text-9xl text-8xl font-extrabold flex items-end">
            SimpliFarm
            <div className='mb-4 ml-4'>
              <div className="bg-[#56E1FF] opacity-50 drop w-24 h-24"></div>
            </div>
          </div>
          <div className='2xl:text-4xl text-3xl text-[#2B2B2B]'>
            Do more, save more. Calculate true farming needs and track resource usage.
          </div>
          <a href="#learnMore" className="rounded-full 2xl:text-xl bg-[#6BBDF8] inline-block px-4 py-2 font-semibold z-50">Learn More</a>
        </div>
      </div>

      <div className="flex flex-col items-center bg-[#12a1c0] drop-shadow-lg py-10 text-white relative overflow-hidden">
        {/* stripe */}
        <div className='absolute top-0 -left-44 w-[120rem] h-[35rem] bg-[#99E3F4] z-0 -rotate-[30deg] shadow'></div>

        <div id="learnMore" className="text-7xl font-extrabold py-5 z-10">How it works.</div>
        <div className='flex items-center my-6 z-10'>
          <div className='text-7xl font-extrabold mr-32 -ml-32'>
            1
          </div>
          <div className='bg-[#108ca4] py-5 px-10 rounded-lg min-w-[35rem] max-w-[35rem]'>
            <div className="font-bold text-3xl">
              Enter your data.
            </div>
            <div className='text-lg'>
              Provide us your ZIP code, size of land, crop type, and soil PPM.
            </div>
          </div>

        </div>
        <div className='flex items-center my-6 z-10'>
          <div className='text-7xl font-extrabold mr-32 -ml-32'>
            2
          </div>
          <div className='bg-[#108ca4] py-5 px-10 rounded-lg min-w-[35rem] max-w-[35rem]'>
            <div className="font-bold text-3xl">
              Analyze your results.
            </div>
            <div className='text-lg'>
              We'll crunch your data and tell you the optimal fertilizer and water amount and average temperature stress for your plot of land, location, and crop based on weather predictions, agricultural research, and our extensive data sets. We do the heavy lifting so you don't have to.
            </div>
          </div>

        </div>
        <div className='flex items-center my-6 z-10'>
          <div className='text-7xl font-extrabold mr-32 -ml-32'>
            3
          </div>
          <div className='bg-[#108ca4] py-5 px-10 rounded-lg min-w-[35rem] max-w-[35rem]'>
            <div className="font-bold text-3xl">
              Start farming!
            </div>
            <div className='text-lg'>
              Start tending to your crops and check back regularly for more data predictions.
            </div>
          </div>

        </div>
      </div>
      <div className='flex flex-col items-center'>
        <div className='text-6xl font-black my-12'>
          Why SimpliFarm
        </div>
        <div className='px-8 pt-8 boostBorder rounded-xl w-3/4 mb-12 shadow-2xl'>
          <div className='w-full h-full p-4 bg-white text-2xl font-semibold text-[#1E1E1E] rouded-t-xl'>
            <div className='flex justify-around'>
              <div className='mx-2 text-center'>
                <h1 className='text-3xl extrabold mb-2'>Sustainable Farming</h1>
                <div>
                  Find how much water and fertilizer you should be saving. Improve soil and land quality for future use. And produce more with less resources.
                </div>
              </div>
              <div className='mx-2 text-center'>
                <h1 className='text-3xl text-black mb-2'>Boost Crop Yield</h1>
                <div>
                  From machine learning models to chart analysis straight to your browser.
                  Crunch, track, and display data through SimpliFarm to improve how you farm.
                </div>
              </div>

            </div>
            <div className='flex justify-center my-8'>
              <Image src="/assets/plant.png" width={100} height={100}></Image>

            </div>
          </div>
          
        </div>
      </div>
      <div className='my-12'>
        <div className='w-11/12 rounded-xl bg-[#12a1c0] m-auto p-8'>
          <h1 className='my-8 text-6xl font-extrabold text-center'>Technology-First</h1>
          <div className='w-4/5 m-auto flex flex-wrap justify-between'>
            {/* card */}
            <div className='w-[20rem] h-[25rem] bg-[#E7FBFF] rounded-xl p-4 text-center my-4 mx-2'>
              <h1 className='text-2xl my-4 font-semibold'>Tech Stack</h1>
              <div className='text-lg'>
                <p>Next.js</p>
                <p>Firebase</p>
                <p>Flask</p>
                <p>SciKit-Learn</p>
                <p>Co:Here</p>
                <p>Twilio</p>
              </div>
            </div>
            {/* card */}
            <div className='w-[20rem] h-[25rem] bg-[#E7FBFF] rounded-xl p-4 text-center my-4 mx-2'>
              <h1 className='text-2xl my-4 font-semibold'>Machine Learning</h1>
              <div className='text-lg'>
              Through our extensive dataset and performing analysis on your data, we can predict future usage patterns to better prepare yourself for your future farming. 
              </div>
            </div>
            {/* card */}
            <div className='w-[20rem] h-[25rem] bg-[#E7FBFF] rounded-xl p-4 text-center my-4 mx-2'>
              <h1 className='text-2xl my-4 font-semibold'>APIs</h1>
              <div className='text-lg'>
                <p>WeatherAPI</p>
                <p>Google Maps API</p>
              </div>
            </div>
          



          </div>
        </div>
      </div>


      <div className='h-screen flex envisionBG'>
        <div className='w-1/2 flex flex-col items-center justify-center'>
          <div className='text-6xl font-black'>
            Envision Growth
          </div>
          <div className='text-2xl font-medium text-[#1E1E1E] mt-4 w-3/4 text-center'>
            View graphs that tailor to your farm. A technological-focused approach to farm data. Don't worry, we got you.
          </div>

        </div>
        <div className='w-1/2 flex items-center justify-end'>
          <div id="chart" className='py-8 pl-8 boostBorder rounded-l-xl'>
                <Image src={"/assets/graph.png"} width={1100} height={700} ></Image>
          </div>

        </div>
      </div>
      <div className='innerShadow px-16 py-16 w-4/5 bg-[#12a1c0] mx-auto rounded-b-2xl mb-16 text-white'>
        <h1 className='mb-8 text-6xl font-extrabold text-center text-white'>Our Vision</h1>
        <div className='text-4xl text-semibold mt-12'>
          Automation
        </div>
        <p className='text-xl'>
          Connect our software analysis with hardware to automate and take care of watering crops.
        </p>

        <div className='text-4xl text-semibold mt-12'>
          Longer Predictions and Historical Data
        </div>
        <p className='text-xl'>
          Train the machine learning model to create more accurate prediction for longer term predictons.
          Use historial data to accomplish tasks.
        </p>

      </div>
    </div>
    </>
  )
}
