import React from 'react';
import {Link} from 'react-router-dom';



const PartsCard = (props) => {
    return (
        <div className="col-md-4">
            <div className="card">
                <div className="card-header bg-secondary text-white">
                Parts ID: {props.parts.id}
                </div>
                    <div className="card-body">
                    <h5 className="card-title">{props.parts.title} Limbs: </h5>
                    <p className="card-text">{props.parts.content}</p>
                    
                    <Link to={`/single/${props.parts.id}`} className="btn btn-primary">See More</Link>
                </div>
            </div>
        </div>
    );
};

export default PartsCard;