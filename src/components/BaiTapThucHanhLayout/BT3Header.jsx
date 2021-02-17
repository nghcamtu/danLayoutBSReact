import React, { Component } from 'react'

export default class BT3Header extends Component {
    render() {
        return (
                <header id="header-main-page" className="navbar navbar-expand-md bg-dark navbar-dark fixed-top">
                    {/* <a className="navbar-brand" href="#">Start Bootstrap</a> */}
                    <a className="navbar-brand">Start Bootstrap</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                {/* <a className="nav-link" href="#">Home</a> */}
                                <a className="nav-link">Home</a>
                            </li>
                            <li className="nav-item">
                                {/* <a className="nav-link" href="#">About</a> */}
                                <a className="nav-link">About</a>
                            </li>
                            <li className="nav-item">
                                {/* <a className="nav-link" href="#">Service</a> */}
                                <a className="nav-link">Service</a>
                            </li>
                            <li className="nav-item">
                                {/* <a className="nav-link" href="#">Contact</a> */}
                                <a className="nav-link">Contact</a>
                            </li>
                        </ul>
                    </div>
                </header>

        )
    }
}
