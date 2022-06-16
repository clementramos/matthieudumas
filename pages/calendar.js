import React from "react";
import ContainerBlock from "../components/ContainerBlock";
import Calendar from "../components/Calendar";
import { motion } from "framer-motion"

const variants = {
  hidden: { opacity: 0, x: -800, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
}

export default function calendar () {
  return (
    <motion.main
  variants={variants} // Pass the variant object into Framer Motion 
  initial="hidden" // Set the initial state to variants.hidden
  animate="enter" // Animated state to variants.enter
  exit="exit" // Exit state (used later) to variants.exit
  transition={{ type: 'linear', duration: 1 }} // Set the transition to linear
  className="">
    <ContainerBlock>
      <Calendar/>
    </ContainerBlock>
    </motion.main>
  )
}