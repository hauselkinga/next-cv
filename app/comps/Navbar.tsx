import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.container}>
      <a href="#">Kinga Hausel</a>
      <ul>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contacts">Contacts</a>
        </li>
      </ul>
    </nav>
  );
}
