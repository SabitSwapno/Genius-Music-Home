import React from 'react';
import { Button } from 'react-bootstrap';
import "./NotFound.css"

const NotFound = () => {
    return (
        <div className="error-bg text-white ">
            <h2 className="text-ct">Something went wrong</h2>
            <br />
            <img src="https://png.pngtree.com/png-clipart/20190604/original/pngtree-404-error-page-png-image_1362453.jpg" alt="" />
            <br />
            <Button className='onMouse' variant="danger">Go Back</Button>
        </div>
    );
};

export default NotFound;