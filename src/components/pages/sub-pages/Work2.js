import React from 'react'
import HTMLGen from "./screenshots/Logo.png";
function Work2() {
  return (
    <div className='workbox'>
        <div className="work-header">
        <div className="work-link"><a href="https://stockerinventory.herokuapp.com/" target="_blank">Deployed App</a></div>
        <div className="title"><h1>Stoc.ker: inventory. App</h1></div>
        </div>
        <div className="work-content">
        <div className="screenshot"><img src={HTMLGen} alt="HTML"/></div>
        <div className="blurb">
        <span className="focus-work">Role:</span><br/>
          <p>server side queries and mutations, front end logic for admin page</p><br/>
          <span className="focus-work">Tech:</span><br/>
          <p>MERN full stack  JWT authentication  graphQL  Apollo Server</p><br/>
          <span className="focus-work">Description:</span><br/>
          <p>A client facing Ecommerce website with an inventory management Admin page that easily accepts an CSV file and can be up and running with little set up.</p><br/>
        </div>
        </div>
        
    </div>
  )
}

export default Work2