import ContainerBlock from "../components/ContainerBlock";
import Carousel from "../components/Carousel";
import Work from "../components/Work";
import About from "../components/About";
import Contact from "../components/Contact";
import { motion } from "framer-motion"

const variants = {
  hidden: { opacity: 0, x: -800, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
}

export default function Home() {
  return <motion.main
  variants={variants} // Pass the variant object into Framer Motion 
  initial="hidden" // Set the initial state to variants.hidden
  animate="enter" // Animated state to variants.enter
  exit="exit" // Exit state (used later) to variants.exit
  transition={{ type: 'linear', duration: 1 }} // Set the transition to linear
  className="">
  <ContainerBlock
  title=""
  description=""
  >
    <Carousel/>
    <Work />
    <About />
    <Contact />
  </ContainerBlock>
  </motion.main>
}