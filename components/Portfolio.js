import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import SwiperCore, { Autoplay } from "swiper"
import "swiper/css/pagination";
import { Pagination } from "swiper";



const portFolioData = [

    { image: "./portfolio/closm.svg", href: "http://closm.com/", name: "www.closm.com", category: "Clothing", description: "A clothing focused platform that targets various influencers or content creators from platform like youtube, instagram, facebook, twitter for making their own merchandise." },
    { image: "./portfolio/baldgenie.svg", href: "https://baldgenie.com/", name: "www.bladgenie.com", category: "Troubleshooting Service ", description: "A Troubleshooting Software that provides virus removal, security check, boot error fix, slow pc fix, startup warning, browser support, data backup & many more." },
    { image: "./portfolio/haxer.svg", href: "/", name: "Haxer", category: "e-Sports app", description: "An e-Sports platform that host each available battle royale or mini games in India and runs prize money , rewards for players in some games." },
]



const Portfolio = () => {
    SwiperCore.use([Autoplay])  // this is the middleware we need to call for slider autoplay

    return (
        <div className="mt-14 lg:mt-[70px] xl:mt-[70px]">

            <h1 className='font-Legend font-medium text-center text-textMain text-[24px] lg:text-[28px] xl:text-[36px] 2xl:text-[38px] '>Case studies & portfolio</h1>
            <p className='font-inter text-textSub text-center text-[12px] lg:text-[15px] xl:text-[17px] mt-1 md:mt-2 xl:mt-3    mx-auto 2xl:w-3/5 '>Here are some well known work that we have done.</p>




            <div className='hidden mt-10 xl:mt-[40px]  2xl:px-[1px] 3xl:px-[150px] lg:grid grid-cols-3 gap-8 xl:gap-10 2xl:gap-12'>


                {portFolioData.map(item => {
                    return (
                        <div key={item.name} className=" pb-16">
                            <img src={item.image} alt="" className="mb-2 w-full" />

                            <a rel="noreferrer" target="_blank" href={item.href} className='font-inter font-medium text-left text-textMain text-[14px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px]'>{item.name}</a>

                            <h1 className='font-inter block font-medium text-left text-textMain text-[14px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] my-2'>{item.category}</h1>

                            <p className='font-inter text-textSub text-left text-[12px] lg:text-[13px] xl:text-[14px] mt-1 md:mt-2 xl:mt-3    mx-auto '>{item.description}</p>

                        </div>
                    )
                })}



            </div>


            <div className='lg:hidden mt-8 lg:mt-12 xl:mt-[80px] '>


                <Swiper
                    slidesPerView={1}
                    spaceBetween={50}
                    loop={true}
                    pagination={true} modules={[Pagination]} autoplay={{
                        delay: 2000,
                    }}

                >

                    {portFolioData.map(item => {
                        return (
                            <SwiperSlide key={item.name}>
                                <div className=" pb-16 px-[20px] ">
                                    <img src={item.image} alt="" className="w-full mb-2" />

                                    <a rel="noreferrer" target="_blank" href={item.href} className='font-inter font-medium text-left text-textMain text-[14px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px]'>{item.name}</a>

                                    <h1 className='font-inter block font-medium text-left text-textMain text-[14px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] my-2'>{item.category}</h1>

                                    <p className='font-inter text-textSub text-left text-[12px] lg:text-[13px] xl:text-[14px] mt-1 md:mt-2 xl:mt-3    mx-auto '>{item.description}</p>

                                </div>
                            </SwiperSlide>
                        )
                    })}


                </Swiper>

            </div>













        </div>
    )
};
export default Portfolio;