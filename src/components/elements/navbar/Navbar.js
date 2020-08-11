import React from 'react'

import "./navbar-styles.scss"
const Navbar = () => {
    let currentURL =window.location.href;
    let localHost ="http://localhost:3000/"
    return (
    <div className="navbar" >
            <ul className="navbar-ul">
                {console.log(currentURL)}
                <li style={{
                     backgroundColor: currentURL  == localHost ? "#A259FF":"white",
                     color:currentURL  == localHost ?  "white":"#A259FF",
                     paddingTop:currentURL==localHost?"20px":"0px"
                }}><a href="/">Home</a></li>




                <li
                style={{
                    backgroundColor: currentURL  == localHost+"downloads"? "#A259FF":"white",
                    color:currentURL  == localHost+"downloads" ?  "white":"#A259FF",
                    paddingTop:currentURL==localHost+"downloads"?"20px":"0px"
               }}
                ><a href="/downloads">Downloads</a></li>
            </ul>
        </div>
    )
}

export default Navbar
