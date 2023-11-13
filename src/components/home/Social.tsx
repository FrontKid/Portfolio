//react
import React from 'react'

//styles
import styles from './Home.module.scss'

const Social: React.FC = () => (
  <div className={`${styles.homeSocial}`}>
    <a href="https://t.me/anywlhere" className={`${styles.homeSocialIcon}`} target="__blank">
      <i className="uil uil-telegram" />
    </a>
    <a href="https://github.com/FrontKid" className={`${styles.homeSocialIcon}`} target="__blank">
      <i className="uil uil-github" />
    </a>
    <a href="https://www.linkedin.com/in/denys-poltorak-b14579292/" className={`${styles.homeSocialIcon}`} target="__blank">
      <i className="uil uil-linkedin" />
    </a>
  </div>
)

export default Social