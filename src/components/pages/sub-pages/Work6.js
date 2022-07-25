import React from 'react'
import Quiz from "./screenshots/quiz2.png";
function Work6() {
  return (
    <div className='workbox'>
        <div className="work-header">
        <div className="work-link"><a href="https://ydennekrf.github.io/Java-Script-Quiz/" target="_blank">Deployed App</a></div>
        <div className="title"><h1>Jav.AScript .Quiz</h1></div>
        </div>
        <div className="work-content">
        <div className="screenshot"><img src={Quiz} alt="quiz"/></div>
        <div className="blurb">
        <span className="focus-work">Role:</span><br/>
          <p>Solo project</p><br/>
          <span className="focus-work">Tech:</span><br/>
          <p>JavaScript HTML CSS</p><br/>
          <span className="focus-work">Description:</span><br/>
          <p>This app uses only javascript logic to create a quiz about javascript that run on a timer and saves high scores to local storage for next load up.</p><br/>
        </div>
        </div>
        
    </div>
  )
}

export default Work6;