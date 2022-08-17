import React, { useState } from 'react';
import Animation from './Animation';
import Particle from './Particle';
import Home from './pages/Home';
import About from './pages/About';
import Resume from './pages/Resume';
import Work from './pages/Work';
import NavBar from './NavBar';
import Avatar from './Avatar';
import Socials from './Socials';


const Main = () => {
    const [currentPage, setCurrentPage] = useState('Home');
    
    const renderPage = () => {
        if(currentPage === 'Home') {
            return <Home />;
        }
        if(currentPage === 'About') {
            return (<div><Avatar/>
            <About /></div>);
        }
        if(currentPage === 'Resume') {
            
            return <Resume />;
        }
        if(currentPage === 'Work') {
            
            return <Work />;
        }
    };
    const handlePageChange = (page) => setCurrentPage(page);
    return(            
            <div className='viewport'>
            <div className="header">
            <h1>Fraser Kennedy</h1>
            <p>Full Stack Web Developer</p>
            <p>ydennekrf@gmail.com</p>
            </div>
            <div className='current-page'>
            <h2 >{currentPage}</h2>
            </div>  
            <div id="under-bar">
            </div>
            <div id='bottom-bar'>
            </div>   
                <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
                {renderPage()}
                <Particle id="parts" />
                <Animation id="tsparticles" />
                <Socials />
            </div>
    );
}
export default Main;