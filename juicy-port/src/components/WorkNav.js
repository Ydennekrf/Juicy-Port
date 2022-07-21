import React from 'react';
import work1 from '../assets/work1-btn.png';
import work2 from '../assets/work2-btn.png';
import work3 from '../assets/work3-btn.png';
import work4 from '../assets/work4-btn.png';
import work5 from '../assets/work5-btn.png';
import work6 from '../assets/work6-btn.png';


function WorkNav(currentPage, handlePageChange) {
  return (
    <div>
        <ul id="workNav">
                    <li className='work-icon'><a href="#work1" onClick={() => handlePageChange("Work1")}><br/><img src={work1} alt="work1"/><br/><span className={currentPage === 'Work1' ? 'work-link-active' : 'work-word'}>1</span></a></li>
                    <li className='work-icon'><a href="#work2" onClick={() => handlePageChange("Work2")}><br/><img src={work2} alt="work2"/><br/><span className={currentPage === 'Work2' ? 'work-link-active' : 'work-word'}>2</span></a></li>
                    <li className='work-icon'><a href="#work3" onClick={() => handlePageChange("Work3")}><br/><img src={work3} alt="work3"/><br/><span className={currentPage === 'Work3' ? 'work-link-active' : 'work-word'}>3</span></a></li>
                    <li className='work-icon'><a href="#work4" onClick={() => handlePageChange("Work4")}><br/><img src={work4} alt="work4"/><br/><span className={currentPage === 'Work4' ? 'work-link-active' : 'work-word'}>4</span></a></li>
                    <li className='work-icon'><a href="#work5" onClick={() => handlePageChange("Work5")}><br/><img src={work5} alt="work5"/><br/><span className={currentPage === 'Work5' ? 'work-link-active' : 'work-word'}>5</span></a></li>
                    <li className='work-icon'><a href="#work6" onClick={() => handlePageChange("Work6")}><br/><img src={work6} alt="work6"/><br/><span className={currentPage === 'Work6' ? 'work-link-active' : 'work-word'}>6</span></a></li>
                </ul>
    </div>
  )
}

export default WorkNav