import React from 'react'
import './about.css'
import ME from '../../assets/me2.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {BiLibrary} from 'react-icons/bi'

const About = () => {
  return (
 <section id='about'>
    <h5>Get To Know</h5>
    <h2>About Me</h2>

    <div className='container about__container'>
        <div className='about__me'>
            <div className="about__me-image">
              <img src={ME} alt="" />  
            </div>
        </div>
        <div className="about__content">
            <div className="about__cards">
            <article className='about__card'>
                <FaAward className='about__icon'/>
                <h5>Experience</h5>
                <small>2+ Years Working</small>
            </article>

            <article className='about__card'>
                <FiUsers className='about__icon'/>
                <h5>Clients</h5>
                <small>100+ Clients Worldwide</small>
            </article>

            <article className='about__card'>
                <BiLibrary className='about__icon'/>
                <h5>Projects</h5>
                <small>30+ Projects Completed</small>
            </article>
            </div>
            <p>
            Hi there! My name is Emmanuel Kissi and I am a Biomedical Engineer 
            with a passion for using my technical and scientific skills to make 
            a positive impact. As the Founder and CEO of 9ce Technologies, I 
            lead a team that works to repair and reuse electronics in order to 
            reduce electronic waste. In addition to my expertise in engineering, 
            I have also gained valuable experience in social UI/UX design, 
            Fullstack Web Development, and internships in various engineering roles.
            In my free time, I enjoy staying up-to-date with the latest trends 
            and technologies in my field and am always open to learning and growing
            as a professional.
            Thank you for visiting my personal portfolio.  
            </p>

            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
    </div>

 </section>
  )
}

export default About
