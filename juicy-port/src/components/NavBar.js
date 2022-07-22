import React from 'react'
import homeBtn from '../assets/home-btn.png';
import contactBtn from '../assets/contact-btn.png';
import workBtn from '../assets/work-btn.png';
import resumeBtn from '../assets/resume-btn.png';
import aboutBtn from '../assets/amout-btn.png';

function NavBar({currentPage, handlePageChange}) {
  return (
    <div className='nav'>
        <ul >
                    <li className='landing-icon'><a href="#" onClick={() => handlePageChange("Home")}><br/><img src={homeBtn}/><br/><span className={currentPage === 'Home' ? 'nav-link-active' : 'nav-word'}>home</span></a></li>
                    <li className='landing-icon'><a href="#" onClick={() => handlePageChange("About")}><br/><img src={aboutBtn}/><br/><span className={currentPage === 'About' ? 'nav-link-active' : 'nav-word'}>about</span></a></li>
                    <li className='landing-icon'><a href="#" onClick={() => handlePageChange("Work")}><br/><img src={workBtn}/><br/><span className={currentPage === 'Work' ? 'nav-link-active' : 'nav-word'}>work</span></a></li>
                    <li className='landing-icon'><a href="#" onClick={() => handlePageChange("Resume")}><br/><img src={resumeBtn}/><br/><span className={currentPage === 'Resume' ? 'nav-link-active' : 'nav-word'}>resume</span></a></li>
                    <li className='landing-icon'><a href="#" onClick={() => handlePageChange("Contact")}><br/><img src={contactBtn}/><br/><span className={currentPage === 'Contact' ? 'nav-link-active' : 'nav-word'}>contact</span></a></li>
                </ul>
    </div>
  )
}

export default NavBar