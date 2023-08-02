"use client";
import styles from "../styles/text.module.css";
import { useEffect } from "react";

export default function Text() {
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const handleScroll = (e: Event) => {
    const element = (e.target as Document).getElementById("text-container");

    if (element && scrollY > screen.height) {
      (element.firstChild as HTMLElement).classList.add("hide");
      (element.lastChild as HTMLElement).classList.remove("hide");
    } else if (element) {
      (element.firstChild as HTMLElement).classList.remove("hide");
      (element.lastChild as HTMLElement).classList.add("hide");
    }
  };

  return (
    <div id="text-container" className={styles.container}>
      <section>
          <h1>Hello I am Kinga</h1>
          <h2>Junior Full-Stack Developer</h2>
      </section>
      <section className="hide">
        <div>
          <a href="https://www.linkedin.com/in/kinga-hausel/">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://github.com/hauselkinga">
            <i className="fa-brands fa-square-github"></i>
          </a>
          <a href="mailto:hausel.kinga@gmail.com">
            <i className="fa-solid fa-envelope"></i>
          </a>
        </div>
      </section>
    </div>
  );
}
