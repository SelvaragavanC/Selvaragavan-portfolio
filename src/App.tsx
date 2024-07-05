import ProjectSection from './components/Sections/ProjectSection'
// import Notification from './components/Notification'
import LandingSection from './components/Sections/LandingSection'
import SkillSection from './components/Sections/SkillSection'
import ContactSection from './components/Sections/ContactSection'
function App() {
  return (
    <>
      {/* <Notification text='This site is under construction!!!' backgroundColor='bg-yellow-500'/> */}
      <LandingSection/>
      <SkillSection/>
      <ProjectSection/>
      <ContactSection/>
    </>
  )
}

export default App