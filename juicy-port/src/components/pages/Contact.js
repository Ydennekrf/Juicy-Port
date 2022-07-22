import React from 'react'
import github from '../../assets/svg/github.svg';
import facebook from '../../assets/svg/facebook.svg';
import twitter from '../../assets/svg/twitter.svg';
import instagram from '../../assets/svg/instagram.svg';

function Contact() {
  return (
    <div className='work'>
        <form className='contact-form'>
            <input className="input" placeholder="name"></input>
            <input className="input" placeholder='email'></input>
            <input className="input2" placeholder='message'></input>
        </form>
        <div className="socials">
            <ul className='social-list'>
                <li className ="socialIcon"><img src={facebook}/></li>
                <li className ="socialIcon"><img src={twitter}/></li>
                <li className ="socialIcon"><img src={instagram}/></li>
                <li className ="socialIcon"><img src={github}/></li>
            </ul>
        </div>
    </div>
  )
}

export default Contact