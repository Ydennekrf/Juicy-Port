import React from 'react'
import Jate from "./screenshots/jate.png";
function Work3() {
  return (
    <div className='workbox'>
        <div className="work-header">
        <div className="work-link"><a href="https://github.com/Ydennekrf/Joined-Nail" target="_blank">Github</a></div>
        <div className="title"><h1>J.A.T.E</h1></div>
        </div>
        <div className="work-content">
        <div className="screenshot"><span className="focus-work">Deployed app:</span><a href="https://joined-nail.herokuapp.com/" target="_blank"><img src={Jate} alt="jate"/></a></div>
        <div className="blurb">
        <span className="focus-work">Role:</span><br/>
          <p>Solo Project</p><br/>
          <span className="focus-work">Tech:</span><br/>
          <p>PWA's  Webpack   JavaScript</p><br/>
          <span className="focus-work">Description:</span><br/>
          <p>A simple text editor that is installable from the browser, uses service workers and local storage to allow for functionality while offline.</p><br/>
        </div>
        </div>
        
    </div>
  )
}

export default Work3