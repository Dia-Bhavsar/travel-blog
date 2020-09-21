import React from 'react'
import { Link, withRouter } from 'react-router-dom'

function Navbar() {
    return (
        <nav className="navbar navbar-inverse">
            <div className="container-fluid">
                <div className="navbar-header">
                    <Link className="navbar-brand" to="/">Travel Blog</Link>
                </div>
                <ul className="nav navbar-nav">
                    <li className=""><Link to="/">Home</Link></li>
                    <li className=""><Link to="/admin">Admin</Link></li>
                    <li className=""><Link to="/addpost">Add Blog</Link></li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                    <li><Link to="/signup"><span className="glyphicon glyphicon-user"></span> Sign Up</Link></li>
                    <li><Link to="/signin" ><span className="glyphicon glyphicon-log-in"></span> Login</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
