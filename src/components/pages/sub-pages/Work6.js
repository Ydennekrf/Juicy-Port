import React from 'react'
import Quiz from "./screenshots/quiz2.png";
function Work6() {
  return (
    <div className='workbox'>
        <div className="work-header">
        <div className="work-link"><a href="https://github.com/Ydennekrf/Java-Script-Quiz" target="_blank">Github</a></div>
        <div className="title"><h1>Jav.AScript .Quiz</h1></div>
        </div>
        <div className="work-content">
        <div className="screenshot"><span className="focus-work">Deployed app:</span><a href="https://ydennekrf.github.io/Java-Script-Quiz/" target="_blank"><img src={Quiz} alt="quiz"/></a></div>
        <div className="blurb">
        <span className="focus-work">Role:</span>
          <p>Solo project</p>
          <span className="focus-work">Tech:</span>
          <p>JavaScript HTML CSS</p>
          <span className="focus-work">Description:</span>
          <p>This app uses only javascript logic to create a quiz about javascript that run on a timer and saves high scores to local storage for next load up.</p>
        </div>
        </div>
        
    </div>
  )
}

export default Work6;