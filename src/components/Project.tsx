
const Project = (props:ProjectProps) => {
  return (
    <div id='projects' className='flex gap-5 justify-between text-white rounded border-2 border-white p-2  flex-col lg:flex-row' >
        <img src={props.img} alt="project image" className=' w-full h-full  lg:w-28 lg:h-28'/>
        {/* content container */}
        <div>
            <h1 className='text-green-600 text-2xl capitalize'>{props.title}</h1>
            <p className='text-gray-800 text-lg'>{props.madeWith}</p>
            <p>{props.description}</p>
        </div>
  </div>
  )
}

type ProjectProps = {
    img:any,
    title:string,
    description:string,
    madeWith:string
}

export default Project