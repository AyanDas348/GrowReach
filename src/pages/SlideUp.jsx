import React, { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'


const SlideUp = ({children, width = "fit-content"}) => {

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    const controls = useAnimation()

    useEffect(() => {
    }, [isInView])

  return (
    <div ref={ref} className={`relative ${width} overflow-hidden`}>
        <motion.div 
        variants={{
            hidden: {opacity:0, y:100},
            visible: {opacity:1, y:0}
        }}
        initial= "hidden"
        animate= "visible"
        transition={{duration:0.5, delay:0.25}}
        viewport={{once: true}}
        >
            {children}
        </motion.div>
    </div>
  )
}

export default SlideUp