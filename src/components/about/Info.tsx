//react
import React from 'react'

//styles
import style from './About.module.scss'

const Info: React.FC = () => (
  <div className={`${style.aboutInfo} grid`}>
    <div className={style.aboutBox}>
      <i className={`${style.aboutIcon} bx bx-award`} />
      <h3 className={style.aboutTitle}>Experience</h3>
      <span className={style.aboutSubTitle}>1 year</span>
    </div>
    <div className={style.aboutBox}>
      <i className={`${style.aboutIcon} bx bx-message-square-dots`} />
      <h3 className={style.aboutTitle}>English</h3>
      <span className={style.aboutSubTitle}>Intermediate</span>
    </div>
    <div className={style.aboutBox}>
      <i className={`${style.aboutIcon} bx bx-briefcase-alt`} />
      <h3 className={style.aboutTitle}>Relocate</h3>
      <span className={style.aboutSubTitle}>Possible</span>
    </div>
  </div>
)

export default Info