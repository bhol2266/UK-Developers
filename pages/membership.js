import React, { useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router';



const plans = [
    {
        duration: "1 month",
        offer: "",
        price: "$2.99",
        type: "month",
        planCode: "1M"
    },
    {
        duration: "3 months",
        offer: "20% OFF",
        price: "$4.99",
        type: "month",
        planCode: "3M"
    },
    {
        duration: "12 months",
        offer: "40% OFF",
        price: "$9.99",
        type: "month",
        planCode: "12M"
    },

    {
        duration: "Lifetime",
        offer: "USE FOREVER",
        price: "$19.99",
        type: "once",
        planCode: "LIFETIME"
    },
]
const Membership = () => {

    const router = useRouter();
    const { price, planCode, source } = router.query;


    const [selectedPlan, setSelectedPlan] = useState(plans[0])

    useEffect(() => {
        if (!price || !planCode) {
            console.warn("Missing query parameters: price or planCode not found in router.query");
            return;
        }

        const matchedPlan = plans.find(p => p.planCode.toUpperCase() === planCode.toUpperCase());

        if (matchedPlan) {
            setSelectedPlan(matchedPlan);
        } else {
            console.warn("No matching plan found for planCode:", planCode);
        }
    }, [price, planCode]);



    const handlePlanChange = (plan) => {
        setSelectedPlan(plan);
    };

    return (
        <div className='relative' >


            <div className=''>
                {source &&
                    <div className='flex items-center justify-center pt-2 lg:pt-5'>
                        <p className=' align-center text-center font-Dancing font-bold text-black  text-[50px] lg:text-[80px] cursor-pointer lg:text-left select-none'>{source}</p>
                        <img src="/vip-pass.png" alt="vip-pass" className='h-[70px] lg:h-[120px] animate-shine' />
                    </div>
                }

                <div className='block mx-auto w-4/5 md:w-3/5 lg:w-[500px] 2xl:w-[600px] mt-8'>
                    {plans.map((plan, index) => (
                        <div key={index} className="flex items-center justify-between mb-2 py-3 px-4 lg:px-8 lg:py-4  bg-black bg-opacity-10 rounded-md cursor-pointer select-none" onClick={() => handlePlanChange(plan)}>
                            <div className='flex items-center'>
                                <input
                                    type="radio"
                                    id={`plan-${index}`}
                                    name="plan"
                                    value={index}
                                    checked={selectedPlan.duration === plan.duration}
                                    onChange={() => handlePlanChange(plan)}
                                    className="form-radio h-5 w-5 lg:h-6 lg:w-6 mr-2 lg:mr-3 text-theme border-theme focus:ring-theme"
                                />
                                <label htmlFor={`plan-${index}`} className="font-poppins text-md lg:text-lg">{plan.duration}</label>
                                <span className={`font-arial font-semibold text-xs lg:text-sm ml-2 bg-red-500 text-white rounded-md px-1 py-0.5 ${plan.offer.length === 0 ? "hidden" : ""}`}>{plan.offer}</span>
                            </div>
                            <div>
                                <span className="font-bold font-inter text-lg lg:text-2xl">{plan.price}</span>
                                <span className="text-sm lg:text-md">/{plan.type}</span>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-white text-[8px] lg:text-[10px] font-poppins text-center bg-black bg-opacity-50 px-2 py-0.5 w-fit mx-auto block rounded">This site is protected by reCAPTCHA and the Google <a className='underline' href="https://policies.google.com/privacy">Privacy Policy</a> and <a className='underline' href="https://policies.google.com/terms">Terms of Service</a> apply.</div>


                <button onClick={() => console.log("clicked")} className=' bg-blue-500 text-white lg:px-8 lg:py-4 px-6 py-3 rounded-2xl font-poppins text-[14px] lg:text-[20px] mx-auto block  hover:scale-105 transition-all mt-4 lg:mt-6'>Get Access now!</button>





            </div>

        </div>
    )
}

export default Membership