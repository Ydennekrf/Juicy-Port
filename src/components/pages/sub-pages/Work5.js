import React from 'react'
import Employee from "./screenshots/screenshot.png";
function Work5() {
  return (
    <div className='workbox'>
        <div className="work-header">
        <div className="work-link"><a href="https://github.com/Ydennekrf/Employee-Tracker" target="_blank">Github</a></div>
        <div className="title"><h1>Emp.Loyee Tracker.</h1></div>
        </div>
        <div className="work-content">
        <div className="screenshot"><img src={Employee} alt="employee"/></div>
        <div className="blurb">
        <span className="focus-work">Role:</span>
          <p>Solo Project</p>
          <span className="focus-work">Tech:</span>
          <p>SQL Node.JS console.table</p>
          <span className="focus-work">Description:</span>
          <p>This app uses the command line to track a companies employees. You are able to add or delete employees, roles and departments.</p>
        </div>
        </div>
        
    </div>
  )
}

export default Work5;