import React from 'react'
import github from '../../assets/svg/github.svg';
import facebook from '../../assets/svg/facebook.svg';
import linkdin from '../../assets/svg/linkdin.svg';
import instagram from '../../assets/svg/instagram.svg';

function Contact() {
  return (
    <div className='work'>
      <div className="contact-box">
      
        <form action="mailto:ydennekrf@gmail.com" className='contact-form'>
            <h4 className="info-head">Let me hear from you!</h4>
            <br/>
            <div className='info-block'>
          <ul className="info-list">
            <li>Location - St.Catharines ON. CAN.</li>
            <li>Email - ydennekrf@gmail.com</li>
          </ul>
        </div>
            <input type="text" className="input" placeholder="name"></input>
            <input type="text" className="input2" placeholder='message'></input>
            <button type="submit" value="send" className="contact-btn" >Submit</button>
        </form>
        
        </div>
        <div className="socials">
            <ul className='social-list'>
                <li className ="socialIcon"><a href="https://www.facebook.com/fraser.kennedy/"><img alt="facebook" src={facebook}/></a></li>
                <li className ="socialIcon"><a href="www.linkedin.com/in/ydennekrf"><img alt="lindin" src={linkdin}/></a></li>
                <li className ="socialIcon"><a href="https://www.instagram.com/ydennekrf/"><img alt="instagram" src={instagram}/></a></li>
                <li className ="socialIcon"><a href="https://github.com/Ydennekrf"><img alt="github" src={github}/></a></li>
            </ul>
        </div>
    </div>
  )
}

export default Contact