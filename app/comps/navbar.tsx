import styles from '../styles/navbar.module.css'

export default function Navbar() {
  return (
    <div className={styles.container}>
      <div>Kinga Hausel</div>
      <div>
        <a href="#">About</a>
        <a href="#">Skills</a>
        <a href="#">Contact</a>
      </div>
    </div>
  )
}
