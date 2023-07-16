import About from "../components/About";
import Career from "../components/Career";
import Quotes from "../components/Quotes";
import Services from "../components/Services";
import Contact from "../components/Contact"
import Hero from "../components/Hero";
import { useRef, useEffect } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";

function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  useEffect(() => {
  }, [isInView])


  return (
    <section ref={ref}>
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
    </section>
  );
}


export default function Home() {

  return (
    <>
        <Section><Hero/></Section>
        <Section><About/></Section>
        <Section><Services/></Section>
        <Section><Quotes/></Section>
        <Section><Career/></Section>
        <Section><Contact/></Section>
        </>
  )
}
