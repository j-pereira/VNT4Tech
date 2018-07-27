import React from 'react';
import logo from '../../../assets/images/logo-h-vjobs.png';
import { Link } from 'react-router-dom';

const header = (props) => {
    return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">
            <img src={logo} style={{ width:'100px' }}/>
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
            <Link className="nav-item nav-link" to="/vagas">Vagas</Link>
            <Link className="nav-item nav-link" to="/sobre">Sobre</Link>
            </div>
        </div>
        
        <a className="nav-item nav-link text-white"> {props.userName}</a>
        <a className="nav-item nav-link text-white" onClick={() => {props.logout()}}><i className="fas fa-sign-out-alt"></i></a>
    </nav>
)};

export default header;
