import styles from '../styles/repo.module.css'

export default function Repo(props: any) {
  return (
    <div className={styles.container}>
      <div>{props.name}</div>
      <div>{props.commits}</div>
    </div>
  )
}
