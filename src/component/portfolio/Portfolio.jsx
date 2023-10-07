import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/port1.jpg'
import IMG2 from '../../assets/port2.png'
import IMG3 from '../../assets/port3.png'
import IMGI from '../../assets/fsproj01.png'


const data=[{
  id:'id1',
  image: IMG1,
  title: 'SaaS Voting Platform Dashboard',
  github: 'https://github.com',
  demo: 'https://dribbble.com/shots/20222508-SaaS-Voting-Platform-Dashboard'
},
{
id:'id2',
image: IMG2,
title: 'Digital Marketing Agency Website UI',
github: 'https://github.com',
demo: 'https://dribbble.com/shots/20266273-Digital-Marketing-Agency-Website-UI'
},
{
  id:'id3',
  image: IMG3,
  title: 'Vaultily: Budget Planner and Savings App UI',
  github: 'https://github.com',
  demo: 'https://dribbble.com/shots/20312462-Vaultily-Budget-Planner-and-Savings-App-UI'
  },

]

const data2=[{
  id:'id1',
  image: IMGI,
  title: '3D Shirt Customization With AI Generated Logos' ,
  github: 'https://github.com',
  demo: 'https://dribbble.com/shots/20222508-SaaS-Voting-Platform-Dashboard'
},
// {
// id:'id2',
// image: IMG2,
// title: 'Digital Marketing Agency Website UI',
// github: 'https://github.com',
// demo: 'https://dribbble.com/shots/20266273-Digital-Marketing-Agency-Website-UI'
// }

]

const Portfolio = () => {
  return (
   <section id='portfolio'>

    
    
    <h5>My Recent Work</h5>

    <h2>Portfolio</h2>

    <h2>UI/UX</h2>

    <div className="container portfolio__container">

    {
       data.map(({id, image, title, github,demo}) => {
        return (
        <article className='portfolio__item'>

        <div className="portfolio__item-image">
            <img src={image} alt={title} />
        </div>

        <h3 id={id}>{title}</h3>

        <div className="portfolio__item-cta">
          <a href={github} className='btn'>Github</a>
          <a href={demo} className='btn btn-primary' target='_blank' rel='noreferrer'>Live Demo</a>
        </div>
        
      </article>
        )
        })
    }
    </div>



<></>

<h2>Fullstack Web Development</h2>

<div className="container portfolio__container">

{
   data2.map(({id, image, title, github,demo}) => {
    return (
    <article className='portfolio__item'>

    <div className="portfolio__item-image">
        <img src={image} alt={title} />
    </div>

    <h3 id={id}>{title}</h3>

    <div className="portfolio__item-cta">
      <a href={github} className='btn'>Github</a>
      <a href={demo} className='btn btn-primary' target='_blank' rel='noreferrer'>Live Demo</a>
    </div>
    
  </article>
    )
    })
}
</div>
 
   </section>

   

   
  )
}

export default Portfolio
