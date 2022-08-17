import React from 'react'
import Zelda from "./screenshots/zelda-logo.jpg";
function Work1() {
  return (
    <div className='workbox'>
        <div className="work-header">
        <div className="work-link"><a href="https://github.com/Ydennekrf/Zelda-Travel-App" target="_blank">Github</a></div>
        <div className="title"><h1>Zel.Da Travel. App</h1></div>
        </div>
        <div className="work-content">
        <div className="screenshot"><span className="focus-work">Deployed app:</span><a href="https://ydennekrf.github.io/Zelda-Travel-App/" target="_blank"><img src={Zelda} alt="zelda"/></a></div>
        <div className="blurb">
          <span className="focus-work">Role:</span><br/>
          <p>api routes and JavaScript</p><br/>
          <span className="focus-work">Tech:</span><br/>
          <p>JavaScript, ticketmaster api, <br/>
          leaftlet JS</p><br/>
          <span className="focus-work">Description:</span><br/>
          <p>light weight travel app used to find events, 
            hotels and airports in a given city using 3rd party APIs</p><br/>
          </div>
        </div>
        
    </div>
  )
}

export default Work1