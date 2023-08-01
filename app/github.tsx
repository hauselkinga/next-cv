import styles from './styles/github.module.css'
import Repo from './repo'

export default function Github() {
  return (
    <div className={styles.container}>
      <div>My GitHub Repositories</div>
      <div className={styles.grid}>
        <Repo></Repo>
        <Repo></Repo>
        <Repo></Repo>
        <Repo></Repo>
      </div>
    </div>
  )
}
