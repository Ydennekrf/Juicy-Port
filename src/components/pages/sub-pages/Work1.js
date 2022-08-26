import React from 'react'
import Stocker from "./screenshots/Logo.png";
function Work1() {
  return (
    <div className='workbox'>
        <div className="work-header">
        <div className="work-link"><a href="https://github.com/SuedePritch/furry-leftover-broccoli" target="_blank">Github</a></div>
        <div className="title"><h1>Stoc.ker: inventory. App</h1></div>
        </div>
        <div className="work-content">
        <div className="screenshot"><span className="focus-work">Deployed app:</span><a href="https://stockerinventory.herokuapp.com/" target="_blank"><img src={Stocker} alt="HTML"/></a></div>
        <div className="blurb">
        <span className="focus-work">Role:</span>
          <p>server side queries and mutations, front end logic for admin page</p>
          <span className="focus-work">Tech:</span>
          <p>MERN full stack  JWT authentication  graphQL  Apollo Server Stripe</p>
          <span className="focus-work">Description:</span>
          <p>A client facing Ecommerce website with an inventory management Admin page that easily accepts an CSV file and can be up and running with little set up.</p>
        </div>
        </div>
        
    </div>
  )
}

export default Work1