'use client';

import React from 'react';
import { useRouter } from 'next/router';



const ConsultingFeeButton = () => {


     const router = useRouter();
  const handlePayment = () => {
    router.push('/start_consultation');

  };

  return (
    <div className=" w-full flex justify-center z-50">
      <button
        onClick={handlePayment}
        className="mt-4 lg:mt-6 bg-white text-black font-inter py-3 lg:py-4 rounded-full shadow-lg hover:scale-105 transition px-6 lg:px-[100px]"
      >
        Start Your Consultation
        </button>
    </div>
  );
};

export default ConsultingFeeButton;
