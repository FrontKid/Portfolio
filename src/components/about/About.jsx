import style from './About.module.scss'
import profile from '../../assets/profile.jpg'
import poltorakCV from '../../assets/poltorakCV.pdf'
const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className='section__title'>About me</h2>
      <span className='section__title'>My introduction</span>

      <div className={`${style.aboutContainer} container grid`}>
        <img className={style.aboutImg} src={profile} alt="Poltorak Denys" />
      </div>
    </section>
  )
}

export default About