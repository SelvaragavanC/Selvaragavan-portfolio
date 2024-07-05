import Typewriter from 'typewriter-effect'

const DisplayTexts = (props:{list:string[]}) => {
  return (
    <Typewriter
        options={{
            strings: props.list,
            autoStart:true,
            loop:true,
            cursor:"_"
        }}
    >

    </Typewriter>
  )
}

export default DisplayTexts