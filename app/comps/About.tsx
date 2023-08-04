import styles from "../styles/About.module.css";
import Tech from "./Tech";

export default function About() {
  return (
    <section id="about" className={styles.container}>
      <div className={styles.grid}>
        <article className={styles.text}>
          <h1>About me</h1>
          <p>
            During my BA studies, I realized how much I miss objective and
            solution-focused thinking. I decided to try myself with the
            MyFirstApp Coding Camp at Green Fox Academy and with beginner Unity
            courses at Zenva Academy. As it turned out, I have found what I was
            missing!
          </p>
          <p>
            I recently completed my studies at Green Fox Academy and graduated
            as a Full-Stack Developer.
          </p>
          <p>
            I am highly motivated to find a career where I can prove myself as a
            dedicated and driven professional. I am passionate about delivering
            results and constantly seeking ways to learn and grow in the
            process.
          </p>
          <p>
            In case You are looking for an enthusiastic junior developer, please
            don't hesitate to reach out to me!
          </p>
        </article>
        <article className={styles.technologies}>
          <Tech src="cs.svg" name="C#"></Tech>
          <Tech src="dotnet.svg" name="ASP.NET Core"></Tech>
          <Tech src="js.svg" name="JavaScript"></Tech>
          <Tech src="ts.svg" name="TypeScript"></Tech>
          <Tech src="next.svg" name="Next.js"></Tech>
          <Tech src="angular.svg" name="Angular"></Tech>
        </article>
      </div>
    </section>
  );
}
