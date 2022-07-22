import React from 'react'
import Weather from "./screenshots/weatherApp.jpg";
function Work4() {
  return (
    <div className='workbox'>
        <div className="work-header">
        <div className="work-link"><a>Deployed App</a></div>
        <div className="title"><h1>.Weathe.R .App</h1></div>
        </div>
        <div className="work-content">
        <div className="screenshot"><img src={Weather} alt="weather"/></div>
        <div className="blurb"></div>
        </div>
        
    </div>
  )
}

export default Work4