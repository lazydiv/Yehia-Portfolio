import React from 'react'
import { HeartIcon, IdentificationIcon, BriefcaseIcon } from '@heroicons/react/solid'
import Footer from './footer'
import Link from 'next/link'
import Hire_drop from './dialogue'


const Center = () => {
  return (
    <div className='flex-col w-5/6 md:w-4/6 xl:w-3/6 pt-20'>
        {/* eslint-disable-next-line */}
        <p className='text-4xl  dark:bg-white bg-black bg-opacity-10 dark:bg-opacity-5 p-3 m-auto rounded-xl'>Hello, I'm Yehia<span className='animate-pulse'>👋</span></p>
         {/* eslint-disable-next-line */}
        <p className='text-xl mt-5'>I'm self thought full-stack web devolper based in Egypt🐪, With the passion for learning and making new things. </p>
        <Link
          href='projects' passHref>
          <button className='bg-gray-800 text-white p-3 mt-5 rounded-md mr-5 text-2xl px-6 shadow-lg transition-all ease hover:shadow-yellow-600 hover:bg-yellow-500  hover:shadow-xl  tracking-wide'>
            Projects
          </button>
        </Link>
        <Hire_drop />
        <p className='mt-10 text-2xl border-b-2 tracking-wide w-32 pb-2'>Hopies <HeartIcon color='red' className='inline h-6 w-6 '/></p>
        <p className='mt-5 text-xl'>
        So for a man my age to learn Coding💻 I have to be obsessed with it! so here is some things that I like to do first Reading📕
        and I like lifting weights 🏋️‍♂️ , Travling ✈ is the best thing to do in the week end !
        </p>
        <p className='mt-10 text-2xl border-b-2 tracking-wide w-32 pb-2'>History &nbsp;<BriefcaseIcon color='#A26C5B' className='inline h-6 w-6 '/></p>
        <p className='mt-5 text-xl'>
        - I worked from 2020 to 2021 at Egyptian markting agenct called JMA
        <br />
        as front-end devolper 👩‍💻 and graphic designer🎨
        <br />
        - From 2021 until now I work as freelancer  
        </p>
        <p className='mt-10 text-2xl border-b-2 tracking-wide w-32 pb-2'>About &nbsp;<IdentificationIcon color='cyan' className='inline h-6 w-6 '/></p>
        <p className='mt-5 text-xl'>
        I was porn in Egypt 🐪 (om el donya) in 2005 october in cairo I started coding when I was 11 and I kept going till now !
        </p>
        <a href="https://github.com/lazydiv">
        <button className='bg-gray-800 p-3 flex mt-10 mx-auto text-white  rounded-md  text-2xl px-6 shadow-lg transition-all ease  hover:shadow-[#6bc64485]   hover:bg-[#6cc644]  hover:shadow-xl  tracking-wide'>
         <p className='bi bi-github'><span className='ml-2'>Github</span></p> 
        </button>
        </a>
        <Footer />
    </div>
  )
  
}

export default Center