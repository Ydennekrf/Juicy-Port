import React from 'react'
import HTMLGen from "./screenshots/htmlgen.png";
function Work2() {
  return (
    <div className='workbox'>
        <div className="work-header">
        <div className="work-link"><a href="https://github.com/Ydennekrf/Html-generator" target="_blank">Git Hub Link</a></div>
        <div className="title"><h1>Htm.L Gener.Ator.</h1></div>
        </div>
        <div className="work-content">
        <div className="screenshot"><img src={HTMLGen} alt="HTML"/></div>
        <div className="blurb">
        <span className="focus-work">Role:</span><br/>
          <p>Solo project</p><br/>
          <span className="focus-work">Tech:</span><br/>
          <p>Node.js, JavaScript, HTML, CSS</p><br/>
          <span className="focus-work">Description:</span><br/>
          <p>Terminal based app that takes in user data and generates an HTML document</p><br/>
        </div>
        </div>
        
    </div>
  )
}

export default Work2