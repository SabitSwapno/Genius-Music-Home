import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './AboutUs.css'

const AboutUs = () => {
    return (
        <>
            <Header></Header>
            <div>
                <Row className='text-white background-ct'>
                    <Col>
                        <h1>About Genius Music
                            <br />   Home and School</h1>
                    </Col>
                    <Col className='px-5'>
                        <h4>The music is not in the notes, but in the silence between.Musicians want to be the loud voice for so many quiet hearts.Be your own artist, and always be confident in what you’re doing.
                            If you’re not going to be confident, you might as well not be doing it.
                            <br /> A musician should only sound like what they do, and no two musicians sound the same.
                            It’s an individual-feel thing, you know?</h4>
                    </Col>
                </Row>
            </div>
            <Footer></Footer>
        </>
    );
};

export default AboutUs;