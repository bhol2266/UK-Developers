import { useState, useRef, useEffect, } from 'react';
import { useContext } from 'react'
import { getCookie, deleteCookie } from "cookies-next";
import { MenuAlt3Icon } from '@heroicons/react/outline';
import { Fragment } from 'react'

import {

} from '@heroicons/react/solid'
import {
    MoonIcon,
    MenuIcon,
    SearchIcon,
    SunIcon,
    LoginIcon,
    UserIcon,
    UserCircleIcon

} from '@heroicons/react/outline'
import { useRouter } from 'next/router';

import { Disclosure, Menu, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import Link from 'next/link';

var navigation = [
    { name: 'Home', href: '/', current: true },
    { name: 'Pricing', href: '#pricing', current: false },
    { name: 'Portfolio', href: '#portfolio', current: false },
    { name: 'Services', href: '#Whatwe_offer', current: false },
    { name: 'Contact us', href: '#footer', current: false },
    { name: 'About us', href: '#aboutus', current: false },
    { name: 'Our Courses', href: '#courses', current: false },
    // { name: 'Live Cams', href: "https://chaturbate.com/in/?tour=LQps&campaign=3v7pk&track=default&room=ukdevelopers", current: false },
    // { name: 'Meet & Fuck', href: "https://chaturbate.com/in/?tour=LQps&campaign=3v7pk&track=default&room=ukdevelopers", current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


function Navbar() {

    const router = useRouter();

    return (

        <div className='p-2 sticky top-0 bg-white z-20   lg:py-4  shadow-md'>

            <div>


                <div className=''>

                    <Disclosure as="nav" >
                        {({ open }) => (
                            <>
                                <div className='flex  items-center justify-between'>

                                    <Link href='/'>

                                        <img className='h-10 lg:ml-8  ml-3  2xl:ml-[100px] lg:h-10' src="./logo_black.png" alt="" />
                                    </Link>


                                    <div className='justify-between items-center  hidden lg:flex  space-x-8 xl:space-x-8 2xl:space-x-16 mr-8   2xl:mr-[100px]'>

                                        <Link href='/'>
                                            <p className=' text-[14px] xl:text-[18px] 2xl:text-[20px] text-textMain font-inter cursor-pointer hover:text-red-800       '>Home</p>
                                        </Link>



                                        <Link href='#pricing'>
                                            <p className=' text-[14px] xl:text-[16px] 2xl:text-[18px] text-textMain font-inter cursor-pointer hover:text-red-800      '>Pricing</p>
                                        </Link>

                                        <Link href='#portfolio'>
                                            <p className=' text-[14px] xl:text-[16px] 2xl:text-[18px] text-textMain font-inter cursor-pointer hover:text-red-800      '>Portfolio</p>
                                        </Link>
                                        <Link href='#Whatwe_offer'>
                                            <p className=' text-[14px] xl:text-[16px] 2xl:text-[18px] text-textMain font-inter cursor-pointer hover:text-red-800      '>Services</p>
                                        </Link>

                                        <Link href='#footer'>
                                            <p className=' text-[14px] xl:text-[16px] 2xl:text-[18px] text-textMain font-inter cursor-pointer hover:text-red-800       '>Contact</p>
                                        </Link>

                                        <Link href='#aboutus'>
                                            <p className=' text-[14px] xl:text-[16px] 2xl:text-[18px] text-textMain font-inter cursor-pointer hover:text-red-800       '>About us</p>
                                        </Link>
                                        <Link href='#courses'>
                                            <p className=' text-[14px] xl:text-[16px] 2xl:text-[18px] font-inter cursor-pointer     bg-blue-500 rounded px-3 py-1 text-white  '>Buy Courses</p>
                                        </Link>


                                    </div>






                                    <div className='flex items-center lg:hidden'>

                                        <Disclosure.Button className=" items-center justify-center rounded-md text-white hover:bg-button p-2">
                                            <span className="sr-only">Open main menu</span>
                                            {open ? (
                                                <XIcon className="block h-6 w-6 text-textMain" aria-hidden="true" />
                                            ) : (
                                                <MenuIcon className="block h-6 w-6 text-textMain" aria-hidden="true" />
                                            )}
                                        </Disclosure.Button>
                                    </div>



                                </div>
                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                >
                                    <Disclosure.Panel className="">




                                        <div className="px-2 pt-2 pb-3 space-y-1">
                                            {navigation.map((item) => (


                                                <a href={item.href} key={item.name} >
                                                    <Disclosure.Button
                                                        as="a"
                                                        className={classNames(
                                                            item.current ? 'bg-textSub text-white my-[1.5px]' : 'text-textMain hover:bg-gray-500 hover:text-white',
                                                            'block px-3 py-2 rounded-md text-base font-medium'
                                                        )}
                                                        aria-current={item.current ? 'page' : undefined}
                                                    >
                                                        {item.name}
                                                    </Disclosure.Button>
                                                </a>
                                            ))}
                                        </div>
                                    </Disclosure.Panel>
                                </Transition>
                            </>
                        )}
                    </Disclosure>

                </div>



            </div>



        </div>
    )
}

export default Navbar
