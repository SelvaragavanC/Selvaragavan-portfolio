import React from 'react';
import { motion } from 'framer-motion';
import Skill from '../Skill';

const skillCardVariants = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1, transition: { duration: 1.2 } },
};

const frontendSkills = [
  {skill:'HTML',width:'w-10/12'},
  {skill:'CSS',width:'w-10/12'},
  {skill:'Tailwind',width:'w-10/12'},
  {skill:'Javascript',width:'w-8/12'},
  {skill:'React',width:'w-1/2'}
]

const backendSkills = [
  {skill:'Java',width:'w-11/12'},
  {skill:'Springboot',width:'w-8/12'},
  {skill:'REST API',width:'w-10/12'},
  {skill:'Thymeleaf',width:'w-1/2'},
  {skill:'SQL',width:'w-11/12'},
  {skill:'MongoDB',width:'w-1/2'}
]

const additionalSkills = [
  {skill:'Linux',width:'w-10/12'},
  {skill:'Git',width:'w-8/12'},
  {skill:"AWS",width:'w-1/2'},
  {skill:'Docker',width:'w-10/12'},
  {skill:'DSA',width:'w-11/12'}
]



function SkillSection() {
  return (
    <div id='skills' className='bg-gradient-to-b  from-black to-slate-900 min-h-fit px-10 py-5 flex flex-col lg:flex-row items-center justify-evenly  gap-5'>
      <motion.div
        initial="initial"
        whileInView="whileInView"
        variants={skillCardVariants}
        className=' h-fit p-5 border-2 border-white lg:w-fit w-full flex flex-col gap-4 rounded'
      >
        <h1 className='text-3xl text-white  border-b-2 border-white'>Frontend Skills</h1>
        <div className='flex flex-col gap-4' >
          {
            frontendSkills.map((e:any)=>{
              return(
                  <Skill key={e.skill} skill={e.skill} width={e.width} />
              )
            })
          }
        </div>
      </motion.div>
      <motion.div
        initial="initial"
        whileInView="whileInView"
        variants={skillCardVariants}
        className=' h-fit p-5 border-2 border-white lg:w-fit w-full flex flex-col gap-4  rounded'
      >
        <h1 className='text-3xl text-white  border-b-2 border-white'>Backend Skills</h1>
        <div className='flex flex-col gap-4' >
          {
            backendSkills.map((e:any)=>{
              return(
                  <Skill key={e.skill} skill={e.skill} width={e.width} />
              )
            })
          }
        </div>
      </motion.div>
      <motion.div
        initial="initial"
        whileInView="whileInView"
        variants={skillCardVariants}
        className=' h-fit p-5 border-2 border-white lg:w-fit w-full flex flex-col gap-4 rounded'
      >
        <h1 className='text-3xl text-white  border-b-2 border-white'>Additional Skills</h1>
        <div className='flex flex-col gap-4' >
          {
            additionalSkills.map((e:any)=>{
              return(
                  <Skill key={e.skill} skill={e.skill} width={e.width} />
              )
            })
          }
        </div>
      </motion.div>
    </div>
  );
}

export default SkillSection;
