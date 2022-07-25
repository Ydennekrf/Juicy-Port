import React from 'react'
import Weather from "./screenshots/weatherApp.jpg";
function Work4() {
  return (
    <div className='workbox'>
        <div className="work-header">
        <div className="work-link"><a href="https://ydennekrf.github.io/Weather-App/" target="_blank">Deployed App</a></div>
        <div className="title"><h1>.Weathe.R .App</h1></div>
        </div>
        <div className="work-content">
        <div className="screenshot"><img src={Weather} alt="weather"/></div>
        <div className="blurb">
        <span className="focus-work">Role:</span><br/>
          <p>Solo project</p><br/>
          <span className="focus-work">Tech:</span><br/>
          <p>Bootstrap Jquery <br/>google fonts<br/>one call open weather api</p><br/>
          <span className="focus-work">Description:</span><br/>
          <p>allows a user to search for any city and find its current weather. saves recent searches and shows the current UV index rating.</p><br/>
        </div>
        </div>
        
    </div>
  )
}

export default Work4