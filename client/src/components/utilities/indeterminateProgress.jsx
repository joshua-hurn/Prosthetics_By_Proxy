import React, { Component } from 'react';

class IndeterminateProgress extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let message = this.props.message;

        if (!message) {
            message = 'Loading...';
        }

        return (
            <div className="card mx-auto" style={{ width: '400px' }}>
                <div className="card-body">
                    <p className="card-text text-center">{ message }</p>
                    <div className="progress">
                        <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{ width: '100%' }}></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default IndeterminateProgress;
