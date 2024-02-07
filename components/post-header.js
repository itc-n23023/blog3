import styles from 'styles/post-header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-regular-svg-icons'
<<<<<<< HEAD
import ConvertDate from 'components/convert-date'

const PostHeader = (props = { publish: '' }) => {
  return (
    <div className={styles.stack}>
      <p className={styles.subtitle}>{props.subtitle}</p>
      <h1 className={styles.title}>{props.title}</h1>
      {props.publish && (
        <div className={styles.publish}>
          <FontAwesomeIcon icon={faClock} size='ls' color='var(--gray-25)' />
          <ConvertDate dateISO={props.publish} />
=======

const PostHeader = ({ title, subtitle, publish = '' }) => {
  return (
    <div className={styles.stack}>
      <p className={styles.subtitle}>{subtitle}</p>
      <h1 className={styles.title}>{title}</h1>
      {publish && (
        <div className={styles.publish}>
          <FontAwesomeIcon icon={faClock} size='lg' color='var(--gray-25)' />
          {publish}
>>>>>>> 4677602 (chapter8 css header.js naosi tukurinaosi)
        </div>
      )}
    </div>
  )
}
export default PostHeader
