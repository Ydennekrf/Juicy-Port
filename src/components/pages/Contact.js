import React from 'react'


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
        
    </div>
  )
}

export default Contact