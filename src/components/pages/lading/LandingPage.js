import React from 'react'

import './landingPage-styles.scss';

const LandingPage = () => {
    function goToDownloads(){
        window.location.href = '/downloads';
    }
    return (
        <div className="wrapper animate-in">
            <div className="call-to-action" >
                <h1>Eye Care Application</h1>
                <p>One step closer to better eyesight</p>
                <div className="call-to-action--btns">
                    <button className="primary" onClick={goToDownloads}>DOWNLOAD</button>
                    <button className="secondary">ABOUT THE APP</button>
                </div>
            </div>

            
        </div>
    )
}

export default LandingPage
