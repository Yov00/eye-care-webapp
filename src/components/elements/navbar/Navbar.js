import React from 'react'

import "./navbar-styles.scss"
const Navbar = () => {
    return (
    <div className="navbar" >
            <ul className="navbar-ul">
                <li><a href="/">Home</a></li>
                <li><a href="/downloads">Downloads</a></li>
            </ul>
        </div>
    )
}

export default Navbar
