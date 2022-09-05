import React from 'react'
import logo from '../logos/logo.svg'
import { useState } from 'react'

export default function Navigation() {
    const [navbar, setNavbar] = useState(false)

    return (
        <nav className="w-full">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:px-0 md:p-1 md:block">
                        <a href="#">
                            <img
                                className="color-[#171938] nb:w-28 nb:h-9"
                                src={logo}
                                alt="logo"
                            />
                        </a>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-[#171938]"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.2 md:px-0 md:px-0 md:p-1.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-[#171938]"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block nb:bg-[#3480F9] sm:p-0  md:mt-0 ${
                            navbar ? 'block' : 'hidden'
                        }`}
                    >
                        <ul className="items-center justify-center font-bold p-5 text-sm space-y-3 md:flex md:space-y-0">
                            <li className="text-[#3480F9] nb:text-gray-300 hover:text-[#3480F9] nb:hover:text-white p-5 ">
                                <a href="#">Home</a>
                            </li>
                            <li className="text-[#171938] nb:text-white hover:text-[#3480F9] nb:hover:text-white p-5">
                                <a href="#">Features</a>
                            </li>
                            <li className="text-[#171938] nb:text-white hover:text-[#3480F9] nb:hover:text-white p-5">
                                <a href="#">Clients</a>
                            </li>
                            <li className="text-[#171938] nb:text-white hover:text-[#3480F9] nb:hover:text-white p-5">
                                <a href="#">Pricing</a>
                            </li>
                            <li className="text-[#171938] nb:text-white hover:text-[#3480F9] nb:hover:text-white p-5">
                                <a href="#">Faqs</a>
                            </li>
                        </ul>
                        <div className="grid md:hidden mt-3 ml-10 space-y-2 lg:hidden md:mb-10">
                            <a
                                href="#"
                                className="w-fit px-6 py-2 my-5 flex-start text-white border-2 border-white rounded-md shadow hover:text-[#3480F9]"
                            >
                                Login
                            </a>
                            <a
                                href="#"
                                className="w-fit px-6 py-2 my-5 flex-start text-white border-2 border-white rounded-md shadow hover:bg-gray-100 "
                            >
                                Get Started
                            </a>
                        </div>
                    </div>
                </div>
                <div className="hidden space-x-2 md:inline-block">
                    <a href="#" className="hover:text-[#3480F9] font-bold pr-6">
                        Login
                    </a>
                    <a
                        href="#"
                        className="px-6 md:px-2 py-3 border-2 font-bold hover:border-[#3480F9] border-black rounded-md hover:text-[#3480F9]"
                    >
                        Get Started
                    </a>
                </div>
            </div>
        </nav>
    )
}

// const Navigation = () => {
//     return (
//         <nav className="flex items-center mt-2 font-bold text-md mx-10 text-[#333] cursor-pointer font-sans ">
//             <img className="" src={logo} alt="logo" />
//             <ul className="flex align-items-center ml-48 space-x-12 font-size-[15px]">
//                 <li className="text-[#346af8]">Home</li>
//                 <li>Features</li>
//                 <li>Clients</li>
//                 <li>Pricing</li>
//                 <li>Faqs</li>
//             </ul>
//             <ul className="flex items-center ml-auto mr-4 space-x-12 text-[#333]">
//                 <li className="overflow-hidden">Login</li>
//                 <li className="px-6 py-2 outline-4 border-2 border-black rounded-md">
//                     Get Started
//                 </li>
//             </ul>
//         </nav>
//     )
// }

// export default Navigation
