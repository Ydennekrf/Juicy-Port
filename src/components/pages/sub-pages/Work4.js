import React from 'react'
import Weather from "./screenshots/weatherApp.jpg";
function Work4() {
  return (
    <div className='workbox'>
        <div className="work-header">
        <div className="work-link"><a href="https://github.com/Ydennekrf/Weather-App" target="_blank">Github</a></div>
        <div className="title"><h1>.Weathe.R .App</h1></div>
        </div>
        <div className="work-content">
        <div className="screenshot"><span className="focus-work">Deployed app:</span><a href="https://ydennekrf.github.io/Weather-App/" target="_blank"><img src={Weather} alt="weather"/></a></div>
        <div className="blurb">
        <span className="focus-work">Role:</span>
          <p>Solo project</p>
          <span className="focus-work">Tech:</span>
          <p>Bootstrap Jquery <br/>google fonts<br/>one call open weather api</p>
          <span className="focus-work">Description:</span>
          <p>allows a user to search for any city and find its current weather. saves recent searches and shows the current UV index rating.</p>
        </div>
        </div>
        
    </div>
  )
}

export default Work4