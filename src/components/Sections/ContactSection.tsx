import { FaLinkedinIn } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { SiLeetcode } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

const ContactSection = () => {
  return (
    <div id='contact' className='flex bg-black gap-5 p-10 justify-center items-center' >
        <h1 className='text-white'>Contact me : </h1>
        <a href='https://www.linkedin.com/in/SelvaragavanC' target='_blank' className='hover:bg-blue-700 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer'>
            <FaLinkedinIn
                color='white'
            />
            
        </a>
        <a href='mailto:selvaragavanpersonalid@gmail.com' target='_blank' className='hover:bg-red-500 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer'>
            <BiLogoGmail
                color='white'
            />
            
        </a>
        <a href='https://leetcode.com/Selvaragavan_C' target='_blank'  className='hover:bg-yellow-500 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer'>
            <SiLeetcode
                color='white'
            />
            
        </a>
        <a href='https://github.com/SelvaragavanC' target='_blank'  className='hover:bg-gray-500 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer'>
            <FaGithub
                color='white'
            />
            
        </a>
    </div>
  )
}

export default ContactSection