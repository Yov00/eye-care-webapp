import React from 'react'

import './download-styles.scss';

const DownloadPage = () => {
    return (

        <div className="download-section animate-in">
            <header>
              <h1>Download Eye Care App</h1>
              <p>Powered by Electron JS</p>
            </header>

            <div className="downloads">

                <div className="download-links">
                  <i class="fab fa-windows" style={{color:"#333"}}></i>
                  <a href="">
                  <i class="fas fa-arrow-down" style={{fontSize:'25px',margin:'0 10px'}}></i>  
                    <div>
                      Windows
                      <div className="versions">
                        7,8,10
                      </div>

                    </div>
                  </a>
                </div>


                <div className="download-links">
                  <i className="fab fa-apple grey" ></i>
                  <a href="">
                  <i class="fas fa-arrow-down" style={{fontSize:'25px',margin:'0 10px'}}></i>  
                    <div>
                      Mac
                      <div className="versions">
                        10,10+
                      </div>
                    </div>
                  </a>
              </div>

            <div className="download-links">
              <i class="fab fa-linux" style={{color:'black'}}></i>
              <a href="">
              <i class="fas fa-arrow-down" style={{fontSize:'25px',margin:'0 10px'}}></i>
                <div>
                    Linux
                    <div className="versions">
                    Deb,Redhat
                    </div>
                </div>
              </a>
            </div>

            </div>

        </div>
    )
}

export default DownloadPage
