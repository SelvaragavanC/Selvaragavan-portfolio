import Navbar from '../Navbar'
import DisplayTexts from '../DisplayTexts'
import image from '/SelvaPortFolio.jpg'
import {motion} from 'framer-motion'

const LandingSection = () => {
    const contents:string[] = ["Selvaragavan","a Software Engineer"]

    
 
  return (
    <div className=' lg:min-h-screen bg-gradient-to-b from-slate-900 to-black flex flex-col' >
        <Navbar/>
        <div className="flex flex-col-reverse lg:flex-row px-10 py-5  lg:flex-1 items-center lg:justify-center lg:h-full">
            <div className=' w-full h-full flex-col flex items-left justify-center md:justify-start' >
                <div className='text-3xl text-white mb-5 font-typewriter'>I'm <span className='text-green-600'> {<DisplayTexts list={contents }/>}</span></div>
                <div className='text-wrap text-md text-white lg:w-10/12 text-justify' >
                    Hello, I am a software enthusiast eager to apply my skills in real-world projects. I have strong expertise in developing REST APIs using Spring Boot, creating dynamic single-page applications with React, and possess great knowledge of Data Structures and Algorithms.
                </div>
            </div>
            <motion.div 
                className=" flex items-center justify-center w-full h-full "
                initial = {{opacity:0}}
                transition={{duration:1}}
                whileInView={{opacity:1}}
            >
                <img src={image} alt="selvaragavan" className='w-80 h-80 rounded-full shadow-xl shadow-black' />
            </motion.div>
        </div>
    </div>
  )
}

export default LandingSection