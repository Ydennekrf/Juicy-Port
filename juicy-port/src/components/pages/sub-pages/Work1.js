import React from 'react'
import Zelda from "./screenshots/zelda-logo.jpg";
function Work1() {
  return (
    <div className='workbox'>
        <div className="work-header">
        <div className="work-link"><a>Deployed App</a></div>
        <div className="title"><h1>Zel.Da Travel. App</h1></div>
        </div>
        <div className="work-content">
        <div className="screenshot"><img src={Zelda} alt="zelda"/></div>
        <div className="blurb"></div>
        </div>
        
    </div>
  )
}

export default Work1