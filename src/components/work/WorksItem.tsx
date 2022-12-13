import React from 'react'

import styles from './Portfolio.module.scss'

type TWorkItem = {
  id: number;
  image: string;
  title: string;
  category: string;
}

const WorksItem: React.FC<TWorkItem> = ({ image, title }) => {

  return (
    <div className={styles.workCard} >
      <img className={styles.workImage} src={image} alt="Portfolio work" />
      <h3 className={styles.workTitle}>{title}</h3>

      <a className={styles.workButton} href="https://google.com">
        Demo <i className={`${styles.workButtonIcon} bx bx-right-arrow-alt`} />
      </a>
    </div>
  )
}

export default WorksItem