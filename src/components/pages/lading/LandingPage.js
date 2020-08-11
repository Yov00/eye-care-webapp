import React from 'react'

import './landingPage-styles.scss';

const LandingPage = () => {
    function goToDownloads(){
        fetch('http://localhost:3040/download-file')
    }
    return (
        <div className="landing--call-to-action">
            <div className="app-description">
                <div>
                <h1>Eye Care App</h1>
                <p>One step closer to better eyesight.</p>
                </div>
                <div className="eye-icon">
                    <i className="far fa-eye"></i>
                </div>
            </div>
            <div className="call-to-action">
            
                <div style={{color:"#A259FF",fontSize:"20px"}}>
                    Crossplatform goodie for your noodie.
                </div>
                <div className="call-to-action--arrow">
                    <i className="fas fa-arrow-down"></i>
                </div>
                <div className="download-btn">
                  <button onClick={goToDownloads}>Download Now</button>
                </div>
            </div>
        </div>
    )
}

export default LandingPage
