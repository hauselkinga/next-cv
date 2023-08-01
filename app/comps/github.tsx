import styles from '../styles/github.module.css'
import Repo from './repo'

export default function Github() {
  return (
    <div className={styles.container}>
      <div>My GitHub Repositories</div>
      <div className={styles.grid}>
        <Repo name="greenbay-homework-project" commits="84" key={1}></Repo>
        <Repo name="angular-weather-app" commits="11" key={2}></Repo>
        <Repo name="angular-clips" commits="32" key={3}></Repo>
        <Repo name="HPlusSport-LinkedinLearning" commits="31" key={4}></Repo>
      </div>
    </div>
  )
}
