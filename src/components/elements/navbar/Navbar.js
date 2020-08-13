import React from 'react'

import "./navbar-styles.scss"
const Navbar = () => {
    let currentURL =window.location.href;
    let localHost ="http://localhost:3000/";
    let herokuHost = "https://radiant-brushlands-91450.herokuapp.com/";
    return (
    <div className="navbar" >
            <ul className="navbar-ul">
                {console.log(currentURL)}
                <li style={{
                     backgroundColor: currentURL  == localHost || currentURL  == herokuHost ? "#A259FF":"white",
                     color: currentURL  == localHost || currentURL  == herokuHost  ?  "white":"#A259FF",
                     paddingTop: currentURL == localHost || currentURL  == herokuHost  ?"20px":"0px"
                }}><a href="/">Home</a></li>




                <li
                style={{
                    backgroundColor: currentURL  == localHost+"downloads" || currentURL  == herokuHost+"downloads" ? "#A259FF":"white",
                    color:currentURL  == localHost+"downloads" || currentURL  == herokuHost+"downloads" ?  "white":"#A259FF",
                    paddingTop:currentURL==localHost+"downloads" || currentURL  == herokuHost+"downloads" ?"20px":"0px"
               }}
                ><a href="/downloads">Downloads</a></li>
            </ul>
        </div>
    )
}

export default Navbar
