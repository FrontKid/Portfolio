import React from 'react'

import styles from './Home.module.scss'

const Social: React.FC = () => {
  return (
    <div className={`${styles.homeSocial}`}>
      <a href="https://t.me/anywlhere" className={`${styles.homeSocialIcon}`} target="__blank">
        <i className="uil uil-telegram" />
      </a>
      <a href="https://github.com/FrontKid" className={`${styles.homeSocialIcon}`} target="__blank">
        <i className="uil uil-github" />
      </a>
      <a href="https://www.linkedin.com/in/denys-poltorak-6bb51824b/" className={`${styles.homeSocialIcon}`} target="__blank">
        <i className="uil uil-linkedin" />
      </a>
    </div>
  )
}

export default Social