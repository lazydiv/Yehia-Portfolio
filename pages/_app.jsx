import '../styles/style.css'
import { ThemeProvider } from 'next-themes'
import Header from '../components/header'
import Model from './Model'
import { motion, AnimatePresence } from "framer-motion"
import React, { Suspense, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage } from '@react-three/drei'

function MyApp({ Component, pageProps: { session, ...pageProps }, router }) {
  const ref = useRef()
  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  }
  return (
    <div className='absolute w-full'>
      <ThemeProvider attribute="class">

        <Header />
        
      
    
      <Canvas shadows className='mt-32'  dpr={[1, 2]} camera={{ fov: 50 }}>
        <Suspense  fallback={<p>Loading...</p>}>
          <Stage controls={ref} preset="rembrandt" intensity={0.75}  environment="">
            <Model />
          </Stage>
        </Suspense>
        <OrbitControls minZoom="5" ref={ref} autoRotate autoRotateSpeed={2} />
      </Canvas>


      <AnimatePresence exitBeforeEnter initial={true}>
      <motion.main
      key={router.route}
      variants={variants} // Pass the variant object into Framer Motion 
      initial="hidden" // Set the initial state to variants.hidden
      animate="enter" // Animated state to variants.enter
      exit="exit" // Exit state (used later) to variants.exit
      transition={{ type: 'spring', default: { duration: 0.2 }}} // Set the transition to linear
      className=""
      >
    

        <Component {...pageProps} />
      </motion.main>
      </AnimatePresence>
      </ThemeProvider>
    </div>
  );
}

export default MyApp