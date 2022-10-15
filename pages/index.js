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
    <div className="bg-[#56E1FF] opacity-60 drop absolute top-28 right-24 w-32 h-32"></div>
    <div className="bg-[#56E1FF] opacity-50 drop absolute top-44 right-14 w-32 h-32"></div>

    {/* Rectangle */}
    <div className="w-[50rem] h-[15rem] opacity-20 bg-[#56E1FF] absolute -top-28 -right-40 rotate-[20deg]"></div>
    <div className="softGlow absolute h-[45rem] w-[45rem] left-0 -translate-x-1/2"></div>

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
    </>
  )
}
