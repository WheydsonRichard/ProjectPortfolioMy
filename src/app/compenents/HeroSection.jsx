"use client"
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'
import Link from 'next/link'

const HeroSection = () => {
    return (
        <section className='lg:py-16'>
            <div className="grid grid-cols-1 sm:grid-cols-12">
                <div className="col-span-8 place-self-center text-center sm:text-left justify-self-start">
                    <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold'>
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600'>
                            Olá, eu sou {""}
                        </span>
                        <br></br>
                        <TypeAnimation
                            sequence={[
                                'Richard',
                                1000,
                                'Software Developer',
                                1000,
                                'Projects Manager',
                                1000,
                                'System Analyst',
                                1000,

                            ]}
                            wrapper='span'
                            speed={50}      
                            repeat={Infinity}

                        />
                    </h1>
                    <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl'>
                        Tenho +3 anos de experiência em desenvolvimento software, passei por grandes empresa como Ayesa, engeneering, enel soluções.
                    </p>
                    <div>
                        <Link href="#contact">
                        <button href="#contact" className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-yellow-500 via-orange-500 to-red-700 hover:bg-slate-200 text-white'>
                            Contrate-me
                        </button>
                        </Link>
                        
                        <button 
                        className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-yellow-500 via-orange-500 to-red-700 hover:bg-slate-800 text-white mt-3'>
                            <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>Download CV</span>

                        </button>
                    </div>
                </div>
                <div className="col-span-4 place-self-center mt-4 lg:mt-0">
                    <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                        <Image
                            src="/images/sticker.png"
                            alt='Hero image'
                            className="absolute trasnform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            width={300}
                            height={300}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection;