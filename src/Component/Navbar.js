import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav  className="navbar shadow fixed-top navbar-expand-sm navbar-dark bg-primary">
                    <div className="container">
                        <Link to="/" className="navbar-brand">
                        
                        </Link>
                        <div>
                            <Link to="/users/add"  className="btn btn-light ml-auto">
                            Add ToDo List
                            </Link>
                        </div>
                    </div> 
                </nav>
            </div>
        )
    }
}
