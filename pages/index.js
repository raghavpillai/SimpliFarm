import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'

export default function Home() {
  return (
    <>
    <Head>
      <title>FARMERS UNITED</title>
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
    <div className="softGlow absolute h-[45rem] w-[45rem] left-0 -translate-x-1/2 z-10"></div>
    <div className='absolute right-52 top-44'>
      <Image src={'/assets/heroImage2.webp'} width={400} height={400}></Image>
    </div>
    
    <div className="flex flex-col z-10 relative">
      <div className="grid grid-cols-2 h-screen place-items-center mx-28">
        <div className="flex-col space-y-2">
          <div className="text-9xl font-extrabold flex items-end">
            Farmers United
            <div className='mb-4'>
              <div className="bg-[#56E1FF] opacity-50 drop w-32 h-32"></div>
            </div>
          </div>
          <div className='text-3xl text-[#2B2B2B]'>
            Do more, save more. Calculate true water needs and track water usage.
          </div>
          <a href="#learnMore" className="rounded-full bg-[#6BBDF8] inline-block px-4 py-2 font-semibold z-50">Learn More</a>
        </div>
      </div>

      <div className="flex flex-col items-center bg-[#12a1c0] drop-shadow-lg py-10 text-white relative overflow-hidden">
        {/* stripe */}
        <div className='absolute top-0 -left-44 w-[120rem] h-[35rem] bg-[#99E3F4] z-0 -rotate-[30deg] shadow'></div>

        <div id="learnMore" className="text-7xl font-black py-5 z-10">How it works.</div>
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
              Start watering!
            </div>
            <div className='text-lg'>
              Start tending to your crops and check back regularly for more data predictions.
            </div>
          </div>

        </div>
      </div>
      <div className='flex flex-col items-center'>
        <div className='text-6xl font-black my-12'>
          Boost Crop Yield
        </div>
        <div className='px-8 pt-8 boostBorder rounded-xl w-1/2 mb-12 shadow-2xl'>
          <div className='w-full h-full p-4 bg-white text-2xl font-semibold text-[#1E1E1E rouded-t-xl'>
            Using machine learning models to predict optimal water usage, save more on water.
            Crunch, track, and display data through Simplifarm. Simplifarm strives to know your farm
            better than anyone else. Boost crop yields while saving costs!
            <div className='flex justify-center my-6'>
              <Image src="/assets/wheat.png" width={100} height={100}></Image>

            </div>
          </div>
          
        </div>
      </div>
      <div className='h-screen flex  envisionBG'>
        <div className='w-1/2 flex items-center justify-center'>
          <div className='text-6xl font-black'>
            Envision Growth
          </div>
        </div>
        <div className='w-1/2 flex items-center justify-end'>
          <div className='py-8 pl-8 boostBorder rounded-l-xl'>
            <Image src="/assets/graph.png" width={1100} height={700}></Image>
          </div>

        </div>

      </div>
    </div>
    </>
  )
}
