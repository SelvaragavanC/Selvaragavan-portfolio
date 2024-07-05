
const Skill = (props:SkillProps) => {
  return (
    <div className='flex text-white justify-between gap-2' >
        <p>{props.skill}</p>
        <div className='h-4 w-52 relative border-2 border-white overflow-hidden rounded-lg bg-slate-300 '>
          <div className={`${props.width} bg-green-600 `}>
            .
          </div>
        </div>
    </div>
  )
}

type SkillProps = {
    skill:string,
    width:string
}

export default Skill