import Head from 'next/head'
import Image from 'next/image'


export default function Home() {
  return (
    <div>

      <div className='relative'>

        <img src="./homepage_bg.png" alt="" className='absolute  top-0 left-0 right-0 -z-10' />


        <div className='absolute -bottom-[250px] right-0 left-0 space-x-4 flex items-center justify-center'>

          <button className='hover:bg-gray-600 font-inter font-medium  px-4 py-2 rounded-[5px] text-white bg-textMain'>Discover more</button>

          <button className='hover:bg-gray-600 font-inter font-medium  px-4 py-2 rounded-[5px] text-white bg-textMain'>Services</button>
        </div>

      </div>
    </div>
  )
}
