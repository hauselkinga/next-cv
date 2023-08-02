import styles from "../styles/ProjectContainer.module.css";
import Repo from "./repo";

export default function Github() {
  return (
    <div id="projects" className={styles.container}>
      <h1>Featured Projects</h1>
      <div className={styles.flex}>
        <Repo name="greenbay-homework-project" commits="84" key={1}></Repo>
        <Repo name="angular-weather-app" commits="11" key={2}></Repo>
        <Repo name="angular-clips" commits="32" key={3}></Repo>
      </div>
    </div>
  );
}
