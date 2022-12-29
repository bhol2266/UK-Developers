import { useEffect, useState } from "react";







const Portfolio = () => {


    return (
        <div className="mt-14 lg:mt-28">

            <h1 className='font-Legend font-medium text-center text-textMain text-[24px] lg:text-[28px] xl:text-[36px] 2xl:text-[38px] '>Case studies & portfolio</h1>
            <p className='font-inter text-textSub text-center text-[12px] lg:text-[15px] xl:text-[17px] mt-1 md:mt-2 xl:mt-3    mx-auto 2xl:w-3/5 '>Here are some well known work that we have done.</p>




            <div className=' mt-8 lg:mt-12 xl:mt-[80px] flex flex-col space-y-10  px-[20px] sm:px-[50px] md:px-[100px] lg:flex-row lg:px-[1px] lg:space-x-8 xl:space-x-8 2xl:space-x-14 2xl:px-[1px] 3xl:px-[150px]'>


                <div className="shadow-lg pb-5">
                    <img src="./portfolio/closm.svg" alt="" className="w-full mb-2" />

                    <a target="_blank" href="http://closm.com/" className='font-inter font-medium text-left text-textMain text-[14px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px]'>www.closm.com</a>

                    <h1 className='font-inter block font-medium text-left text-textMain text-[14px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] my-2'>Clothing</h1>

                    <p className='font-inter text-textSub text-left text-[12px] lg:text-[13px] xl:text-[14px] mt-1 md:mt-2 xl:mt-3    mx-auto '>A clothing focused platform that targets various
                        influencers or content creators from platform like youtube, instagram, facebook, twitter for making their own merchandise..</p>

                </div>

                <div className="shadow-lg pb-5">
                    <img src="./portfolio/closm.svg" alt="" className="w-full mb-2" />

                    <a target="_blank" href="http://closm.com/" className='font-inter font-medium text-left text-textMain text-[14px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px]'>www.closm.com</a>

                    <h1 className='font-inter block font-medium text-left text-textMain text-[14px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] my-2'>Clothing</h1>

                    <p className='font-inter text-textSub text-left text-[12px] lg:text-[13px] xl:text-[14px] mt-1 md:mt-2 xl:mt-3    mx-auto '>A clothing focused platform that targets various
                        influencers or content creators from platform like youtube, instagram, facebook, twitter for making their own merchandise..</p>

                </div>

                <div className="shadow-lg pb-5">
                    <img src="./portfolio/closm.svg" alt="" className="w-full mb-2" />

                    <a target="_blank" href="http://closm.com/" className='font-inter font-medium text-left text-textMain text-[14px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px]'>www.closm.com</a>

                    <h1 className='font-inter block font-medium text-left text-textMain text-[14px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] my-2'>Clothing</h1>

                    <p className='font-inter text-textSub text-left text-[12px] lg:text-[13px] xl:text-[14px] mt-1 md:mt-2 xl:mt-3    mx-auto '>A clothing focused platform that targets various
                        influencers or content creators from platform like youtube, instagram, facebook, twitter for making their own merchandise..</p>

                </div>




            </div>














        </div>
    )
};
export default Portfolio;