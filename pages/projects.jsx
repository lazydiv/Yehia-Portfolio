import React from 'react'
import { useEffect, useState } from 'react'
import Head from 'next/head'
import Footer from '../components/footer'

function Projects() {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch('https://api.github.com/users/lazydiv/repos')
    .then(res => res.json())
    .then((data) => {
      setData(data)
      setLoading(false)
    })
  }, [])

  if (isLoading) return <p className='absolute w-screen text-center animate-pulse mt-[50%]'>Loading...</p>
  if (!data) return <p>No profile data</p>
  

  const item = data.map((item)=><div className='flex-col text-left shadow-lg lg:w-5/6 mx-auto bg-black bg-opacity-5 dark:bg-black dark:bg-opacity-10 rounded-xl p-5' key=''>
                <p className='mb-5 text-xl'>{item.name}</p>
                <p className='text-lg md:w-5/6'>{item.description}</p>
                <p className='text-xs bg-black bg-opacity-5 dark:bg-white dark:bg-opacity-10 text-center mt-2 w-[90px] py-1 rounded-md'>{item.language}</p>
                <button className='bg-gray-800 p-2 flex mt-8 text-white rounded-md  text-2xl px-6 shadow-lg transition-all ease  hover:shadow-[#6bc64485]   hover:bg-[#6cc644]  hover:shadow-xl  tracking-wide'> 
                  <a href={item.html_url}>
                  <p className='bi bi-arrow-right-short text-3xl w-10'></p>
                  </a>
                </button>
                </div>);
  return (
 
    <div className='flex-col  mx-auto justify-center bg-[#fffffb] dark:bg-gray-900 text-gray-900 dark:text-white'>
      <Head>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" />
          <title>
            Yehia. - Project
          </title>
        </Head>
        <p className='text-3xl my-10 w-28 mx-auto justify-cente text-center  border-b-2 dark:border-white dark:border-opacity-20 z-30 pb-2'>Projects</p>
      <div className='absolute my-10 bg-[#fffffb] dark:bg-gray-900 text-gray-900 dark:text-white'>
        <div className='grid grid-cols-1 gap-10 mx-auto w-5/6 md:w-4/6 xl:w-3/6 text-center'>
          {item}
        </div>
        <Footer />
      </div>
      <br />
        
    </div>
    
    
  )
}

export default Projects