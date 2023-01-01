const Footer = () => {
    return (


        <div className="bg-gray-900 h-[200px] flex flex-col items-center justify-center space-y-6">

            <img src="./logo.svg" alt="" className="h-8" />

            <div>
                <div className="flex items-center justify-center space-x-3">
                    <img src="./footer/Shape.svg" alt="" className="h-4 lg:h-6" />
                    <h1 className='font-assist  text-center text-white text-[12px] lg:text-[14px] xl:text-[20px]  '>BTM Phase 2, Electronic City, Bangalore, Karnataka, INDIA 560100 </h1>
                </div>

                <div className="flex items-center justify-center space-x-3 mt-2">
                    <img src="./footer/Path.svg" alt="" className="h-4 lg:h-6" />
                    <h1 className='font-assist  text-center text-white text-[12px] lg:text-[14px] xl:text-[20px]  '>+91 9937645877 </h1>
                </div>

                <div className="flex items-center justify-center space-x-4 mt-6">
                    <h1 className='font-assist  text-center text-gray-400 text-[10px] lg:text-[12px] xl:text-[14px]  mr-4'>Social Media </h1>

                    <img src="./footer/Facebook.svg" alt="" className="h-4 lg:h-6" />
                    <img src="./footer/Twitter.svg" alt="" className="h-4 lg:h-6" />
                    <img src="./footer/Facebook.svg" alt="" className="h-4 lg:h-6" />
                    <img src="./footer/Twitter.svg" alt="" className="h-4 lg:h-6" />


                </div>
            </div>
        </div>
    )
};
export default Footer;