import React from 'react'

import styles from './Footer.module.scss'

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.footerContainer} container`}>
        <h1 className={styles.footerTitle}>Poltorak Denys</h1>

        <ul className={styles.footerList}>
          <li>
            <a className={styles.footerLink} href="#about">About</a>
          </li>

          <li>
            <a className={styles.footerLink} href="#portfolio">Projects</a>
          </li>

          <li>
            <a className={styles.footerLink} href="#skills">Skills</a>
          </li>
        </ul>

        <div className={styles.footerSocials}>
          <a href="https://t.me/anywlhere" className={`${styles.footerSocialLink}`} target="__blank">
            <i className="bx bxl-facebook" />
          </a>
          <a href="https://github.com/FrontKid" className={`${styles.footerSocialLink}`} target="__blank">
            <i className="bx bxl-instagram" />
          </a>
          <a href="https://www.linkedin.com/in/denys-poltorak-6bb51824b/" className={`${styles.footerSocialLink}`} target="__blank">
            <i className="bx bxl-twitter" />
          </a>
        </div>
        <span className={styles.footerCopy}>
          &#169; Poltorak. All rights reserved
        </span>
      </div>
    </footer>

  )
}

export default Footer