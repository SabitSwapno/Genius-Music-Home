import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Footer.css'


const Footer = () => {
    return (
        <div className='footer-visibility'>
            <h3 className='pt-3'>- Get in touch with us -</h3>
            <br />
            <Row className="mt-3 pb-3">
                <Col>
                    <h5>CAREER IN MUSIC</h5>
                    <p>“A creative artist works on his next composition because he was not satisfied with his previous one.”</p>
                </Col>
                <Col>
                    <h5>HOW TO GET STARTED</h5>
                    <p>Follow us and send us
                        an inquiry or give us a call today. </p>
                </Col>
                <Col>
                    <h5>CONTACT US</h5>
                    <p>17361 Newhope Street    Fountain Valley, CA 92708 Phone:  (714) 556-3171              Fax:       (714) 907657</p>
                </Col>
            </Row>
            <p>Copyright © 2021 Genius Homes, All Rights Reserved</p>
        </div>
    );
};

export default Footer;