import React from 'react'
import { SunIcon, MenuIcon } from '@heroicons/react/outline'
import { useTheme } from 'next-themes'
import Dropdown from './dropdown'

const Header = () => {
  const {theme, setTheme} = useTheme()
  return (
    

    <header className='fixed z-40 border-b border-gray-600 border-opacity-30 darK:border-opacity-40 t-0  w-screen bg-black bg-opacity-10 dark:bg-opacity-5 text-2xl
    before:absolute before:inset-0
    before:z-[-10]
    before:block
    before:w-full before:h-full
    before:backdrop-blur-sm'>
        <div className='md:mx-16 lg:mx-32'>
          <h1 className='float-left p-3'>Yehia.</h1>
          {/* <div className='float-right p-2 mt-2 mr-4 border-2 border-gray-900 border-opacity-70 dark:border-white dark:border-opacity-50  rounded-xl'><MenuIcon className='h-5'/></div> */}
          <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className='float-right mr-16 z-30 mt-2  p-1 rounded-xl transition-all ease hover:text-white hover:bg-gray-900  dark:hover:bg-yellow-500 '>
            <SunIcon className="h-8 w-8"/>
          </button>
        </div>
            <Dropdown className='z-50'/>
    </header>

  )
}

export default Header