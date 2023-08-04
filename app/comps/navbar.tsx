import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles.container}>
      <a href="#">Kinga Hausel</a>
      <div>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contacts">Contacts</a>
      </div>
    </div>
  );
}
