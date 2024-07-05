import logo from '/Selvaragavan-logo.svg'
const Navbar = () => {
  return (
    <div
        className='capitalize  px-10 h-15  flex items-center justify-between text-white'
    >
        <div>
            <img src={logo} alt="" className='w-20 h-20'/>
        </div>
        <div className='flex items-center justify-evenly w-fit gap-10 cursor-pointer'>
            <div className='transition-all duration-300 hover:bg-gray-100 hover:text-black p-1 hidden md:block'><a href="#skills">skills</a></div>
            <div className='transition-all duration-300 hover:bg-gray-100 hover:text-black p-1 hidden md:block'><a href="#projects">projects</a></div>
            <div className='transition-all duration-300 hover:bg-gray-100 hover:text-black p-1'><a href="#contact">contact</a></div>
        </div>
    </div>
  )
}

export default Navbar