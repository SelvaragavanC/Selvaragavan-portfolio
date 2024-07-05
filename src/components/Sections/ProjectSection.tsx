import todo from '/todo-list-app.png'
import Project from '../Project'
import tasks from '/task-tracker-app.png'
import {motion} from 'framer-motion'
import property from '/property-portal-app.png'
import agri from '/agriculture-app.png'



const projects = [
  {
    title:'to-do list',
    madeWith:'MERN',
    img: todo,
    description:'This is a todo list application with seprate user logins. It use JWT tokens to validate user emails. All of the users todo\'s are stored in a central database(MongoDB)'
  },
  {
    title:'tasks tracker',
    madeWith:'MERN',
    img: tasks,
    description:'This is a task assigner application. Every user can create a group and he will be the admin of that group. Every user can request to join any group. There is seperate search filter functionality for filtering out the groups. Admin receives a mail about the requisition of someone to join their group. Admins can assign tasks to all of the members. Have JWT authentication for all requests.'
  },
  {
    title:'Property Portal',
    madeWith:'Springboot',
    img: property,
    description: 'This project mainly focusses on providing an REST API for a real estate application. It has two entities user and a property. All the users can get to know about all the properties available. All users can upload their property either for sale or rent and also they can verify it by giving verifcation request to us.'
  },
  {
    title:'Agriculture App',
    madeWith:'Springboot',
    img: agri,
    description: 'It is a REST API. Mainly it has three entities, A consumer, Farmer and Transporter. An order is made by the consumer for the product that are listed by the farmer. Transporter is responsible for transporting the product to the cosnumer\'s address. Transportation fees is also added to the consumer\'s order'
  }
]

const ProjectSection = () => {
  return (
    <div className='bg-gradient-to-b from-slate-900 to-black p-10'>
        <h1 className='text-center text-white text-3xl'>Projects</h1>
        {/* container */}
        <motion.div className='w-full flex lg:flex-row flex-wrap flex-col gap-5 pt-10' initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1.2}} >
          {
            projects.map((project)=>{
              return (
                <Project
                  title={project.title}
                  madeWith={project.madeWith}
                  img={project.img}
                  description={project.description}
                />
              )
            })
          }
        </motion.div>
    </div>
  )
}

export default ProjectSection