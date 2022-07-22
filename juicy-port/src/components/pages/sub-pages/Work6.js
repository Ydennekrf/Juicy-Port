import React from 'react'
import Quiz from "./screenshots/quiz2.png";
function Work6() {
  return (
    <div className='workbox'>
        <div className="work-header">
        <div className="work-link"><a>Deployed App</a></div>
        <div className="title"><h1>Fun.Demental Jav.AScript .Quiz</h1></div>
        </div>
        <div className="work-content">
        <div className="screenshot"><img src={Quiz} alt="quiz"/></div>
        <div className="blurb"></div>
        </div>
        
    </div>
  )
}

export default Work6;