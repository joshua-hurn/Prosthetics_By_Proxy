import React, { Component } from 'react';
import ProstheticsCard from './ProstheticsCard';


class ProstheticsTimeline extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Prosthetics: []
        };
    }


    async componentDidMount() {
        try {
            let res = await fetch('/api/prosthetics');
            let prosthetics = await res.json();
            console.log(prosthetics);
           this.setState ({prosthetics});
        } catch (e) {
            console.log(e);
        }
    }
    renderProsthetics() {
        return this.state.prosthetics.map(prosthetic => {
            return <ProstheticsCard key={prosthetic.id} parts={prosthetic} />
        })
    }

    render() {
        return (
            <div className="row">
                {this.renderProsthetics()}

            </div>
        );
    }
};

export default ProstheticsTimeline;