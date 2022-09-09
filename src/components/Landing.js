import React from 'react'
import hero from '../assets/images/hero.png'
import play from '../assets/svgs/play.svg'

const Landing = () => {
    return (
        <div className="grid grid-cols-2 xs:grid-cols-1 justify-center align-center gap-14 px-14 align-middle mt-16 text-[#171938] mb-28">
            <div>
                <div className="text-5xl xs:text-3xl font-semibold max-w-[530px] pt-[48px] mb-6">
                    <h1 className="leading-normal">
                        Welcome to the Future of Billing Management
                    </h1>
                </div>
                <div className="text-[22px] xs:text-[18px] font-light max-w-[530px] mb-10">
                    <p>
                        Toptech is a perfect template, that is tailor made for
                        startups and businesses - Build your website easily.
                    </p>
                </div>
                <div className="flex max-w-[530px] xs:grid">
                    <input
                        className="px-5 py-3 rounded border-1 w-80 border-[#346AF8] bg-white outline-1 outline-[#346AF8] mr-4"
                        type="email"
                        placeholder="Enter your email address"
                    ></input>
                    <div>
                        <button className="bg-[#346af8] py-3 px-8 rounded text-white">
                            Sign up for free
                        </button>
                    </div>
                </div>
                <div className="flex justify-end mr-12">
                    <p className="text-md">*No credit card required</p>
                </div>
                <div className="flex items-center  font-thin mt-4 cursor-pointer">
                    <a
                        className="flex items-center  font-thin mt-4 cursor-pointer picture-in-picture"
                        href="#"
                    >
                        <img src={play} />
                        <p className="ml-2 underline-offset-8">
                            Watch Our Video
                        </p>
                    </a>
                </div>
            </div>
            <div className="imageContainer items-center justify-center">
                <img
                    className="animate-[wiggle_1s_ease-in-out_infinite]"
                    src={hero}
                    alt="hero"
                />
            </div>
        </div>
    )
}

export default Landing
