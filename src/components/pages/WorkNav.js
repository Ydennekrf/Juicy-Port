import React from 'react';
import work1 from '../../assets/svg/work1-btn.svg';
import work2 from '../../assets/svg/work2-btn.svg';
import work3 from '../../assets/svg/work3-btn.svg';
import work4 from '../../assets/svg/work4-btn.svg';
import work5 from '../../assets/svg/work5-btn.svg';
import work6 from '../../assets/svg/work6-btn.svg';


function WorkNav({currentWork, handleWorkChange}) {
  return (
    <div className="workNav">
        <ul>
              <li className='work-icon'><a href="#" onClick={() => handleWorkChange("Work1")}><br/><br/><span className={currentWork === 'Work1' ? 'work-link-active' : 'work-word'}><img src={work1} alt="work1"/>Stocker</span></a></li>
              <li className='work-icon'><a href="#" onClick={() => handleWorkChange("Work2")}><br/><br/><span className={currentWork === 'Work2' ? 'work-link-active' : 'work-word'}><img src={work2} alt="work2"/>Zelda</span></a></li>
              <li className='work-icon'><a href="#" onClick={() => handleWorkChange("Work3")}><br/><br/><span className={currentWork === 'Work3' ? 'work-link-active' : 'work-word'}><img src={work3} alt="work3"/>3</span></a></li>
              <li className='work-icon'><a href="#" onClick={() => handleWorkChange("Work4")}><br/><br/><span className={currentWork === 'Work4' ? 'work-link-active' : 'work-word'}><img src={work4} alt="work4"/>4</span></a></li>
              <li className='work-icon'><a href="#" onClick={() => handleWorkChange("Work5")}><br/><br/><span className={currentWork === 'Work5' ? 'work-link-active' : 'work-word'}><img src={work5} alt="work5"/>5</span></a></li>
              <li className='work-icon'><a href="#" onClick={() => handleWorkChange("Work6")}><br/><br/><span className={currentWork === 'Work6' ? 'work-link-active' : 'work-word'}><img src={work6} alt="quiz"/>6</span></a></li>
        </ul>
    </div>
  )
}

export default WorkNav