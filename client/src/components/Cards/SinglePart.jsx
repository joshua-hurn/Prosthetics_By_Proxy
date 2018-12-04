import React, { Component } from 'react';
import PartsCard from './PartsCard';


class SinglePart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            part:{}
        };
    }


    async componentDidMount() {
        try {
            let id= this.props.match.params.id
            let res = await fetch(`/api/parts/${id}`);
            let part = await res.json();
            console.log(part);
           this.setState ({part});
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        return (
            <div className="row">
            
             <PartsCard blogs={this.state.part} />

            </div>
        );
    }
};

export default SinglePart;