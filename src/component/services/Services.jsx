import React from 'react';
import './services.css'
import {TiTick} from 'react-icons/ti'

const Services = () => {
  return (
  <section id='services'>
    <h5>What I Offer</h5>
    <h2>Services</h2>

    <div className="container services__container">
      <article className='service'>
        <div className="service__head">
          <h3> UI/UX Design</h3>
        </div>

        <ul className='service__list'>

        <li>
            <div><TiTick className='service__list-icon'/></div>
            <div><p>Research and analysis</p></div>
          </li>

          <li>
            <div><TiTick className='service__list-icon'/></div>
            <div><p>Wireframing and prototyping</p></div>
          </li>

          <li>
             <div><TiTick className='service__list-icon'/></div>  
            <div><p>Designing interfaces and user flows</p></div> 
          </li>

          <li>
            <div><TiTick className='service__list-icon'/></div>
           <div> <p>Designing and conducting user testing</p></div>
          </li>

          <li>
            <div><TiTick className='service__list-icon'/></div>
            <div><p>Creating style guides and design systems</p></div>
          </li>


        </ul>
      </article>

      <article className='service'>
        <div className="service__head">
          <h3> Web Development</h3>
        </div>

        <ul className='service__list'>

          <li>
           <div> <TiTick className='service__list-icon'/></div>
            <div><p>Front-end and back-end web development</p></div>
          </li>

          <li>
           <div> <TiTick className='service__list-icon'/></div>
            <div><p>Writing and testing code</p></div>
          </li>

          <li>
            <div><TiTick className='service__list-icon'/></div>
            <div><p>Integrating with APIs and databases</p></div>
          </li>

          <li>
           <div> <TiTick className='service__list-icon'/></div>
            <div><p>Maintaining technical documentation</p></div>
          </li>

          <li>
            <div><TiTick className='service__list-icon'/></div>
            <div><p>Implementing security measures</p></div>
          </li>
        </ul>

      </article>
      <article className='service'>
        <div className="service__head">
          <h3> Data Analysis</h3>
        </div>

        <ul className='service__list'>
        
          <li>
         <div><TiTick className='service__list-icon'/> </div>
         <div><p>Collecting, cleaning, and organizing data</p></div>
          </li>
          
         <li> 
          
          <div><TiTick className='service__list-icon'/> </div>
          <div><p>Visualizing data using graphs, charts, and other visual aids</p></div>
            
          </li>


          <li>
            <div><TiTick className='service__list-icon'/></div>
            <div><p>Identifying patterns and trends in data</p></div>
          </li>

          <li>
            <div><TiTick className='service__list-icon'/></div>
           <div> <p>Providing insights and recommendations based on data analysis</p></div>
          </li>

          <li>
            <TiTick className='service__list-icon'/>
            <p>Developing and implementing data pipelines and processes</p>
          </li>
        </ul>

      </article>

    </div>
  </section>
  )
}

export default Services
