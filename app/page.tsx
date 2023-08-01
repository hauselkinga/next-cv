import styles from './styles/page.module.css'
import About from './about'
import Github from './github'

export default function Home() {
  return (
    <div>
      <div className={styles.center}>
        <h1>Hello, I am Kinga</h1>
        <h2>Junior Full-Stack Developer</h2>
        <p>In case You are looking for an enthusiastic junior developer, please don't hesitate to reach out to me!</p>
      </div>
      <About></About>
      <Github></Github>
    </div>
  )
}
