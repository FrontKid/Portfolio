import styles from './Skills.module.scss'

const Backend = () => {
  return (
    <div className={styles.skillsContent}>
      <h3 className={styles.skillsTitle}>Back-end Developer</h3>

      <div className={styles.skillsBox}>
        <div className={styles.skillsGroup}>
          <div className={styles.skillsData}>
            <i className='bx bx-badge-check' />

            <div>
              <h3 className={styles.skillsName}>Node JS</h3>
              <span className={styles.skillsLevel}>Basic</span>
            </div>
          </div>

          <div className={styles.skillsData}>
            <i className='bx bx-badge-check' />

            <div>
              <h3 className={styles.skillsName}>Python</h3>
              <span className={styles.skillsLevel}>Basic</span>
            </div>
          </div>
        </div>
        <div className={styles.skillsGroup}>
          <div style={{ opacity: '0' }} className={styles.skillsData}>
            <i className='bx bx-badge-check' />

            <div>
              <h3 className={styles.skillsName}>Node JS</h3>
              <span className={styles.skillsLevel}>Basic</span>
            </div>
          </div>

          <div style={{ opacity: '0' }} className={styles.skillsData}>
            <i className='bx bx-badge-check' />

            <div >
              <h3 className={styles.skillsName}>Python</h3>
              <span className={styles.skillsLevel}>Basic</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Backend