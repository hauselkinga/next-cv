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
      <p>pls contact me</p>
      `
    } else if(element) {
      element.innerHTML = `
      <h1>Hello I am Kinga</h1>
      <h2>Junior Full-Stack Developer</h2>`
    }
  }

  return (
    <div id='text-container' className={styles.container}>
      <h1>Hello I am Kinga</h1>
      <h2>Junior Full-Stack Developer</h2>
    </div>
  )
}
