//react
import React from 'react'

//styles
import styles from './Portfolio.module.scss'

type TWorkItem = {
  id: number;
  image: string;
  title: string;
  category: string;
  gitHub: string;
  demo: string;
}

const WorksItem: React.FC<TWorkItem> = ({ image, title, demo }) => (
  <div className={styles.workCard} >
    <img className={styles.workImage} src={image} alt="Portfolio work" />
    <h3 className={styles.workTitle}>{title}</h3>
    <a
      className={styles.workButton}
      href={demo}
      rel="noreferrer"
      target='_blank'>
      Demo <i className={`${styles.workButtonIcon} bx bx-right-arrow-alt`} />
    </a>
  </div>
)

export default WorksItem