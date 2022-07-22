import React from 'react'
import Employee from "./screenshots/screenshot.png";
function Work5() {
  return (
    <div className='workbox'>
        <div className="work-header">
        <div className="work-link"><a>Deployed App</a></div>
        <div className="title"><h1>Emp.Loyee Tracker.</h1></div>
        </div>
        <div className="work-content">
        <div className="screenshot"><img src={Employee} alt="employee"/></div>
        <div className="blurb"></div>
        </div>
        
    </div>
  )
}

export default Work5;