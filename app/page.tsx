import Background from './comps/background'
import Text from './comps/text'
import About from './comps/about'
import ProjectContainer from './comps/ProjectContainer'

export default function Home() {
  return (
    <div>
      <Background></Background>
      <Text></Text>
      <About></About>
      <ProjectContainer></ProjectContainer>
      <section id='contacts' />
    </div>
  )
}
