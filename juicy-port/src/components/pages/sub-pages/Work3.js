import React from 'react'
import Grocery from "./screenshots/grocery.png";
function Work3() {
  return (
    <div className='workbox'>
        <div className="work-header">
        <div className="work-link"><a>Deployed App</a></div>
        <div className="title"><h1>Gro.Cery .List</h1></div>
        </div>
        <div className="work-content">
        <div className="screenshot"><img src={Grocery} alt="grocery"/></div>
        <div className="blurb"></div>
        </div>
        
    </div>
  )
}

export default Work3