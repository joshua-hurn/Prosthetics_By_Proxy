import React, { Component } from 'react';
import PartsCard from './PartsCard';


class PartsTimeline extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Parts: []
        };
    }


    async componentDidMount() {
        try {
            let res = await fetch('/api/parts');
            let parts = await res.json();
            console.log(parts);
           this.setState ({parts});
        } catch (e) {
            console.log(e);
        }
    }
    renderParts() {
        return this.state.parts.map(part => {
            return <PartsCard key={part.id} parts={part} />
        })
    }

    render() {
        return (
            <div className="row">
                {this.renderParts()}

            </div>
        );
    }
};

export default PartsTimeline;