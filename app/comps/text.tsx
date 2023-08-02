"use client";
import styles from "../styles/text.module.css";
import { useEffect, useState } from "react";

export default function Text() {
  const [intro, setIntro] = useState('hide');
  const [contact, setContact] = useState('hide');

  useEffect(() => {
    if (scrollY > screen.height) {
      setIntro('hide');
      setContact('');
    } else {
      setIntro('');
      setContact('hide');
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const handleScroll = () => {
    if (scrollY > screen.height) {
      setIntro('hide');
      setContact('');
    } else {
      setIntro('');
      setContact('hide');
    } 
  };

  return (
    <div id="text-container" className={styles.container}>
      <section className={intro}>
          <h1>Hello I am Kinga</h1>
          <h2>Junior Full-Stack Developer</h2>
      </section>
      <section className={contact}>
        <div>
          <a href="https://www.linkedin.com/in/kinga-hausel/" target="_blank">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://github.com/hauselkinga" target="_blank">
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
