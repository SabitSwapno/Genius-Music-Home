import React from 'react';
import './Product.css';

const Products = (props) => {
    const { name, description, image } = props.product;
    return (
        <div>
            <div className="card custom text-white">
                <img src={image} className="card-img-top img-fluid" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name} Education</h5>
                    <p className="card-text">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default Products;
