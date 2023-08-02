import Background from './comps/background'
import Text from './comps/text'
import About from './comps/about'
import Github from './comps/github'
import Contact from './comps/background'

export default function Home() {
  return (
    <div>
      <Background></Background>
      <Text></Text>
      <About></About>
      <Github></Github>
      <br id='contacts' />
    </div>
  )
}
