import Background from './comps/Background'
import BackgroundContent from './comps/BackgroundContent'
import About from './comps/About'
import ProjectContainer from './comps/ProjectContainer'

export default function Home() {
  return (
    <div>
      <Background></Background>
      <BackgroundContent></BackgroundContent>
      <About></About>
      <ProjectContainer></ProjectContainer>
      <section id='contacts' />
    </div>
  )
}
