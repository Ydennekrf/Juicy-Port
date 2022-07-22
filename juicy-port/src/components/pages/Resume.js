import React from 'react';
import download from '../../assets/svg/download.svg';

function Resume() {
    return(
            
            <div className="resume">
                
                <div className='education'>
                <h2>Education</h2>
                <p></p>
                </div>
                <div className='skills'>
                <h2>Skills</h2>
                <ul className="skills">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                </div>
                <div className="expereince">
                <h2>Work Expereince</h2>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                </div>
                <div className="download"><a>Download<img className="resume-download" src={download}/></a></div>

            </div>

    )
}

export default Resume;