import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {BiUserCircle} from 'react-icons/bi'
import {BiBookAlt} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {AiOutlineMessage} from 'react-icons/ai'
import { useState } from 'react'
import {useEffect} from 'react'


const Nav = () => {

  const handleScroll = () => {
    const scrollPosition = window.scrollY; // => scroll position
    const windowHeight = document.documentElement.scrollHeight;
    const offsetHeight = document.documentElement.offsetHeight;


    const scrollPercentage = 100*((scrollPosition + offsetHeight) / windowHeight)
    console.log('Scroll Position: '+scrollPosition);
    console.log('Window Height: '+windowHeight);
    console.log('Offset Height: '+offsetHeight);
    console.log('Scroll Percentage: '+scrollPercentage);


    


};
useEffect(() => {
  handleScroll();
  window.addEventListener("scroll", handleScroll);
  
  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
  }, []);

    //  const windowPosition = window.screenTop;

    //  const windowHeight = document.documentElement.scrollHeight;

    //  const innerHeight = document.documentElement.innerHeight;

    //  const totalScroll = windowHeight - innerHeight;

    //  const scrollPercentage = windowPosition / totalScroll;

    //  console.log(windowPosition);


  const [activeNav, setActiveNav] = useState('#')
  return (
    
 <nav>
  <a href='#' onClick={()=> setActiveNav('#')} className={activeNav ==='#' ? 'active' : ''}><AiOutlineHome/></a>
  <a href='#about' onClick={()=> setActiveNav('#about')} className={activeNav ==='#about' ? 'active' : ''}><BiUserCircle/></a>
  <a href='#experience' onClick={()=> setActiveNav('#experience')} className={activeNav ==='#experience' ? 'active' : ''}><BiBookAlt/></a>
  <a href='#services' onClick={()=> setActiveNav('#services')} className={activeNav ==='#services' ? 'active' : ''}><RiServiceLine/></a>
  <a href='#contact' onClick={()=> setActiveNav('#contact')} className={activeNav ==='#contact' ? 'active' : ''}><AiOutlineMessage/></a>
 </nav>
  )
}

export default Nav
