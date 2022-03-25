import React from 'react'
import { NavLink } from 'react-router-dom'

export default function () {
    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">

                        <NavLink className="nav-link" to="/">Home</NavLink>
                        <NavLink className="nav-link" to="/canditates">Canditates</NavLink>
                        <NavLink className="nav-link" to="/aboutus">About Us</NavLink>

                    </div>
                </div>
            </div>
        </nav>
    )
}
