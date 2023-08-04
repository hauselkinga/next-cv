import styles from "../styles/ProjectContainer.module.css";
import Repo from "./Repo";

export default function Github() {
  return (
    <section id="projects" className={styles.container}>
      <h1>Featured Projects</h1>
      <div className={styles.flex}>
        <Repo img="greenbay.jpg" link="https://github.com/hauselkinga/greenbay-homework-project" name="greenbay-homework-project"></Repo>
        <Repo img="sport.jpg" link="https://github.com/hauselkinga/HPlusSport-LinkedinLearning" name="HPlusSport-LinkedinLearning"></Repo>
        <Repo img="clips.jpg" link="https://github.com/hauselkinga/angular-clips" name="angular-clips"></Repo>
      </div>
    </section>
  );
}
