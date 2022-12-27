import Head from 'next/head'
import Image from 'next/image'
import ServiceItem from '../components/ServiceItem'


export default function Home() {
  return (

    <div className='pb-24'>


      <div className='px-[20px] sm:px-[26px] md:px-[30px] lg:px-[36px] xl:px-[60px] 2xl:px-[70px] bg-banner w-full bg-no-repeat bg-cover h-[300px] md:h-[350px] lg:h-[400px] xl:h-[550px] '>

        <div className='   flex flex-col justify-start items-start  pt-[100px] md:pt-[140px] xl:pt-[160px] 2xl:pt-[180px]  md:pl-[40px] xl:pl-[100px] 2xl:pl-[200px]'>

          <img src="./Title.png" alt="" className='w-4/5 md:3/5 xl:w-1/2 ' />

          <div className='flex space-x-2 w-full  my-6'>
            <button className='hover:bg-gray-600 font-inter font-medium px-2 py-1 text-[13px] lg:text-[18px]  lg:px-4  lg:py-2 rounded-[5px] text-white bg-textMain'>Discover more</button>
            <button className='hover:bg-gray-600 font-inter font-medium  px-2 py-1 text-[13px] lg:text-[18px]  lg:px-4  lg:py-2 rounded-[5px] text-white bg-textMain'>Services</button>
          </div>
        </div>
      </div>



      <div className='px-[20px] sm:px-[26px] md:px-[60px] lg:px-[36px] xl:px-[90px] 2xl:px-[100px]'>



        {/* Services */}
        <div className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-[70px] md:gap-[100px] xl:gap-[120px] 2xl:gap-[150px] '>
          <ServiceItem image="./services/MobileApps.png" description="We brings your ideas to reality by developing mobile apps rich with user experience." title="Mobile apps" />
          <ServiceItem image="./services/Websites.png" description="We brings your ideas to reality by developing mobile apps rich with user experience." title="Websites & Apps" />
          <ServiceItem image="./services/Analytics.png" description="We brings your ideas to reality by developing mobile apps rich with user experience." title="Analytics" />
          <ServiceItem image="./services/Pricing.png" description="We brings your ideas to reality by developing mobile apps rich with user experience." title="Pricing" />
        </div>


        <div className='mt-16 lg:mt-24'>
          <h1 className='font-Legend font-medium text-center text-textMain text-[22px] md:text-[26px] xl:text-[32px] 2xl:text-[38px]'>One place for all solutions.</h1>
          <p className='font-inter text-[#4B5563] text-center text-[13px] md:text-[15px] xl:text-[16px] mt-1 md:mt-2 xl:mt-3  lg:w-4/5 xl:w-3/5 mx-auto'>Providing the best user experience to your users and directly targeting the problem that was intended to solve, our softwares and applications are not only performant as compared to those leading the market but also rich with modern age design and seemless experience, so whoever you intended that application to be used by, not only bring about their tasks accurately on time but also with 100% effortless actions along with providing experience. </p>
        </div>

        {/* Users and Contacts  */}
        <div className='mt-16 lg:mt-24 md:flex justify-around xl:justify-around space-y-8 md:space-y-0 md:space-x-6  lg:space-x-10   sm:mx-auto   sm:w-fit xl:w-full'>
          <div className='flex items-center md:space-x-2 lg:space-x-4 sm: space-x-4 xl:space-x-6'>
            <img src="./user.png" alt="" className='w-[120px] md:w-[140px] xl:w-[165px] 2xl:w-[170px]' />
            <div>
              <h1 className='font-Legend font-medium text-center text-[#111928] text-[16px] lg:text-[20px] xl:text-[24px] 2xl:text-[26px]'>200+ Users</h1>
              <p className='font-inter text-[#4B5563] text-center text-[13px] lg:text-[15px] xl:text-[16px] mt-1 md:mt-2 xl:mt-3    mx-auto'>Providing services in more than 15 industry sectors</p>  </div>
          </div>
          <div className='flex items-center md:space-x-2 lg:space-x-4 sm: space-x-4 xl:space-x-6'>
            <img src="./contact.png" alt="" className='w-[120px] md:w-[140px] xl:w-[165px] 2xl:w-[170px]' />
            <div>
              <h1 className='font-Legend font-medium text-center text-[#111928] text-[16px] lg:text-[20px] xl:text-[24px] 2xl:text-[26px]'>140+ Contracts</h1>
              <p className='font-inter text-[#4B5563] text-center text-[13px] lg:text-[15px] xl:text-[16px] mt-1 md:mt-2 xl:mt-3    mx-auto'>Providing services in more than 15 industry sectors</p>
            </div>
          </div>
        </div>

      </div>

      <div className='bg-[#F4FBFF] py-6 mt-16 lg:mt-24 flex items-center justify-between lg:justify-around px-[20px] sm:px-[26px] md:px-[60px] lg:px-[36px] xl:px-[90px] 2xl:px-[100px]'>
        <div className='bg-white p-[20px] rounded-[20px] flex flex-col items-center justify-center w-fit'>
          <h1 className='font-Legend font-medium text-center text-[#111928] text-[18px] lg:text-[22px] xl:text-[28px] 2xl:text-[30px]'>65+</h1>
          <p className='font-inter text-[#4B5563] text-center text-[13px] lg:text-[15px] xl:text-[17px] mt-1 md:mt-2 xl:mt-3    mx-auto'>Clients</p>
        </div>

        <div className='bg-white p-[20px] rounded-[20px] flex flex-col items-center justify-center w-fit'>
          <h1 className='font-Legend font-medium text-center text-[#111928] text-[18px] lg:text-[22px] xl:text-[28px] 2xl:text-[30px]'>85+</h1>
          <p className='font-inter text-[#4B5563] text-center text-[13px] lg:text-[15px] xl:text-[17px] mt-1 md:mt-2 xl:mt-3    mx-auto'>Projects</p>
        </div>

        <div className='bg-white p-[20px] rounded-[20px] flex flex-col items-center justify-center w-fit'>
          <h1 className='font-Legend font-medium text-center text-[#111928] text-[18px] lg:text-[22px] xl:text-[28px] 2xl:text-[30px]'>25+</h1>
          <p className='font-inter text-[#4B5563] text-center text-[13px] lg:text-[15px] xl:text-[17px] mt-1 md:mt-2 xl:mt-3    mx-auto'>Countrys</p>
        </div>

        <div className='bg-white p-[20px] rounded-[20px] flex flex-col items-center justify-center w-fit'>
          <h1 className='font-Legend font-medium text-center text-[#111928] text-[18px] lg:text-[22px] xl:text-[28px] 2xl:text-[30px]'>65+</h1>
          <p className='font-inter text-[#4B5563] text-center text-[13px] lg:text-[15px] xl:text-[17px] mt-1 md:mt-2 xl:mt-3    mx-auto'>Company's</p>
        </div>


      </div>





    </div>
  )
}
