import React from 'react'

import style from './header.module.css'

const header = () => {
    return (
        <>
            <div className={style.header}>
                <div className="container">
                    <div className="row justify-content-between align-items-center">
                    <div className="col-auto">
                    <img src="./images/logo.png" alt="Logo" />
                </div>
                <div className="col-auto d-lg-none">
                    <div className="btn-group">
                        <div className="dropdown">
                            <button type="button" className="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                Menu
                            </button>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="#">Our Services</a>
                                <a className="dropdown-item" href="#">Why Us</a>
                                <a className="dropdown-item" href="#">Testimonial</a>
                                <a className="dropdown-item" href="#">FAQ</a>
                            </div>
                        </div>    
                    </div>
                </div>
                <div className="col-auto d-none d-lg-block">
                    <ul className="nav-bar list-inline mb-0">
                        <li className="list-inline-item"><a href="#">Our Services</a> </li>
                        <li className="list-inline-item"><a href="#">Why Us</a></li>
                        <li className="list-inline-item"><a href="#">Testimonial</a></li>
                        <li className="list-inline-item"><a href="#">FAQ</a></li>
                        <li className="list-inline-item"><a href="#" className="register btn btn-success">Register</a></li>
                    </ul>
                </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default header
