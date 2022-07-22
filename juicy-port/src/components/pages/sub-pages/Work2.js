import React from 'react'
import HTMLGen from "./screenshots/htmlgen.png";
function Work2() {
  return (
    <div className='workbox'>
        <div className="work-header">
        <div className="work-link"><a>Deployed App</a></div>
        <div className="title"><h1>Htm.L Gener.Ator.</h1></div>
        </div>
        <div className="work-content">
        <div className="screenshot"><img src={HTMLGen} alt="HTML"/></div>
        <div className="blurb"></div>
        </div>
        
    </div>
  )
}

export default Work2