import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { checkLogin } from '../../services/user';

class AuthButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false
        }
    }

    async componentDidMount() {
        try {
            let loggedIn = await checkLogin();
            this.setState({ loggedIn });
        } catch (e) {
            console.log(e)
        }
    }

    render() {
        if (this.state.loggedIn) {
            return <button className="btn btn-lg" style={{ backgroundColor: "darkred", width: "250px", borderRadius: ".5em", border: "black 3px solid" }}><Link style={{ color: "white", fontWeight: "bold" }} to="/logout">L O G O U T</Link></button>
        } else {
            return <button className="btn btn-lg" style={{ backgroundColor: "darkred", width: "250px", borderRadius: ".5em", border: "black 3px solid" }}><Link style={{ color: "white", fontWeight: "bold" }} to="/login">L O G I N</Link></button>
        }
    }
}

export default AuthButton;