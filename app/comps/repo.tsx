import Link from 'next/link'
import styles from '../styles/repo.module.css'

export default function Repo(props: any) {
  return (
    <Link href={props.link} target='_blank' className={styles.container}>
      <img src={props.img} />
      <div>{props.name}</div>
    </Link>
  )
}
