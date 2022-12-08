import { useSelector, useDispatch } from 'react-redux'

import { selectorToggle, setToggle } from '../../features/showMenu'
import styles from './Header.module.scss'

const Header = () => {

  /*===============TOGGLE MENU================== */
  const toggle = useSelector(selectorToggle)
  const dispatch = useDispatch()

  const toggleMenuOnClick = () => {
    dispatch(setToggle(!toggle))
  }



  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <a href="index.html" className={styles.navLogo}>Poltorak Denys</a>

        <div
          className={toggle
            ? `${styles.navMenu} ${styles.showMenu}`
            : styles.navMenu}>
          <ul className={`${styles.navList}`}>
            <li className="nav__item">
              <a href="#home" className={`${styles.navLink} ${styles.activeLink}`}>
                <i className={`uil uil-estate ${styles.navIcon}`} /> Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className={styles.navLink}>
                <i className={`uil uil-user ${styles.navIcon}`} /> About
              </a>
            </li>
            <li className="nav__item">
              <a href="#skills" className={styles.navLink}>
                <i className={`uil uil-file-alt ${styles.navIcon}`} /> Skills
              </a>
            </li>
            <li className="nav__item">
              <a href="#services" className={styles.navLink}>
                <i className={`uil uil-briefcase-alt ${styles.navIcon}`} /> Services
              </a>
            </li>
            <li className="nav__item">
              <a href="#portfolio" className={styles.navLink}>
                <i className={`uil uil-scenery ${styles.navIcon}`} /> Portfolio
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" className={styles.navLink}>
                <i className={`uil uil-message  ${styles.navIcon}`} /> Contact
              </a>
            </li>
          </ul>

          <i
            className={`uil uil-times ${styles.navClose}`}
            onClick={toggleMenuOnClick} />
        </div>

        <div
          className={styles.navToggle}
          onClick={toggleMenuOnClick}>
          <i className="uil uil-apps" />
        </div>
      </nav>
    </header >
  )
}

export default Header