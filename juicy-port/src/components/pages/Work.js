import React, {useState} from 'react'
import WorkNav from '../WorkNav';
import Work1 from './sub-pages/Work1';
import Work2 from './sub-pages/Work2';
import Work3 from './sub-pages/Work3';
import Work4 from './sub-pages/Work4';
import Work5 from './sub-pages/Work5';
import Work6 from './sub-pages/Work6';

const Work = () => {
  const[currentPage, setCurrentPage] = useState('Work1');
  const renderWork = () => {
    if(currentPage === 'Work1') {
      return <Work1 />;
    }
    if(currentPage === 'Work2') {
      return <Work2 />;
    }
    if(currentPage === 'Work3') {
      return <Work3 />;
    }
    if(currentPage === 'Work4') {
      return <Work4 />;
    }
    if(currentPage === 'Work5') {
      return <Work5 />;
    }
    if(currentPage === 'Work6') {
      return <Work6 />;
    }
    
  }
  const handlePageChange = (page) => setCurrentPage(page);
  return (
    <div>
              
    <div id="work">
        <WorkNav currentPage={currentPage} handlePageChange={handlePageChange} />
        {renderWork()}
    </div>
</div>
  )
}

export default Work