import React from 'react'

export default props => (
    <nav className="navbar navbar-default">
        <div className="container-fluid">
            <div className="navbar-header">
                <a className="navbar-brand" href="#">
                    <i className="fa fa-address-book"></i>
                    <span>{props.title}</span>
                </a>
            </div>
        </div>
    </nav>
)