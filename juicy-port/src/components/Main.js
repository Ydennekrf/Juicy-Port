import React from 'react';
// import { useState, useEffect } from 'react';
import Animation from './Animation';
import about from '../assets/amout-btn.png';
import work from '../assets/work-btn.png';
import contact from '../assets/contact-btn.png';
import resume from '../assets/resume-btn.png';
import Particle from './Particle';

const Main = () => {

    return(
        <div>
        <div id="under-bar">
        </div>
        <div id='bottom-bar'>
        </div>    
        <div id="brand">
        <p>Brand Statement and cool words here<br/> figure out what to type later<br/>see if it looks good i guess</p>
        </div>

        <div id='viewport'>
        <h1 id="header">Fraser Kennedy</h1>
        <ul id="nav">
            <li className='landing-icon'><a href="about"><br/><img src={about}/><br/><span className='nav-word'>about</span></a></li>
            <li className='landing-icon'><a href="work"><br/><img src={work}/><br/><span className='nav-word'>work</span></a></li>
            <li className='landing-icon'><a href="resume"><br/><img src={resume}/><br/><span className='nav-word'>resume</span></a></li>
            <li className='landing-icon'><a href="contact"><br/><img src={contact}/><br/><span className='nav-word'>contact</span></a></li>
        </ul>
       <div>
       <Particle id="parts" />
        <Animation id="tsparticles" />
        
       </div>
       </div>
       </div>
    );
}
export default Main;