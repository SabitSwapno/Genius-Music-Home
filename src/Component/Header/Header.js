import { Link } from "react-router-dom";
import "./Header.css";
import { Button, Col, Row } from 'react-bootstrap';

const Header = () => {
    return (
        <div className="header-design">
            <div className='nav-design'>
                <div>
                    <Link className='link-styles' to='/home'>Home </Link>
                    <Link className='link-styles' to='/services'>Our Services </Link>
                    <Link className='link-styles' to='/education'>Education</Link>
                    <Link className='link-styles' to='/aboutUs'>About Us</Link>
                </div>
                <div>
                    <Button variant="outline-light">Sign in</Button>
                </div>
            </div>
            <br />
            <Row>
                <Col className="image-sizing">
                    <img className="img-fluid" src="https://thumbs.dreamstime.com/b/black-white-genius-hand-written-word-text-typography-logo-icon-design-iocn-color-can-be-used-branding-card-147084489.jpg" alt="" />
                </Col>
                <Col>
                    <pre>Genius <br /> Music Home <br /> and School</pre>
                </Col>
            </Row>
        </div>
    );
};

export default Header;