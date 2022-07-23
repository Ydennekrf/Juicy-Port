import React from 'react'
import Employee from "./screenshots/screenshot.png";
function Work5() {
  return (
    <div className='workbox'>
        <div className="work-header">
        <div className="work-link"><a href="https://github.com/Ydennekrf/Employee-Tracker">Git Hub Link</a></div>
        <div className="title"><h1>Emp.Loyee Tracker.</h1></div>
        </div>
        <div className="work-content">
        <div className="screenshot"><img src={Employee} alt="employee"/></div>
        <div className="blurb">
        <span className="focus-work">Role:</span><br/>
          <p>Solo Project</p><br/>
          <span className="focus-work">Tech:</span><br/>
          <p>SQL Node.JS console.table</p><br/>
          <span className="focus-work">Description:</span><br/>
          <p>This app uses the command line to track a companies employees. You are able to add or delete employees, roles and departments.</p><br/>
        </div>
        </div>
        
    </div>
  )
}

export default Work5;