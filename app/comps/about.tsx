import styles from '../styles/about.module.css'
import Tech from './tech'

export default function About() {
  return (
    <div className={styles.container}>
      <h1>About</h1>
      <div className={styles.grid}>
        <section className={styles.text}>
        <p>During my BA studies, I realized how much I miss objective and solution-focused thinking.
          I decided to try myself with the MyFirstApp Coding Camp at Green Fox Academy and with beginner Unity courses at Zenva Academy.
          As it turned out, I have found what I was missing! <br />
          I recently completed my studies at Green Fox Academy and graduated as a Full-Stack Developer. <br />
          I am highly motivated to find a career where I can prove myself as a dedicated and driven professional.
          I am passionate about delivering results and constantly seeking ways to learn and grow in the process. <br />
          In case You are looking for an enthusiastic junior developer, please don't hesitate to reach out to me!</p>
        </section>
        <section className={styles.technologies}>
          <Tech src="cs.svg" name="C#"></Tech>
          <Tech src="dotnet.svg" name="ASP.NET Core"></Tech>
          <Tech src="js.svg" name="JavaScript"></Tech>
          <Tech src="ts.svg" name="TypeScript"></Tech>
          <Tech src="next.svg" name="Next.js"></Tech>
          <Tech src="angular.svg" name="Angular"></Tech>
        </section>
      </div>
    </div>
  )
}
