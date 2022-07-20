import React, {useState} from 'react'
import work1 from '../../assets/work1-btn.png';
import work2 from '../../assets/work2-btn.png';
import work3 from '../../assets/work3-btn.png';
import work4 from '../../assets/work4-btn.png';
import work5 from '../../assets/work5-btn.png';
import work6 from '../../assets/work6-btn.png';
import homeBtn from '../../assets/home-btn.png';
import resumeBtn from '../../assets/resume-btn.png';
import aboutBtn from '../../assets/amout-btn.png';
import contactBtn from '../../assets/contact-btn.png';

const Work = () => {
  const[currentWork, setCurrentWork] = useState('work1');
  const renderWork = () => {
    if(currentWork === 'work1') {
      return (
      <div id="work1">
        
      </div>
      );
    }
    if(currentWork === 'work2') {
      return (
      <div id="work2">
        
      </div>
      );
    }
    if(currentWork === 'work3') {
      return (
      <div id="work3">
        
      </div>
      );
    }
    if(currentWork === 'work4') {
      return (
      <div id="work4">
        
      </div>
      );
    }
    if(currentWork === 'work5') {
      return (
      <div id="work5">
        
      </div>
      );
    }
    if(currentWork === 'work6') {
      return (
      <div id="work6">
        
      </div>
      );
    }
    
  }
  return (
    <div>
              
    <div id="work">
        {renderWork}
    </div>
    <div>
      <ul id='workNav'>
        <li className='work-icon'></li>
      </ul>
    </div>

</div>
  )
}

export default Work