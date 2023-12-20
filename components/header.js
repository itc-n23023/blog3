import Container from 'components/container'
import Logo from 'components/logo'
import Nav from 'components/nav'
import styles from 'styles/header.module.css'

const Header = () => {
  return (
    <header>
      <Container large>
        <div className={styles.flexContainer}>
          <Logo box0n />
          <Nav />
        </div>
      </Container>
    </header>
  )
}
export default Header
