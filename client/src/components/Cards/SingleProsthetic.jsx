import React, { Component } from 'react';
import ProstheticsCard from './ProstheticsCard';
import GoogleApiWrapper from '../../services/mapsContainer';


class SingleProsthetic extends Component {
    constructor(props) {
        super(props);
        this.state = {
            prosthetic:{}
        };
    }


    async componentDidMount() {
        try {
            let id= this.props.match.params.id
            let res = await fetch(`/api/prosthetics/${id}`);
            let prosthetic = await res.json();
            console.log(prosthetic);
           this.setState ({prosthetic});
        } catch (e) {
            console.log(e);
        }
    }


    render() {
        return (
            <div className="row">
             <ProstheticsCard blogs={this.state.prosthetic} />
            <GoogleApiWrapper/>
            </div>
        );
    }
};

export default SingleProsthetic;
