import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from'react-icons/bs'
import {FaDribbbleSquare} from'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/emmanuel-a-851838121/'><BsLinkedin/></a>
        <a href='https://github.com'><BsGithub/></a>
        <a href='https://dribbble.com/MisterKissi'><FaDribbbleSquare/></a>
      
    </div>
  )
}

export default HeaderSocials
