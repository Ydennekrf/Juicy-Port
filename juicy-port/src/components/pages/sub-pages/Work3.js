import React from 'react'
import Grocery from "./screenshots/grocery.png";
function Work3() {
  return (
    <div className='workbox'>
        <div className="work-header">
        <div className="work-link"><a href="https://just-acorn.herokuapp.com/">Deployed App</a></div>
        <div className="title"><h1>Gro.Cery .List</h1></div>
        </div>
        <div className="work-content">
        <div className="screenshot"><img src={Grocery} alt="grocery"/></div>
        <div className="blurb">
        <span className="focus-work">Role:</span><br/>
          <p>Backend routes, models and database</p><br/>
          <span className="focus-work">Tech:</span><br/>
          <p>Node.JS Express Handlebars Twilio SQL</p><br/>
          <span className="focus-work">Description:</span><br/>
          <p>Grocery list creation app that will take in user dish selections and sends a compiled grocery list as a text message to the user's phone</p><br/>
        </div>
        </div>
        
    </div>
  )
}

export default Work3