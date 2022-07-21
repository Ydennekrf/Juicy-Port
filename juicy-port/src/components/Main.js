import React, { useState } from 'react';
import Animation from './Animation';
import Particle from './Particle';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Work from './pages/Work';
import NavBar from './NavBar';
import Avatar from './Avatar';


const Main = () => {
    const [currentPage, setCurrentPage] = useState('Home')
    const renderPage = () => {
        if(currentPage === 'Home') {
            return <Home />;
        }
        if(currentPage === 'About') {
            return (<div><Avatar/>
            <About /></div>);
        }
        if(currentPage === 'Contact') {
            
            return <Contact />;
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
        <div>
            
            <div id='viewport'>
            <h1 id='aboutMe'>{currentPage}</h1>
            <h1 id="header">Fraser Kennedy</h1>  
            <div id="under-bar">
                
            </div>
            <div id='bottom-bar'>
            </div>   
                <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
                {renderPage()}
                <Particle id="parts" />
                <Animation id="tsparticles" />
            </div>
       </div>
    );
}
export default Main;