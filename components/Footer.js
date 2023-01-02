const Footer = () => {
    return (


        <div className="bg-gray-800 py-[30px] lg:py-[40px]  xl:py-[50px] px-8 lg:px-[100px] xl:px-[150px] 2xl:px-[200px]">

            <div className=" flex flex-col lg:flex-row lg:justify-between lg:px-6  2xl:px-14 3xl:px-16 items-center justify-center space-y-6 border-b-[0.5px]  border-t-[1px] border-gray-500 py-7 ">

                <img src="./logo.svg" alt="" className="h-8 lg:h-10 xl:h-12  2xl:h-14" />


                <div className="flex flex-col items-center space-y-3 xl:space-y-6">
                    <div className="flex items-center justify-center space-x-3">
                        <img src="./footer/Shape.svg" alt="" className="h-4 lg:h-6" />
                        <h1 className='font-assist  text-center text-gray-300 text-[11px] lg:text-[14px] xl:text-[20px]  '>BTM Phase 2, Electronic City, Bangalore, Karnataka, INDIA 560100 </h1>
                    </div>

                    <div className="flex items-center justify-center space-x-3">
                        <img src="./footer/Path.svg" alt="" className="h-4 lg:h-6" />
                        <h1 className='font-assist  text-center text-gray-300 text-[12px] lg:text-[14px] xl:text-[20px]  '>+91 9937645877 </h1>
                    </div>

                    <div className="flex items-center justify-center space-x-4 pt-2 xl:pt-3">
                        <h1 className='font-assist  text-center text-gray-400 text-[10px] lg:text-[12px] xl:text-[14px]  mr-4'>Social Media </h1>

                        <img src="./footer/Facebook.svg" alt="" className="h-4 lg:h-6" />
                        <img src="./footer/Twitter.svg" alt="" className="h-4 lg:h-6" />
                        <img src="./footer/Facebook.svg" alt="" className="h-4 lg:h-6" />
                        <img src="./footer/Twitter.svg" alt="" className="h-4 lg:h-6" />

                    </div>

                </div>
            </div>


            <div className="flex md:flex-row flex-col space-y-3 justify-between items-center mt-6 px-[40px] ml-12 ">
                <div className="flex space-x-6 lg:space-x-10 items-center">
                    <h1 className='cursor-pointer font-assist  text-center text-gray-400 text-[11px] lg:text-[12px] xl:text-[13px]   '>Help </h1>
                    <h1 className='cursor-pointer font-assist  text-center text-gray-400 text-[11px] lg:text-[12px] xl:text-[13px]  '>Privacy Policy </h1>

                    <h1 className='cursor-pointer font-assist  text-center text-gray-400 text-[11px] lg:text-[12px] xl:text-[13px]  '>Disclaimer </h1>

                </div>


                <h1 className='font-assist  text-center text-gray-500 text-[11px] lg:text-[12px] xl:text-[13px] '>Copyright © 2023 Codesout, All rights reserved. </h1>

            </div>
        </div>
    )
};
export default Footer;