import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Serv from '../Serv/Serv';
import './Home.css';

const Home = () => {
    const [service, setService] = useState([]);

    useEffect(() => {
        fetch('./servicex.JSON')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])

    return (
        <>
            <Header></Header>
            <div className="bg-custom">
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    {
                        service.slice(0, 4).map(serv => <Serv serv={serv}></Serv>)
                    }
                </div>
            </div>
            <div className="d-flex align-items-center py-5 bg-custom">
                <div className="bg-light mx-3 rounded p-4">
                    <h1>Organization of a live concert.</h1>
                    <h4>Performing Bands</h4>
                    <ul>
                        <li>Nagarbaul James</li>
                        <li>Aurthohin</li>
                        <li>Artcell</li>
                        <li>Shironamhin</li>
                        <li>Shunno</li>
                        <li>Arbovirus</li>
                    </ul>
                    <h4>We organize this type of live concert Once a year.</h4>
                </div>
                <div>
                    <img className="img-fluid" src="https://images.unsplash.com/photo-1564585222527-c2777a5bc6cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" alt="" />
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Home;