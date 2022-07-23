import React from 'react'
import homeBtn from '../assets/svg/home-btn.svg';
import contactBtn from '../assets/svg/contact-btn.svg';
import workBtn from '../assets/svg/work-btn.svg';
import resumeBtn from '../assets/svg/resume-btn.svg';
import aboutBtn from '../assets/svg/amout-btn.svg';

function NavBar({currentPage, handlePageChange}) {
  return (
    <div className='nav'>
        <ul >
                    <li className='landing-icon'><a href="#" onClick={() => handlePageChange("Home")}><br/><br/><span className={currentPage === 'Home' ? 'nav-link-active' : 'nav-word'}><img src={homeBtn}/>home</span></a></li>
                    <li className='landing-icon'><a href="#" onClick={() => handlePageChange("About")}><br/><br/><span className={currentPage === 'About' ? 'nav-link-active' : 'nav-word'}><img src={aboutBtn}/>about</span></a></li>
                    <li className='landing-icon'><a href="#" onClick={() => handlePageChange("Work")}><br/><br/><span className={currentPage === 'Work' ? 'nav-link-active' : 'nav-word'}><img src={workBtn}/>work</span></a></li>
                    <li className='landing-icon'><a href="#" onClick={() => handlePageChange("Resume")}><br/><br/><span className={currentPage === 'Resume' ? 'nav-link-active' : 'nav-word'}><img src={resumeBtn}/>resume</span></a></li>
                    <li className='landing-icon'><a href="#" onClick={() => handlePageChange("Contact")}><br/><br/><span className={currentPage === 'Contact' ? 'nav-link-active' : 'nav-word'}><img src={contactBtn}/>contact</span></a></li>
                </ul>
    </div>
  )
}

export default NavBar