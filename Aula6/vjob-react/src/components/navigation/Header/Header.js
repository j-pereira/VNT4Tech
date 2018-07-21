import React from 'react';
import logo from '../../../assets/images/logo-h-vjobs.png';

const header = () => {
    return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
            <img src={logo} style={{ width:'100px' }}/>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
            <a className="nav-item nav-link" href="#">Vagas</a>
            <a className="nav-item nav-link" href="#">Sobre</a>
            </div>
        </div>
    </nav>
)};

export default header;
