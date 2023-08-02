import styles from '../styles/tech.module.css'

export default function Tech(props: any) {
  return (
    <div className={styles.container}>
      <img src={props.src} alt="" />
      <span>{props.name}</span>
    </div>
  )
}
