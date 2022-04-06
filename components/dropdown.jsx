import React from 'react'
import { Menu, Transition } from '@headlessui/react'
import Link from "next/link"
import { MenuIcon } from '@heroicons/react/outline'

const Dropdown = () => {
  return (
    <Menu>
          <Menu.Button className='float-right p-2 m-2 -mr-[85px] hover:bg-gray-800 hover:text-white  dark:hover:bg-white dark:hover:bg-opacity-10 rounded-xl'><MenuIcon className='h-6'/></Menu.Button>
          <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"

          >
        
      
          <Menu.Items className='flex flex-col  text-left w-screen md:w-[200px] 
                                md:bg-black md:bg-opacity-10 md:dark:bg-opacity-5
                                md:dark:bg-black md:z-40  md:absolute 
                                md:mt-20 md:right-16 md:rounded-xl py-5
                                
                                md:backdrop-blur-sm
                                md:border border-gray-600 border-opacity-30 darK:border-opacity-40'>
            <Menu.Item>
                    <Link
                    
                    href="/"
                    >
                    <a className='flex w-11/12 mb-3 px-2 py-2 rounded-md  mx-auto hover:bg-gray-800 hover:text-white dark:hover:bg-white dark:hover:bg-opacity-10'> Home </a>
                    </Link>
            </Menu.Item>
            <Menu.Item>
                    <Link
                    href="/projects"
                    >
                    <a className='flex w-11/12 mb-3 px-2 py-2 rounded-md  mx-auto hover:bg-gray-800 hover:text-white dark:hover:bg-white dark:hover:bg-opacity-10'> Projects </a>
                    </Link>
            </Menu.Item>
            <Menu.Item>
            <div className='mt-3 text-center text-lg'>
                      <a href="https://www.github.com/lazydiv" className='bi bi-github mr-5'></a>
                      <a href="https://www.instagram.com/yahia_khalid_/" className='bi bi-instagram mr-5'></a>
                      <a href="https://www.linkedin.com/mynetwork/" className='bi bi-linkedin mr-5'></a>
                      </div>
            </Menu.Item>
          </Menu.Items>
        
      </Transition>
    </Menu>
  )
}

export default Dropdown