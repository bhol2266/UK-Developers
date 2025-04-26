import {
    CheckCircleIcon

} from '@heroicons/react/outline'
import { useEffect, useState } from 'react';


// const [basicPrice, setbasicPrice] = useState("$150");
// const [valueplan, setValueplan] = useState("$150");
// const [premiumPlan, setpremiumPlan] = useState("$150");

const Pricing = () => {
    return (

        <div>
            <h1 className='font-Legend font-medium text-center text-gray-300 text-[24px] lg:text-[28px] xl:text-[36px] 2xl:text-[38px] '>Affordable price for everyone.</h1>
            <p className='font-inter text-gray-300 text-center text-[12px] lg:text-[15px] xl:text-[17px] mt-1 md:mt-2 xl:mt-3    mx-auto 2xl:w-3/5 xl:'>It doesn’t matter what size your business is, with our flexible plans you will get best value in
                the market.&lsquo;s</p>


            <div className='lg:mt-12 xl:mt-[80px] flex flex-col px-[40px] sm:px-[80px] md:px-[100px] lg:flex-row lg:px-[1px] lg:space-x-8 xl:space-x-8 2xl:space-x-14 2xl:px-[1px] 3xl:px-[150px]'>


                <div className='lg:p-6 lg:pl-8 p-4 pl-8 2xl:pl-[50px] xl:pl-6  xl:py-10 shadow-md shadow-gray-500 border-2 border-white rounded-[25px] w-full mt-8  mx-auto'>
                    <h1 className='font-inter font-semibold text-left text-white text-[26px] lg:text-[30px] xl:text-[38px] 2xl:text-[40px] '>₹10000</h1>


                    <h2 className='font-inter font-semibold text-left text-white text-[12px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px]  my-2'>Basic Plan</h2>


                    <h2 className='mb-4 font-inter text-left text-white text-[11px] lg:text-[13px] xl:text-[16px] 2xl:text-[17px]  '>Perfect for small & medium
                        projects. </h2>


                    <div className='flex flex-col  space-y-3 lg:space-y-5 xl:space-y-7'>

                        <div className='flex items-center space-x-2 xl:space-x-3 md:sapce-x-3 mx-auto  my-1 w-full'>
                            <img src="./services/Checked.svg" className='h-[14px] md:h-[17px] xl:h-[20px]' alt="" />
                            <h2 className='font-inter  text-gray-300 text-[11px] lg:text-[13px] xl:text-[18px] 2xl:text-[17px]  '>Basic frontend, backend</h2>
                        </div>
                        <div className='flex items-center space-x-2 xl:space-x-3 md:sapce-x-3 mx-auto  my-1 w-full'>
                            <img src="./services/Checked.svg" className='h-[14px] md:h-[17px] xl:h-[20px]' alt="" />
                            <h2 className='font-inter  text-gray-300 text-[11px] lg:text-[13px] xl:text-[18px] 2xl:text-[17px]  '>Basic admin panel</h2>
                        </div>
                        <div className='flex items-center space-x-2 xl:space-x-3 md:sapce-x-3 mx-auto  my-1 w-full'>
                            <img src="./services/Checked.svg" className='h-[14px] md:h-[17px] xl:h-[20px]' alt="" />
                            <h2 className='font-inter text-gray-300 text-[11px] lg:text-[13px] xl:text-[18px] 2xl:text-[17px]  '>Limited analytics</h2>
                        </div>
                        <div className='flex items-center space-x-2 xl:space-x-3 md:sapce-x-3 mx-auto  my-1 w-full'>
                            <img src="./services/Unchecked.svg" className='h-[14px] md:h-[17px] xl:h-[20px]' alt="" />
                            <h2 className='font-inter  text-gray-300 text-[11px] lg:text-[13px] xl:text-[18px] 2xl:text-[17px]  '>Limited consultancy</h2>
                        </div>
                        <div className='flex items-center space-x-2 xl:space-x-3 md:sapce-x-3 mx-auto  my-1 w-full'>
                            <img src="./services/Unchecked.svg" className='h-[14px] md:h-[17px] xl:h-[20px]' alt="" />
                            <h2 className='font-inter  text-gray-300 text-[11px] lg:text-[13px] xl:text-[18px] 2xl:text-[17px]  '>Mobile apps, software</h2>
                        </div>
                        <div className='flex items-center space-x-2 xl:space-x-3 md:sapce-x-3 mx-auto  my-1 w-full'>
                            <img src="./services/Unchecked.svg" className='h-[14px] md:h-[17px] xl:h-[20px]' alt="" />
                            <h2 className='font-inter  text-gray-300 text-[11px] lg:text-[13px] xl:text-[18px] 2xl:text-[17px]  '>Data visualization</h2>
                        </div>
                        <div className='flex items-center space-x-2 xl:space-x-3 md:sapce-x-3 mx-auto  my-1 w-full'>
                            <img src="./services/Unchecked.svg" className='h-[14px] md:h-[17px] xl:h-[20px]' alt="" />

                            <h2 className='font-inter  text-gray-300 text-[11px] lg:text-[13px] xl:text-[18px] 2xl:text-[17px]  '>Automation</h2>

                        </div>

                    </div>
                </div>


                <div className='relative lg:bottom-10 xl:bottom-14  lg:p-6 lg:pl-8 p-4 pl-8 2xl:pl-[50px] xl:pl-6  xl:py-10 shadow-md shadow-gray-500 border-2 border-white rounded-[25px] w-full mt-8  mx-auto'>
                    <h1 className='font-inter font-semibold text-left text-white text-[26px] lg:text-[30px] xl:text-[38px] 2xl:text-[40px] '>₹30000</h1>


                    <h2 className='font-inter font-semibold text-left text-white text-[12px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px]  my-2'>Value Plan</h2>


                    <h2 className='mb-4 font-inter text-left text-white text-[11px] lg:text-[13px] xl:text-[16px] 2xl:text-[18px]  '>Perfect for small & medium 
companies or businesses. </h2>


                    <div className='flex flex-col  space-y-3 lg:space-y-5 xl:space-y-7'>

                        <div className='flex items-center space-x-2 xl:space-x-3 md:sapce-x-3 mx-auto  my-1 w-full'>
                            <img src="./services/Checked.svg" className='h-[14px] md:h-[17px] xl:h-[20px]' alt="" />
                            <h2 className='font-inter  text-gray-300 text-[11px] lg:text-[13px] xl:text-[18px] 2xl:text-[17px]  '>Basic frontend, backend</h2>
                        </div>
                        <div className='flex items-center space-x-2 xl:space-x-3 md:sapce-x-3 mx-auto  my-1 w-full'>
                            <img src="./services/Checked.svg" className='h-[14px] md:h-[17px] xl:h-[20px]' alt="" />
                            <h2 className='font-inter  text-gray-300 text-[11px] lg:text-[13px] xl:text-[18px] 2xl:text-[17px]  '>Basic admin panel</h2>
                        </div>
                        <div className='flex items-center space-x-2 xl:space-x-3 md:sapce-x-3 mx-auto  my-1 w-full'>
                            <img src="./services/Checked.svg" className='h-[14px] md:h-[17px] xl:h-[20px]' alt="" />
                            <h2 className='font-inter text-gray-300 text-[11px] lg:text-[13px] xl:text-[18px] 2xl:text-[17px]  '>Limited analytics</h2>
                        </div>
                        <div className='flex items-center space-x-2 xl:space-x-3 md:sapce-x-3 mx-auto  my-1 w-full'>
                            <img src="./services/Checked.svg" className='h-[14px] md:h-[17px] xl:h-[20px]' alt="" />
                            <h2 className='font-inter  text-gray-300 text-[11px] lg:text-[13px] xl:text-[18px] 2xl:text-[17px]  '>Limited consultancy</h2>
                        </div>
                        <div className='flex items-center space-x-2 xl:space-x-3 md:sapce-x-3 mx-auto  my-1 w-full'>
                            <img src="./services/Unchecked.svg" className='h-[14px] md:h-[17px] xl:h-[20px]' alt="" />
                            <h2 className='font-inter  text-gray-300 text-[11px] lg:text-[13px] xl:text-[18px] 2xl:text-[17px]  '>Mobile apps, software</h2>
                        </div>
                        <div className='flex items-center space-x-2 xl:space-x-3 md:sapce-x-3 mx-auto  my-1 w-full'>
                            <img src="./services/Unchecked.svg" className='h-[14px] md:h-[17px] xl:h-[20px]' alt="" />
                            <h2 className='font-inter  text-gray-300 text-[11px] lg:text-[13px] xl:text-[18px] 2xl:text-[17px]  '>Data visualization</h2>
                        </div>
                        <div className='flex items-center space-x-2 xl:space-x-3 md:sapce-x-3 mx-auto  my-1 w-full'>
                            <img src="./services/Unchecked.svg" className='h-[14px] md:h-[17px] xl:h-[20px]' alt="" />

                            <h2 className='font-inter  text-gray-300 text-[11px] lg:text-[13px] xl:text-[18px] 2xl:text-[17px]  '>Automation</h2>

                        </div>

                    </div>
                </div>


                <div className='lg:p-6 lg:pl-8 p-4 pl-8 2xl:pl-[50px] xl:pl-6  xl:py-10 shadow-md shadow-gray-500 border-2 border-white rounded-[25px] w-full mt-8  mx-auto'>
                    <h1 className='font-inter font-semibold text-left text-white text-[26px] lg:text-[30px] xl:text-[38px] 2xl:text-[40px] '>₹50000</h1>


                    <h2 className='font-inter font-semibold text-left text-white text-[12px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px]  my-2'>Premium Plan Plan</h2>


                    <h2 className='mb-4 font-inter text-left text-white text-[11px] lg:text-[13px] xl:text-[16px] 2xl:text-[18px]  '>Perfect for big corporate & companies.</h2>


                    <div className='flex flex-col  space-y-3 lg:space-y-5 xl:space-y-7'>

                        <div className='flex items-center space-x-2 xl:space-x-3 md:sapce-x-3 mx-auto  my-1 w-full'>
                            <img src="./services/Checked.svg" className='h-[14px] md:h-[17px] xl:h-[20px]' alt="" />
                            <h2 className='font-inter  text-gray-300 text-[11px] lg:text-[13px] xl:text-[18px] 2xl:text-[17px]  '>Basic frontend, backend</h2>
                        </div>
                        <div className='flex items-center space-x-2 xl:space-x-3 md:sapce-x-3 mx-auto  my-1 w-full'>
                            <img src="./services/Checked.svg" className='h-[14px] md:h-[17px] xl:h-[20px]' alt="" />
                            <h2 className='font-inter  text-gray-300 text-[11px] lg:text-[13px] xl:text-[18px] 2xl:text-[17px]  '>Basic admin panel</h2>
                        </div>
                        <div className='flex items-center space-x-2 xl:space-x-3 md:sapce-x-3 mx-auto  my-1 w-full'>
                            <img src="./services/Checked.svg" className='h-[14px] md:h-[17px] xl:h-[20px]' alt="" />
                            <h2 className='font-inter text-gray-300 text-[11px] lg:text-[13px] xl:text-[18px] 2xl:text-[17px]  '>Limited analytics</h2>
                        </div>
                        <div className='flex items-center space-x-2 xl:space-x-3 md:sapce-x-3 mx-auto  my-1 w-full'>
                            <img src="./services/Checked.svg" className='h-[14px] md:h-[17px] xl:h-[20px]' alt="" />
                            <h2 className='font-inter  text-gray-300 text-[11px] lg:text-[13px] xl:text-[18px] 2xl:text-[17px]  '>Limited consultancy</h2>
                        </div>
                        <div className='flex items-center space-x-2 xl:space-x-3 md:sapce-x-3 mx-auto  my-1 w-full'>
                            <img src="./services/Checked.svg" className='h-[14px] md:h-[17px] xl:h-[20px]' alt="" />
                            <h2 className='font-inter  text-gray-300 text-[11px] lg:text-[13px] xl:text-[18px] 2xl:text-[17px]  '>Mobile apps, software</h2>
                        </div>
                        <div className='flex items-center space-x-2 xl:space-x-3 md:sapce-x-3 mx-auto  my-1 w-full'>
                            <img src="./services/Checked.svg" className='h-[14px] md:h-[17px] xl:h-[20px]' alt="" />
                            <h2 className='font-inter  text-gray-300 text-[11px] lg:text-[13px] xl:text-[18px] 2xl:text-[17px]  '>Data visualization</h2>
                        </div>
                        <div className='flex items-center space-x-2 xl:space-x-3 md:sapce-x-3 mx-auto  my-1 w-full'>
                            <img src="./services/Checked.svg" className='h-[14px] md:h-[17px] xl:h-[20px]' alt="" />

                            <h2 className='font-inter  text-gray-300 text-[11px] lg:text-[13px] xl:text-[18px] 2xl:text-[17px]  '>Automation</h2>

                        </div>

                    </div>
                </div>



            </div>



        </div>
    )
};
export default Pricing;