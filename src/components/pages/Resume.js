import React from 'react';
import download from '../../assets/svg/download.svg';
import resume from '../Fkennedy-Resume.pdf'

function Resume() {
    return(
            
            <div className="resume">
                <ul className="resume-list">
                <li className="experience">
                <h2>Work Expereince</h2>
                <br/>
                <br/>
                <br/>
                <ul className="experience-list">
                    <li><h3>Project Manager</h3><br/>
                    <p>2020-2021</p><br/>
                    <p>Canal Side Soda - Grimsby, ON</p><br/>
                    </li>
                    <li><h3>Head Chef</h3><br/>
                    <p>2018-2020</p><br/>
                    <p>Bandit Brewery - Toronto, ON</p><br/></li>
                    <li><h3>Sous Chef</h3><br/>
                    <p>2018</p><br/>
                    <p>Mercatto Taverna - Toronto, ON</p><br/></li>
                </ul>
                </li>
                
                <li className='skills'>
                <h2>Skills</h2>
                <br/>
                <br/>
                <br/>
                <ul className="skills-list">
                    <li>JavaScript</li>
                    <li>HTML</li>
                    <li>React</li>
                    <li>Node.js</li>
                    <li>MongoDB</li>
                    <li>Express</li>
                </ul>
                </li>
                <li className='education'>
                <h2>Education</h2>
                <br/><br/><br/>
                <p><span className="">Full Stack Web Development</span><br/><br/>Boot Camp Certificate<br/>
                University of Toronto's SCS<br/>
                May 2022 - August 2022<br/>
                <br/></p>
                </li>
               
                <li className="download"><a download href={resume} ><img className="resume-download" alt="download" src={download}/></a></li>
                </ul>
            </div>

    )
}

export default Resume;