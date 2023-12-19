import Link from 'next/link'
import styles from 'styles/logo.module.css'

const Logo = ({ box0n = false }) => {
  return (
    <Link href='/' className={box0n ? styles.box : styles.basic}>
      CUBE
    </Link>
  )
}
export default Logo
