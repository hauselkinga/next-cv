"use client"
import styles from '../styles/text.module.css'
import { useEffect } from 'react'

export default function Text() {
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  const handleScroll = (e: Event) => {
    const element = (e.target as Document).getElementById('text-container');
    
    if (element && scrollY > screen.height) {
      element.innerHTML = `
      <i class="fa-brands fa-linkedin"></i>
      <i class="fa-brands fa-square-github"></i>
      <i class="fa-solid fa-envelope"></i>
      `
    } else if(element) {
      element.innerHTML =
      `<div>
        <h1>Hello I am Kinga</h1>
        <h2>Junior Full-Stack Developer</h2>
      </div>`
    }
  }

  return (
    <div id='text-container' className={styles.container}>
      <div>
        <h1>Hello I am Kinga</h1>
        <h2>Junior Full-Stack Developer</h2>
      </div>
    </div>
  )
}
