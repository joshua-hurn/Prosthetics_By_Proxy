import React from 'react';
import { Link } from 'react-router-dom';
import { isLoggedIn } from '../../services/user';

const AuthButton = (props) => {
    if (isLoggedIn()) {
        return <button className="btn btn-lg" style={{ backgroundColor: "darkred", width: "250px", borderRadius: ".5em", border: "black 3px solid" }}><Link style={{ color: "white", fontWeight: "bold" }} to="/logout">L O G O U T</Link></button>
    } else {
        return <button className="btn btn-lg" style={{ backgroundColor: "darkred", width: "250px", borderRadius: ".5em", border: "black 3px solid" }}><Link style={{ color: "white", fontWeight: "bold" }} to="/login">L O G I N</Link></button>
    }
};

export default AuthButton;