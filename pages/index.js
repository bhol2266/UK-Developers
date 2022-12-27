import Head from 'next/head'
import Image from 'next/image'


export default function Home() {
  return (

    <div>


      <div className='px-[20px] sm:px-[26px] md:px-[30px] lg:px-[36px] xl:px-[60px] 2xl:px-[70px] bg-banner w-full bg-no-repeat bg-cover h-[300px] lg:h-[400px] xl:h-[600px] '>

        <div className='   flex flex-col justify-start items-start  pt-[100px] md:pt-[140px] xl:pt-[160px] 2xl:pt-[180px]  md:pl-[40px] xl:pl-[100px] 2xl:pl-[200px]'>

          <img src="./Title.png" alt="" className='w-4/5 md:3/5 xl:w-1/2 ' />

          <div className='flex space-x-2 w-full  my-6'>
            <button className='hover:bg-gray-600 font-inter font-medium px-2 py-1 text-[13px] xl:text-[18px]  xl:px-4  xl:py-2 rounded-[5px] text-white bg-textMain'>Discover more</button>
            <button className='hover:bg-gray-600 font-inter font-medium  px-2 py-1 text-[13px] xl:text-[18px]  xl:px-4  xl:py-2 rounded-[5px] text-white bg-textMain'>Services</button>
          </div>
        </div>


      </div>

    </div>
  )
}
