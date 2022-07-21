import React, {useState} from 'react'
import WorkNav from './WorkNav';
import Work1 from './sub-pages/Work1';
import Work2 from './sub-pages/Work2';
import Work3 from './sub-pages/Work3';
import Work4 from './sub-pages/Work4';
import Work5 from './sub-pages/Work5';
import Work6 from './sub-pages/Work6';

const Work = () => {
  const[currentWork, setCurrentWork] = useState('Work2');
  const renderWork = () => {
    if(currentWork === 'Work1') {
      return <Work1 />;
    }
    if(currentWork === 'Work2') {
      return <Work2 />;
    }
    if(currentWork === 'Work3') {
      return <Work3 />;
    }
    if(currentWork === 'Work4') {
      return <Work4 />;
    }
    if(currentWork === 'Work5') {
      return <Work5 />;
    }
    if(currentWork === 'Work6') {
      return <Work6 />;
    }
    
  }
  const handleWorkChange = (work) => setCurrentWork(work);
  return (
    <div>
              
    <div id="work">
    <button onClick={() => setCurrentWork('gibberish')}>8</button>
        <WorkNav currentWork={currentWork} handleWorkChange={handleWorkChange} />
        {renderWork()}
    </div>
</div>
  )
}

export default Work