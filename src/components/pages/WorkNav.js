import React from 'react';
import work from '../../assets/svg/work-option.svg';



function WorkNav({currentWork, handleWorkChange}) {
  return (
    <>
        <ul className="workNav">
              <li className='work-icon'><a href="#" onClick={() => handleWorkChange("Work1")}><span className={currentWork === 'Work1' ? 'work-link-active' : 'work-word'}><img src={work} alt="radio"/></span></a></li>
              <li className='work-icon'><a href="#" onClick={() => handleWorkChange("Work2")}><span className={currentWork === 'Work2' ? 'work-link-active' : 'work-word'}><img src={work} alt="radio"/></span></a></li>
              <li className='work-icon'><a href="#" onClick={() => handleWorkChange("Work3")}><span className={currentWork === 'Work3' ? 'work-link-active' : 'work-word'}><img src={work} alt="radio"/></span></a></li>
              <li className='work-icon'><a href="#" onClick={() => handleWorkChange("Work4")}><span className={currentWork === 'Work4' ? 'work-link-active' : 'work-word'}><img src={work} alt="radio"/></span></a></li>
              <li className='work-icon'><a href="#" onClick={() => handleWorkChange("Work5")}><span className={currentWork === 'Work5' ? 'work-link-active' : 'work-word'}><img src={work} alt="radio"/></span></a></li>
              <li className='work-icon'><a href="#" onClick={() => handleWorkChange("Work6")}><span className={currentWork === 'Work6' ? 'work-link-active' : 'work-word'}><img src={work} alt="radio"/></span></a></li>
        </ul>
    </>
  )
}

export default WorkNav