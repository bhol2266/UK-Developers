import Head from 'next/head'
import Image from 'next/image'


export default function Home() {
  return (
    <div>

      <div className='relative bg-banner w-full bg-no-repeat bg-cover h-[300px] lg:h-[400px] xl:h-[600px] space-x-4 flex items-center justify-center'>


        <button className='hover:bg-gray-600 font-inter font-medium  px-4 py-2 rounded-[5px] text-white bg-textMain'>Discover more</button>

        <button className='hover:bg-gray-600 font-inter font-medium  px-4 py-2 rounded-[5px] text-white bg-textMain'>Services</button>
      </div>

    </div>
  )
}
