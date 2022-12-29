import { useEffect, useState } from "react";







const Quatation = () => {

    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [Email, setEmail] = useState('');
    const [TIme, setTIme] = useState('');
    const [PhoneNumber, setPhoneNumber] = useState('');

    return (
        <div>

            <h1 className='font-Legend font-medium text-center text-textMain text-[24px] lg:text-[28px] xl:text-[36px] 2xl:text-[38px] '>Get free quote & consultancy.</h1>
            <p className='font-inter text-textSub text-center text-[12px] lg:text-[15px] xl:text-[17px] mt-1 md:mt-2 xl:mt-3    mx-auto 2xl:w-3/5 '>Let’s discuss your project. Please enter your contact details to proceed further. Get a call within 2 hour.</p>



            <div className="mt-6 lg:mt-8 xl:mt-[50px] px-[20px] sm:px-[80px] md:px-[100px] xl:px-[220px] 2xl:px-[280px] 3xl:px-[350px]">
                <form>

                    <div className="lg:grid grid-cols-2 lg:gap-[30px] xl:gap-[40px] ">

                        <input value={firstName} onChange={(e) => { setfirstName(e.target.value) }} type="text" id="first" className="w-full bg-gray-50 border-[1.2px] border-[#4B5563] text-black text-[11px] sm:text-[12px] md:text-[13px] xl:text-[14px] rounded-[4px] p-3  outline-none  mb-3 md:mb-4 lg:mb-0" placeholder="First Name*" required />

                        <input value={lastName} onChange={(e) => { setlastName(e.target.value) }} type="text" id="first" className="w-full bg-gray-50 border-[1.2px] border-[#4B5563] text-black text-[11px] sm:text-[12px] md:text-[13px] xl:text-[14px] rounded-[4px] p-3  outline-none  mb-3 md:mb-4 lg:mb-0" placeholder="Last Name*" required />

                        <input value={Email} onChange={(e) => { setEmail(e.target.value) }} type="email" id="Email" className="w-full bg-gray-50 border-[1.2px] border-[#4B5563] text-black text-[11px] sm:text-[12px] md:text-[13px] xl:text-[14px] rounded-[4px] p-3  outline-none  mb-2 lg:mb-0" placeholder="Email*" required />

                        <input value={PhoneNumber} onChange={(e) => { setPhoneNumber(e.target.value) }} type="number" id="Phone Number*" className="w-full bg-gray-50 border-[1.2px] border-[#4B5563] text-black text-[11px] sm:text-[12px] md:text-[13px] xl:text-[14px] rounded-[4px] p-3  outline-none  mb-2 lg:mb-0" placeholder="Phone Number*" required />

                    </div>


                    <button type="submit" className='hover:bg-gray-600 font-inter font-medium  px-3 py-2 text-[13px] lg:text-[18px]  lg:px-4  lg:py-2 rounded-[5px] text-white bg-textMain mx-auto block mt-8 md:mt-12 '>Lets discuss</button>
                </form>



            </div>











        </div>
    )
};
export default Quatation;