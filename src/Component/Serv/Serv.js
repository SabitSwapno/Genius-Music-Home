import React from 'react';
import './Serv.css'

const Serv = (props) => {
    const { name, details, charge, image } = props.serv
    return (
        <div>
            <div className="card stylish">
                <img src={image} class="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{details}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">{charge}</li>
                </ul>
            </div>
        </div>
    );
};

export default Serv;