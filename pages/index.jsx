import React from 'react'
import Center from '../components/center'
import Head from 'next/head'
import { Canvas } from '@react-three/fiber'

export default function Home() {
  return(
    <div className='flex  text-gray-900 dark:text-white justify-center'>
        <Head>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" />
          <title>
            Yehia. - home
          </title>
        </Head>
      <div className='flex justify-center  lg:w-5/6'>
        <Center /> 
      </div>
    </div>
    ) 

}
