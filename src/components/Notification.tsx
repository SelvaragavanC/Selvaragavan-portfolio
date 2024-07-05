// import {motion} from 'framer-motion'

function Notification(props:NotificationProps) {
  return (
    
    <div className={`${props.backgroundColor}  h-6 text-white  text-center`} >
        {props.text}
    </div>
  )
}


//type definitions

type NotificationProps = {
    text:string,
    backgroundColor:string
}

export default Notification