import React, { Component } from 'react'
import dropdownMenu from './../dropdown.png';
import './../App.css';
import { Button } from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom'

class Navbar extends Component {
    logOut (e) {
        e.preventDefault()
        localStorage.removeItem('usertoken')
        this.props.history.push(`/`)
    }

    render () {
        {/*==================== Content of menu changes depending if user is logged in or not ====================*/}
        const loginRegLink = (
            <div className="dropdown-menu">
                <Link to="/" className="dropdown-item"> Home </Link>
                <Link to="/login"  className="dropdown-item"> Log-in </Link>
                <Link to="/register"  className="dropdown-item"> Sign-up </Link>
                {/* <Link to="/login"  class="dropdown-item"> View Restaurants </Link> */}
            </div>
        )

        const userLink = (
            <div className="dropdown-menu">
                <Link to="/" className="dropdown-item"> Home </Link>
                <Link to="/profile" className="dropdown-item"> User </Link>
                <a href="" onClick={this.logOut.bind(this)} className="dropdown-item">Logout</a>
            </div>
        )
        {/*=======================================================================================================*/}
        return (
            <div className="App">
                <header className="App-header">
                    <div className="dropdown show" className="cdropdown">
                    <a className="btn btn-danger dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="dropdown">
                      <img src={dropdownMenu} className="dropdownpic" /> 
                    </a>
                        {localStorage.usertoken ? userLink : loginRegLink}
                    </div>
                </header>
            </div>
        )
    }
}

export default withRouter(Navbar)