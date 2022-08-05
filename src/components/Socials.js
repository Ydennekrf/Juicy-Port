import React from 'react'
import github from '../assets/svg/github.svg';
import facebook from '../assets/svg/facebook.svg';
import linkdin from '../assets/svg/linkdin.svg';
import instagram from '../assets/svg/instagram.svg';
import twitter from '../assets/svg/twitter.svg';

function Socials() {
  return (
    <div className="socials">
            <ul className='social-list'>
                <li className ="socialIcon"><a href="https://www.facebook.com/fraser.kennedy/"><img alt="facebook" src={facebook}/></a></li>
                <li className ="socialIcon"><a href="https://www.linkedin.com/in/ydennekrf"><img alt="lindin" src={linkdin}/></a></li>
                <li className ="socialIcon"><a href="https://www.instagram.com/ydennekrf/"><img alt="instagram" src={instagram}/></a></li>
                <li className ="socialIcon"><a href="https://github.com/Ydennekrf"><img alt="github" src={github}/></a></li>
                <li className ="socialIcon"><a href="https://twitter.com/Ydennekrf"><img alt="twitter" src={twitter}/></a></li>
            </ul>
        </div>
  )
}

export default Socials